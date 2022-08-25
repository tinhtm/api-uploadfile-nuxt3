<script setup>
const { data } = await useAsyncData("open-postions", () => $fetch("/api/structures/open-position-list"));
const sections = [...data.value.sections];
const listComponent = reactive([
  {component: shallowRef(resolveComponent("HeaderBlock")), name: resolveComponent("HeaderBlock").__name, enable: false},
  {component: shallowRef(resolveComponent("FooterBlock")), name: resolveComponent("FooterBlock").__name, enable: false},
  {component: shallowRef(resolveComponent("BreadcrumbBlock")), name: resolveComponent("BreadcrumbBlock").__name, enable: false},
  {component: shallowRef(resolveComponent("OpenPositionsList")), name: resolveComponent("OpenPositionsList").__name, enable: false},
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
    <div class="container min-h-[calc(100vh_-_296px)] ">
      <template v-for="item in sections" :key="item.elementId"> 
        <component 
          :id="item.elementId"
          v-if="!['header-block', 'footer-block'].some(c => c == item.name) && showHideComponent(item.name)" 
          :is="getComponent(item.name)" :data="item.fields">
        </component>
      </template>
    </div>
  </main>
  <footer-block />
</template>