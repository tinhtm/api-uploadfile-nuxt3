
export default defineNuxtPlugin(() => {
    const initXdnRum = (slug, name) =>{
        const  metrics = new Layer0.Metrics({
          token: '4f2ccf65-ad43-47cc-baa0-c6b64fd6ef3b',
          router: new Layer0.Router()
            .match(slug, ({ setPageLabel }) => setPageLabel(name))
        })
        metrics.collect();
        console.log('slug:',slug,'name:',name);
        console.log(metrics);
      }
      return {
        provide: {
            initXdnRum: initXdnRum
          }
      }
})
