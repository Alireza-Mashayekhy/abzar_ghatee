<template>
    <Head>
        <title>ابزار قطعه | فروش ابزار و قطعات یدکی ابزار</title>
        <meta
            name="description"
            content="ابزار و قطعات خود را از بزرگترین برند های جهان و ایران به راحتی و آسودگی خرید کنید."
        />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="website" />
        <meta
            property="og:title"
            content="خرید از مهم ترین برند های ابزار و قطعات یدکی"
        />
        <meta
            property="og:description"
            content="ابزار و قطعات خود را از بزرگترین برند های جهان و ایران به راحتی و آسودگی خرید کنید."
        />
        <meta property="og:url" content="https://abzarghete.com/" />
        <meta property="og:site_name" content="ابزار قطعه" />
    </Head>
    <div class="bg-white">
        <Header1></Header1>
        <main class="flex-grow bg-gray-100 pb-14 pt-36 dark:bg-black xs:pt-36">
            <!-- brand Slider 1 section Start -->
            <section class="mb-8">
                <div class="container relative">
                    <!-- Section Header -->
                    <div class="mb-4 flex items-center justify-between">
                        <h3
                            class="font-medium text-zinc-700 dark:text-white md:text-lg lg:text-xl"
                        >
                            برند ها
                        </h3>
                    </div>
                    <!-- Section Content -->
                    <div
                        class="grid grid-cols-2 gap-px gap-y-2 xs:gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    >
                        <!-- brand Card -->
                        <div v-if="brands.length === 0" class="col-span-4">
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
                        <NuxtLink
                            v-for="brand in brands"
                            :key="brand.id"
                            :href="route('brand', brand.slug)"
                            class="border-gradient group relative rounded-base p-px before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-base"
                        >
                            <div
                                class="relative rounded-xl bg-white p-2 shadow-base dark:bg-zinc-900 md:p-5"
                            >
                                <!-- title -->
                                <div
                                    class="text-sm text-zinc-700 dark:text-white md:text-base"
                                >
                                    <div>
                                        {{ brand.name }}
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </section>
            <!-- brand Slider 1 section End -->
        </main>

        <Footer1></Footer1>
    </div>
</template>

<script>
import Header1 from '../../Layouts/Headers/Header.vue';
import Footer1 from '../../Layouts/Footeres/Footer.vue';

export default {
    components: {
        Link,
        Head,
        Footer1,
        Header1,
    },
    props: {
        brandsJson: {
            type: String,
            required: true,
        },
    },

    setup({ brandsJson }) {
        const brands = JSON.parse(brandsJson);

        return {
            brands,
        };
    },
};
</script>
