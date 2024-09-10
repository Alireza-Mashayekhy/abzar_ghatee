<template>
    <div
        class="flex items-center justify-center gap-x-4 md:justify-end"
    >
        <!-- Previous page-->
        <button
            class="pagination-button flex items-center justify-center"
            @click="$emit('pageChange',currentPage - 1)"
            :disabled="currentPage===1"
        >
            <svg class="h-6 w-6">
                <use xlink:href="#chevron-right"></use>
            </svg>
        </button>

        <!-- User -->
        <div class="flex items-center gap-x-2">
            <button v-if="currentPage>2" @click="$emit('pageChange',1)" class="pagination-button">1 </button>


            <span v-if="currentPage>3" class="text-sm text-zinc-500 dark:text-zinc-400">...</span>

            <button v-if="currentPage>1" @click="$emit('pageChange',currentPage - 1)" class="pagination-button">{{ currentPage - 1 }} </button>

            <button disabled @click="$emit('pageChange',1)" class="pagination-button pagination-button-active"> {{currentPage}} </button>

            <button v-if="currentPage < totalPages-1" @click="$emit('pageChange',currentPage +1)" class="pagination-button"> {{ currentPage + 1 }} </button>

            <span v-if="currentPage<totalPages-2" class="text-sm text-zinc-500 dark:text-zinc-400">...</span>



            <button v-if="currentPage<totalPages" @click="$emit('pageChange',totalPages)" class="pagination-button"> {{ totalPages }}  </button>
        </div>

        <!-- Next page-->
        <button
            class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-zinc-700 transition-all duration-200 hover:bg-emerald-500 hover:text-white dark:bg-zinc-900 dark:text-white hover:dark:bg-emerald-600"
            @click="$emit('pageChange',currentPage + 1)"
            :disabled="currentPage===totalPages"
        >
            <svg class="h-6 w-6">
                <use xlink:href="#chevron-left"></use>
            </svg>
        </button>
    </div>

</template>

<script >

export default{
    props : {
        totalPages : {
            type : Number,
            required : true
        },
        currentPage : {
            type:  Number,
            required : true
        }

    }
}
</script>

<style scoped>

</style>
