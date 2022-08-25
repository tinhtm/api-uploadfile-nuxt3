<script setup name="CtaHero">
    const { $dayjs } = useNuxtApp();
    const props = defineProps({
        data: {
            type: Object,
            default: () => {
                return {
                    title: "",
                    description: "",
                    summary: "",
                    link: {
                        text: "Open positions",
                        url: "/open-positions",
                        target: "_self",
                        description: "We usually reply within 24-48h"
                    },
                    parentPageLink: {
                        showLink: true,
                        link: {
                            text: "Back to job listings",
                            icon: "https://drberg-dam.imgix.net/icons/icon-line-navigation-backward_arrow.svg",
                            url: "/open-positions",
                            target: "_self"
                        }
                    },
                    updatedOn: "2022-07-24T23:33:06.949Z",
                    navigationLink: {
                        text: "View job details",
                        icon: "https://drberg-dam.imgix.net/icons/icon-line-navigation-arrow-down.svg"
                    }
                }
            }
        },
        detailJob: {
            type: Object,
            default: () => false
        }
    })
    
</script>
<template>
    <section class="cta-hero__container">
        <div v-if="data.parentPageLink && data.parentPageLink.showLink" class="header backArrow_box">
            <NuxtLink :to="data.parentPageLink.link.url">
                <img :src="data.parentPageLink.link.icon" alt="icon-backward" width="24" height="24" class="w-[24px] h-[24px]">
            </NuxtLink>
            <NuxtLink :to="data.parentPageLink.link.url">
                {{data.parentPageLink.link.text}}
            </NuxtLink>
        </div>
        <div  class="cta-hero__box">
            
            <p v-if="detailJob" class="text-neutrals text-xl"> {{data.summary}}</p>
            <h1 class="cta-hero__title">{{data.title}}</h1>
            <p class="cta-hero__description">
                {{data.description}}
            </p>
            <p v-if="detailJob" class="cta-hero__time">Last update: {{$dayjs(data.updatedOn).format('MMMM DD, YYYY')}}</p>
            <button class="cta-hero__btn rippleAffect" @click="$redirect(data.link.url)">
                {{data.link.text}}
            </button>
            <span class="ml-5 text-neutrals text-[14px] "> {{data.link.description}}</span>
           
        </div>

        <div class="__positions__container">
            <div v-if="detailJob" class="down-arrow">
                <button @click="$scroll('#detail-job')" class="w-[44px] h-[44px] flex flex-col justify-center items-center cursor-pointer">
                    <span class="whitespace-nowrap">{{data.navigationLink.text}}</span>
                    <span class="btn-down-arrow">
                        <img :src="data.navigationLink.icon" alt="arrow-down" class="h-[28px] w-[28px]">
                    </span>
                </button>
            </div>
            <div v-else class="cta-hero__arrow__down">
                <button
                    @click="$scroll('#open-positions-list')"
                    class="push_down_btn cursor-pointer"
                >
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 24 24"
                        style="enable-background:new 0 0 24 24;"
                        xml:space="preserve"
                    >
                        <path
                            class="st0"
                            d="M21.8,15l-9.1,8.7C12.5,23.9,12.2,24,12,24s-0.5-0.1-0.7-0.3L2.2,15c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0
                    l7.4,7.1V1c0-0.5,0.4-1,1-1c0.5,0,1,0.4,1,1v19.6l7.3-7c0.4-0.4,1-0.4,1.4,0C22.2,14,22.1,14.6,21.8,15z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.cta-hero__container {
    @apply relative;
    height: calc(100vh - 80px);
}
.cta-hero__box {
    padding-top: calc((100vh - 385px) / 2);
}
.cta-hero__title {
    @apply text-neutrals mb-5 font-black xsm:text-5xl;
}
.cta-hero__description {
    @apply text-neutrals-80 text-xl mb-[30px];
}
.cta-hero__btn {
    @apply px-5 leading-[48px] bg-navigation rounded-full opacity-[1] font-bold text-neutrals-5 mt-[30px] xsm:mt-10 hover:bg-[#33A7B9];
    box-shadow: 0px 1px 2px #00000029;
}
.cta-hero__time {
    @apply text-neutrals-80  text-xl;
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

.cta-hero__arrow__down {
    @apply flex items-center justify-center bottom-[60px] absolute right-1/2 xmd:bottom-[80px];
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
.push_down_btn, .btn-down-arrow {
    @apply w-[44px] h-[44px] flex items-center justify-center rounded-full hover:bg-neutrals-10;
}
.backArrow_box {
    @apply flex pt-5;
}
.down-arrow {
    @apply flex flex-col justify-center items-center absolute text-neutrals cursor-pointer bottom-[10px];
    left: 46%;
    img {
        @apply mr-0;
    }

    span {
        @apply text-[14px] font-normal;
    }
}
</style>
