export default defineNuxtPlugin(() => {
    const re = /(?:\.([^.]+))?$/;
    const getExtentionName = (name) => {
        return re.exec(name)[1];
    }
    const convertMB = (bytes = 0) => {
      return (bytes / (1024 ** 2)).toFixed(2);
    }
    return {
      provide: {
        extenstionName: getExtentionName,
        converMB: convertMB
      }
    }
})