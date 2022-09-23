import install from "@layer0/devtools/install"
import { install as installSW } from "@layer0/prefetch/window"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", () => {
    install()
    installSW()
  })
})
