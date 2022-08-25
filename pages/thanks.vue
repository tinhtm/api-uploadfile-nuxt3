<script setup>
</script>
<template>
  <header-block />
  <main class="mt-[80px] px-5 xsm:px-[30px]">
    <div class="container mt-[80px]">
      <section class="thanks__container">
        <div
          class="header backArrow_box"
        >
          <NuxtLink to="/open-positions">
            <img
              src="https://drberg-dam.imgix.net/icons/icon-line-navigation-backward_arrow.svg"
              alt="icon-backward"
              width="24"
              height="24"
              class="w-[24px] h-[24px]"
            />
          </NuxtLink>
          <NuxtLink to="/open-positions">
            <span>Back to job listings</span>
          </NuxtLink>
        </div>
        <div class="thanks__box">
          <h1 class="thanks__title"> Thank you!</h1>
          <h3>Your application has been successfully sent. We usually respond within 24-48h.</h3>
        </div>
      </section>
    </div>
  </main>
  <footer-block />
</template>

<style lang="scss" scoped>
.thanks__container {
    @apply relative;
    height: calc(100vh - 296px);
}
.thanks__box {
    @apply flex flex-col justify-center;
    height: calc(100vh - 338px);
    h3{
      @apply text-neutrals;
    }
}
.thanks__title {
    @apply text-neutrals mb-5 font-black xsm:text-5xl;
}
.thanks__description {
    @apply text-neutrals-80 text-xl mb-[30px];
}
.thanks__btn {
    @apply px-5 leading-[48px] bg-navigation rounded-full opacity-[1] font-bold text-neutrals-5 mt-[30px] hover:bg-[#33A7B9];
    box-shadow: 0px 1px 2px #00000029;
}
.thanks__time {
    @apply text-neutrals-80;
}



svg {
    width: 28px;
    height: 28px;
}
a {
    @apply font-bold;
}
.st0 {
    fill: #2a363e;
}
.header {
    a {
        @apply flex font-bold text-[16px] text-navigation hover:text-[#33A7B9] hover:underline;
        img{
            @apply mr-[25px];
        }
    }
}
.backArrow_box {
    @apply flex pt-5;
}

</style>