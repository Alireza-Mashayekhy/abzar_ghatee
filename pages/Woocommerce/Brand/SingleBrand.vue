<template>
    <Head>
        <title>خرید ابزار برند {{ name }} با بهترین قیمت | ابزار قطعه</title>
        <meta
            name="description"
            :content="
                'اطلاعات، قیمت و مشخصات محصولات برند ' +
                name +
                'را بررسی کنید و با خیال راحت خرید کنید. '
            "
        />

        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="product" />
        <meta
            property="og:title"
            :content="'خرید ابزار برند ' + name + 'با بهترین قیمت - ابزارقطعه'"
        />
        <meta
            property="og:description"
            :content="
                'اطلاعات، قیمت و مشخصات محصولات برند ' +
                name +
                ' را بررسی کنید و با خیال راحت خرید کنید.'
            "
        />
        <meta property="og:site_name" content="ابزار قطعه" />

        <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <div class="bg-white">
        <Header1></Header1>

        <main class="flex-grow bg-gray-100 pb-14 pt-36 dark:bg-black xs:pt-36">
            <div class="container relative">
                <!-- Mobile Options Section -->
                <div
                    class="mb-6 flex items-center justify-center gap-x-4 md:hidden"
                >
                    <!-- Filter -->
                    <button
                        aria-controls="shop-filter-drawer-navigation"
                        class="flex w-full items-center gap-x-4 rounded-lg bg-white px-4 py-3 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-white xs:text-base"
                        data-drawer-show="shop-filter-drawer-navigation"
                        data-drawer-placement="bottom"
                        data-drawer-target="shop-filter-drawer-navigation"
                        type="button"
                    >
                        <svg class="h-6 w-6">
                            <use xlink:href="#filter" />
                        </svg>
                        <div>فیلتر</div>
                    </button>
                    <!-- Sort -->
                    <button
                        aria-controls="shop-sort-drawer-navigation"
                        class="flex w-full items-center gap-x-4 rounded-lg bg-white px-4 py-3 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-white xs:text-base"
                        data-drawer-show="shop-sort-drawer-navigation"
                        data-drawer-placement="bottom"
                        data-drawer-target="shop-sort-drawer-navigation"
                        type="button"
                    >
                        <svg class="h-6 w-6">
                            <use xlink:href="#sort" />
                        </svg>
                        <div>مرتب سازی</div>
                    </button>
                </div>

                <div
                    class="grid grid-cols-12 grid-rows-[60px_min(500px,_1fr)] gap-4"
                >
                    <!-- Desktop Filter Section -->
                    <div
                        class="col-span-4 row-span-2 hidden md:block lg:col-span-3"
                    >
                        <div
                            class="sticky top-32 mb-4 overflow-hidden rounded-lg bg-white shadow-base dark:bg-zinc-900"
                        >
                            <div
                                dir="ltr"
                                class="flex max-h-[calc(95vh_-_100px)] flex-col overflow-y-auto overflow-x-hidden px-4 py-3"
                            >
                                <div dir="rtl" @keyup.enter="setFilters">
                                    <!-- Title -->
                                    <div
                                        class="mb-6 flex space-x-1 items-center justify-between"
                                    >
                                        <h3
                                            class="text-zinc-700 dark:text-white xl:text-lg"
                                        >
                                            فیلتر ها
                                        </h3>
                                        <button
                                            @click="removeFilters()"
                                            class="btn-primary-nobg py-2 text-sm"
                                        >
                                            حذف همه
                                        </button>
                                    </div>
                                    <ul class="space-y-6">
                                        <!-- Search -->
                                        <li>
                                            <label class="sr-only"
                                                >Shop search</label
                                            >
                                            <input
                                                class="w-full rounded-lg border-none bg-gray-100 px-2 py-3 text-zinc-600 outline-none placeholder:text-sm placeholder:text-zinc-500 focus:ring-0 dark:bg-black dark:text-zinc-300 placeholder:dark:text-zinc-400"
                                                placeholder="جستجو در بین نتایج ..."
                                                v-model="filters.q"
                                                type="text"
                                            />
                                        </li>
                                        <!-- Price -->
                                        <li>
                                            <div>
                                                <p
                                                    class="mb-5 text-zinc-700 dark:text-white"
                                                >
                                                    محدوده قیمت
                                                </p>
                                                <div class="grid grid-cols-2">
                                                    <!-- Receiver name -->
                                                    <div class="mx-1">
                                                        <label
                                                            for="min_price"
                                                            class="relative block rounded-lg border border-secondary-light shadow-base dark:border-primary-light/5"
                                                        >
                                                            <input
                                                                type="number"
                                                                id="min_price"
                                                                class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-quaternary-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-primary-light"
                                                                placeholder="حداقل قیمت"
                                                                v-model="
                                                                    filters.min_price
                                                                "
                                                            />

                                                            <span
                                                                class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-primary-light px-2 py-0.5 text-sm text-senary-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-secondary-dark dark:text-senary-300"
                                                            >
                                                                حداقل قیمت
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div class="mx-1">
                                                        <label
                                                            for="max_price"
                                                            class="relative block rounded-lg border border-secondary-light shadow-base dark:border-primary-light/5"
                                                        >
                                                            <input
                                                                type="number"
                                                                id="max_price"
                                                                class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-quaternary-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-primary-light"
                                                                placeholder="حداکثر قیمت"
                                                                v-model="
                                                                    filters.max_price
                                                                "
                                                            />

                                                            <span
                                                                class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-primary-light px-2 py-0.5 text-sm text-senary-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-secondary-dark dark:text-senary-300"
                                                            >
                                                                حداکثر قیمت
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <!-- categories -->
                                        <li>
                                            <details
                                                class="[&amp;_summary::-webkit-details-marker]:hidden group"
                                            >
                                                <summary
                                                    class="flex cursor-pointer items-center justify-between rounded-lg py-3 text-zinc-700 dark:text-white"
                                                >
                                                    <span> دسته بندی ها </span>
                                                    <span
                                                        class="shrink-0 transition duration-200 group-open:-rotate-90"
                                                    >
                                                        <svg class="h-5 w-5">
                                                            <use
                                                                xlink:href="#chevron-left"
                                                            />
                                                        </svg>
                                                    </span>
                                                </summary>
                                                <div
                                                    class="mt-2 max-h-60 overflow-y-auto pl-1"
                                                >
                                                    <ul
                                                        class="space-y-2 rounded-lg"
                                                        id="categoryListFilterDesktop"
                                                    >
                                                        <li class="p-2">
                                                            <label
                                                                class="sr-only"
                                                                >Category
                                                                search</label
                                                            >
                                                            <input
                                                                id="categoryListFilterDesktopSearchInput"
                                                                class="w-full rounded-lg border border-none bg-gray-100 px-2 py-3 text-zinc-600 outline-none placeholder:text-sm placeholder:text-zinc-500 focus:ring-0 dark:bg-black dark:text-zinc-300 placeholder:dark:text-zinc-400"
                                                                placeholder="جستجوی دسته بندی ..."
                                                                type="text"
                                                            />
                                                        </li>
                                                        <li
                                                            v-for="(
                                                                category, idx
                                                            ) in categories"
                                                            :key="idx"
                                                        >
                                                            <div
                                                                class="flex w-full items-center gap-x-2 pr-4"
                                                            >
                                                                <input
                                                                    :id="
                                                                        'category-' +
                                                                        category.slug
                                                                    "
                                                                    type="checkbox"
                                                                    @change="
                                                                        updateFilters
                                                                    "
                                                                    :value="
                                                                        category.slug
                                                                    "
                                                                    v-model="
                                                                        category.checked
                                                                    "
                                                                    class="h-4 w-4 cursor-pointer rounded-xl border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-zinc-700"
                                                                />
                                                                <label
                                                                    :for="
                                                                        'category-' +
                                                                        category.slug
                                                                    "
                                                                    class="flex w-full cursor-pointer items-center justify-between py-2 pl-4 font-medium text-zinc-600 dark:text-zinc-300"
                                                                >
                                                                    <span>{{
                                                                        category.name
                                                                    }}</span>
                                                                    <span>{{
                                                                        category.slug
                                                                    }}</span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </details>
                                        </li>
                                        <!-- brands -->
                                        <li>
                                            <details
                                                class="[&amp;_summary::-webkit-details-marker]:hidden group"
                                            >
                                                <summary
                                                    class="flex cursor-pointer items-center justify-between rounded-lg py-3 text-zinc-700 dark:text-white"
                                                >
                                                    <span> برند ها </span>
                                                    <span
                                                        class="shrink-0 transition duration-200 group-open:-rotate-90"
                                                    >
                                                        <svg class="h-5 w-5">
                                                            <use
                                                                xlink:href="#chevron-left"
                                                            />
                                                        </svg>
                                                    </span>
                                                </summary>
                                                <div
                                                    class="mt-2 max-h-60 overflow-y-auto pl-1"
                                                >
                                                    <ul
                                                        class="space-y-2 rounded-lg"
                                                        id="brandListFilterDesktop"
                                                    >
                                                        <li class="p-2">
                                                            <label
                                                                class="sr-only"
                                                                >Brand
                                                                search</label
                                                            >
                                                            <input
                                                                id="brandListFilterDesktopSearchInput"
                                                                class="w-full rounded-lg border border-none bg-gray-100 px-2 py-3 text-zinc-600 outline-none placeholder:text-sm placeholder:text-zinc-500 focus:ring-0 dark:bg-black dark:text-zinc-300 placeholder:dark:text-zinc-400"
                                                                placeholder="جستجوی برند ..."
                                                                type="text"
                                                            />
                                                        </li>
                                                        <li
                                                            v-for="(
                                                                brand, idx
                                                            ) in brands"
                                                            :key="idx"
                                                        >
                                                            <div
                                                                class="flex w-full items-center gap-x-2 pr-4"
                                                            >
                                                                <input
                                                                    :id="
                                                                        'brand-' +
                                                                        brand.slug
                                                                    "
                                                                    type="checkbox"
                                                                    @change="
                                                                        updateFilters
                                                                    "
                                                                    :value="
                                                                        brand.slug
                                                                    "
                                                                    v-model="
                                                                        brand.checked
                                                                    "
                                                                    class="h-4 w-4 cursor-pointer rounded-xl border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-zinc-700"
                                                                />
                                                                <label
                                                                    :for="
                                                                        'brand-' +
                                                                        brand.slug
                                                                    "
                                                                    class="flex w-full cursor-pointer items-center justify-between py-2 pl-4 font-medium text-zinc-600 dark:text-zinc-300"
                                                                >
                                                                    <span>{{
                                                                        brand.value
                                                                    }}</span>
                                                                    <span>{{
                                                                        brand.slug
                                                                    }}</span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </details>
                                        </li>
                                        <!-- Available -->
                                        <li>
                                            <label
                                                class="flex cursor-pointer items-center justify-between py-3"
                                                for="onlyAvailableDesktop"
                                            >
                                                <div
                                                    class="text-zinc-700 dark:text-white"
                                                >
                                                    فقط کالا های موجود
                                                </div>
                                                <div
                                                    class="relative inline-flex cursor-pointer items-center"
                                                >
                                                    <input
                                                        class="peer sr-only"
                                                        id="onlyAvailableDesktop"
                                                        type="checkbox"
                                                        v-model="
                                                            filters.has_quantity
                                                        "
                                                    />

                                                    <div
                                                        class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-emerald-500 peer-checked:after:translate-x-full peer-focus:ring-emerald-500 dark:bg-zinc-800 after:dark:bg-zinc-900 peer-checked:dark:bg-emerald-400 peer-focus:dark:ring-emerald-400"
                                                    ></div>
                                                </div>
                                            </label>
                                        </li>
                                    </ul>
                                    <div class="mt-5">
                                        <button
                                            @click="setFilters()"
                                            class="btn-primary p-2 text-sm w-full"
                                        >
                                            اعمال فیلتر ها
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="col-span-12 space-y-4 md:col-span-8 lg:col-span-9"
                    >
                        <div
                            class="row-span-2 col-span-2 md:col-span-2 lg:col-span-3 rounded-lg bg-white p-2 text-zinc-600 shadow-base dark:bg-zinc-900 dark:text-zinc-300 lg:px-4"
                        >
                            <h1 class="text-xl m-2">
                                <span class="text-sm"> برند </span> {{ name }}
                            </h1>
                            {{ description }}
                        </div>
                        <!-- Desktop Sort Section -->
                        <div class="hidden md:block">
                            <div
                                class="flex h-14 items-center gap-x-2 rounded-lg bg-white px-2 text-zinc-600 shadow-base dark:bg-zinc-900 dark:text-zinc-300 lg:px-4"
                            >
                                <!-- Title -->
                                <div
                                    class="flex items-center gap-x-2 text-sm lg:text-base"
                                >
                                    <svg class="h-6 w-6">
                                        <use xlink:href="#sort" />
                                    </svg>
                                    <p>مرتب سازی بر اساس</p>
                                </div>
                                <!-- Sort Buttons -->

                                <button
                                    v-for="(sortOption, index) in sortOptions"
                                    :key="index"
                                    @click="
                                        filters.sort_by = sortOption.value;
                                        setFilters();
                                    "
                                    class="rounded-lg px-1 py-2 text-sm hover:bg-gray-100 hover:dark:bg-black lg:px-4"
                                    :class="{
                                        'sort-button-active':
                                            filters.sort_by ===
                                            sortOption.value,
                                    }"
                                >
                                    {{ sortOption.label }}
                                </button>
                            </div>
                        </div>

                        <!-- Products Grid -->
                        <div
                            class="grid grid-cols-2 gap-px gap-y-2 xs:gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        >
                            <!-- Product Card -->
                            <div
                                v-if="products.length === 0"
                                class="col-span-4"
                            >
                                <div class="flex justify-center">
                                    <div
                                        class="flex flex-col items-center justify-center gap-y-4 text-zinc-500 dark:text-zinc-400"
                                    >
                                        <svg class="h-20 w-20">
                                            <use xlink:href="#recent-off" />
                                        </svg>
                                        <p class="md:text-xl">
                                            جست جوی شما نتیجه ای در بر نداشت
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                v-for="product in products"
                                :key="product.id"
                                class="border-gradient group relative rounded-base p-px before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-base"
                            >
                                <div
                                    class="relative rounded-xl bg-white p-2 shadow-base dark:bg-zinc-900 md:p-5"
                                >
                                    <!-- image -->
                                    <div class="mb-2 md:mb-5" draggable="false">
                                        <NuxtLink
                                            :href="
                                                route('product', product.slug)
                                            "
                                        >
                                            <img
                                                alt=""
                                                class="mx-auto w-32 h-32 rounded-lg md:w-auto"
                                                :src="product.imageUrl"
                                            />
                                        </NuxtLink>
                                    </div>
                                    <!-- title -->
                                    <div class="mb-1">
                                        <NuxtLink
                                            class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"
                                            :href="
                                                route('product', product.slug)
                                            "
                                        >
                                            {{ product.name }}
                                        </NuxtLink>
                                    </div>
                                    <!-- Prices -->
                                    <div
                                        v-if="product.inventory <= 0"
                                        class="flex flex-col"
                                    >
                                        <!-- Old price -->
                                        <div class="h-5 text-left">
                                            <del
                                                class="text-xs text-zinc-500 decoration-red-600 dark:text-zinc-400 dark:decoration-red-500 xs:text-sm md:text-base"
                                            >
                                            </del>
                                        </div>
                                        <div
                                            class="flex items-center justify-between"
                                        >
                                            <!-- New price -->
                                            <div
                                                class="text-xs font-bold text-gray-500 dark:text-gray-400 xs:text-sm md:text-base"
                                            >
                                                ناموجود
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        v-else-if="product.price"
                                        class="flex flex-col"
                                    >
                                        <!-- Old price -->
                                        <div class="h-5 text-left">
                                            <del
                                                class="text-xs text-zinc-500 decoration-red-600 dark:text-zinc-400 dark:decoration-red-500 xs:text-sm md:text-base"
                                            >
                                                {{
                                                    product.normalPrice?.toLocaleString(
                                                        'fa'
                                                    )
                                                }}
                                            </del>
                                        </div>
                                        <div
                                            class="flex items-center justify-between"
                                        >
                                            <div>
                                                <p
                                                    v-if="product.normalPrice"
                                                    class="w-7 rounded-full bg-red-500 py-px text-center text-xs text-white dark:bg-red-500 xs:w-9 xs:text-sm"
                                                >
                                                    {{
                                                        Math.floor(
                                                            ((product.normalPrice -
                                                                product.price) /
                                                                product.normalPrice) *
                                                                100
                                                        )?.toLocaleString('fa')
                                                    }}%
                                                </p>
                                            </div>
                                            <!-- New price -->
                                            <div
                                                class="text-xs font-bold text-emerald-500 dark:text-emerald-400 xs:text-sm md:text-base"
                                            >
                                                {{
                                                    product.price?.toLocaleString(
                                                        'fa'
                                                    )
                                                }}
                                                <span
                                                    class="text-xs font-light md:text-sm"
                                                    >تومان</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else class="flex flex-col">
                                        <!-- Old price -->
                                        <div class="h-5 text-left">
                                            <del
                                                class="text-xs text-zinc-500 decoration-red-600 dark:text-zinc-400 dark:decoration-red-500 xs:text-sm md:text-base"
                                            >
                                            </del>
                                        </div>
                                        <div
                                            class="flex items-center justify-between"
                                        >
                                            <!-- New price -->
                                            <div
                                                class="text-xs font-bold text-emerald-500 dark:text-emerald-400 xs:text-sm md:text-base"
                                            >
                                                تماس بگیرید
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Pagination -->
                        <Pagination3
                            v-if="lastPage > 1"
                            :current-page="currentPage"
                            :total-pages="lastPage"
                            @page-change="pageChange"
                        ></Pagination3>
                    </div>
                </div>
            </div>
        </main>
        <!-- Mobile Filter Drawer -->
        <div
            aria-labelledby="shop-filter-drawer-navigation-label"
            class="fixed bottom-0 left-0 right-0 z-40 h-full w-full translate-y-full bg-white transition-transform duration-300 dark:bg-zinc-900"
            id="shop-filter-drawer-navigation"
            tabindex="-1"
        >
            <div
                class="flex items-center justify-between gap-x-4 border-b border-gray-100 p-4 pb-5 dark:border-white/5"
            >
                <h5 class="text-lg text-zinc-600 dark:text-zinc-300">
                    فیلتر محصولات
                </h5>
                <button
                    aria-controls="user-account-drawer-navigation"
                    class="inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-gray-900 dark:text-zinc-300 dark:hover:bg-black dark:hover:text-white"
                    data-drawer-hide="shop-filter-drawer-navigation"
                    type="button"
                >
                    <svg class="h-5 w-5">
                        <use xlink:href="#close" />
                    </svg>

                    <span class="sr-only">Close menu</span>
                </button>
            </div>

            <div class="h-full pb-[150px]">
                <ul class="h-full space-y-6 overflow-y-auto p-4">
                    <!-- Search -->
                    <li>
                        <label class="sr-only">Shop search</label>
                        <input
                            class="w-full rounded-lg border-none bg-gray-100 px-2 py-3 text-zinc-600 outline-none placeholder:text-sm placeholder:text-zinc-500 focus:ring-0 dark:bg-black dark:text-zinc-300 placeholder:dark:text-zinc-400"
                            placeholder="جستجو در بین نتایج ..."
                            v-model="filters.q"
                            type="text"
                        />
                    </li>
                    <!-- Price -->
                    <li>
                        <div>
                            <p class="mb-4 text-zinc-700 dark:text-white">
                                محدوده قیمت
                            </p>
                            <div class="grid grid-cols-2">
                                <!-- Receiver name -->
                                <div class="mx-1">
                                    <label
                                        for="min_price"
                                        class="relative block rounded-lg border border-secondary-light shadow-base dark:border-primary-light/5"
                                    >
                                        <input
                                            type="number"
                                            id="min_price"
                                            class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-quaternary-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-primary-light"
                                            placeholder="حداقل قیمت"
                                            v-model="filters.min_price"
                                        />

                                        <span
                                            class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-primary-light px-2 py-0.5 text-sm text-senary-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-secondary-dark dark:text-senary-300"
                                        >
                                            حداقل قیمت
                                        </span>
                                    </label>
                                </div>
                                <div class="mx-1">
                                    <label
                                        for="max_price"
                                        class="relative block rounded-lg border border-secondary-light shadow-base dark:border-primary-light/5"
                                    >
                                        <input
                                            type="number"
                                            id="max_price"
                                            class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-quaternary-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-primary-light"
                                            placeholder="حداکثر قیمت"
                                            v-model="filters.max_price"
                                        />

                                        <span
                                            class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-primary-light px-2 py-0.5 text-sm text-senary-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-secondary-dark dark:text-senary-300"
                                        >
                                            حداکثر قیمت
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- Categories -->
                    <li>
                        <details
                            class="[&amp;_summary::-webkit-details-marker]:hidden group"
                        >
                            <summary
                                class="flex cursor-pointer items-center justify-between rounded-lg py-3 text-zinc-700 dark:text-white"
                            >
                                <span> دسته بندی ها </span>
                                <span
                                    class="shrink-0 transition duration-200 group-open:-rotate-90"
                                >
                                    <svg class="h-5 w-5">
                                        <use xlink:href="#chevron-left" />
                                    </svg>
                                </span>
                            </summary>
                            <div class="mt-2 max-h-60 overflow-y-auto pl-1">
                                <ul
                                    class="space-y-2 rounded-lg"
                                    id="categoryListFilterMobile"
                                >
                                    <li class="p-2">
                                        <label class="sr-only"
                                            >Category search</label
                                        >
                                        <input
                                            id="categoryListFilterMobileSearchInput"
                                            class="w-full rounded-lg border border-none bg-gray-100 px-2 py-3 text-zinc-600 outline-none placeholder:text-sm placeholder:text-zinc-500 focus:ring-0 dark:bg-black dark:text-zinc-300 placeholder:dark:text-zinc-400"
                                            placeholder="جستجوی دسته بندی ..."
                                            type="text"
                                        />
                                    </li>
                                    <li
                                        v-for="(category, idx) in categories"
                                        :key="idx"
                                    >
                                        <div
                                            class="flex w-full items-center gap-x-2 pr-4"
                                        >
                                            <input
                                                :id="
                                                    'mobile-category-' +
                                                    category.slug
                                                "
                                                @change="updateFilters"
                                                :value="category.slug"
                                                v-model="category.checked"
                                                type="checkbox"
                                                class="h-4 w-4 cursor-pointer rounded-xl border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-zinc-700"
                                            />
                                            <label
                                                :for="
                                                    'mobile-category-' +
                                                    category.slug
                                                "
                                                class="flex w-full cursor-pointer items-center justify-between py-2 pl-4 font-medium text-zinc-600 dark:text-zinc-300"
                                            >
                                                <span>{{ category.name }}</span>
                                                <span>{{ category.slug }}</span>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </details>
                    </li>

                    <!-- brands -->
                    <li>
                        <details
                            class="[&amp;_summary::-webkit-details-marker]:hidden group"
                        >
                            <summary
                                class="flex cursor-pointer items-center justify-between rounded-lg py-3 text-zinc-700 dark:text-white"
                            >
                                <span> برند ها </span>
                                <span
                                    class="shrink-0 transition duration-200 group-open:-rotate-90"
                                >
                                    <svg class="h-5 w-5">
                                        <use xlink:href="#chevron-left" />
                                    </svg>
                                </span>
                            </summary>
                            <div class="mt-2 max-h-60 overflow-y-auto pl-1">
                                <ul
                                    class="space-y-2 rounded-lg"
                                    id="brandListFilterMobile"
                                >
                                    <li class="p-2">
                                        <label class="sr-only"
                                            >Brand search</label
                                        >
                                        <input
                                            id="brandListFilterMobileSearchInput"
                                            class="w-full rounded-lg border border-none bg-gray-100 px-2 py-3 text-zinc-600 outline-none placeholder:text-sm placeholder:text-zinc-500 focus:ring-0 dark:bg-black dark:text-zinc-300 placeholder:dark:text-zinc-400"
                                            placeholder="جستجوی برند ..."
                                            type="text"
                                        />
                                    </li>
                                    <li
                                        v-for="(brand, idx) in brands"
                                        :key="idx"
                                    >
                                        <div
                                            class="flex w-full items-center gap-x-2 pr-4"
                                        >
                                            <input
                                                :id="
                                                    'mobile-brand-' + brand.slug
                                                "
                                                @change="updateFilters"
                                                :value="brand.slug"
                                                v-model="brand.checked"
                                                type="checkbox"
                                                class="h-4 w-4 cursor-pointer rounded-xl border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-zinc-700"
                                            />
                                            <label
                                                :for="
                                                    'mobile-brand-' + brand.slug
                                                "
                                                class="flex w-full cursor-pointer items-center justify-between py-2 pl-4 font-medium text-zinc-600 dark:text-zinc-300"
                                            >
                                                <span>{{ brand.value }}</span>
                                                <span>{{ brand.slug }}</span>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </details>
                    </li>
                    <!-- Available -->
                    <li>
                        <label
                            class="flex cursor-pointer items-center justify-between py-3"
                            for="onlyAvailableMobile"
                        >
                            <div class="text-zinc-700 dark:text-white">
                                فقط کالا های موجود
                            </div>
                            <div
                                class="relative inline-flex cursor-pointer items-center"
                            >
                                <input
                                    class="peer sr-only"
                                    id="onlyAvailableMobile"
                                    type="checkbox"
                                    v-model="filters.has_quantity"
                                />

                                <div
                                    class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-emerald-500 peer-checked:after:translate-x-full peer-focus:ring-emerald-500 dark:bg-zinc-800 after:dark:bg-zinc-900 peer-checked:dark:bg-emerald-400 peer-focus:dark:ring-emerald-400"
                                ></div>
                            </div>
                        </label>
                    </li>
                </ul>
            </div>

            <!-- Footer -->
            <div
                class="sticky bottom-0 left-0 right-0 flex items-center justify-between border-t border-gray-100 bg-white p-4 px-6 py-4 dark:border-white/5 dark:bg-zinc-900"
            >
                <button
                    @click="setFilters()"
                    class="btn-primary w-full py-3 text-sm"
                    type="button"
                >
                    اعمال فیلتر ها
                </button>
            </div>
        </div>
        <!-- Mobile Sort Drawer -->
        <div
            aria-labelledby="shop-sort-drawer-navigation-label"
            class="fixed bottom-0 left-0 right-0 z-40 h-auto w-full translate-y-full rounded-t-3xl bg-white transition-transform duration-300 dark:bg-zinc-900"
            id="shop-sort-drawer-navigation"
            tabindex="-1"
        >
            <div
                class="flex items-center justify-between gap-x-4 border-b border-gray-100 p-4 pb-5 dark:border-white/5"
            >
                <h5 class="text-lg text-zinc-600 dark:text-zinc-300">
                    مرتب سازی بر اساس
                </h5>
                <button
                    aria-controls="user-account-drawer-navigation"
                    class="inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-gray-900 dark:text-zinc-300 dark:hover:bg-black dark:hover:text-white"
                    data-drawer-hide="shop-sort-drawer-navigation"
                    type="button"
                >
                    <svg class="h-5 w-5">
                        <use xlink:href="#close" />
                    </svg>

                    <span class="sr-only">Close menu</span>
                </button>
            </div>

            <div
                class="main-scroll h-full space-y-2 divide-y divide-gray-100 overflow-y-auto p-4 dark:divide-white/5"
            >
                <fieldset class="flex flex-col space-y-2">
                    <legend class="sr-only">Sort</legend>

                    <div
                        v-for="(sortOption, index) in sortOptions"
                        :key="index"
                    >
                        <input
                            class="peer hidden"
                            :id="'sort-' + sortOption.value"
                            name="sort"
                            type="radio"
                            :value="sortOption.value"
                            v-model="filters.sort_by"
                        />
                        <label
                            class="relative block w-full cursor-pointer rounded-lg border border-gray-200 p-4 shadow-base peer-checked:border-emerald-500 dark:border-white/5 peer-checked:dark:border-emerald-400"
                            :for="'sort-' + sortOption.value"
                            @click="setFilters()"
                        >
                            <p
                                class="text-center text-zinc-600 dark:text-zinc-300"
                            >
                                {{ sortOption.label }}
                            </p>
                        </label>
                    </div>
                </fieldset>
            </div>
        </div>

        <Footer1></Footer1>
    </div>
