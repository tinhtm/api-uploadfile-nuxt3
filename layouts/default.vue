<script setup>
  useHead({
  script: [
    {
      src : 'https://rum.layer0.co/latest.js',
      defer : '',
    }
  ]
});       
</script>
<template>
  <div class="h-full">
    <Head>
      <Link rel="icon" type="image/x-icon" href="/favicon.png" />
    </Head>
      <slot/>
  </div >
</template>