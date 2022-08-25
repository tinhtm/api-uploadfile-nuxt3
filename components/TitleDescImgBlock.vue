<script setup name="TitleDescImgBlock">
    const props = defineProps({
        data: {
            type: Object,
            default: () => {
                return {
                    title: "",
                    description: "",
                    responsiveImage:  {
                        damUrl: "",
                        src: "",
                        srcset: [],
                        sizes: "",
                        altText: ""
                    },
                    imageOnRight: false,
                }
            }
        }
    })
    const srcset = computed(() => {
        if (props.data.responsiveImage.srcset) return props.data.responsiveImage.srcset.map(c => `${props.data.responsiveImage.damUrl}${c}`).join(',');
        return ""
    })
</script>
<template>
    <section class="title-desc-img-block__container">
        <div :class="{'title-desc-img-block__box': data.imageOnRight, 'title-desc-img-block__box__reverse': !data.imageOnRight && data.responsiveImage.src}">
            <div :class="{'__box__left': data.imageOnRight, '__box__right __right__rever': !data.imageOnRight && data.responsiveImage.src}">
                <h2 class="title-desc-img-block__title">{{data.title}}</h2>
                <p class="title-desc-img-block__description">
                    {{data.description}}
                </p>
            </div>
            <div v-if="data.responsiveImage.damUrl" :class="{'__box__right': data.imageOnRight, '__box__left __left__rever': !data.imageOnRight}">
                <img
                    :srcset="srcset"
                    :src="`${data.responsiveImage.damUrl}${data.responsiveImage.src}`"
                    :sizes="data.responsiveImage.sizes"
                    :alt="data.responsiveImage.altText"
                    class="info_image__img"
                />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.title-desc-img-block__container {
    @apply my-[60px];
}

.title-desc-img-block__box {
    @apply items-center xmd:flex xmd:mb-20 mb-[60px];
}
.__box__right {
    @apply xmd:px-5 xmd:w-1/2 xlg:w-[50%];
}
.__box__left {
    @apply xmd:w-1/2 xlg:w-[50%];
}
.title-desc-img-block__title {
    @apply text-neutrals font-bold xsm:text-[40px];
}

.title-desc-img-block__description {
    @apply text-neutrals text-xl font-normal mt-[30px];
}
.info_image__img {
    @apply object-cover object-center rounded-[10px] my-5 w-full;
}
.title-desc-img-block__box__reverse {
    @apply items-center xmd:flex xmd:flex-row-reverse;
}

</style>
