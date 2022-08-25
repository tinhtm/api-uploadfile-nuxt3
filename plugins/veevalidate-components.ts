import {Form, Field, ErrorMessage} from "vee-validate";
export default defineNuxtPlugin ((nuxtApp) => {
    nuxtApp.vueApp.component("v-form", Form);
    nuxtApp.vueApp.component("v-input", Field);
    nuxtApp.vueApp.component("v-error", ErrorMessage);
})