<script setup name="TitleDescList">
   const props = defineProps({
    data: {
        type: Object,
        default: () => {
            return {
                title: {
                    text: "",
                    heading: ""
                },
                descriptions: "",
                items: [
                    {title: "", description: ""},
                ],
                responsiveImage: {},
                images: {},
                imageOnRight: false,
                isArtDirection: false
            }
        },
    }
   })
    const isDesktop = ref(false);
    const widthDesktop = 1024;
    const urlImg = computed(() => {
        if(isDesktop.value) return props.data.images?.damUrlDesktop;
        return props.data.images?.damUrlMobile;
    })
    onMounted(() => {
        if(process.client) {
            isDesktop.value = window.innerWidth >= widthDesktop;
            window.addEventListener("resize", () => {
               isDesktop.value = window.innerWidth >= widthDesktop;
            })
        }
    })
</script>
<template>
    <section class="title-desc-list" :class="{'hasImage': data.isArtDirection}"> 
        <div v-if="data.isArtDirection" class="title-desc-list__image">
            <section class="xsm:mt-[30px] lg:mt-10">
                <img :width="isDesktop ? 600: 355" :src="urlImg" :alt="data.images.altText">
            </section>
        </div>
        <section class="title-desc-list__block">
            <div class="title-desc-list__header">
                <component :is="data.title.heading" class="__header__title">{{data.title.text}}</component>
                <p v-if="data.descriptions" class="title-desc-list__description">
                    {{data.descriptions}}
                </p>
            </div>
            <div class="title-desc-list__container">
                <div 
                    v-for="(item, index) in data.items" 
                    :key="`${item.title}_${index}`" 
                    class="title-desc-list__box"
                    :class="{'last-child ': index == (data.items.length - 1)}"
                >
                    <h3 class="title-desc-list__title">
                        {{item.title}}
                    </h3>
                    <p class="title-desc-list__description">
                        {{item.description}}
                    </p>
                </div>
            </div>
        </section>
    </section>
</template>

<style lang="scss" scoped>
.title-desc-list {
    &__header {
        @apply mt-[60px] lg:mt-20 font-bold;
    }
    .__header__title {
        @apply text-neutrals mb-[30px] lg:mb-5;
    }
    &__container {
        @apply grid grid-cols-12 gap-5;
    }
    &__box {
        @apply col-span-12 xsm:col-span-6 xlg:col-span-4;
        &.last-child {
            @apply xsm:col-span-12 xlg:col-span-4;
        }
    }
    &__title {
        @apply text-neutrals font-bold mb-5 text-2xl;
    }
    &__description {
        @apply text-neutrals text-xl font-normal mb-[30px];
    }
    &.hasImage {
        @apply grid grid-cols-12;
        .title-desc-list__image{
            @apply col-span-12 lg:col-span-6 flex justify-center lg:pr-20 xlg:pr-10;
        }
        .title-desc-list__block{
            @apply col-span-12 lg:col-span-6;
        }
        .title-desc-list__box {
            @apply col-span-12 xsm:col-span-12 lg:col-span-12 xlg:col-span-12;
            
        }
    }
}
</style>
