<script setup>
const route = useRoute();
const { data } = await useAsyncData(`job-detail-${route.params.slug}`, () => $fetch(`/api/structures/job-detail/${route.params.slug}`));
const sections = [...data.value.sections];
console.log(sections);
const listComponent = reactive([
  {component: shallowRef(resolveComponent("HeaderBlock")), name: resolveComponent("HeaderBlock").__name, enable: false},
  {component: shallowRef(resolveComponent("FooterBlock")), name: resolveComponent("FooterBlock").__name, enable: false},
  {component: shallowRef(resolveComponent("CtaHero")), name: resolveComponent("CtaHero").__name, enable: false},
  {component: shallowRef(resolveComponent("DescriptionBlock")), name: resolveComponent("DescriptionBlock").__name, enable: false},
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
</script>
<template>
  <header-block />
  <main class="mt-[80px] px-5 xsm:px-[30px]">
    <div class="container mt-[80px]">
      <template v-for="item in sections" :key="item.elementId"> 
        <component 
          v-if="!['header-block', 'footer-block'].some(c => c == item.name) && showHideComponent(item.name)" 
          :is="getComponent(item.name)" 
          :data="item.fields" 
          :detailJob="true"
        >
        </component>
      </template>
    </div>
  </main>
  <footer-block />
</template>