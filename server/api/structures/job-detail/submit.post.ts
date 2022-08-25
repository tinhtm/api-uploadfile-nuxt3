import { QueueServiceClient } from '@azure/storage-queue';
import { BlobServiceClient } from '@azure/storage-blob';
import { Buffer } from 'buffer';
import formidable from 'formidable';
import fs from 'fs';
export default defineEventHandler( async (event) => {
    const config = useRuntimeConfig();
    const queueServiceClient = QueueServiceClient.fromConnectionString(config.AZURE_STORAGE_CONNECTION, {});
    const blobServiceClient = BlobServiceClient.fromConnectionString(config.AZURE_STORAGE_CONNECTION);
    var container = blobServiceClient.getContainerClient(config.AZURE_STORAGE_CONTAINER_NAME);
    await container.createIfNotExists();
    var form = new formidable.IncomingForm({
        multiples: true
    });
    return form.parse(event.req, async function (err, fields, files) {
        var params = {
            JobDescriptionId: fields.jobId || -1,
            FirstName: fields.firstName,
            LastName: fields.lastName,
            Email: fields.email,
            PhoneNumber: fields.phone,
            CallingCode: fields.countryCode,
            LinkedIn: fields.linkedIn,
            Message: fields.message || '',
            CoverLetterFileName: '',
            CoverLetterFile : '',
            ResumeFileName : '',
            ResumeFile : '', 
        };
        var queueClient = queueServiceClient.getQueueClient(config.AZURE_STORAGE_QUEUE_NAME);
        if(files.attachmentLetter){
            let fileName = `${createGuiId().toLowerCase()}.${(files.attachmentLetter.originalFilename || "").split(".").pop()}`;
            uploadFile(container, files.attachmentLetter, fileName);
            params.CoverLetterFileName = files.attachmentLetter.originalFilename;
            params.CoverLetterFile = `${config.AZURE_STORAGE_BASE_URL}/${config.AZURE_STORAGE_CONTAINER_NAME}/${fileName}`;
        }
        if(files.attachmentResume){
            let fileName = `${createGuiId().toLowerCase()}.${(files.attachmentResume.originalFilename || "").split(".").pop()}`;
            uploadFile(container, files.attachmentResume, fileName);
            params.ResumeFileName = files.attachmentResume.originalFilename;
            params.ResumeFile = `${config.AZURE_STORAGE_BASE_URL}/${config.AZURE_STORAGE_CONTAINER_NAME}/${fileName}`;
        }
        var queueClient = queueServiceClient.getQueueClient(config.AZURE_STORAGE_QUEUE_NAME);
        var paramEncode = Buffer.from(JSON.stringify(params)).toString("base64");
        return await queueClient.sendMessage(paramEncode).then(res => {
            return res._response.status != 201;  
        })
    });
})
function createGuiId()
{
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
   });
}

function uploadFile(container, file, fileName) {
    var fileObj = file.toJSON();
    let blobClient = container.getBlockBlobClient(fileName);
    return fs.readFile(fileObj.filepath, async function(err, data){
        if(err) console.log(err);
        await blobClient.upload(data, file.size);
        return fileName;
    })
}