<script setup name="Popupfilter">
import { watch } from 'vue';
const isShowpopup = ref(false);
const emits = defineEmits(['update-change'])
const props = defineProps({
    data: {
        type: Object,
        default: () => {
            return {
                showFilters: false,
                attributes: [
                    {
                        type: "",
                        variants: []
                    },
                ]
            }
        }
    }

})
var attributes = reactive(props.data.attributes.map((c) => {
    let variant = Object.assign(c, { value: false, summaryName: "" })
    return variant;
}));
var selectedIds = [];
var demo = [];
    const changeValue = (variant, item) => {
        if (variant.value) {
            selectedIds.push(variant.id);
        }
        else {
            selectedIds.splice(selectedIds.indexOf(variant.id), 1);
        }
        item.summaryName = item.variants.filter(c => c.value).reduce((cur, next) => {
            cur.push(next.name);
            return cur;
        }, []).join(", ");

    };

    function filterData(){
        emits('update-change', selectedIds);
        isShowpopup.value = !isShowpopup.value;
        demo = [...selectedIds];
    }

    function clearChecbox(){
        attributes.map((e)=>{
            e.variants.forEach((i)=>{
                return i.value = false;
            })
        })
        demo = [];
        selectedIds = [];
        emits('update-change', demo )
        isShowpopup.value = !isShowpopup.value;
    }

    function showPopup() {
    attributes.map((e)=>{
        e.variants.map((i)=>{
            demo.forEach((element)=>{
                if(i.id == element){
                     i.value = true;
                }
            })
        })
    })
    isShowpopup.value = !isShowpopup.value;
}
    function closePopup() {
    selectedIds = [...demo];
    attributes.map((e)=>{
        e.variants.map((i)=>{
            demo.forEach((element)=>{
                if(i.id == element){
                     i.value = true;
                }
                else{
                    i.value = false;
                }
            })
        })
    })
    isShowpopup.value = !isShowpopup.value;
}
    watch(() => props.data.attributes, (val) => {
        Object.assign(attributes, val.map((c) => {
            return Object.assign(c, { value: false, summaryName: "" })
        }))
    });




</script>

<template>
    <div class="block xsm:hidden">
        <button class="filters flex" id="filters" @click="showPopup">
            <span class="text-[16px] font-bold text-neutral pr-[5px]">
                Filters
            </span><img src="https://drberg-dam.imgix.net/icons/icon-line-filter.svg " alt="Filters"
                class="w-[24px] h-[24px]" />
        </button>
        <transition name="slide-fade">
            <div v-if="isShowpopup" class="popup-filter">
                <div class="nav-bar filter-component">
                    <div class="menu">
                        <div class="flex items-center justify-between h-[80px] pl-5">
                            <a href="#" class="text-[24px] font-bold uppercase text-neutral"
                                javascript="void(0);">Filters</a>
                            <p class="navigation pr-5 cursor-pointer">
                                <img src="https://drberg-dam.imgix.net/icons/icon-line-navigation-close.svg" loading="lazy" alt="Close" @click="closePopup"/>
                            </p>
                        </div>
                           <div class="filters-block-container">
                        <section class="filters-block__type" v-for="item in attributes" :class="{ 'active': item.value }"
                            :key="item.type">

                                <div class="filters-block__dropdown" @click.prevent="item.value = !item.value">
                                    <span class="type">{{ item.type }}</span>
                                </div>

                                <div class="filters-block__dropdown-list" :class="{ 'active': item.value }">
                                    <section v-for="variant in item.variants" class="filters-block__dropdown-item"
                                        :key="`${variant.id}_${variant.name}`">
                                        <input @change="changeValue(variant, item)" v-model="variant.value" type="checkbox"
                                            :id="variant.name">
                                        <label :for="variant.name">{{ variant.name }} {{variant.value}}</label>
                                    </section>
                                </div>


                        </section>
                           </div>
                    </div>
                </div>
                <div>
                        <button class="btn-filter apply-filter" @click="filterData">Apply</button>
                        <button class="btn-filter clear-filter" @click="clearChecbox">Clear all filters</button>
                 </div>
            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
.popup-filter {
    @apply fixed w-[100vw] h-[100vh] top-0 left-0 bg-primary-5 z-20 border-neutrals-40 border-8 ;
}
.navigation{
    img{
        @apply w-[24px];
    }

}
.filters{
    @apply px-4 py-2 ml-5 bg-neutrals-10 rounded-full;
}
.filters-block-container{
    height: calc(100vh - 250px);
	overflow-y: auto;
}
.filters-block {
    @apply gap-5 mb-5;
    &__dropdown {
        @apply cursor-pointer px-5 py-2 flex  h-[40px] items-center justify-between bg-neutrals-10 rounded-full font-bold hover:bg-neutrals-20;
    }
    &__dropdown-item {
        @apply px-5 py-[10px] relative;
        input {
            @apply absolute opacity-0 cursor-pointer h-0 w-0;
        }
        input:checked ~ label::after {
            content: "";
            @apply absolute left-7 top-4 w-[5px] h-[10px] border-neutrals-5 border-r-[2px] border-b-[2px] rotate-45;
        }
        label {
            @apply cursor-pointer ml-7;
        }
        input:checked ~ label::before {
            @apply bg-navigation;
        }
        label::before {
           content: "";
           @apply absolute top-3 left-5 h-5 w-[20px] rounded-[2px] border-[1px] border-navigation cursor-pointer;
        }
    }

}
.btn-filter {
		@apply h-[48px] rounded-[24px] border-[2px] px-5 font-bold;
		&.apply-filter {
		@apply text-neutrals-5 bg-navigation mr-5;
		}
		&.clear-filter {
		@apply text-navigation bg-neutrals-5 border-navigation;
		}
}
.slide-fade-enter-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter,.slide-fade-leave-to
{
    transform: translateX(10px);
    opacity: 0;
}

.st0{fill:#2A363E;}
</style>

