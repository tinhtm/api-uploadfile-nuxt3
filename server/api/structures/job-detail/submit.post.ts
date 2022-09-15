import formidable from "formidable";

export default defineEventHandler(async (event) => {
  var form = new formidable.IncomingForm({
    multiples: true,
  });
  return await new Promise((resolve, rej) => {
    form.parse(event.req, async (err, fields, files) => {
      if (err) {
        console.log(String(err));
        rej({ e: String(err) });
      }
      console.log({ fields, files });
      resolve({ fields, files });
    });
  });
});
