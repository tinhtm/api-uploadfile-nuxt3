<script setup name="TitleDescHighlightBlock">
   const props = defineProps({
    data: {
        type: Object,
        default: () => {
            return {
                title: "",
                description: "",
                highlightText: {
                    title: [],
                    subtitle: ""
                }
            }
        },
    }
   })
  
</script>
<template>
    <section class="title-desc-hight-light">
        <div class="title-desc-hight-light__header">
            <h2 class="__header__title">{{data.title}}</h2>
            <p class="title-desc-hight-light__description">
                {{data.description}}
            </p>
        </div>

        <div class="title-desc-hight-light__container">
            <div 
                v-for="(item, index) in data.highlightText.title" 
                :key="`${item}_${index}`" 
                class="title-desc-hight-light__box"
            >
                <h3 class="title-desc-hight-light__title">
                    {{item}}
                </h3>
            </div>
            <p class="title-desc-hight-light__subtitle">{{data.highlightText.subtitle}}</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.title-desc-hight-light {
    @apply grid grid-cols-12 mt-[60px] gap-5;
    &__header {
        @apply font-bold col-span-12 xmd:col-span-6;
    }
    .__header__title {
        @apply xsm:text-h1 text-neutrals mb-[30px];
    }
    &__container {
        @apply col-span-12 xmd:col-span-6 bg-success rounded-lg p-10 font-bold text-neutrals-5;
    }
    
    &__title {
        @apply  mb-5 text-h2 xlg:text-h1;
    }
    &__description {
        @apply text-neutrals text-xl font-normal mb-[30px];
    }
    &__subtitle {
        @apply text-xs xlg:text-sm;
    }
}
</style>
