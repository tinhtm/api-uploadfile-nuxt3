import formidable from 'formidable';
export default defineEventHandler( async (event) => {
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
        //Do not working...
        console.log(params.FirstName);

        return {};
    });
})