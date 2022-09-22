<script setup name="OpenPositionList">
import FilterBlock from "./FilterBlock.vue"
import PopupFilterBlock from "./Popupfilter.vue"
const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {
        title: "",
        ctaLink: {
          showLink: true,
          link: {
            text: "",
            icon: "",
            url: "",
            target: "_self",
          },
        },
        positions: [
          {
            title: "",
            summary: "",
            variants: [],
            link: {
              text: "",
              url: "",
              target: "",
            },
          },
          {
            title: "",
            summary: "",
            variants: [],
            link: {
              text: "",
              url: "",
              target: "_self",
            },
          },
        ],
        positionLimit: 0,
        filters: {
          showFilters: true,
          attributes: []
        },
      };
    },
  },
});
let initData = reactive({
  title: "",
  ctaLink: {
    showLink: true,
    link: {
      text: "",
      icon: "",
      url: "",
      target: "_self",
    },
  },
  positions: [
    {
      title: "",
      summary: "",
      link: {
        text: "",
        url: "",
        target: "",
      },
    },
    {
      title: "",
      summary: "",
      link: {
        text: "",
        url: "",
        target: "_self",
      },
    },
  ],
  filters: {
    showFilters: false,
    attributes: [
      {
        type: "",
        variants: [
          {
            id: 1,
            name: ""
          },
        ]
      }
    ]
  },
});
initData = Object.assign(initData, props.data);
let positions = reactive({data: []});
const filterIds = (listIds = []) => {
  // if (listIds.length > 0) {
  //   initData.positions = initData.positions.filter(position => {
  //     if(listIds.every(id => position.variants.indexOf(id) != -1 )) return true;
  //     return false
  //   });
  // }
  // else initData = Object.assign(initData, props.data);
    positions.data = listIds.length ? initData.positions.filter(position => {
      return listIds.every(id => position.variants.indexOf(id) != -1 )
    }) : initData.positions;
}
useFetch("/api/positions", { server: false }).then((res) => {
  if (res.data.value && res.data.value.data) {
    initData.positions = props.data.positionLimit ? res.data.value.data.slice(0, props.data.positionLimit) : res.data.value.data;
    positions.data = initData.positions;
  }
});
useFetch("/api/position-attributes", { server: false }).then((res) => {
  if (res.data.value && res.data.value.data) {
    initData.filters.attributes = Object.keys(res.data.value.data).map(key => {
      return {
        type: key,
        variants: res.data.value.data[key]
      }
    })
  }
});
</script>
<template>
<client-only>
  <div id="open-positions-list" class="open-positions-list__container">
    <div class="open-positions-list_header__box">
      <h2 class="header__box__title">{{ initData.title }}</h2>
      <NuxtLink class="hidden xsm:block "
        v-if="initData.ctaLink.showLink"
        :target="initData.ctaLink.link.target" :to="initData.ctaLink.link.url"><span class="hover:underline">{{ initData.ctaLink.link.text }}</span></NuxtLink>
      <NuxtLink
        v-if="initData.ctaLink.showLink"
        :target="initData.ctaLink.link.target" 
        :to="initData.ctaLink.link.url"
        class="xsm:hidden w-[44px] h-[44px] flex items-center justify-center rounded-full hover:bg-neutrals-10">
          <img
          :src="`${initData.ctaLink.link.icon}`"
          :alt="initData.ctaLink.link.text"
        />
        </NuxtLink>
    </div>
    <PopupFilterBlock :data="initData.filters" @update-change="filterIds"></PopupFilterBlock>
    <filter-block :data="initData.filters" @update-change="filterIds"></filter-block>
    <slot name="positionsList">
      <div v-if="positions.data.length == 0"> There is no job available for the applied filters. Please choose other filter options.</div>
      <template
        v-for="(item, index) in positions.data"
        :key="`item.title_${index}`"
      >
        <NuxtLink :target="item.link.target" :to="item.link.url">
          <div class="open-positions-list__content__container">
            <div class="open-positions-list__content_box">
              <div class="open-positions-list__content__left">
                <h3 class="__content__left__title">{{ item.title }}</h3>
                <p class="__content__left__position">
                  {{ item.summary }}
                </p>
              </div>
              <div class="open-positions-list__content__right">
                <button class="w-[60px] flex justify-end">
                  <img
                    width="60"
                    src="https://drberg-dam.imgix.net/icons/icon-line-navigation-arrow_chevron_forward.svg?w=48px"
                    alt="Career Site"
                  />
                </button>
              </div>
            </div>
          </div>
        </NuxtLink>
      </template>
    </slot>
  </div>
  </client-only>
</template>

<style lang="scss" scoped>
.open-positions-list__container {
  @apply mb-[60px] xmd:mb-20 text-neutrals;

  .header__box__title {
    @apply text-[#2A363E] font-bold xsm:text-[40px];
  }
  a {
    @apply text-[#0091A8] whitespace-nowrap hover:underline hover:text-[#33A7B9];
  }
  .open-positions-list_header__box {
    @apply flex justify-between items-center mb-[30px] xmd:mb-[40px];
  }
  a {
    @apply text-xl hover:no-underline;
  }
  img {
    @apply w-[24px] h-[24px];
  }
  .open-positions-list_header__box {
    @apply flex justify-between items-center;
  }
  .open-positions-list__content__container {
    @apply hover:bg-[#F4F4F4];
    border-bottom: 2px dashed #00000029;
  }
  .open-positions-list__content_box {
    @apply flex mx-[20px] py-[18px] justify-between;
  }
  .__content__left__title {
    @apply text-[#2A363E] font-bold whitespace-pre-wrap;
  }
  .__content__left__position {
    @apply text-[#2A363E] text-sm font-normal whitespace-pre-wrap;
  }
  .open-positions-list__content__right {
    @apply flex items-center;
  }
}
</style>
