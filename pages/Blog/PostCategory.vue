<template>
    <Head>
        <title>پست های دسته بندی {{ name }} - وبلاگ ابزار قطعه</title>
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
                            <h1 class="text-xl m-2">{{ name }}</h1>
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

                        <!-- Posts Grid -->
                        <div
                            class="grid grid-cols-2 gap-px gap-y-2 xs:gap-4 md:grid-cols-2 lg:grid-cols-3"
                        >
                            <!-- Post Card -->
                            <div v-if="posts.length === 0" class="col-span-4">
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
                            <!-- Blog Card -->
                            <div
                                v-for="post in posts"
                                :key="post.id"
                                class="border-gradient group relative rounded-base p-px before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-base"
                            >
                                <div>
                                    <NuxtLink
                                        :href="
                                            route('blog.post-detail', post.slug)
                                        "
                                    >
                                        <div
                                            class="relative rounded-xl bg-white p-2 shadow-base dark:bg-zinc-900"
                                        >
                                            <!-- image -->
                                            <div
                                                class="mb-2 md:mb-5"
                                                draggable="false"
                                            >
                                                <img
                                                    :alt="post.title"
                                                    class="mx-auto w-full rounded-lg rounded-bl-3xl"
                                                    :src="post.imageUrl"
                                                />
                                            </div>
                                            <!-- title -->
                                            <div class="mb-2">
                                                <p
                                                    class="line-clamp-2 h-12 text-sm text-zinc-700 dark:text-white md:text-base"
                                                >
                                                    {{ post.title }}
                                                </p>
                                            </div>
                                            <div class="flex justify-end">
                                                <p
                                                    class="text-xs text-emerald-500 dark:text-emerald-400 xs:text-sm"
                                                >
                                                    {{
                                                        dayjs(post.created_at)
                                                            .locale('fa')
                                                            .format(
                                                                'DD / MMMM / YYYY'
                                                            )
                                                    }}
                                                </p>
                                            </div>
                                        </div>
                                    </NuxtLink>
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
import Header1 from '../Layouts/Headers/Header.vue';
import Footer1 from '../Layouts/Footeres/Footer.vue';
import Pagination3 from '../../../Components/Pagination3.vue';
import { onMounted, ref } from 'vue';
import dayjs from 'dayjs';
import jalali from 'jalali-dayjs';

export default {
    methods: { dayjs },
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
        postsJson: {
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
    },

    setup({ postsJson, categoriesJson, name }) {
        dayjs.extend(jalali);

        const page = usePage();
        const pageUrl = new URL(page.url, 'https://abzarghete.com');
        const pageSearchParams = new URLSearchParams(pageUrl.search);

        const posts = JSON.parse(postsJson);
        let categories = JSON.parse(categoriesJson);

        // set category parameters to checked in category list
        const categoriesParams = [];
        for (const param of pageSearchParams) {
            if (param[0].startsWith('categories')) {
                categoriesParams.push(param[1]);
            }
        }

        categories = categories.map((category) => ({
            ...category,
            checked: category.name === name,
        }));

        function pageChange(n) {
            let currentUrl = page.url;

            let url = new URL(currentUrl);
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
                    const itemName = item
                        .querySelector('span:first-child')
                        .textContent.toLowerCase();
                    const itemCode = item
                        .querySelector('span:last-child')
                        .textContent.toLowerCase();

                    if (
                        itemName.includes(searchTerm) ||
                        itemCode.includes(searchTerm)
                    ) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        };
        onMounted(() => {
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
            { label: 'تازه ترین', value: 'updated_at_desc' },
            { label: 'قدیمی ترین', value: 'updated_at_asc' },
        ];

        const filters = ref({
            categories: [],
            sort_by: pageSearchParams.has('sort_by')
                ? pageSearchParams.get('sort_by')
                : null,
            q: pageSearchParams.has('q') ? pageSearchParams.get('q') : null,
        });
        function updateFilters() {
            filters.value.categories = categories
                .filter((category) => category.checked)
                .map((category) => category.slug);
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

            router.get(route('blog') + '?' + searchParams.toString());
        }
        function removeFilters() {
            filters.value.categories = [];
            filters.value.sort_by = null;
            filters.value.q = null;
            setFilters();
        }
        return {
            filters,
            posts,
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
