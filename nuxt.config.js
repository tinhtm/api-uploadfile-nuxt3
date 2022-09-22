import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],  
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
    transpile: ['vee-validate']
  },
  runtimeConfig: { 
    AZURE_STORAGE_CONNECTION: process.env.AZURE_STORAGE_CONNECTION,
    AZURE_STORAGE_BASE_URL: process.env.AZURE_STORAGE_BASE_URL,
    AZURE_STORAGE_QUEUE_NAME: process.env.AZURE_STORAGE_QUEUE_NAME,
    AZURE_STORAGE_CONTAINER_NAME: process.env.AZURE_STORAGE_CONTAINER_NAME
  },
});