</template>

<script>
import Header1 from '../../Layouts/Headers/Header.vue';
import Footer1 from '../../Layouts/Footeres/Footer.vue';
import Pagination3 from '../../../../Components/Pagination3.vue';
import { onMounted, ref } from 'vue';

export default {
    methods: {},
    components: {
        Link,
        Head,
        Footer1,
        Header1,

        Pagination3,
    },
    props: {
        name: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        productsJson: {
            type: String,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
        lastPage: {
            type: Number,
            required: true,
        },
        perPage: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },

        categoriesJson: {
            type: String,
            required: true,
        },
        brandsJson: {
            type: String,
            required: true,
        },
    },

    setup({ productsJson, brandsJson, categoriesJson, name }) {
        const page = usePage();
        const pageUrl = new URL(page.url, 'https://abzarghete.com');
        const pageSearchParams = new URLSearchParams(pageUrl.search);

        const products = JSON.parse(productsJson);
        let categories = JSON.parse(categoriesJson);
        let brands = JSON.parse(brandsJson);

        // set brand parameters to checked in brand list
        const brandsParams = [];
        for (const param of pageSearchParams) {
            if (param[0].startsWith('brands')) {
                brandsParams.push(param[1]);
            }
        }

        brands = brands.map((brand) => ({
            ...brand,
            checked: brand.value === name,
        }));

        // set category parameters to checked in brand list
        const categoriesParams = [];
        for (const param of pageSearchParams) {
            if (param[0].startsWith('categories')) {
                categoriesParams.push(param[1]);
            }
        }

        categories = categories.map((category) => ({
            ...category,
            checked:
                categoriesParams.includes(category.slug) ||
                categoriesParams.includes(),
        }));

        function pageChange(n) {
            let currentUrl = page.url;

            let url = new URL(currentUrl, 'https://abzarghete.com');
            let searchParams = new URLSearchParams(url.search);

            searchParams.set('page', n);
            let updatedUrl = `${url.origin}${
                url.pathname
            }?${searchParams.toString()}`;
            router.visit(updatedUrl);
        }

        const addSearchFunctionality = (searchInput, itemList) => {
            searchInput.addEventListener('input', function () {
                const searchTerm = searchInput.value.trim().toLowerCase();
                const items = itemList.querySelectorAll('li:not(:first-child)'); // Exclude the first <li> with the search input.

                items.forEach(function (item) {
                    const brandName = item
                        .querySelector('span:first-child')
                        .textContent.toLowerCase();
                    const brandCode = item
                        .querySelector('span:last-child')
                        .textContent.toLowerCase();

                    if (
                        brandName.includes(searchTerm) ||
                        brandCode.includes(searchTerm)
                    ) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        };
        onMounted(() => {
            const brandListSearchInputDesktop = document.getElementById(
                'brandListFilterDesktopSearchInput'
            );
            const brandListDesktop = document.getElementById(
                'brandListFilterDesktop'
            );

            const brandListSearchInputMobile = document.getElementById(
                'brandListFilterMobileSearchInput'
            );
            const brandListMobile = document.getElementById(
                'brandListFilterMobile'
            );

            // categories search
            const categoryListSearchInputDesktop = document.getElementById(
                'categoryListFilterDesktopSearchInput'
            );
            const categoryListDesktop = document.getElementById(
                'categoryListFilterDesktop'
            );

            const categoryListSearchInputMobile = document.getElementById(
                'categoryListFilterMobileSearchInput'
            );
            const categoryListMobile = document.getElementById(
                'categoryListFilterMobile'
            );

            addSearchFunctionality(
                brandListSearchInputDesktop,
                brandListDesktop
            );
            addSearchFunctionality(brandListSearchInputMobile, brandListMobile);

            addSearchFunctionality(
                categoryListSearchInputDesktop,
                categoryListDesktop
            );
            addSearchFunctionality(
                categoryListSearchInputMobile,
                categoryListMobile
            );

            updateFilters();
        });

        const sortOptions = [
            { label: 'تازه ترین', value: 'created_at_desc' },
            { label: 'قدیمی ترین', value: 'created_at_asc' },
            { label: 'گران ترین', value: 'price_desc' },
            { label: 'ارزان ترین', value: 'price_asc' },
        ];

        const filters = ref({
            min_price: pageSearchParams.has('min_price')
                ? Number(pageSearchParams.get('min_price'))
                : null,
            max_price: pageSearchParams.has('max_price')
                ? Number(pageSearchParams.get('max_price'))
                : null,
            categories: [],
            brands: [],
            sort_by: pageSearchParams.has('sort_by')
                ? pageSearchParams.get('sort_by')
                : null,
            q: pageSearchParams.has('q') ? pageSearchParams.get('q') : null,
            has_quantity: pageSearchParams.has('has_quantity')
                ? pageSearchParams.get('has_quantity')
                : null,
        });
        function updateFilters() {
            filters.value.brands = brands
                .filter((brand) => brand.checked)
                .map((brand) => brand.slug);
            filters.value.categories = categories
                .filter((brand) => brand.checked)
                .map((brand) => brand.slug);
        }

        function setFilters() {
            const searchParams = new URLSearchParams();

            for (const key in filters.value) {
                const value = filters.value[key];

                if (Array.isArray(value)) {
                    if (value.length > 0) {
                        value.forEach((item) => {
                            if (item !== null && item !== '') {
                                searchParams.append(key + '[]', item);
                            }
                        });
                    }
                } else if (value !== null && value !== '') {
                    searchParams.set(key, value);
                }
            }

            router.get(route('search') + '?' + searchParams.toString());
        }
        function removeFilters() {
            filters.value.min_price = null;
            filters.value.max_price = null;
            filters.value.categories = [];
            filters.value.brands = [];
            filters.value.sort_by = null;
            filters.value.q = null;
            filters.value.has_quantity = false;
            setFilters();
        }
        return {
            filters,
            products,
            brands,
            categories,
            sortOptions,
            pageChange,
            updateFilters,
            setFilters,
            removeFilters,
        };
    },
};
</script>
