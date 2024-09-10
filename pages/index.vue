<template>
    <div>
        <Head>
            <Title>ابزار قطعه | فروش ابزار و قطعات یدکی ابزار</Title>
            <Meta
                name="description"
                content="ابزارقطعه بزرگترین فروشگاه اینترنتی قطعات یدکی ابزار برقی کشور که تامین و خرید قطعات ابزار برقی را برای شما راحت می کند."
            />
            <Meta property="og:locale" content="fa_IR" />
            <Meta property="og:type" content="website" />
            <Meta
                property="og:title"
                content="ابزار قطعه | خرید ابزار و قطعات یدکی ابزار"
            />
            <Meta
                property="og:description"
                content="ابزارقطعه بزرگترین فروشگاه اینترنتی قطعات یدکی ابزار برقی کشور که تامین و خرید قطعات ابزار برقی را برای شما راحت می کند."
            />
            <Meta property="og:url" content="https://abzarghete.com/" />
            <Meta property="og:site_name" content="ابزار قطعه" />
        </Head>
        <div class="bg-white">
            <main
                class="flex-grow bg-gray-100 pb-14 pt-36 dark:bg-black xs:pt-36"
            >
                <!-- Main Banners section Start -->
                <section class="mb-8">
                    <div
                        class="container relative grid grid-cols-12 gap-x-4 gap-y-2"
                    >
                        <div class="col-span-12 lg:col-span-8">
                            <!-- Swiper -->
                            <swiper-container
                                pagination="true"
                                loop="true"
                                autoplay-delay="3000"
                                navigation-next-el=".swiper-button-next"
                                navigation-prev-el=".swiper-button-prev"
                                class="rounded-lg shadow-base"
                            >
                                <!-- <swiper-slide
                                    v-for="slider in banners.main_slider"
                                    class="swiper-slide"
                                >
                                    <NuxtLink :href="slider.href">
                                        <img
                                            :alt="slider.alt"
                                            class="max-h-[450px]"
                                            :src="slider.src"
                                        />
                                    </NuxtLink>
                                </swiper-slide> -->

                                <div
                                    class="swiper-pagination main-banner-pagination"
                                ></div>
                            </swiper-container>
                        </div>
                        <div class="col-span-12 hidden xs:block lg:col-span-4">
                            <div
                                class="flex h-full flex-row justify-between gap-x-2 lg:flex-col"
                            >
                                <div>
                                    <!-- <NuxtLink :href="banners.main_banner_top.href">
                                        <img
                                            :alt="banners.main_banner_top.alt"
                                            class="rounded-lg shadow-base"
                                            :src="banners.main_banner_top.src"
                                        />
                                    </NuxtLink> -->
                                </div>
                                <div>
                                    <!-- <NuxtLink :href="banners.main_banner_top2.href">
                                        <img
                                            :alt="banners.main_banner_top2.alt"
                                            class="rounded-lg shadow-base"
                                            :src="banners.main_banner_top2.src"
                                        />
                                    </NuxtLink> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Main Banners section End -->

                <!-- Product Slider 1 section Start -->

                <section class="mb-8">
                    <div class="container relative">
                        <!-- Section Header -->
                        <div class="mb-4 flex items-center justify-between">
                            <h3
                                class="font-medium text-zinc-700 dark:text-white md:text-lg lg:text-xl"
                            >
                                {{ productSlider1?.name }}
                            </h3>
                            <NuxtLink
                                class="flex items-center gap-x-2 py-2 text-sm text-emerald-500 dark:text-emerald-400 lg:text-base"
                                :href="productSlider1?.href"
                            >
                                مشاهده همه
                                <span>
                                    <svg class="h-5 w-5 lg:h-6 lg:w-6">
                                        <use xlink:href="#chevron-left" />
                                    </svg>
                                </span>
                            </NuxtLink>
                        </div>

                        <!-- Section Content -->
                        <swiper-container
                            free-mode="true"
                            slides-per-view="auto"
                            space-between="14"
                            loop="true"
                            autoplay-delay="3000"
                            navigation-next-el=".swiper-button-next"
                            navigation-prev-el=".swiper-button-prev"
                            class="p-px"
                        >
                            <swiper-slide
                                v-for="(item, index) in productSlider1?.items"
                                :key="index"
                                class="w-50"
                            >
                                <div
                                    class="border-gradient group relative rounded-base p-px before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-base"
                                >
                                    <!-- Product Card -->
                                    <div
                                        class="relative rounded-xl bg-white p-2 shadow-base dark:bg-zinc-900 md:p-5"
                                    >
                                        <!-- image -->
                                        <div
                                            class="mb-2 md:mb-5"
                                            draggable="false"
                                        >
                                            <NuxtLink
                                                :href="
                                                    route('product', item.slug)
                                                "
                                            >
                                                <img
                                                    :alt="item?.name"
                                                    class="mx-auto w-32 rounded-lg md:w-auto"
                                                    :src="item.imageUrl"
                                                />
                                            </NuxtLink>
                                        </div>
                                        <!-- title -->
                                        <div class="mb-2">
                                            <NuxtLink
                                                class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"
                                                :href="
                                                    route('product', item.slug)
                                                "
                                            >
                                                {{ item?.name }}
                                            </NuxtLink>
                                        </div>
                                        <!-- Prices -->
                                        <div class="flex flex-col">
                                            <!-- Old price -->
                                            <div
                                                class="h-5 text-left line-through"
                                            >
                                                {{
                                                    item.normalPrice?.toLocaleString(
                                                        'fa'
                                                    )
                                                }}
                                            </div>
                                            <div
                                                class="flex items-center justify-between"
                                            >
                                                <div></div>
                                                <!-- New price -->
                                                <div
                                                    class="text-sm font-bold text-emerald-500 dark:text-emerald-400 md:text-base"
                                                >
                                                    {{
                                                        item.price?.toLocaleString(
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
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper-container>
                    </div>
                </section>
                <!-- Product Slider 1 section End -->

                <!-- Product Slider 2 section Start -->

                <section class="mb-8">
                    <div class="container relative">
                        <!-- Section Header -->
                        <div class="mb-4 flex items-center justify-between">
                            <h3
                                class="font-medium text-zinc-700 dark:text-white md:text-lg lg:text-xl"
                            >
                                {{ productSlider2?.name }}
                            </h3>
                            <NuxtLink
                                class="flex items-center gap-x-2 py-2 text-sm text-emerald-500 dark:text-emerald-400 lg:text-base"
                                :href="productSlider2?.href"
                            >
                                مشاهده همه
                                <span>
                                    <svg class="h-5 w-5 lg:h-6 lg:w-6">
                                        <use xlink:href="#chevron-left" />
                                    </svg>
                                </span>
                            </NuxtLink>
                        </div>

                        <!-- Section Content -->
                        <swiper-container
                            free-mode="true"
                            slides-per-view="auto"
                            space-between="14"
                            loop="true"
                            autoplay-delay="3000"
                            navigation-next-el=".swiper-button-next"
                            navigation-prev-el=".swiper-button-prev"
                            class="p-px"
                        >
                            <swiper-slide
                                v-for="(item, index) in productSlider2?.items"
                                :key="index"
                                class="w-50"
                            >
                                <div
                                    class="border-gradient group relative rounded-base p-px before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-base"
                                >
                                    <!-- Product Card -->
                                    <div
                                        class="relative rounded-xl bg-white p-2 shadow-base dark:bg-zinc-900 md:p-5"
                                    >
                                        <!-- image -->
                                        <div
                                            class="mb-2 md:mb-5"
                                            draggable="false"
                                        >
                                            <NuxtLink
                                                :href="
                                                    route('product', item.slug)
                                                "
                                            >
                                                <img
                                                    :alt="item?.name"
                                                    class="mx-auto w-32 rounded-lg md:w-auto"
                                                    :src="item.imageUrl"
                                                />
                                            </NuxtLink>
                                        </div>
                                        <!-- title -->
                                        <div class="mb-2">
                                            <NuxtLink
                                                class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"
                                                :href="
                                                    route('product', item.slug)
                                                "
                                            >
                                                {{ item?.name }}
                                            </NuxtLink>
                                        </div>
                                        <!-- Prices -->
                                        <div class="flex flex-col">
                                            <!-- Old price -->
                                            <div
                                                class="h-5 text-left line-through"
                                            >
                                                {{
                                                    item.normalPrice?.toLocaleString(
                                                        'fa'
                                                    )
                                                }}
                                            </div>
                                            <div
                                                class="flex items-center justify-between"
                                            >
                                                <div></div>
                                                <!-- New price -->
                                                <div
                                                    class="text-sm font-bold text-emerald-500 dark:text-emerald-400 md:text-base"
                                                >
                                                    {{
                                                        item.price?.toLocaleString(
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
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper-container>
                    </div>
                </section>
                <!-- Product Slider 2 section End -->

                <!-- Category Banners section Start -->
                <section class="mb-8">
                    <div class="container relative">
                        <div
                            class="flex w-full flex-col justify-between gap-4 md:flex-row"
                        >
                            <NuxtLink :href="banners?.category_left?.href">
                                <img
                                    :alt="banners?.category_left.alt"
                                    class="rounded-base"
                                    :src="banners?.category_left.src"
                                />
                            </NuxtLink>
                            <NuxtLink :href="banners?.category_right?.href">
                                <img
                                    :alt="banners?.category_right.alt"
                                    class="rounded-base"
                                    :src="banners?.category_right.src"
                                />
                            </NuxtLink>
                        </div>
                    </div>
                </section>
                <!-- Category Banners section End -->

                <!-- brands section Start -->
                <section class="mb-8">
                    <div class="container relative">
                        <div
                            class="flex flex-wrap items-center justify-center gap-8 lg:justify-between"
                        >
                            <!-- Category -->

                            <NuxtLink
                                v-for="(brand, index) in brands"
                                :key="index"
                                class="relative flex w-25 flex-col items-center justify-between gap-y-1.5 sm:w-auto sm:gap-y-2.5"
                                :href="brand?.href"
                            >
                                <div
                                    class="border-gradient group relative rounded-full p-px before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-full"
                                >
                                    <img
                                        :alt="brand?.name"
                                        class="relative h-25 w-25 rounded-full"
                                        :src="brand.imageUrl"
                                    />
                                </div>
                                <p
                                    class="line-clamp-2 h-10 text-center text-sm text-zinc-700 dark:text-white sm:text-base"
                                >
                                    {{ brand?.name }}
                                </p>
                            </NuxtLink>
                        </div>
                    </div>
                </section>
                <!-- brands section End -->

                <!-- Product Slider 3 section Start -->
                <section class="mb-8">
                    <div class="container relative">
                        <!-- Section Header -->
                        <div class="mb-4 flex items-center justify-between">
                            <h3
                                class="font-medium text-zinc-700 dark:text-white md:text-lg lg:text-xl"
                            >
                                {{ productSlider3?.name }}
                            </h3>
                            <NuxtLink
                                class="flex items-center gap-x-2 py-2 text-sm text-emerald-500 dark:text-emerald-400 lg:text-base"
                                :href="productSlider3?.href"
                            >
                                مشاهده همه
                                <span>
                                    <svg class="h-5 w-5 lg:h-6 lg:w-6">
                                        <use xlink:href="#chevron-left" />
                                    </svg>
                                </span>
                            </NuxtLink>
                        </div>

                        <!-- Section Content -->
                        <swiper-container
                            free-mode="true"
                            slides-per-view="auto"
                            space-between="14"
                            loop="true"
                            autoplay-delay="3000"
                            navigation-next-el=".swiper-button-next"
                            navigation-prev-el=".swiper-button-prev"
                            class="p-px"
                        >
                            <swiper-slide
                                v-for="(item, index) in productSlider3?.items"
                                :key="index"
                                class="w-50"
                            >
                                <div
                                    class="border-gradient group relative rounded-base p-px before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-base"
                                >
                                    <!-- Product Card -->
                                    <div
                                        class="relative rounded-xl bg-white p-2 shadow-base dark:bg-zinc-900 md:p-5"
                                    >
                                        <!-- image -->
                                        <div
                                            class="mb-2 md:mb-5"
                                            draggable="false"
                                        >
                                            <NuxtLink
                                                :href="
                                                    route('product', item.slug)
                                                "
                                            >
                                                <img
                                                    :alt="item?.name"
                                                    class="mx-auto w-32 rounded-lg md:w-auto"
                                                    :src="item.imageUrl"
                                                />
                                            </NuxtLink>
                                        </div>
                                        <!-- title -->
                                        <div class="mb-2">
                                            <NuxtLink
                                                class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"
                                                :href="
                                                    route('product', item.slug)
                                                "
                                            >
                                                {{ item?.name }}
                                            </NuxtLink>
                                        </div>
                                        <!-- Prices -->
                                        <div class="flex flex-col">
                                            <!-- Old price -->
                                            <div
                                                class="h-5 text-left line-through"
                                            >
                                                {{
                                                    item.normalPrice?.toLocaleString(
                                                        'fa'
                                                    )
                                                }}
                                            </div>
                                            <div
                                                class="flex items-center justify-between"
                                            >
                                                <div></div>
                                                <!-- New price -->
                                                <div
                                                    class="text-sm font-bold text-emerald-500 dark:text-emerald-400 md:text-base"
                                                >
                                                    {{
                                                        item.price?.toLocaleString(
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
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper-container>
                    </div>
                </section>
                <!-- Product Slider 3 section End -->

                <!-- Blog section Start -->
                <section class="mb-6">
                    <div class="container relative">
                        <!-- Section Header -->
                        <div class="mb-4 flex items-center justify-between">
                            <h3
                                class="font-medium text-zinc-700 dark:text-white md:text-lg lg:text-xl"
                            >
                                مطالب خواندنی
                            </h3>
                            <a
                                class="flex items-center gap-x-2 py-2 text-sm text-emerald-500 dark:text-emerald-400 lg:text-base"
                                href="./blog.html"
                            >
                                مشاهده همه
                                <span>
                                    <svg class="h-5 w-5 lg:h-6 lg:w-6">
                                        <use xlink:href="#chevron-left" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <!-- Section Content -->
                        <swiper-container
                            free-mode="true"
                            slides-per-view="auto"
                            space-between="14"
                            navigation-next-el=".swiper-button-next"
                            navigation-prev-el=".swiper-button-prev"
                            class="p-px"
                        >
                            <swiper-slide
                                v-for="item in blogPosts.posts"
                                :key="item.id"
                                class="w-50"
                            >
                                <div
                                    class="border-gradient group relative rounded-base p-px before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-base"
                                >
                                    <!-- Blog Card -->
                                    <div>
                                        <NuxtLink :to="item.slug">
                                            <div
                                                class="relative rounded-xl bg-white p-2 shadow-base dark:bg-zinc-900"
                                            >
                                                <!-- image -->
                                                <div
                                                    class="mb-2 md:mb-5"
                                                    draggable="false"
                                                >
                                                    <NuxtImg
                                                        alt="blog"
                                                        class="mx-auto w-auto rounded-lg rounded-bl-3xl"
                                                        :src="item.imageUrl"
                                                    />
                                                </div>
                                                <!-- title -->
                                                <div class="mb-2">
                                                    <p
                                                        class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"
                                                    >
                                                        {{ item.title }}
                                                    </p>
                                                </div>
                                                <div class="flex justify-end">
                                                    <!-- <p
                                                        class="text-xs text-emerald-500 dark:text-emerald-400 xs:text-sm"
                                                    >
                                                        {{
                                                            dayjs(
                                                                item.updated_at
                                                            )
                                                                .locale('fa')
                                                                .format(
                                                                    'DD / MMMM / YYYY'
                                                                )
                                                        }}
                                                    </p> -->
                                                </div>
                                            </div>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper-container>
                    </div>
                </section>

                <!-- Blog section End -->
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const { data: brands } = await useFetch(
    `${config.public.apiBase}/api/v1/brands`
);

const { data: blogPosts } = await useFetch(
    `${config.public.apiBase}/api/v1/blog`
);

console.log(blogPosts);
</script>

<!-- <script>
// import dayjs from 'dayjs';
// import jalali from 'jalali-dayjs';

export default {
    // methods: { dayjs },
    // props: {
    //     bannersJson: {
    //         type: String,
    //         required: true,
    //     },
    //     productSlider1Json: {
    //         type: String,
    //         required: true,
    //     },
    //     productSlider2Json: {
    //         type: String,
    //         required: true,
    //     },
    //     productSlider3Json: {
    //         type: String,
    //         required: true,
    //     },
    //     blogPostsJson: {
    //         type: String,
    //         required: true,
    //     },
    //     brandsJson: {
    //         type: String,
    //         required: true,
    //     },
    // },
    // setup({
    //     bannersJson,
    //     productSlider1Json,
    //     productSlider2Json,
    //     productSlider3Json,
    //     blogPostsJson,
    //     brandsJson,
    // }) {
    //     // dayjs.extend(jalali);
    //     const banners = JSON.parse(bannersJson);
    //     const productSlider1 = JSON.parse(productSlider1Json);
    //     const productSlider2 = JSON.parse(productSlider2Json);
    //     const productSlider3 = JSON.parse(productSlider3Json);
    //     const blogPosts = JSON.parse(blogPostsJson);
    //     const brands = JSON.parse(brandsJson);
    //     return {
    //         banners,
    //         productSlider1,
    //         productSlider2,
    //         productSlider3,
    //         blogPosts,
    //         brands,
    //     };
    // },
};
</script> -->
