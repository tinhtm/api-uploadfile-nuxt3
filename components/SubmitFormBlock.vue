<script setup name="SubmitFormBlock">
import countryCode from "assets/data/country.json";
import { object, string, number } from 'yup';
import { configure } from "vee-validate";
const { $extenstionName, $converMB } = useNuxtApp();
const listCountry = await [
		...countryCode.listData.map((item) => {
			let obj = Object.assign({}, item);
			obj["img"] = `/images/flags/${obj.code.toLowerCase()}.png`;
			return obj;
		}),
	];
const { $dayjs, $axios } = useNuxtApp();
const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {
        description: "",
        jobId: null,
        summary: "",
        title: "",
        formFields: [
          {
            type: "",
            label: "",
            caption: "",
            preloadText: "",
          },
        ],
        attachments: {
          anchorText: [],
          icon: "",
          note: "",
        },
        ctaLink: {
          text: "",
          description: "",
          url: "",
          target: "",
        },
        parentPageLink: {
          showLink: true,
          link: {
            text: "",
            icon: "",
            url: "",
            target: "",
          },
        },
        
      };
    },
  },
  detailJob: {
    type: Object,
    default: () => false,
  },
});
const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  linkedIn: "",
  message: "",
  attachmentResume: [],
  attachmentLetter: [],
});
const schema = object({
  firstName: string().required("First Name is required").matches(/^[a-zA-Z\s]*$/, "First Name must only contain letters and space").max(50, "The First Name field may not be greater than 50 characters"),
  lastName: string().required("Last Name is required").matches(/^[a-zA-Z\s]*$/, "Last Name must only contain letters and space").max(50, "The Last Name field may not be greater than 50 characters"),
  phone: string().required("Phone is required"),
  message: string().required("The Message is required").max(50, "The Message field may not be greater than 50 character"),
  email: string().required("Email is required").matches(/^[a-zA-Z\d\-_@.\s]+$/i, "Email must contain alphanumeric characters only (no spaces, no special characters except _ and .").email("Invalid email address format"),
});
const changeInput = (e, item) => {
  formData[item.property] = e.target.value;
  if(e.target.value.length > 0){
    document.querySelector(`.remove-icon.${item.property}`).classList.remove("unshow") 
  }
  else{
    document.querySelector(`.remove-icon.${item.property}`).classList.add("unshow")
  }
}
const focusInput = (e, item) => {
  if (item.preloadText) {
    formData[item.property] = formData[item.property]? `${formData[item.property]}` : `${item.preloadText}`;
  }
}
const resume = ref(null);
const letter = ref(null);
let country = reactive({
  code: "US",
  countryCodeNumber: "1",
  img: "/images/flags/us.png",
  nameCode: "United States",
});
const showListCountry = ref(false);
const chosseFile = (event, item) => {
  if(item.property == "resume") {
    resume.value.click();
    return false;
  }
  letter.value.click();
  return false;
}
const selectCountry = (itemCountry) => {
  country = Object.assign(country, itemCountry);
  showListCountry.value = false;
}
const limitSize = 20971520; // < 20MB
const limitExtention = ["doc", "docx", "pages", "pdf"];
const selectFile = (event, type) => {
  let totalSize = 0;
  let file = event.target.files[0];
  if(!limitExtention.some(c => c == $extenstionName(file.name))) {
    event.target.value = null;
    if(type == "letter") letterFirstLoad.value = false;
    else resumeFirstLoad.value = false;
    return 
  }
  
  if(type == "letter") {
    letterFirstLoad.value = false;
    formData.attachmentLetter.forEach(c => {
      totalSize += c.size;
    })
    totalSize += file.size;
    if(totalSize <= limitSize) {
      formData.attachmentLetter.push(file);
    }
  }
  if(type == "resume"){
    resumeFirstLoad.value = false;
    formData.attachmentResume.forEach(c => {
      totalSize += c.size;
    })
    totalSize += file.size;
    if(totalSize <= limitSize) {
      formData.attachmentResume.push(file);
    }
  }
  event.target.value = null;
  return
}

const removeFile = (type, index) => {
  if(type == "resume") {
    formData.attachmentResume.splice(index, 1)
    return
  }
  formData.attachmentLetter.splice(index, 1)
  return
}

