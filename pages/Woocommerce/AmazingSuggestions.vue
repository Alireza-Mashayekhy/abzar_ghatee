<template>
    <Head>
        <title>
            پیشنهادات و تخفیفات ویژه ابزار برقی و قطعات یدکی در ابزار قطعه
        </title>
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="product" />
        <meta
            property="og:title"
            content="پیشنهادات و تخفیفات ویژه ابزار برقی و قطعات یدکی در ابزار قطعه"
        />
        <meta
            property="og:description"
            content="شما می توانید بهترین پیشنهادات و تخفیفات ویژه روی ابزار برقی و قطعات یدکی آن ها را مشاهده و خرید کنید."
        />
        <meta property="og:site_name" content="ابزار قطعه" />
    </Head>
    <div class="bg-white">
        <Header1></Header1>

        <main class="flex-grow bg-gray-100 pb-14 pt-36 dark:bg-black xs:pt-36">
            <!-- Product Slider 1 section Start -->
            <section class="mb-8">
                <div class="container relative">
                    <!-- Section Header -->
                    <div class="mb-4 flex items-center justify-between">
                        <h3
                            class="font-medium text-zinc-700 dark:text-white md:text-lg lg:text-xl"
                        >
                            {{ productSlider1.name }}
                        </h3>
                        <NuxtLink
                            class="flex items-center gap-x-2 py-2 text-sm text-emerald-500 dark:text-emerald-400 lg:text-base"
                            :href="productSlider1.href"
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
                            v-for="(item, index) in productSlider1.items"
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
                                    <div class="mb-2 md:mb-5" draggable="false">
                                        <NuxtLink
                                            :href="route('product', item.slug)"
                                        >
                                            <img
                                                :alt="item.name"
                                                class="mx-auto w-32 rounded-lg md:w-auto"
                                                :src="item.imageUrl"
                                            />
                                        </NuxtLink>
                                    </div>
                                    <!-- title -->
                                    <div class="mb-2">
                                        <NuxtLink
                                            class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"
                                            :href="route('product', item.slug)"
                                        >
                                            {{ item.name }}
                                        </NuxtLink>
                                    </div>
                                    <!-- Prices -->
                                    <div class="flex flex-col">
                                        <!-- Old price -->
                                        <div class="h-5 text-left line-through">
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
                            {{ productSlider2.name }}
                        </h3>
                        <NuxtLink
                            class="flex items-center gap-x-2 py-2 text-sm text-emerald-500 dark:text-emerald-400 lg:text-base"
                            :href="productSlider2.href"
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
                            v-for="(item, index) in productSlider2.items"
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
                                    <div class="mb-2 md:mb-5" draggable="false">
                                        <NuxtLink
                                            :href="route('product', item.slug)"
                                        >
                                            <img
                                                :alt="item.name"
                                                class="mx-auto w-32 rounded-lg md:w-auto"
                                                :src="item.imageUrl"
                                            />
                                        </NuxtLink>
                                    </div>
                                    <!-- title -->
                                    <div class="mb-2">
                                        <NuxtLink
                                            class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"
                                            :href="route('product', item.slug)"
                                        >
                                            {{ item.name }}
                                        </NuxtLink>
                                    </div>
                                    <!-- Prices -->
                                    <div class="flex flex-col">
                                        <!-- Old price -->
                                        <div class="h-5 text-left line-through">
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

            <!-- Product Slider 3 section Start -->
            <section class="mb-8">
                <div class="container relative">
                    <!-- Section Header -->
                    <div class="mb-4 flex items-center justify-between">
                        <h3
                            class="font-medium text-zinc-700 dark:text-white md:text-lg lg:text-xl"
                        >
                            {{ productSlider3.name }}
                        </h3>
                        <NuxtLink
                            class="flex items-center gap-x-2 py-2 text-sm text-emerald-500 dark:text-emerald-400 lg:text-base"
                            :href="productSlider3.href"
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
                            v-for="(item, index) in productSlider3.items"
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
                                    <div class="mb-2 md:mb-5" draggable="false">
                                        <NuxtLink
                                            :href="route('product', item.slug)"
                                        >
                                            <img
                                                :alt="item.name"
                                                class="mx-auto w-32 rounded-lg md:w-auto"
                                                :src="item.imageUrl"
                                            />
                                        </NuxtLink>
                                    </div>
                                    <!-- title -->
                                    <div class="mb-2">
                                        <NuxtLink
                                            class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"
                                            :href="route('product', item.slug)"
                                        >
                                            {{ item.name }}
                                        </NuxtLink>
                                    </div>
                                    <!-- Prices -->
                                    <div class="flex flex-col">
                                        <!-- Old price -->
                                        <div class="h-5 text-left line-through">
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

            <!-- Product Slider 4 section Start -->
            <section class="mb-8">
                <div class="container relative">
                    <!-- Section Header -->
                    <div class="mb-4 flex items-center justify-between">
                        <h3
                            class="font-medium text-zinc-700 dark:text-white md:text-lg lg:text-xl"
                        >
                            {{ productSlider4.name }}
                        </h3>
                        <NuxtLink
                            class="flex items-center gap-x-2 py-2 text-sm text-emerald-500 dark:text-emerald-400 lg:text-base"
                            :href="productSlider4.href"
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
                            v-for="(item, index) in productSlider4.items"
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
                                    <div class="mb-2 md:mb-5" draggable="false">
                                        <NuxtLink
                                            :href="route('product', item.slug)"
                                        >
                                            <img
                                                :alt="item.name"
                                                class="mx-auto w-32 rounded-lg md:w-auto"
                                                :src="item.imageUrl"
                                            />
                                        </NuxtLink>
                                    </div>
                                    <!-- title -->
                                    <div class="mb-2">
                                        <NuxtLink
                                            class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"
                                            :href="route('product', item.slug)"
                                        >
                                            {{ item.name }}
                                        </NuxtLink>
                                    </div>
                                    <!-- Prices -->
                                    <div class="flex flex-col">
                                        <!-- Old price -->
                                        <div class="h-5 text-left line-through">
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
            <!-- Product Slider 4 section End -->
        </main>

        <Footer1></Footer1>
    </div>
</template>

<script>
import Header1 from '../Layouts/Headers/Header.vue';
import Footer1 from '../Layouts/Footeres/Footer.vue';

export default {
    components: {
        Link,
        Head,
        Footer1,
        Header1,
    },
    props: {
        productSlider1Json: {
            type: String,
            required: true,
        },
        productSlider2Json: {
            type: String,
            required: true,
        },
        productSlider3Json: {
            type: String,
            required: true,
        },
        productSlider4Json: {
            type: String,
            required: true,
        },
    },

    setup({
        productSlider1Json,
        productSlider2Json,
        productSlider3Json,
        productSlider4Json,
    }) {
        const productSlider1 = JSON.parse(productSlider1Json);
        const productSlider2 = JSON.parse(productSlider2Json);
        const productSlider3 = JSON.parse(productSlider3Json);
        const productSlider4 = JSON.parse(productSlider4Json);

        return {
            productSlider1,
            productSlider2,
            productSlider3,
            productSlider4,
        };
    },
};
</script>
