<template>
    <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center"
    >
        <nav class="w-full sm:w-auto ltr:sm:mr-auto rtl:sm:ml-auto">
            <ul class="pagination">
                <li class="page-item" >
                    <button class="page-link rtl:rotate-180" @click="$emit('pageChange',1)" :disabled="currentPage===1" >
                        <ChevronsLeftIcon class="w-4 h-4" />
                    </button>
                </li>
                <li class="page-item">
                    <button class="page-link rtl:rotate-180" @click="$emit('pageChange',currentPage-1)"  :disabled="currentPage===1" >
                        <ChevronLeftIcon class="w-4 h-4" />
                    </button>
                </li>
                <li class="page-item">
                    <button class="page-link " :disabled="currentPage<=3" >...</button>
                </li>

                <li v-if="currentPage>=3" class="page-item ">
                    <button class="page-link" @click="$emit('pageChange',currentPage-2)" >{{ currentPage - 2 }}</button>
                </li>
                <li v-if="currentPage>=2"  class="page-item ">
                    <button class="page-link" @click="$emit('pageChange',currentPage-1)" >{{ currentPage - 1 }}</button>
                </li>
                <li  class="page-item active">
                    <button class="page-link" disabled >{{ currentPage }}</button>
                </li>
                <li  v-if="currentPage+1 <= totalPages" class="page-item ">
                    <button class="page-link" @click="$emit('pageChange',currentPage+1)" >{{ currentPage + 1 }}</button>
                </li>
                <li v-if="currentPage+2 <= totalPages " class="page-item ">
                    <button class="page-link" @click="$emit('pageChange',currentPage+2)">{{ currentPage + 2 }}</button>
                </li>

                <li class="page-item">
                    <button class="page-link" :disabled="currentPage>totalPages-1" >...</button>
                </li>
                <li class="page-item">
                    <button class="page-link rtl:rotate-180" @click="$emit('pageChange',currentPage+1)"  :disabled="currentPage===totalPages">
                        <ChevronRightIcon class="w-4 h-4" />
                    </button>
                </li>
                <li class="page-item">
                    <button class="page-link rtl:rotate-180" @click="$emit('pageChange',totalPages)" :disabled="currentPage===totalPages">
                        <ChevronsRightIcon class="w-4 h-4" />
                    </button>
                </li>
            </ul>
        </nav>
        <select @change="$emit('perPageChange',perPageTemp)" v-model="perPageTemp" class="w-20 form-select box mt-3 sm:mt-0">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
        </select>
    </div>
</template>

<script >

import { ref} from "vue";

export default{
    props : {
        totalPages : {
            type : Number,
            required : true
        },
        currentPage : {
            type:  Number,
            required : true
        },
        perPage:{
            type: Number,
            required : false,
            default : 10
        }

    },
    setup(props){
        const perPageTemp = ref(props.perPage);
        return {perPageTemp};
    }
}

// const emit = defineEmits(['pageChange'])

</script>

<style scoped>

</style>
