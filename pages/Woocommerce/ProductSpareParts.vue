<template>
    <Head>
        <title>قطعات یدکی {{ product.name }}</title>
        <meta
            name="description"
            :content="
                'قطعات یدکی ' +
                product.name +
                'را بررسی کنید و با خیال راحت خرید کنید. '
            "
        />
        <NuxtLink rel="canonical" :href="route('spare-parts', product.slug)" />

        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="product" />
        <meta
            property="og:title"
            content="قطعات یدکی {{product.slug}} - ابزار قطعه"
        />
        <meta
            property="og:description"
            :content="
                'قطعات یدکی ' +
                product.name +
                ' را بررسی کنید و با خیال راحت خرید کنید.'
            "
        />
        <meta property="og:url" :content="route('spare-parts', product.slug)" />
        <meta property="og:site_name" content="ابزار قطعه" />
        <meta property="article:modified_time" :content="product.updated_at" />
        <meta property="og:image" :content="product.imageUrl" />
        <meta property="og:image:width" content="408" />
        <meta property="og:image:height" content="408" />

        <meta property="og:image:type" content="image/jpeg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta property="product:brand" :content="product.brand.name" />
        <meta property="product:condition" content="new" />
    </Head>
    <div class="flex min-h-screen flex-col">
        <!-- Mobile menu -->
        <Header1></Header1>

        <main class="flex-grow bg-gray-100 pb-14 pt-36 dark:bg-black xs:pt-36">
            <div class="container">
                <!-- Desktop Product Detail -->
                <div>
                    <!-- Breadcrumb -->
                    <div class="hidden lg:block mb-6">
                        <nav
                            aria-label="Breadcrumb"
                            class="w-fit rounded-lg bg-white px-4 py-4 shadow-base dark:bg-zinc-900"
                        >
                            <ol
                                class="flex flex-wrap items-center justify-center gap-x-2 gap-y-4"
                            >
                                <li class="flex items-center gap-x-2">
                                    <NuxtLink
                                        href="/"
                                        class="text-sm text-zinc-600 hover:text-zinc-700 dark:text-zinc-300 hover:dark:text-white"
                                    >
                                        ابزار قطعه
                                    </NuxtLink>
                                    <span
                                        class="text-zinc-600 dark:text-zinc-300"
                                    >
                                        <svg class="h-5 w-5">
                                            <use xlink:href="#chevron-left" />
                                        </svg>
                                    </span>
                                </li>
                                <li
                                    v-for="(
                                        breadcrumb, breadcrumbIdx
                                    ) in product.breadcrumbs"
                                    :key="breadcrumb.id"
                                    class="flex items-center gap-x-2"
                                >
                                    <NuxtLink
                                        :href="breadcrumb.href"
                                        class="text-sm text-zinc-600 hover:text-zinc-700 dark:text-zinc-300 hover:dark:text-white"
                                    >
                                        {{ breadcrumb.name }}
                                    </NuxtLink>
                                    <span
                                        v-if="
                                            breadcrumbIdx !==
                                            product.breadcrumbs.length - 1
                                        "
                                        class="text-zinc-600 dark:text-zinc-300"
                                    >
                                        <svg class="h-5 w-5">
                                            <use xlink:href="#chevron-left" />
                                        </svg>
                                    </span>
                                </li>
                            </ol>
                        </nav>
                    </div>

                    <!-- breadcrumb mobile -->
                    <div
                        class="lg:hidden mb-4 flex flex-wrap items-center gap-2"
                    >
                        <div
                            class="flex items-center gap-x-1 text-sm font-light text-emerald-500 dark:text-emerald-400 sm:text-base md:text-base"
                        >
                            <NuxtLink href="/"> ابزار قطعه </NuxtLink>
                            <svg class="h-5 w-5">
                                <use xlink:href="#chevron-left" />
                            </svg>
                        </div>
                        <div
                            v-for="(
                                breadcrumb, breadcrumbIdx
                            ) in product.breadcrumbs"
                            :key="breadcrumb.id"
                            class="flex items-center gap-x-1 text-sm font-light text-emerald-500 dark:text-emerald-400 sm:text-base md:text-base"
                        >
                            <NuxtLink :href="breadcrumb.href">
                                {{ breadcrumb.name }}
                            </NuxtLink>
                            <svg
                                v-if="
                                    breadcrumbIdx !==
                                    product.breadcrumbs.length - 1
                                "
                                class="h-5 w-5"
                            >
                                <use xlink:href="#chevron-left" />
                            </svg>
                        </div>
                    </div>

                    <!-- Product Detail Section -->
                    <div
                        class="mb-6 rounded-lg bg-white p-4 lg:p-6 shadow-base dark:bg-zinc-900"
                    >
                        <div class="mb-6 grid flex-grow grid-cols-12 gap-4">
                            <div class="col-span-12 lg:col-span-6">
                                <div class="flex flex-col gap-4">
                                    <div
                                        class="border-b border-gray-100 p-6 dark:border-white/5"
                                    >
                                        <swiper-container
                                            zoom-max-ratio="4"
                                            centered-slides="true"
                                            pagination="true"
                                            slides-per-view="1"
                                            data-tooltip-target="tooltip-swiper-container"
                                        >
                                            <swiper-slide
                                                v-for="(
                                                    galleryUrl, idx
                                                ) in product.explodedViews"
                                                :key="idx"
                                                class="w-auto"
                                            >
                                                <div
                                                    class="swiper-zoom-container"
                                                >
                                                    <img
                                                        :src="galleryUrl"
                                                        :alt="product.name"
                                                        class="mx-auto"
                                                    />
                                                </div>
                                            </swiper-slide>
                                            <swiper-slide>
                                                <div
                                                    class="swiper-zoom-container"
                                                >
                                                    <img
                                                        :src="product.imageUrl"
                                                        :alt="product.name"
                                                        class="mx-auto"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </swiper-slide>
                                        </swiper-container>
                                        <div
                                            id="tooltip-swiper-container"
                                            role="tooltip"
                                            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                                        >
                                            برای بزرگنمایی دو دفعه کلیک کنید.
                                            <div
                                                class="tooltip-arrow"
                                                data-popper-arrow
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="col-span-12 lg:col-span-6 flex min-h-full flex-col"
                            >
                                <div
                                    class="mb-2 flex items-center gap-x-1 text-emerald-500 dark:text-emerald-400"
                                >
                                    <NuxtLink
                                        :href="
                                            route('brand', product.brand.slug)
                                        "
                                    >
                                        {{ product.brand.name }}
                                    </NuxtLink>

                                    <svg class="h-5 w-5">
                                        <use xlink:href="#chevron-left" />
                                    </svg>
                                </div>
                                <!-- Main Title ( persian ) -->
                                <h1
                                    class="mb-4 text-lg font-semibold text-zinc-700 dark:text-white"
                                >
                                    قطعات یدکی
                                    {{ product.name }}
                                </h1>

                                <div class="flex-grow gap-x-4">
                                    <!-- Title ( english) -->
                                    <div class="mb-4 flex items-center gap-x-2">
                                        <h2
                                            class="line-clamp-1 text-sm font-light text-zinc-500 dark:text-zinc-400"
                                        >
                                            {{ product.slug }}
                                        </h2>
                                        <span
                                            class="h-px flex-grow bg-gray-200 dark:bg-white/10"
                                        ></span>
                                    </div>

                                    <!-- Property -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- spares -->
                <div
                    class="rounded-lg bg-white p-4 shadow-base dark:bg-zinc-900"
                >
                    <div
                        v-if="product?.spareParts"
                        aria-labelledby="details-heading"
                        class="mt-5 pb-5 grid grid-cols-12"
                    >
                        <div
                            v-for="spare in product.spareParts"
                            :key="spare.id"
                            class="box m-1 flex flex-row items-center p-5 col-span-12 md:col-span-6 rounded-lg border border-gray-100 text-sm text-zinc-500 dark:border-white/5 dark:text-zinc-400"
                        >
                            <div class="m-1 bg-gray-50 p-1 rounded">
                                {{ spare.linkCode }}
                            </div>
                            <div class="w-12 h-12 image-fit ltr:mr-1 rtl:ml-1">
                                <img
                                    :alt="spare.name"
                                    class="rounded"
                                    :src="spare.imageUrl"
                                />
                            </div>
                            <div
                                class="ltr:ml-2 rtl:mr-2 ltr:mr-auto rtl:ml-auto text-center ltr:text-left rtl:text-right mt-0"
                            >
                                <a href="" class="font-medium">{{
                                    spare.name
                                }}</a>
                                <div
                                    v-if="spare.price"
                                    class="text-slate-500 text-xs mt-0.5"
                                >
                                    {{
                                        parseInt(spare.price).toLocaleString(
                                            'fa'
                                        )
                                    }}
                                    <span class="text-xs text-gray-500"
                                        >تومان</span
                                    >
                                </div>
                                <div
                                    v-else
                                    class="text-slate-500 text-xs mt-0.5"
                                >
                                    تماس بگیرید
                                </div>
                            </div>
                            <div
                                v-if="spare.price && spare.quantity > 0"
                                class="flex mt-0"
                            >
                                <button
                                    @click="addToCartClicked(spare)"
                                    class="btn-primary py-1 px-2 ltr:mr-2 rtl:ml-2"
                                >
                                    خرید
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- Product Gallery modal -->
        <div
            id="product-gallery-modal"
            tabindex="-1"
            aria-hidden="true"
            class="main-scroll fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0"
        >
            <div class="relative max-h-full w-full max-w-7xl">
                <div
                    class="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white shadow ring-1 ring-gray-100 dark:divide-white/5 dark:bg-zinc-900 dark:ring-white/5"
                >
                    <div class="px-4 py-5 sm:px-6">
                        <div class="flex items-center justify-between">
                            <h3
                                class="line-clamp-1 text-zinc-700 dark:text-white md:text-lg"
                            >
                                تصاویر محصول {{ product.name }}
                            </h3>
                            <button
                                class="text-zinc-700 dark:text-white"
                                data-modal-target="product-gallery-modal"
                                data-modal-hide="product-gallery-modal"
                                type="button"
                            >
                                <svg class="h-5 w-5">
                                    <use xlink:href="#close" />
                                </svg>

                                <span class="sr-only">Close menu</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-col gap-4">
                            <div
                                class="border-b border-gray-100 p-6 dark:border-white/5"
                            >
                                <swiper-container
                                    pagination="true"
                                    slides-per-view="1"
                                    navigation="true"
                                    thumbs-swiper=".product-modal-gallery-swiper-thumbs "
                                >
                                    <swiper-slide>
                                        <img
                                            :src="product.imageUrl"
                                            :alt="product.name"
                                            class="mx-auto min-h-[500px] min-w-[500px]"
                                            loading="lazy"
                                        />
                                    </swiper-slide>
                                    <swiper-slide
                                        v-for="(
                                            galleryUrl, idx
                                        ) in product.explodedViews"
                                        :key="idx"
                                    >
                                        <img
                                            :src="galleryUrl"
                                            :alt="product.name"
                                            class="mx-auto min-h-[500px] min-w-[500px]"
                                            loading="lazy"
                                        />
                                    </swiper-slide>
                                </swiper-container>
                            </div>
                            <div class="p-6">
                                <swiper-container
                                    slides-per-view="8"
                                    space-between="20"
                                    navigation="true"
                                    class="product-modal-gallery-swiper-thumbs"
                                >
                                    <swiper-slide
                                        class="rounded-lg border border-gray-100 dark:border-white/5"
                                    >
                                        <img
                                            :src="product.imageUrl"
                                            :alt="product.name"
                                            class="mx-auto h-25 w-25"
                                            loading="lazy"
                                        />
                                    </swiper-slide>

                                    <swiper-slide
                                        v-for="(
                                            galleryUrl, idx
                                        ) in product.explodedViews"
                                        :key="idx"
                                        class="rounded-lg border border-gray-100 dark:border-white/5"
                                    >
                                        <img
                                            :src="galleryUrl"
                                            :alt="
                                                product.name +
                                                ' image exploded view ' +
                                                idx
                                            "
                                            class="mx-auto h-25 w-25"
                                            loading="lazy"
                                        />
                                    </swiper-slide>
                                </swiper-container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer1></Footer1>
    </div>
</template>

<script>
import Header1 from '../Layouts/Headers/Header.vue';
import Footer1 from '../Layouts/Footeres/Footer.vue';

import { useCartStore } from '../../../stores/cart';
export default {
    methods: { useCartStore },
    components: {
        Head,
        Link,
        Footer1,
        Header1,
    },
    props: {
        productJson: {
            type: String,
            required: true,
        },
    },
    setup({ productJson }) {
        const product = JSON.parse(productJson);
        function addToCartClicked(spare) {
            useCartStore().addToCart(
                spare.saleID,
                spare.name,
                location.href,
                spare.imageUrl,
                spare.price,
                spare.normalPrice,
                spare.package_weight,
                product.id,
                1,
                spare.linkType
            );
        }

        return {
            product,
            addToCartClicked,
        };
    },
};
</script>

<style scoped>
.product-description :deep(h2) {
    @apply font-semibold mt-3 mb-1;
}
</style>
