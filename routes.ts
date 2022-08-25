import { Router } from '@layer0/core'
import { nuxtRoutes } from '@layer0/nuxt-nitro'
import { API_CACHE_HANDLER, ASSET_CACHE_HANDLER, SSR_CACHE_HANDLER } from './layer0/cache'

export default new Router()
// .match('/api/:path*', API_CACHE_HANDLER)
.match('/', SSR_CACHE_HANDLER)
.match('/open-positions/:path*', SSR_CACHE_HANDLER)
.match('/public/:file*', ASSET_CACHE_HANDLER)
//.match('/service-worker.js', ({ serviceWorker }) => {
//    serviceWorker('.nuxt/dist/client/service-worker.js')
//})
.use(nuxtRoutes);
