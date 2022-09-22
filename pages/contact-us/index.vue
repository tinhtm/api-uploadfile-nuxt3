<script setup>
const { data } = await useAsyncData("contact-us", () => $fetch("/api/structures/contact-us"));
const sections = [...data.value.sections];
const listComponent = reactive([
  {component: shallowRef(resolveComponent("HeaderBlock")), name: resolveComponent("HeaderBlock").__name, enable: false},
  {component: shallowRef(resolveComponent("FooterBlock")), name: resolveComponent("FooterBlock").__name, enable: false},
  {component: shallowRef(resolveComponent("SubmitFormBlock")), name: resolveComponent("SubmitFormBlock").__name, enable: false},
]);
const formatNameComponent = (name) => {
  name = name.toLowerCase().split('-');
  for (var i = 0; i < name.length; i++) {
    name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1); 
  }
  return name.join('');
}
const getComponent = (name) => {
  const {component} = listComponent.find(c => c.name == formatNameComponent(name));
  return component;
}
const showHideComponent = (name) => {
  const nameComponent = formatNameComponent(name);
  if(listComponent.find(c => c.name == nameComponent)) {
    listComponent.find(c => c.name == nameComponent).enable = true;
    return true;
  }
  return false
}

const { $initXdnRum } = useNuxtApp();
  onMounted(() => {
    if(process.client) {
      $initXdnRum('/contact-us','contact-us')
    }
  });
</script>
<template>
  <header-block />
  <main class="mt-[80px] px-5 xsm:px-[30px]">
    <div class="container">
      <template v-for="item in sections" :key="item.elementId"> 
        <component 
          v-if="!['header-block', 'footer-block'].some(c => c == item.name) && showHideComponent(item.name)" 
          :is="getComponent(item.name)" :data="item.fields" >
        </component>
      </template>
    </div>
  </main>
  <footer-block />
</template>