const submitForm = (valid ,url) => {
  valid().then(res => {
    completedLoadFiles();
    if (res.valid && formData.attachmentLetter.length > 0 && formData.attachmentLetter.length > 0) {
      const form = new FormData();
      form.append("firstName", formData.firstName);
      form.append("lastName",formData.lastName );
      form.append("phone", formData.phone);
      form.append("countryCode", country.countryCodeNumber);
      form.append("email", formData.email);
      form.append("linkedIn", formData.linkedIn);
      for (let i = 0; i < formData.attachmentResume.length; i++) {
        form.append("attachmentResume", formData.attachmentResume[i])
      }
      for (let i = 0; i < formData.attachmentLetter.length; i++) {
        form.append("attachmentLetter", formData.attachmentLetter[i])
      }
      if(props.data.jobId) {
        form.append("jobId", props.data.jobId);
      } else {
        form.append("message", formData.message);
      }
      useFetch("/api/structures/job-detail/submit", {
        body: form,
        method: 'POST'
      })
    }
  })
}
const searchCountry = ref("");
const filterCountry = ref(listCountry);
const showremoveIcon =ref(false);
const search = () => {
  if (!searchCountry.value || searchCountry.value.trim() == "") {
    filterCountry.value = [...listCountry];
    showremoveIcon.value = false;
  }
  else {
    filterCountry.value = listCountry.filter(
      c => [c.id, c.code, c.nameCode, c.countryCodeNumber].some(
        i => `${i}`.toLowerCase().includes(searchCountry.value.toLowerCase())
      )
    )
  }
}
onMounted(()=>{
    window.addEventListener('click',()=>{
      document.querySelectorAll(".remove-icon").forEach((e)=>{
          e.classList.add("unshow");
      })
    })
})
const handleRemove = (e,item) =>{
    formData[item.property] = "";
     document.getElementById(`${item.property}`).value = formData[item.property];
}
</script>
<template>
  <v-form class="submit-form-block" :validation-schema="schema"  v-slot="{ meta: formMeta, validate, errors }">
    <div
      v-if="data.parentPageLink && data.parentPageLink.showLink"
      class="header backArrow_box"
    >
      <NuxtLink :to="data.parentPageLink.link.url">
        <img
          :src="data.parentPageLink.link.icon"
          alt="icon-backward"
          width="24"
          height="24"
          class="w-[24px] h-[24px]"
        />
      </NuxtLink>
      <NuxtLink :to="data.parentPageLink.link.url">
        {{ data.parentPageLink.link.text }}
      </NuxtLink>
    </div>

    <div class="submit-form-block__container">
      <div class="form-summary">
        <p class="text-xl text-neutrals">{{data.summary}}</p>
      </div>
      <div class="form-header">
        <h1 class="xsm:text-[48px] text-neutrals font-bold">{{data.title}}</h1>
      </div>
      <h3 class="mb-[30px]">{{data.description}}</h3>
      <div class="form-body"  >
        <div class="control" v-for="(item, index) in data.formFields" :key="`${item.type}_${index}`">
          <section class="flex gap-5">
            <div class="min-w-[140px] xsm:min-w-[182px] control-input" v-click-outside="()=> showListCountry=false" v-if="item.property == 'phone'">
              <div class="control-input-country cursor-pointer" :class="{'active': showListCountry}" @click.prevent="showListCountry = !showListCountry" >
                <img width="20" height="20" loading="lazy" class="mr-2 w-[20px] h-[20px]" :src="country.img" :alt="country.nameCode">
                
                  <span>{{country.code}} +{{country.countryCodeNumber}}</span>
                <label class="control-title active">Country code</label>
                <img 
                  height="16" 
                  width="16" 
                  src="https://drberg-dam.imgix.net/icons/icon-line-navigation-arrow_chevron_down.svg" 
                  alt="arrow-down" 
                  class="h-[16px] w-[16px] absolute right-0">
              </div>
              <div class="control-input-country-list" v-if="showListCountry">
                  <section class="control-input-search">
                    <img width="20" height="20" class="w-[20px] h-[20px]" src="https://drberg-dam.imgix.net/icons/icon-line-general-search.svg" loading="lazy" alt="search-icon">
                    <input type="text" class="" placeholder="Search" v-model="searchCountry" @input="search">
                    <button v-if="showremoveIcon" class="absolute right-6" @click.prevent="searchCountry = '';search();">
                      <img class="w-[24px] h-[24px]" src="https://drberg-dam.imgix.net/icons/icon-line-navigation-close.svg" loading="lazy" alt="close-icon">
                    </button>
                  </section>
                  <section class="list-item">
                    <p class="item-country" v-for="country in filterCountry" :key="country.code" @click.prevent="selectCountry(country)">
                      <img width="18" height="18" loading="lazy" class="mr-2 w-[18px] h-[18px]" :src="country.img" :alt="country.nameCode">
                      {{country.nameCode}} +{{country.countryCodeNumber}}
                    </p>
                  </section>
              </div>
            </div>
            <section class="w-full">
              <div class="w-full control-input">
                <v-input
                  v-slot="{ value }"
                  :id="item.property"
                  :as="item.type == 'textarea' ? 'textarea' : 'input'" 
                  :name="item.property"
                  :class="{'input-active': formData[item.property] && !errors[item.property], 'input-error': errors[item.property] }" 
                  :type="item.type"
                  v-model="formData[item.property]"
                  placeholder=""
                  @focus="focusInput($event, item)"
                  @input="changeInput($event, item)"
                >
                  </v-input>
                <label for="" class="control-title">{{item.label}} </label>
                <span class="absolute top-5 right-[34px] remove-icon unshow" :class="item.property != 'message'?item.property:'message unshow_textarea'" @click="handleRemove($event, item)">
                      <img class="w-[24px] h-[24px]" src="https://drberg-dam.imgix.net/icons/icon-line-navigation-close.svg" loading="lazy" alt="close-icon">
                </span>
            </div>
              <v-error :name="item.property" class="text-sm text-error" as="p"/>
            </section>
          </section>
          <p class="control-caption">{{item.caption}}</p>
        </div>
        <div class="attachments"> 
          <input type="file" accept=".doc, .docx, .pages, .pdf" hidden @change="selectFile($event, 'resume')" ref="resume">
          <input type="file" accept=".doc, .docx, .pages, .pdf" hidden @change="selectFile($event, 'letter')" ref="letter">
          <div v-for="(item, index) in data.attachments.anchorText" :key="`${item.value}_${index}`">
            <section class="flex gap-2 items-center mt-5">
              <button class="attachments-btn rippleAffect" @click="chosseFile($event, item)">
                <img width="18" height="18" :src="data.attachments.icon" alt="">
              </button>
              <span class="underline font-bold cursor-pointer text-xl" @click="chosseFile($event, item)">{{item.text}}</span>
              
            </section> 
            
            <template v-if="item.property == 'resume'">
              <p v-if="formData.attachmentResume.length == 0 && !resumeFirstLoad" class="text-sm text-error"> Your {{item.property}} is required</p>
              <div
                class="file-attachment"
                v-for="(resume, index) in formData.attachmentResume" 
                :key="`resume_${resume.name}_${index}`"
              >
                <section>
                  <p>{{resume.name}} </p>
                  <p>{{$converMB(resume.size)}}MB <span class="uppercase">{{$extenstionName(resume.name)}}</span></p>
                </section>
                <button @click.prevent="removeFile(item.property,index)">
                  <img width="24" height="24" class="w-[24px] h-[24px]" src="https://drberg-dam.imgix.net/icons/icon-line-navigation-close.svg" loading="lazy" alt="close-icon">
                </button>
              </div>
            </template>
            <template v-else>
              <p v-if="formData.attachmentLetter.length == 0 && !letterFirstLoad" class="text-sm text-error"> Your {{item.property}} is required</p>
              <div
                class="file-attachment"
                v-for="(letter, index) in formData.attachmentLetter"  
                :key="`letter_${letter.name}_${index}`"
              >
                <section>
                  <p>{{letter.name}} </p>
                  <p>{{$converMB(letter.size)}}MB <span class="uppercase">{{$extenstionName(letter.name)}}</span></p>
                </section>
                <button @click.prevent="removeFile(item.property, index)">
                  <img width="24" height="24" class="w-[24px] h-[24px]" src="https://drberg-dam.imgix.net/icons/icon-line-navigation-close.svg" loading="lazy" alt="close-icon">
                </button>
              </div>
            </template>
          </div>
          <p class="mt-5 text-neutrals-80">{{data.attachments.note}}</p>
        </div>
      </div>
      <div class="form-footer">
        <button class="control-btn rippleAffect"  @click="submitForm(validate ,data.ctaLink.url)">
          {{data.ctaLink.text}}
        </button>
        <div class="text-sm mt-5 mb-[60px] xmd:mb-20" v-html="data.ctaLink.description"></div>
      </div>
    </div>
  </v-form>
