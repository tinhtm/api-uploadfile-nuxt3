<script setup name="BreadcrumbBlock">
    const props = defineProps({
        data: {
            type: Object,
            default: () => {
                return {
                    parentLinks: [
                        {
                            text: "Home",
                            url: "",
                            target: "_self"
                        }
                    ],
                    currentPageText: "All positions",
                }
            }
        },
        detailJob: {
            type: Boolean,
            default: () => false
        }
    })
</script>
<template>
    <div class="breadcrumb-block">
        <ul>
            <li v-for="item in data.parentLinks" :key="item.url">
                <NuxtLink :to="item.url" :target="item.target">{{item.text}} /</NuxtLink>
            </li>
            <li>
                <p>{{data.currentPageText}}</p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.breadcrumb-block {
    @apply mt-5 mb-[30px] xsm:mb-10;
    ul {
        @apply flex flex-row justify-start items-center;
        li {
            @apply list-none mr-1;
            a {
                @apply text-[12px] text-navigation font-bold hover:underline hover:text-[#33A7B9];
            }
            p {
                @apply text-[12px] text-neutrals-80 font-normal;
            }
        }
    }
}
</style>
