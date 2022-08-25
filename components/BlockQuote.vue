<script setup name="BlockQuote" >
	const props = defineProps({
    data: {
        type: Object,
        default: () => {
            return {
                title: "",
                description: "",
                hasBackground: false
            }
        },
    }
	})
</script>
<template>
    <section class="block-quote__container" :class="{'has-background': data.hasBackground}">
        <h2 class="block-quote__title">{{data.title}}</h2>
        <div class="block-quote__rectangle">
            <p class="block-quote__description">
                {{data.description}}
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.block-quote {
    &__container {
        @apply mt-[60px] lg:mt-20 text-neutrals px-5 lg:px-[60px];
        &.has-background{
            @apply text-neutrals-5 bg-success py-[60px] xsm:rounded-lg  mt-0;
            .block-quote__rectangle {
                @apply border-l-[6px] border-neutrals-5;
            }
        }

    }
    &__rectangle {
        @apply ml-[20px] border-l-[6px] border-neutrals;;
    }
    &__title {
        @apply font-black mb-10;
    }
    &__description {
        @apply ml-5 text-2xl leading-[42px] xsm:text-h2 xsm:leading-[54px];
    }
}
</style>
