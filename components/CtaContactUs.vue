<script setup name="CtaContactUs">
  const props = defineProps({
    data: {
        type: Object,
        default: () => {
            return {
                title: "",
                description: "",
                links: [
                    {text: "", url: "", target: ""},
                ]
            }
        },
    }
   })
</script>
<template>
   <section class="cta-contact-us__container">
	<h2 class="cta-contact-us__title">{{data.title}}</h2>
	<p class="cta-contact-us__description">
		{{data.description}}
	</p>
	<div class="cta-contact-us__box__btn">
        <template v-for="link in data.links" :key="link.text">
          <button @click="$redirect(link.url)" class="__box__btn __white rippleAffect" :class="{'__blue': !link.text.includes('Contact us'), '__white': link.text.includes('Contact us')}">
              {{link.text}}
          </button>
        </template>
	</div>
</section>
</template>

<style lang="scss" scoped>
  .cta-contact-us__container {
    @apply mb-[60px] xmd:mb-[80px];
  }

  .cta-contact-us__title {
    @apply text-neutrals mt-[60px] mb-[30px] font-bold xsm:text-[40px];
  }

  .cta-contact-us__description {
    @apply text-neutrals font-normal text-xl;
  }
  .cta-contact-us__box__btn {
    @apply mt-[30px];
  }

  .__box__btn {
    @apply border-2 px-5 leading-[44px] rounded-full font-bold;
  }
  .__white {
    @apply text-navigation mr-5 hover:bg-navigation hover:border-navigation-80 hover:text-neutrals-5;
  }
  .__blue {
    @apply border-navigation text-neutrals-5 bg-navigation hover:bg-navigation-80 hover:border-navigation-80;
  }
  .rippleAffect {
    background-position: center;
    transition: background 0.5s;
    border-radius: 125px;
  }
  .rippleAffect:hover {
    background: #33a7b9
    radial-gradient(circle, transparent 1%, #0091a8 1%)
    center/15000%;
  }
  .rippleAffect:active {
    background-color: rgba(255, 255, 255, 0.7);
    background-size: 100%;
    transition: background 0s;
  }
</style>
