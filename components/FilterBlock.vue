<script setup name="BreadcrumbBlock">
import { watch } from 'vue';
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
    var attributes = reactive(props.data.attributes.map((c)=> {
        let variant = Object.assign(c, {value: false, summaryName: ""})
        return variant;
    }));
    const selectedIds = reactive([]);
    const selectedName = ref("");
    const changeValue = (variant, item) => {
        if(variant.value) {
            selectedIds.push(variant.id);
        }
        else {
            selectedIds.splice(selectedIds.indexOf(variant.id),1);
        }
        item.summaryName = item.variants.filter(c => c.value).reduce((cur,next) => {
            cur.push(next.name);
            return cur
        }, []).join(", ");
        emits('update-change', selectedIds);
    };
    watch(() => props.data.attributes, (val) => {
        Object.assign(attributes, val.map((c)=> {
            return Object.assign(c, {value: false, summaryName: ""})
        }))
    });
    const clickOutSide = (item) => {
        item.value = false;
    }
</script>
<template>
    <section v-if="data.showFilters"  class="filters-block hidden xsm:flex">
        <section 
            class="filters-block__type" 
            v-for="item in attributes" 
            :class="{'active': item.value}" 
            :key="item.type"
            v-click-outside="()=> clickOutSide(item)"
        >
            <div class="filters-block__dropdown"  @click.prevent="item.value = !item.value">
                <p class="type"><span>{{item.type}}</span>: {{item.summaryName}}</p>
                 <img height="16" width="16" src="https://drberg-dam.imgix.net/icons/icon-line-navigation-arrow_chevron_down.svg" alt="arrow-down" class="h-[16px] w-[16px]">
            </div>
            <div class="filters-block__dropdown-list" :class="{'active': item.value}">
                <section v-for="variant in item.variants" class="filters-block__dropdown-item" :key="`${variant.id}_${variant.name}`">
                    <input @change="changeValue(variant, item)" v-model="variant.value" type="checkbox" :id="variant.name"> 
                    <label :for="variant.name">{{variant.name}}</label>
                </section>
           </div>
        </section>
    </section>
</template>

<style lang="scss" scoped>
.filters-block {
    @apply gap-5 mb-5;
    &__dropdown {
        @apply cursor-pointer px-5 py-2 flex  h-[40px] items-center justify-between bg-neutrals-10 rounded-full font-bold hover:bg-neutrals-20;
        &-list {
            @apply hidden;
            &.active {
                @apply block;
            }
        }
    }
    &__type {
        @apply relative w-[210px];
    }
    &__type.active {
        @apply shadow shadow-neutrals-20 rounded-tl-[20px] rounded-tr-[20px];
        .filters-block__dropdown {
             @apply bg-neutrals-5 hover:bg-neutrals-5;
        }
        .filters-block__dropdown-list {
            @apply absolute shadow shadow-neutrals-20 rounded-bl-[20px] rounded-br-[20px] bg-neutrals-5 left-0 right-0;
        }
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
           @apply absolute top-3 left-5 h-[20px] w-[20px] rounded-[2px] border-[1px] border-navigation cursor-pointer;
        }
    }
   
}
p.type {
    @apply inline-block  max-w-[180px] whitespace-nowrap overflow-hidden text-ellipsis;
    span {
        @apply capitalize;
    }
}
</style>
