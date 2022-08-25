<template>
  <div>
    <NuxtLayout >
      <NuxtPage :key="`${$route.fullPath}_${$route.name} `"/>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
// https://v3.nuxtjs.org/guide/features/head-management/
useHead({
  titleTemplate: (title) => {
      return title ? `${title} - CareerSite` : 'Home - CareerSite';
    },
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'utf-8',
});
</script>