</template>

<style lang="scss">
.submit-form-block {
  @apply text-neutrals;
  .header {
    a {
      @apply flex font-bold text-[16px] text-navigation hover:text-[#33A7B9] hover:underline;
      img {
        @apply mr-[25px];
      }
    }
  }
  .backArrow_box {
    @apply flex pt-5;
  }
  &__container {
    @apply mt-[120px] xsm:mt-[170px] xmd:max-w-[586px];
  }
  .form {
    &-header {
    }
    &-body {
      .control {
        @apply w-full mb-5 sm:mb-[30px] relative min-h-[64px] ;
        &-input{
          @apply relative;
          input{
            @apply pr-[50px] pt-1;
          }
          input,textarea {
            @apply bg-neutrals-10 w-full min-h-[64px] border-b-[1px] border-neutrals-20;
            &:focus {
              @apply bg-neutrals-5 border-navigation;
              & ~ .control-title {
                @apply top-1 text-sm left-0 text-navigation;
              }
           }
            &.input-active {
              @apply bg-neutrals-5;
               & ~ .control-title {
                @apply top-1 text-sm left-0;
              }
            }
            &.input-error {
              @apply bg-error-10 hover:bg-error-10;
              & ~ .control-title {
                @apply top-1 text-sm left-0 text-error;
              }
            }
          }
          textarea {
            @apply h-[300px] pt-5;
            & ~ .control-title {
              @apply top-3;
            }
          }
          &-search {
            @apply mx-5 mb-5 px-[10px] rounded-[2px] border-[1px] border-neutrals-20 flex items-center;
            input {
              @apply min-h-[40px] border-none px-5 bg-neutrals-5;
            }
          &:focus-within{
            @apply border-navigation;
          }

          }
        }
        &-input:hover, &:focus {
          .control-title {
            @apply top-1 text-sm left-0;
          }
          input,textarea {
            @apply bg-neutrals-5;
          }
        }
        &-title {
          @apply absolute left-5 top-1/3 text-neutrals-40 transition-all;
          &.active {
             @apply top-1 text-sm left-0;
          }
        }
        &-caption {
          @apply text-sm text-neutrals-60;
        }
       
      }
      .attachments {
        @apply text-neutrals;
        &-btn {
          @apply p-[10px] leading-[48px] bg-navigation rounded-full opacity-[1] font-bold text-neutrals-5 hover:bg-[#33A7B9];
          box-shadow: 0px 1px 2px #00000029;
          &.rippleAffect {
            @apply bg-center transition-all rounded-full duration-500;
          }
          &.rippleAffect:hover {
              background: #33a7b9
                  radial-gradient(circle, transparent 1%, #0091a8 1%)
                  center/15000%;
          }
          &.rippleAffect:active {
            @apply bg-neutrals-5;
            background-size: 100%;
            transition: background 0s;
          }
        }
      }
      .file-attachment {
        @apply bg-success-20 px-2 py-1 mb-0 mt-1 text-base flex items-center justify-between text-neutrals-80;
      }
    }
    &-footer {
      .control {
        &-btn {
          @apply px-5 leading-[48px] bg-navigation rounded-full opacity-[1] font-bold text-neutrals-5 mt-[30px] hover:bg-[#33A7B9];
          box-shadow: 0px 1px 2px #00000029;
          &.rippleAffect {
            @apply bg-center transition-all rounded-full duration-500;
          }
          &.rippleAffect:hover {
              background: #33a7b9
                  radial-gradient(circle, transparent 1%, #0091a8 1%)
                  center/15000%;
          }
          &.rippleAffect:active {
            @apply bg-neutrals-5;
            background-size: 100%;
            transition: background 0s;
          }
        }
      }
    }
  }
  a {
    @apply text-navigation hover:underline;
  }
  .control-input-country {
    @apply flex h-[64px] items-center border-b-[1px] border-neutrals-20;
    &.active {
      @apply border-navigation;
      .control-title {
        @apply text-navigation;
      }
    }
    &-list{
      @apply h-[450px] w-[335px] absolute overflow-hidden bg-neutrals-5 shadow-primary-5 drop-shadow-md z-10 py-5 ;
      .list-item {
        @apply overflow-auto h-[calc(100%-40px)];
        .item-country{
          @apply pl-5 py-3 cursor-pointer hover:bg-neutrals-10 items-center flex;
        }
      }
    }
  }
}

input:focus, textarea:focus {
    outline: none
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.unshow{
  @apply hidden;
}
.unshow_textarea{
  @apply hidden;

}
</style>
