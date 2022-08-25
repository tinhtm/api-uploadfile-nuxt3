export default defineNuxtPlugin(() => {
    const redirect = (url) => {
        setTimeout(() => {navigateTo(url)}, 300);
    }
    return {
      provide: {
        redirect: redirect
      }
    }
  })