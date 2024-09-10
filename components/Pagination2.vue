<template>
    <nav aria-label="Pagination" class="max-w-7xl mx-auto px-4 mt-6 flex justify-between text-sm font-medium text-gray-700 sm:px-6 lg:px-8">
        <div class="min-w-0 flex-1">
            <button @click="$emit('pageChange',currentPage - 1)"
                    :disabled="currentPage===1"
                    class="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
                قبلی
            </button>
        </div>
        <div class="hidden space-x-2 sm:flex">
            <!-- Current: "border-indigo-600 ring-1 ring-indigo-600", Default: "border-gray-300" -->
            <button v-if="currentPage>2" @click="$emit('pageChange',1)"
                    class="border-gray-300inline-flex items-center px-4 h-10 border  rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25">
                1 </button>
            <span v-if="currentPage>3" class="inline-flex items-center text-gray-500 px-1.5 h-10"> ... </span>


            <button v-if="currentPage>1"
                    @click="$emit('pageChange',currentPage - 1)"
                    class="border-gray-300 inline-flex items-center px-4 h-10 border  rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25">
                {{ currentPage - 1 }} </button>
            <button
                    disabled
                    class="border-indigo-600 ring-1 ring-indigo-600 inline-flex items-center px-4 h-10 border  rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25">
                {{ currentPage }} </button>
            <button v-if="currentPage < totalPages-1"
                    @click="$emit('pageChange',currentPage +1)"
                    class="border-gray-300 inline-flex items-center px-4 h-10 border  rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25">
                {{ currentPage + 1 }} </button>


            <span v-if="currentPage<totalPages-2" class="inline-flex items-center text-gray-500 px-1.5 h-10"> ... </span>

            <button v-if="currentPage<totalPages" @click="$emit('pageChange',totalPages)"
                    class="border-gray-300 inline-flex items-center px-4 h-10 border  rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25">
                {{ totalPages }} </button>

            </div>
        <div class="min-w-0 flex-1 flex justify-end">
            <button @click="$emit('pageChange',currentPage + 1)"
                    :disabled="currentPage===totalPages"
                    class="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            > بعدی </button>
        </div>
    </nav>

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
