<template>
    <Head>
        <title>قیمت خرید {{ product.name }}</title>
        <meta
            name="description"
            :content="
                'اطلاعات، قیمت و مشخصات' +
                product.name +
                'را بررسی کنید و با خیال راحت خرید کنید. '
            "
        />
        <NuxtLink rel="canonical" :href="route('product', product.slug)" />

        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="product" />
        <meta
            property="og:title"
            content="قیمت خرید {{product.slug}} - ابزارقطعه"
        />
        <meta
            property="og:description"
            :content="
                'اطلاعات، قیمت و مشخصات ' +
                product.name +
                ' را بررسی کنید و با خیال راحت خرید کنید.'
            "
        />
        <meta property="og:url" :content="route('product', product.slug)" />
        <meta property="og:site_name" content="ابزار قطعه" />
        <meta property="article:modified_time" :content="product.updated_at" />
        <meta property="og:image" :content="product.imageUrl" />
        <meta property="og:image:width" content="408" />
        <meta property="og:image:height" content="408" />

        <meta property="og:image:type" content="image/jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="قیمت" />
        <meta
            name="twitter:data1"
            :content="sale1?.prices?.best_price?.toLocaleString('fa') + 'تومان'"
        />
        <meta name="twitter:label2" content="دسترسی" />
        <meta
            name="twitter:data2"
            :content="
                sale1?.inventory && sale1.inventory >= 0 ? 'موجود' : 'ناموجود'
            "
        />

        <meta property="product:brand" :content="product.brand.name" />
        <meta
            property="product:price:amount"
            :content="sale1?.prices?.best_price * 10"
        />
        <meta property="product:price:currency" content="IRT" />
        <meta
            property="og:availability"
            :content="
                sale1?.inventory && sale1.inventory >= 0
                    ? 'out of stock'
                    : 'instock'
            "
        />
        <meta
            property="product:availability"
            :content="
                sale1?.inventory && sale1.inventory >= 0
                    ? 'out of stock'
                    : 'instock'
            "
        />
        <meta property="product:condition" content="new" />
    </Head>
    <div class="flex min-h-screen flex-col">
        <!-- Mobile menu -->
        <Header1></Header1>

        <main class="flex-grow bg-gray-100 pb-14 pt-36 dark:bg-black xs:pt-36">
            <div class="container">
                <!-- Desktop Product Detail -->
                <div class="hidden lg:block">
                    <!-- Breadcrumb -->
                    <div class="mb-6">
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
                    <!-- Product Detail Section -->
                    <div
                        class="mb-6 rounded-lg bg-white p-6 shadow-base dark:bg-zinc-900"
                    >
                        <div class="mb-6 grid flex-grow grid-cols-12 gap-4">
                            <div class="col-span-4">
                                <div class="min-w-fit space-y-2">
                                    <!-- Product other actions -->
                                    <div class="py-2">
                                        <div
                                            class="flex items-center gap-x-4 text-zinc-700 dark:text-white"
                                        >
                                            <!-- add to favorite -->

                                            <div>
                                                <button
                                                    data-tooltip-target="add-to-favorite"
                                                    type="button"
                                                >
                                                    <svg class="h-6 w-6">
                                                        <use
                                                            xlink:href="#heart"
                                                        />
                                                    </svg>
                                                </button>
                                                <div
                                                    id="add-to-favorite"
                                                    role="tooltip"
                                                    class="tooltip invisible absolute z-10 inline-block rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-zinc-800"
                                                >
                                                    افزودن به علاقه‌مندی ها
                                                </div>
                                            </div>
                                            <!-- add to compare -->

                                            <div>
                                                <button
                                                    data-tooltip-target="add-to-compare"
                                                    type="button"
                                                >
                                                    <svg class="h-6 w-6">
                                                        <use
                                                            xlink:href="#compare"
                                                        />
                                                    </svg>
                                                </button>
                                                <div
                                                    id="add-to-compare"
                                                    role="tooltip"
                                                    class="tooltip invisible absolute z-10 inline-block rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-zinc-800"
                                                >
                                                    افزودن به لیست مقایسه
                                                </div>
                                            </div>

                                            <!-- share on social -->
                                            <div>
                                                <button
                                                    id="dropdownMenuCopySocialShareLink"
                                                    data-dropdown-toggle="copy-social-share-link"
                                                    data-tooltip-target="share-on-social"
                                                    type="button"
                                                >
                                                    <svg class="h-6 w-6">
                                                        <use
                                                            xlink:href="#social-share"
                                                        />
                                                    </svg>
                                                </button>
                                                <div
                                                    id="share-on-social"
                                                    role="tooltip"
                                                    class="tooltip invisible absolute z-10 inline-block rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-zinc-800"
                                                >
                                                    اشتراک گذاری
                                                </div>
                                                <!-- Dropdown menu -->
                                                <div
                                                    class="z-10 !ml-5 hidden w-50 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-base dark:border-white/5 dark:bg-zinc-900"
                                                    id="copy-social-share-link"
                                                >
                                                    <ul class="space-y-2 p-2">
                                                        <li>
                                                            <button
                                                                type="button"
                                                                :data-link="
                                                                    route(
                                                                        'product.shortlink',
                                                                        product.id
                                                                    )
                                                                "
                                                                @click="
                                                                    copyToClipboardSocialShareDesktop
                                                                "
                                                                class="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sky-500 hover:bg-sky-500/10 dark:text-sky-400 dark:hover:bg-sky-400/10"
                                                            >
                                                                <div
                                                                    class="flex items-center gap-x-2"
                                                                >
                                                                    <svg
                                                                        class="h-6 w-6"
                                                                    >
                                                                        <use
                                                                            xlink:href="#copy"
                                                                        ></use>
                                                                    </svg>
                                                                    <span
                                                                        id="copyToClipboardSocialShareText"
                                                                    >
                                                                        کپی کردن
                                                                        لینک
                                                                    </span>
                                                                </div>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Main image -->
                                    <div>
                                        <img
                                            :src="product.imageUrl"
                                            :alt="product.name"
                                            class="mx-auto"
                                            loading="lazy"
                                        />
                                    </div>
                                    <!-- Gallery -->
                                    <div
                                        class="flex items-center justify-center gap-x-2"
                                    >
                                        <!-- image -->
                                        <button
                                            type="button"
                                            data-modal-target="product-gallery-modal"
                                            data-modal-toggle="product-gallery-modal"
                                            class="cursor-pointer rounded-lg border border-gray-100 p-1 dark:border-white/5"
                                        >
                                            <img
                                                :src="product.imageUrl"
                                                :alt="product.name"
                                                class="h-16 w-16 xl:h-20 xl:w-20"
                                                loading="lazy"
                                            />
                                        </button>

                                        <!-- image -->
                                        <button
                                            v-for="(
                                                galleryUrl, idx
                                            ) in product.galleryUrls.slice(
                                                0,
                                                3
                                            )"
                                            :key="idx"
                                            type="button"
                                            data-modal-target="product-gallery-modal"
                                            data-modal-toggle="product-gallery-modal"
                                            class="cursor-pointer rounded-lg border border-gray-100 p-1 dark:border-white/5"
                                        >
                                            <img
                                                :src="galleryUrl"
                                                :alt="
                                                    product.name +
                                                    'gallery url' +
                                                    idx
                                                "
                                                class="h-16 w-16 xl:h-20 xl:w-20"
                                                loading="lazy"
                                            />
                                        </button>

                                        <!-- Load more -->
                                        <button
                                            v-if="
                                                product.galleryUrls.length >= 4
                                            "
                                            type="button"
                                            data-modal-target="product-gallery-modal"
                                            data-modal-toggle="product-gallery-modal"
                                            class="relative cursor-pointer rounded-lg border border-gray-100 p-1 dark:border-white/5"
                                        >
                                            <img
                                                :src="product.galleryUrls[3]"
                                                alt=""
                                                class="h-16 w-16 blur xl:h-20 xl:w-20"
                                                loading="lazy"
                                            />
                                            <span
                                                class="text-zinc-700 dark:text-white"
                                            >
                                                <svg
                                                    class="absolute inset-0 mx-auto my-auto h-6 w-6"
                                                >
                                                    <use
                                                        xlink:href="#horizontal-dot"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-8 flex min-h-full flex-col">
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
                                    {{ product.name }}
                                </h1>

                                <div class="grid flex-grow grid-cols-2 gap-x-4">
                                    <!-- right side -->
                                    <div class="col-span-1">
                                        <!-- Title ( english) -->
                                        <div
                                            class="mb-4 flex items-center gap-x-2"
                                        >
                                            <h2
                                                class="line-clamp-1 text-sm font-light text-zinc-500 dark:text-zinc-400"
                                            >
                                                {{ product.slug }}
                                            </h2>
                                            <span
                                                class="h-px flex-grow bg-gray-200 dark:bg-white/10"
                                            ></span>
                                        </div>
                                        <!-- comments & SKU -->
                                        <div
                                            class="mb-4 flex items-center gap-x-4 text-sm font-light text-emerald-500 dark:text-emerald-400"
                                        >
                                            <div>
                                                <span>
                                                    کد کالا {{ product.id }}#
                                                </span>
                                            </div>
                                            <span
                                                class="h-4 w-px rounded-full bg-gray-200 dark:bg-white/10"
                                            ></span>
                                            <div>
                                                <a href="#">
                                                    {{
                                                        product.total_comments_count
                                                    }}
                                                    دیدگاه
                                                </a>
                                            </div>
                                        </div>
                                        <!-- users suggestion -->
                                        <div class="mb-4 flex gap-x-2">
                                            <svg
                                                class="h-4 w-4 text-emerald-500 dark:text-emerald-400"
                                            >
                                                <use xlink:href="#like" />
                                            </svg>
                                            <p
                                                class="text-sm font-light text-zinc-500 dark:text-zinc-400"
                                            >
                                                {{
                                                    Math.floor(
                                                        (product.suggested_comments_count /
                                                            (product.suggested_comments_count +
                                                                product.not_suggested_comments_count +
                                                                0.00000001)) *
                                                            100
                                                    )
                                                }}% از خریداران، خرید این کالا
                                                را پیشنهاد کرده‌اند
                                            </p>
                                        </div>

                                        <!-- Property -->
                                        <div v-if="product?.short_description">
                                            <p
                                                class="mb-6 font-medium text-zinc-700 dark:text-white"
                                            >
                                                خلاصه توضیحات
                                            </p>
                                            <div
                                                class="mt-4 min-w-fit text-zinc-500 dark:text-zinc-400 space-y-6"
                                                v-html="
                                                    sanitizeProductShortDescription.replace(
                                                        /(?:\r\n|\r|\n)/g,
                                                        '<br />'
                                                    )
                                                "
                                            ></div>
                                        </div>
                                    </div>

                                    <!-- left side -->
                                    <div
                                        class="col-span-1 flex flex-col mt-auto mb-auto"
                                    >
                                        <a
                                            class="mb-6 flex items-center gap-x-2 rounded-lg bg-yellow-500/10 p-4 text-sm text-yellow-500 dark:bg-yellow-400/5 dark:text-yellow-400"
                                            v-if="product?.spare_parts_url"
                                            href="#spares"
                                        >
                                            مشاهده ی قطعات یدکی
                                        </a>

                                        <!-- verified text -->
                                        <div
                                            class="mb-6 flex items-center gap-x-2 rounded-lg bg-emerald-500/10 p-4 text-sm text-emerald-500 dark:bg-emerald-400/5 dark:text-emerald-400"
                                        >
                                            <svg class="h-6 w-6">
                                                <use xlink:href="#verified" />
                                            </svg>
                                            تضمین سلامت فیزیکی و اصالت کالا
                                        </div>
                                        <div
                                            v-if="
                                                sale1?.inventory &&
                                                sale1.inventory >= 0
                                            "
                                        >
                                            <div v-if="sale1?.prices">
                                                <!-- price -->
                                                <div
                                                    class="mb-6 flex items-center justify-between"
                                                >
                                                    <!--                                                    quantity buttons-->
                                                    <div
                                                        class="flex h-12 w-32 items-center justify-between rounded-lg border border-gray-100 px-4 py-1 dark:border-white/5"
                                                    >
                                                        <button
                                                            @click="
                                                                saleCount =
                                                                    saleCount +
                                                                    1
                                                            "
                                                            type="button"
                                                            data-action="increment"
                                                            :disabled="
                                                                saleCount >=
                                                                sale1.inventory
                                                            "
                                                        >
                                                            <svg
                                                                class="h-6 w-6 text-emerald-500 dark:text-emerald-400"
                                                            >
                                                                <use
                                                                    xlink:href="#plus"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <input
                                                            value="1"
                                                            disabled
                                                            :value="saleCount"
                                                            type="number"
                                                            class="flex h-6 w-6 w-full select-none items-center justify-center bg-transparent text-center text-zinc-700 outline-none dark:text-white"
                                                        />
                                                        <button
                                                            @click="
                                                                saleCount =
                                                                    saleCount -
                                                                    1
                                                            "
                                                            type="button"
                                                            data-action="decrement"
                                                            :disabled="
                                                                saleCount <= 1
                                                            "
                                                        >
                                                            <svg
                                                                class="h-6 w-6 text-red-600 dark:text-red-500"
                                                            >
                                                                <use
                                                                    xlink:href="#minus"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <!-- price -->
                                                    <div>
                                                        <!-- normal Price -->
                                                        <div
                                                            v-if="
                                                                sale1.prices
                                                                    .sale_price >
                                                                sale1.prices
                                                                    .best_price
                                                            "
                                                            class="flex items-center gap-x-2"
                                                        >
                                                            <div>
                                                                <del
                                                                    class="text-sm text-zinc-500 decoration-red-600 dark:text-zinc-400 dark:decoration-red-500 md:text-base"
                                                                >
                                                                    {{
                                                                        sale1.prices.sale_price.toLocaleString(
                                                                            'fa'
                                                                        )
                                                                    }}
                                                                </del>
                                                            </div>
                                                            <div
                                                                class="flex w-10 items-center justify-center rounded-full bg-red-500 py-0.5 text-sm font-bold text-white dark:bg-red-600"
                                                            >
                                                                {{
                                                                    Math.floor(
                                                                        (1 -
                                                                            sale1
                                                                                .prices
                                                                                .best_price /
                                                                                sale1
                                                                                    .prices
                                                                                    .sale_price) *
                                                                            100
                                                                    )
                                                                }}%
                                                            </div>
                                                        </div>
                                                        <!-- best price -->
                                                        <div
                                                            class="flex items-center gap-x-1 text-emerald-500 dark:text-emerald-400"
                                                        >
                                                            <span
                                                                class="text-xl font-bold"
                                                                >{{
                                                                    sale1.prices.best_price.toLocaleString(
                                                                        'fa'
                                                                    )
                                                                }}</span
                                                            >
                                                            <span>تومان</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- add to cart -->
                                                <div class="mb-6">
                                                    <button
                                                        @click="
                                                            addToCartClicked(
                                                                product,
                                                                sale1,
                                                                saleCount
                                                            )
                                                        "
                                                        class="btn-primary w-full py-3"
                                                    >
                                                        افزودن به سبد خرید
                                                    </button>
                                                </div>
                                            </div>
                                            <div
                                                v-else
                                                class="mb-6 flex items-center gap-x-2 rounded-lg justify-center bg-zinc-500/10 p-4 text-sm text-zinc-500 dark:bg-emerald-400/5 dark:text-emerald-400"
                                            >
                                                تماس بگیرید
                                            </div>
                                        </div>
                                        <div
                                            v-else
                                            class="mb-6 flex items-center gap-x-2 rounded-lg justify-center bg-zinc-500/10 p-4 text-sm text-zinc-500 dark:bg-emerald-400/5 dark:text-emerald-400"
                                        >
                                            کالا موجود نیست
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between gap-4">
                            <div
                                class="flex w-full items-center gap-x-2 rounded-lg border border-gray-100 px-2 py-4 text-sm text-zinc-500 dark:border-white/5 dark:text-zinc-400"
                            >
                                <svg class="h-6 w-6">
                                    <use xlink:href="#refund" />
                                </svg>
                                کامل بودن اقلام کالا
                            </div>

                            <div
                                class="flex w-full items-center gap-x-2 rounded-lg border border-gray-100 px-2 py-4 text-sm text-zinc-500 dark:border-white/5 dark:text-zinc-400"
                            >
                                <svg class="h-6 w-6">
                                    <use xlink:href="#verified" />
                                </svg>
                                تضمین اصالت کالا
                            </div>
                            <div
                                class="flex w-full items-center gap-x-2 rounded-lg border border-gray-100 px-2 py-4 text-sm text-zinc-500 dark:border-white/5 dark:text-zinc-400"
                            >
                                <svg class="h-6 w-6">
                                    <use xlink:href="#support" />
                                </svg>
                                هفت روز هفته
                            </div>
                            <div
                                class="flex w-full items-center gap-x-2 rounded-lg border border-gray-100 px-2 py-4 text-sm text-zinc-500 dark:border-white/5 dark:text-zinc-400"
                            >
                                <svg class="h-6 w-6">
                                    <use xlink:href="#fast-delivery" />
                                </svg>
                                تحویل اکسپرس در اصفهان
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Mobile Product Detail-->
                <div class="lg:hidden">
                    <!-- breadcrumb -->
                    <div class="mb-4 flex flex-wrap items-center gap-2">
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
                        class="mb-6 rounded-lg bg-white p-4 shadow-base dark:bg-zinc-900"
                    >
                        <!-- Product Gallery -->
                        <div class="relative mb-4">
                            <swiper-container
                                pagination="true"
                                slides-per-view="1"
                                space-between="10"
                            >
                                <swiper-slide>
                                    <img
                                        :src="product.imageUrl"
                                        :alt="product.name"
                                        class="mx-auto"
                                        loading="lazy"
                                    />
                                </swiper-slide>
                                <swiper-slide
                                    v-for="(
                                        galleryUrl, idx
                                    ) in product.galleryUrls.slice(0, 3)"
                                    :key="idx"
                                >
                                    <img
                                        :src="galleryUrl"
                                        :alt="product.name"
                                        class="mx-auto"
                                        loading="lazy"
                                    />
                                </swiper-slide>
                            </swiper-container>
                            <div class="absolute left-0 top-0 z-10">
                                <div
                                    class="flex items-center gap-x-4 text-zinc-700 dark:text-white"
                                >
                                    <!-- add to favorite -->
                                    <div>
                                        <button>
                                            <svg class="h-6 w-6">
                                                <use xlink:href="#heart" />
                                            </svg>
                                        </button>
                                    </div>
                                    <!-- add to compare -->
                                    <div>
                                        <button>
                                            <svg class="h-6 w-6">
                                                <use xlink:href="#compare" />
                                            </svg>
                                        </button>
                                    </div>

                                    <!-- share on social -->
                                    <div class="relative">
                                        <button
                                            type="button"
                                            onclick="copyToClipboardSocialShareMobile"
                                            :data-link="
                                                route('main') +
                                                '?product=' +
                                                product.id
                                            "
                                        >
                                            <svg class="h-6 w-6">
                                                <use
                                                    xlink:href="#social-share"
                                                />
                                            </svg>
                                        </button>
                                        <div
                                            id="notify-copied-social-share-link-mobile"
                                            class="absolute left-0 top-full z-10 hidden w-24 rounded-lg bg-zinc-900 px-3 py-2 text-center text-sm font-medium text-white shadow-sm transition-opacity duration-300 dark:bg-zinc-800"
                                        >
                                            کپی شد !
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- breadcrumb -->
                        <div class="mb-4 flex flex-wrap items-center gap-2">
                            <div
                                class="flex items-center gap-x-1 text-sm font-light text-emerald-500 dark:text-emerald-400 md:text-base"
                            >
                                <NuxtLink
                                    :href="route('brand', product.brand.slug)"
                                >
                                    {{ product.brand.name }}
                                </NuxtLink>
                                <svg class="h-5 w-5">
                                    <use xlink:href="#chevron-left" />
                                </svg>
                            </div>
                        </div>
                        <!-- title -->
                        <div
                            class="mb-4 font-semibold text-zinc-700 dark:text-white md:text-lg"
                        >
                            {{ product.name }}
                        </div>
                        <!-- comments & SKU -->
                        <div
                            class="flex gap-x-4 text-sm font-light text-emerald-500 dark:text-emerald-400 md:text-base"
                        >
                            <div>
                                <span> کد کالا {{ product.id }}# </span>
                            </div>
                            <div>
                                <a href="#">
                                    {{ product.total_comments_count }} دیدگاه
                                </a>
                            </div>
                        </div>
                        <div
                            class="my-4 h-px w-full bg-gray-100 dark:bg-white/5"
                        ></div>
                        <!-- variant -->
                        <div
                            v-if="sale1?.inventory && sale1.inventory > 0"
                            class="mb-6 space-y-4"
                        >
                            <!-- Quantity -->
                            <div
                                class="mb-4 text-sm text-zinc-700 dark:text-white md:text-base"
                            >
                                انتخاب تعداد
                            </div>
                            <div
                                class="flex h-12 w-40 items-center justify-between rounded-lg border border-gray-100 px-4 py-1 dark:border-white/5"
                            >
                                <button
                                    @click="saleCount = saleCount + 1"
                                    type="button"
                                    data-action="increment"
                                    :disabled="saleCount >= sale1.inventory"
                                >
                                    <svg
                                        class="h-7 w-7 text-emerald-500 dark:text-emerald-400"
                                    >
                                        <use xlink:href="#plus" />
                                    </svg>
                                </button>
                                <input
                                    value="1"
                                    disabled
                                    :value="saleCount"
                                    type="number"
                                    class="flex h-6 w-6 w-full select-none items-center justify-center bg-transparent text-center text-zinc-700 outline-none dark:text-white"
                                />
                                <button
                                    @click="saleCount = saleCount - 1"
                                    type="button"
                                    data-action="decrement"
                                    :disabled="saleCount <= 1"
                                >
                                    <svg
                                        class="h-7 w-7 text-red-600 dark:text-red-500"
                                    >
                                        <use xlink:href="#minus" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div
                                class="flex items-center gap-x-2 rounded-lg border border-gray-100 px-4 py-3 text-sm text-zinc-500 dark:border-white/5 dark:text-zinc-400"
                            >
                                <svg class="h-5 w-5">
                                    <use xlink:href="#refund" />
                                </svg>
                                کامل بودن اقلام کالا
                            </div>

                            <div
                                class="flex items-center gap-x-2 rounded-lg border border-gray-100 px-4 py-3 text-sm text-zinc-500 dark:border-white/5 dark:text-zinc-400"
                            >
                                <svg class="h-6 w-6">
                                    <use xlink:href="#verified" />
                                </svg>
                                تضمین اصالت کالا
                            </div>
                            <div
                                class="flex items-center gap-x-2 rounded-lg border border-gray-100 px-4 py-3 text-sm text-zinc-500 dark:border-white/5 dark:text-zinc-400"
                            >
                                <svg class="h-6 w-6">
                                    <use xlink:href="#support" />
                                </svg>
                                هفت روز هفته
                            </div>
                            <div
                                class="flex items-center gap-x-2 rounded-lg border border-gray-100 px-4 py-3 text-sm text-zinc-500 dark:border-white/5 dark:text-zinc-400"
                            >
                                <svg class="h-6 w-6">
                                    <use xlink:href="#fast-delivery" />
                                </svg>
                                تحویل اکسپرس در اصفهان
                            </div>
                        </div>
                    </div>
                    <!-- Property -->
                    <div
                        v-if="product?.short_description"
                        class="mb-6 rounded-lg bg-white p-4 shadow-base dark:bg-zinc-900 lg:hidden"
                    >
                        <p class="mb-6 text-zinc-700 dark:text-white">
                            خلاصه توضیحات
                        </p>
                        <div
                            class="min-w-fit text-sm text-zinc-600 dark:text-zinc-300"
                            v-html="
                                sanitizeProductShortDescription.replace(
                                    /(?:\r\n|\r|\n)/g,
                                    '<br />'
                                )
                            "
                        ></div>
                    </div>

                    <!-- Add to Cart -->
                    <div
                        class="fixed inset-x-0 bottom-0 z-10 bg-white p-5 dark:bg-zinc-900"
                    >
                        <div v-if="sale1?.inventory && sale1.inventory >= 0">
                            <div
                                v-if="sale1?.prices"
                                class="flex items-center justify-between gap-x-6"
                            >
                                <!-- Button -->
                                <div class="flex grow">
                                    <button
                                        @click="
                                            addToCartClicked(
                                                product,
                                                sale1,
                                                saleCount
                                            )
                                        "
                                        class="btn-primary w-full px-4 py-3 text-sm"
                                    >
                                        افزودن به سبد خرید
                                    </button>
                                </div>
                                <!-- Price -->
                                <div class="space-y-1">
                                    <!-- Old Price -->
                                    <div
                                        v-if="
                                            sale1.prices.sale_price >
                                            sale1.prices.best_price
                                        "
                                        class="flex items-center gap-x-2"
                                    >
                                        <div>
                                            <del
                                                class="text-sm text-zinc-500 decoration-red-600 dark:text-zinc-400 dark:decoration-red-500 md:text-base"
                                            >
                                                {{
                                                    sale1.prices.sale_price.toLocaleString(
                                                        'fa'
                                                    )
                                                }}
                                            </del>
                                        </div>
                                        <div
                                            class="flex w-10 items-center justify-center rounded-full bg-red-500 py-0.5 text-sm font-bold text-white dark:bg-red-600"
                                        >
                                            {{
                                                Math.floor(
                                                    (1 -
                                                        sale1.prices
                                                            .best_price /
                                                            sale1.prices
                                                                .sale_price) *
                                                        100
                                                )
                                            }}%
                                        </div>
                                    </div>
                                    <!-- New Price -->
                                    <div
                                        class="text-emerald-500 dark:text-emerald-400"
                                    >
                                        <span class="font-semibold">{{
                                            sale1.prices.best_price.toLocaleString(
                                                'fa'
                                            )
                                        }}</span>
                                        <span class="text-sm font-light"
                                            >تومان</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <div
                                v-else
                                class="flex items-center justify-between gap-x-6"
                            >
                                <div
                                    class="mb-6 flex items-center gap-x-2 rounded-lg justify-center bg-zinc-500/10 p-4 text-sm text-zinc-500 dark:bg-emerald-400/5 dark:text-emerald-400"
                                >
                                    تماس بگیرید
                                </div>
                            </div>
                        </div>
                        <div
                            v-else
                            class="flex items-center rounded-lg justify-center bg-zinc-500/10 p-3 text-sm text-zinc-500 dark:bg-emerald-400/5 dark:text-emerald-400"
                        >
                            کالا موجود نیست
                        </div>
                    </div>
                </div>
                <!--                <div class="mb-6">-->
                <!--                    <div>-->
                <!--                        &lt;!&ndash; Section Header &ndash;&gt;-->
                <!--                        <div class="mb-4 flex items-center justify-between">-->
                <!--                            <h3-->
                <!--                                class="font-medium text-zinc-700 dark:text-white md:text-lg lg:text-xl"-->
                <!--                            >-->
                <!--                                کالاهای مرتبط-->
                <!--                            </h3>-->
                <!--                        </div>-->
                <!--                        &lt;!&ndash; Section Content &ndash;&gt;-->
                <!--                        <div class="swiper product-slider p-px">-->
                <!--                            <div class="swiper-wrapper">-->
                <!--                                <div class="swiper-slide">-->
                <!--                                    &lt;!&ndash; Product Card &ndash;&gt;-->
                <!--                                    <div-->
                <!--                                        class="border-gradient group relative rounded-base p-px before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-base"-->
                <!--                                    >-->
                <!--                                        <div-->
                <!--                                            class="relative rounded-xl bg-white p-2 shadow-base dark:bg-zinc-900 md:p-5"-->
                <!--                                        >-->
                <!--                                            &lt;!&ndash; image &ndash;&gt;-->
                <!--                                            <div class="mb-2 md:mb-5" draggable="false">-->
                <!--                                                <a href="./product-detail.html">-->
                <!--&lt;!&ndash;                                                    <img&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        alt=""&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        class="mx-auto w-32 rounded-lg md:w-auto"&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        src="./assets/images/products/p8.png"&ndash;&gt;-->
                <!--&lt;!&ndash;                                                    />&ndash;&gt;-->
                <!--                                                </a>-->
                <!--                                            </div>-->
                <!--                                            &lt;!&ndash; title &ndash;&gt;-->
                <!--                                            <div class="mb-2">-->
                <!--                                                <a-->
                <!--                                                    class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"-->
                <!--                                                    href="./product-detail.html"-->
                <!--                                                >-->
                <!--                                                    کیف دوشی زنانه درسا مدل 49787-->
                <!--                                                </a>-->
                <!--                                            </div>-->
                <!--                                            &lt;!&ndash; Prices &ndash;&gt;-->
                <!--                                            <div class="flex flex-col">-->
                <!--                                                &lt;!&ndash; Old price &ndash;&gt;-->
                <!--                                                <div class="h-5 text-left">-->
                <!--                                                    <del-->
                <!--                                                        class="text-sm text-zinc-500 decoration-red-600 dark:text-zinc-400 dark:decoration-red-500 md:text-base"-->
                <!--                                                    >-->
                <!--                                                        10,000,000-->
                <!--                                                    </del>-->
                <!--                                                </div>-->
                <!--                                                <div class="flex items-center justify-between">-->
                <!--                                                    <div>-->
                <!--                                                        <p-->
                <!--                                                            class="w-9 rounded-full bg-red-500 py-px text-center text-sm text-white dark:bg-red-500"-->
                <!--                                                        >-->
                <!--                                                            60%-->
                <!--                                                        </p>-->
                <!--                                                    </div>-->
                <!--                                                    &lt;!&ndash; New price &ndash;&gt;-->
                <!--                                                    <div-->
                <!--                                                        class="text-sm font-bold text-emerald-500 dark:text-emerald-400 md:text-base"-->
                <!--                                                    >-->
                <!--                                                        4,000,000-->
                <!--                                                        <span class="text-xs font-light md:text-sm"-->
                <!--                                                        >تومان</span-->
                <!--                                                        >-->
                <!--                                                    </div>-->
                <!--                                                </div>-->
                <!--                                            </div>-->
                <!--                                        </div>-->
                <!--                                    </div>-->
                <!--                                </div>-->
                <!--                                <div class="swiper-slide">-->
                <!--                                    &lt;!&ndash; Product Card &ndash;&gt;-->
                <!--                                    <div-->
                <!--                                        class="border-gradient group relative rounded-base p-px before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-base"-->
                <!--                                    >-->
                <!--                                        <div-->
                <!--                                            class="relative rounded-xl bg-white p-2 shadow-base dark:bg-zinc-900 md:p-5"-->
                <!--                                        >-->
                <!--                                            &lt;!&ndash; image &ndash;&gt;-->
                <!--                                            <div class="mb-2 md:mb-5" draggable="false">-->
                <!--                                                <a href="./product-detail.html">-->
                <!--&lt;!&ndash;                                                    <img&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        alt=""&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        class="mx-auto w-32 rounded-lg md:w-auto"&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        src="./assets/images/products/p1.png"&ndash;&gt;-->
                <!--&lt;!&ndash;                                                    />&ndash;&gt;-->
                <!--                                                </a>-->
                <!--                                            </div>-->
                <!--                                            &lt;!&ndash; title &ndash;&gt;-->
                <!--                                            <div class="mb-2">-->
                <!--                                                <a-->
                <!--                                                    class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"-->
                <!--                                                    href="./product-detail.html"-->
                <!--                                                >-->
                <!--                                                    کفش پیاده روی مردانه نیو بالانس مدل M520LN7-->
                <!--                                                </a>-->
                <!--                                            </div>-->
                <!--                                            &lt;!&ndash; Prices &ndash;&gt;-->
                <!--                                            <div class="flex flex-col">-->
                <!--                                                &lt;!&ndash; Old price &ndash;&gt;-->
                <!--                                                <div class="h-5 text-left">-->
                <!--                                                    <del-->
                <!--                                                        class="text-sm text-zinc-500 decoration-red-600 dark:text-zinc-400 dark:decoration-red-500 md:text-base"-->
                <!--                                                    >-->
                <!--                                                        10,000,000-->
                <!--                                                    </del>-->
                <!--                                                </div>-->
                <!--                                                <div class="flex items-center justify-between">-->
                <!--                                                    <div>-->
                <!--                                                        <p-->
                <!--                                                            class="w-9 rounded-full bg-red-500 py-px text-center text-sm text-white dark:bg-red-500"-->
                <!--                                                        >-->
                <!--                                                            50%-->
                <!--                                                        </p>-->
                <!--                                                    </div>-->
                <!--                                                    &lt;!&ndash; New price &ndash;&gt;-->
                <!--                                                    <div-->
                <!--                                                        class="text-sm font-bold text-emerald-500 dark:text-emerald-400 md:text-base"-->
                <!--                                                    >-->
                <!--                                                        5,000,000-->
                <!--                                                        <span class="text-xs font-light md:text-sm"-->
                <!--                                                        >تومان</span-->
                <!--                                                        >-->
                <!--                                                    </div>-->
                <!--                                                </div>-->
                <!--                                            </div>-->
                <!--                                        </div>-->
                <!--                                    </div>-->
                <!--                                </div>-->

                <!--                                <div class="swiper-slide">-->
                <!--                                    <div-->
                <!--                                        class="border-gradient group relative rounded-base p-px before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-base"-->
                <!--                                    >-->
                <!--                                        &lt;!&ndash; Product Card &ndash;&gt;-->
                <!--                                        <div-->
                <!--                                            class="relative rounded-xl bg-white p-2 shadow-base dark:bg-zinc-900 md:p-5"-->
                <!--                                        >-->
                <!--                                            &lt;!&ndash; image &ndash;&gt;-->
                <!--                                            <div class="mb-2 md:mb-5" draggable="false">-->
                <!--                                                <a href="./product-detail.html">-->
                <!--&lt;!&ndash;                                                    <img&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        alt=""&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        class="mx-auto w-32 rounded-lg md:w-auto"&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        src="./assets/images/products/p6.png"&ndash;&gt;-->
                <!--&lt;!&ndash;                                                    />&ndash;&gt;-->
                <!--                                                </a>-->
                <!--                                            </div>-->
                <!--                                            &lt;!&ndash; title &ndash;&gt;-->
                <!--                                            <div class="mb-2">-->
                <!--                                                <a-->
                <!--                                                    class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"-->
                <!--                                                    href="./product-detail.html"-->
                <!--                                                >-->
                <!--                                                    کیف اداری مردانه درسا مدل 53156-->
                <!--                                                </a>-->
                <!--                                            </div>-->
                <!--                                            &lt;!&ndash; Prices &ndash;&gt;-->
                <!--                                            <div class="flex flex-col">-->
                <!--                                                &lt;!&ndash; Old price &ndash;&gt;-->
                <!--                                                <div class="h-5 text-left">-->
                <!--                                                    <del-->
                <!--                                                        class="text-sm text-zinc-500 decoration-red-600 dark:text-zinc-400 dark:decoration-red-500 md:text-base"-->
                <!--                                                    >-->
                <!--                                                        10,000,000-->
                <!--                                                    </del>-->
                <!--                                                </div>-->
                <!--                                                <div class="flex items-center justify-between">-->
                <!--                                                    <div>-->
                <!--                                                        <p-->
                <!--                                                            class="w-9 rounded-full bg-red-500 py-px text-center text-sm text-white dark:bg-red-500"-->
                <!--                                                        >-->
                <!--                                                            10%-->
                <!--                                                        </p>-->
                <!--                                                    </div>-->
                <!--                                                    &lt;!&ndash; New price &ndash;&gt;-->
                <!--                                                    <div-->
                <!--                                                        class="text-sm font-bold text-emerald-500 dark:text-emerald-400 md:text-base"-->
                <!--                                                    >-->
                <!--                                                        9,000,000-->
                <!--                                                        <span class="text-xs font-light md:text-sm"-->
                <!--                                                        >تومان</span-->
                <!--                                                        >-->
                <!--                                                    </div>-->
                <!--                                                </div>-->
                <!--                                            </div>-->
                <!--                                        </div>-->
                <!--                                    </div>-->
                <!--                                </div>-->

                <!--                                <div class="swiper-slide">-->
                <!--                                    <div-->
                <!--                                        class="border-gradient group relative rounded-base p-px before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-base"-->
                <!--                                    >-->
                <!--                                        &lt;!&ndash; Product Card &ndash;&gt;-->
                <!--                                        <div-->
                <!--                                            class="relative rounded-xl bg-white p-2 shadow-base dark:bg-zinc-900 md:p-5"-->
                <!--                                        >-->
                <!--                                            &lt;!&ndash; image &ndash;&gt;-->
                <!--                                            <div class="mb-2 md:mb-5" draggable="false">-->
                <!--                                                <a href="./product-detail.html">-->
                <!--&lt;!&ndash;                                                    <img&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        alt=""&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        class="mx-auto w-32 rounded-lg md:w-auto"&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        src="./assets/images/products/p7.png"&ndash;&gt;-->
                <!--&lt;!&ndash;                                                    />&ndash;&gt;-->
                <!--                                                </a>-->
                <!--                                            </div>-->
                <!--                                            &lt;!&ndash; title &ndash;&gt;-->
                <!--                                            <div class="mb-2">-->
                <!--                                                <a-->
                <!--                                                    class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"-->
                <!--                                                    href="./product-detail.html"-->
                <!--                                                >-->
                <!--                                                    کیف دستی دلسی مدل CHATELET AIR 2.0 کد 1676350-->
                <!--                                                </a>-->
                <!--                                            </div>-->
                <!--                                            &lt;!&ndash; Prices &ndash;&gt;-->
                <!--                                            <div class="flex flex-col">-->
                <!--                                                &lt;!&ndash; Old price &ndash;&gt;-->
                <!--                                                <div class="h-5 text-left">-->
                <!--                                                    <del-->
                <!--                                                        class="text-sm text-zinc-500 decoration-red-600 dark:text-zinc-400 dark:decoration-red-500 md:text-base"-->
                <!--                                                    >-->
                <!--                                                        550,000-->
                <!--                                                    </del>-->
                <!--                                                </div>-->
                <!--                                                <div class="flex items-center justify-between">-->
                <!--                                                    <div>-->
                <!--                                                        <p-->
                <!--                                                            class="w-9 rounded-full bg-red-500 py-px text-center text-sm text-white dark:bg-red-500"-->
                <!--                                                        >-->
                <!--                                                            10%-->
                <!--                                                        </p>-->
                <!--                                                    </div>-->
                <!--                                                    &lt;!&ndash; New price &ndash;&gt;-->
                <!--                                                    <div-->
                <!--                                                        class="text-sm font-bold text-emerald-500 dark:text-emerald-400 md:text-base"-->
                <!--                                                    >-->
                <!--                                                        500,000-->
                <!--                                                        <span class="text-xs font-light md:text-sm"-->
                <!--                                                        >تومان</span-->
                <!--                                                        >-->
                <!--                                                    </div>-->
                <!--                                                </div>-->
                <!--                                            </div>-->
                <!--                                        </div>-->
                <!--                                    </div>-->
                <!--                                </div>-->

                <!--                                <div class="swiper-slide">-->
                <!--                                    <div-->
                <!--                                        class="border-gradient group relative rounded-base p-px before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-base"-->
                <!--                                    >-->
                <!--                                        &lt;!&ndash; Product Card &ndash;&gt;-->
                <!--                                        <div-->
                <!--                                            class="relative rounded-xl bg-white p-2 shadow-base dark:bg-zinc-900 md:p-5"-->
                <!--                                        >-->
                <!--                                            &lt;!&ndash; image &ndash;&gt;-->
                <!--                                            <div class="mb-2 md:mb-5" draggable="false">-->
                <!--                                                <a href="./product-detail.html">-->
                <!--&lt;!&ndash;                                                    <img&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        alt=""&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        class="mx-auto w-32 rounded-lg md:w-auto"&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        src="./assets/images/products/p2.png"&ndash;&gt;-->
                <!--&lt;!&ndash;                                                    />&ndash;&gt;-->
                <!--                                                </a>-->
                <!--                                            </div>-->
                <!--                                            &lt;!&ndash; title &ndash;&gt;-->
                <!--                                            <div class="mb-2">-->
                <!--                                                <a-->
                <!--                                                    class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"-->
                <!--                                                    href="./product-detail.html"-->
                <!--                                                >-->
                <!--                                                    کفش پیاده روی مردانه نیو بالانس مدل Mdrftlm2-->
                <!--                                                </a>-->
                <!--                                            </div>-->
                <!--                                            &lt;!&ndash; Prices &ndash;&gt;-->
                <!--                                            <div class="flex flex-col">-->
                <!--                                                &lt;!&ndash; Old price &ndash;&gt;-->
                <!--                                                <div class="h-5 text-left">-->
                <!--                                                    <del-->
                <!--                                                        class="text-sm text-zinc-500 decoration-red-600 dark:text-zinc-400 dark:decoration-red-500 md:text-base"-->
                <!--                                                    >-->
                <!--                                                        10,000,000-->
                <!--                                                    </del>-->
                <!--                                                </div>-->
                <!--                                                <div class="flex items-center justify-between">-->
                <!--                                                    <div>-->
                <!--                                                        <p-->
                <!--                                                            class="w-9 rounded-full bg-red-500 py-px text-center text-sm text-white dark:bg-red-500"-->
                <!--                                                        >-->
                <!--                                                            20%-->
                <!--                                                        </p>-->
                <!--                                                    </div>-->
                <!--                                                    &lt;!&ndash; New price &ndash;&gt;-->
                <!--                                                    <div-->
                <!--                                                        class="text-sm font-bold text-emerald-500 dark:text-emerald-400 md:text-base"-->
                <!--                                                    >-->
                <!--                                                        8,000,000-->
                <!--                                                        <span class="text-xs font-light md:text-sm"-->
                <!--                                                        >تومان</span-->
                <!--                                                        >-->
                <!--                                                    </div>-->
                <!--                                                </div>-->
                <!--                                            </div>-->
                <!--                                        </div>-->
                <!--                                    </div>-->
                <!--                                </div>-->
                <!--                                <div class="swiper-slide">-->
                <!--                                    <div-->
                <!--                                        class="border-gradient group relative rounded-base p-px before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-base"-->
                <!--                                    >-->
                <!--                                        &lt;!&ndash; Product Card &ndash;&gt;-->
                <!--                                        <div-->
                <!--                                            class="relative rounded-xl bg-white p-2 shadow-base dark:bg-zinc-900 md:p-5"-->
                <!--                                        >-->
                <!--                                            &lt;!&ndash; image &ndash;&gt;-->
                <!--                                            <div class="mb-2 md:mb-5" draggable="false">-->
                <!--                                                <a href="./product-detail.html">-->
                <!--&lt;!&ndash;                                                    <img&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        alt=""&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        class="mx-auto w-32 rounded-lg md:w-auto"&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        src="./assets/images/products/p5.png"&ndash;&gt;-->
                <!--&lt;!&ndash;                                                    />&ndash;&gt;-->
                <!--                                                </a>-->
                <!--                                            </div>-->
                <!--                                            &lt;!&ndash; title &ndash;&gt;-->
                <!--                                            <div class="mb-2">-->
                <!--                                                <a-->
                <!--                                                    class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"-->
                <!--                                                    href="./product-detail.html"-->
                <!--                                                >-->
                <!--                                                    کفش پیاده روی زنانه مدل LT RBK-->
                <!--                                                </a>-->
                <!--                                            </div>-->
                <!--                                            &lt;!&ndash; Prices &ndash;&gt;-->
                <!--                                            <div class="flex flex-col">-->
                <!--                                                &lt;!&ndash; Old price &ndash;&gt;-->
                <!--                                                <div class="h-5 text-left">-->
                <!--                                                    <del-->
                <!--                                                        class="text-sm text-zinc-500 decoration-red-600 dark:text-zinc-400 dark:decoration-red-500 md:text-base"-->
                <!--                                                    >-->
                <!--                                                        200,000-->
                <!--                                                    </del>-->
                <!--                                                </div>-->
                <!--                                                <div class="flex items-center justify-between">-->
                <!--                                                    <div>-->
                <!--                                                        <p-->
                <!--                                                            class="w-9 rounded-full bg-red-500 py-px text-center text-sm text-white dark:bg-red-500"-->
                <!--                                                        >-->
                <!--                                                            50%-->
                <!--                                                        </p>-->
                <!--                                                    </div>-->
                <!--                                                    &lt;!&ndash; New price &ndash;&gt;-->
                <!--                                                    <div-->
                <!--                                                        class="text-sm font-bold text-emerald-500 dark:text-emerald-400 md:text-base"-->
                <!--                                                    >-->
                <!--                                                        100,000-->
                <!--                                                        <span class="text-xs font-light md:text-sm"-->
                <!--                                                        >تومان</span-->
                <!--                                                        >-->
                <!--                                                    </div>-->
                <!--                                                </div>-->
                <!--                                            </div>-->
                <!--                                        </div>-->
                <!--                                    </div>-->
                <!--                                </div>-->
                <!--                                <div class="swiper-slide">-->
                <!--                                    <div-->
                <!--                                        class="border-gradient group relative rounded-base p-px before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-base"-->
                <!--                                    >-->
                <!--                                        &lt;!&ndash; Product Card &ndash;&gt;-->
                <!--                                        <div-->
                <!--                                            class="relative rounded-xl bg-white p-2 shadow-base dark:bg-zinc-900 md:p-5"-->
                <!--                                        >-->
                <!--                                            &lt;!&ndash; image &ndash;&gt;-->
                <!--                                            <div class="mb-2 md:mb-5" draggable="false">-->
                <!--                                                <a href="./product-detail.html">-->
                <!--&lt;!&ndash;                                                    <img&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        alt=""&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        class="mx-auto w-32 rounded-lg md:w-auto"&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        src="./assets/images/products/p4.png"&ndash;&gt;-->
                <!--&lt;!&ndash;                                                    />&ndash;&gt;-->
                <!--                                                </a>-->
                <!--                                            </div>-->
                <!--                                            &lt;!&ndash; title &ndash;&gt;-->
                <!--                                            <div class="mb-2">-->
                <!--                                                <a-->
                <!--                                                    class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"-->
                <!--                                                    href="./product-detail.html"-->
                <!--                                                >-->
                <!--                                                    کفش پیاده روی زنانه مدل M47767-->
                <!--                                                </a>-->
                <!--                                            </div>-->
                <!--                                            &lt;!&ndash; Prices &ndash;&gt;-->
                <!--                                            <div class="flex flex-col">-->
                <!--                                                &lt;!&ndash; Old price &ndash;&gt;-->
                <!--                                                <div class="h-5 text-left">-->
                <!--                                                    <del-->
                <!--                                                        class="text-sm text-zinc-500 decoration-red-600 dark:text-zinc-400 dark:decoration-red-500 md:text-base"-->
                <!--                                                    >-->
                <!--                                                        440,000-->
                <!--                                                    </del>-->
                <!--                                                </div>-->
                <!--                                                <div class="flex items-center justify-between">-->
                <!--                                                    <div>-->
                <!--                                                        <p-->
                <!--                                                            class="w-9 rounded-full bg-red-500 py-px text-center text-sm text-white dark:bg-red-500"-->
                <!--                                                        >-->
                <!--                                                            10%-->
                <!--                                                        </p>-->
                <!--                                                    </div>-->
                <!--                                                    &lt;!&ndash; New price &ndash;&gt;-->
                <!--                                                    <div-->
                <!--                                                        class="text-sm font-bold text-emerald-500 dark:text-emerald-400 md:text-base"-->
                <!--                                                    >-->
                <!--                                                        400,000-->
                <!--                                                        <span class="text-xs font-light md:text-sm"-->
                <!--                                                        >تومان</span-->
                <!--                                                        >-->
                <!--                                                    </div>-->
                <!--                                                </div>-->
                <!--                                            </div>-->
                <!--                                        </div>-->
                <!--                                    </div>-->
                <!--                                </div>-->
                <!--                                <div class="swiper-slide">-->
                <!--                                    <div-->
                <!--                                        class="border-gradient group relative rounded-base p-px before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-base"-->
                <!--                                    >-->
                <!--                                        &lt;!&ndash; Product Card &ndash;&gt;-->
                <!--                                        <div-->
                <!--                                            class="relative rounded-xl bg-white p-2 shadow-base dark:bg-zinc-900 md:p-5"-->
                <!--                                        >-->
                <!--                                            &lt;!&ndash; image &ndash;&gt;-->
                <!--                                            <div class="mb-2 md:mb-5" draggable="false">-->
                <!--                                                <a href="./product-detail.html">-->
                <!--&lt;!&ndash;                                                    <img&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        alt=""&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        class="mx-auto w-32 rounded-lg md:w-auto"&ndash;&gt;-->
                <!--&lt;!&ndash;                                                        src="./assets/images/products/p3.png"&ndash;&gt;-->
                <!--&lt;!&ndash;                                                    />&ndash;&gt;-->
                <!--                                                </a>-->
                <!--                                            </div>-->
                <!--                                            &lt;!&ndash; title &ndash;&gt;-->
                <!--                                            <div class="mb-2">-->
                <!--                                                <a-->
                <!--                                                    class="line-clamp-2 h-10 text-sm text-zinc-700 dark:text-white md:h-12 md:text-base"-->
                <!--                                                    href="./product-detail.html"-->
                <!--                                                >-->
                <!--                                                    کفش پیاده روی مردانه نیو بالانس مدل Mdrftbg2-->
                <!--                                                </a>-->
                <!--                                            </div>-->
                <!--                                            &lt;!&ndash; Prices &ndash;&gt;-->
                <!--                                            <div class="flex flex-col">-->
                <!--                                                &lt;!&ndash; Old price &ndash;&gt;-->
                <!--                                                <div class="h-5 text-left">-->
                <!--                                                    <del-->
                <!--                                                        class="text-sm text-zinc-500 decoration-red-600 dark:text-zinc-400 dark:decoration-red-500 md:text-base"-->
                <!--                                                    >-->
                <!--                                                        12,000,000-->
                <!--                                                    </del>-->
                <!--                                                </div>-->
                <!--                                                <div class="flex items-center justify-between">-->
                <!--                                                    <div>-->
                <!--                                                        <p-->
                <!--                                                            class="w-9 rounded-full bg-red-500 py-px text-center text-sm text-white dark:bg-red-500"-->
                <!--                                                        >-->
                <!--                                                            15%-->
                <!--                                                        </p>-->
                <!--                                                    </div>-->
                <!--                                                    &lt;!&ndash; New price &ndash;&gt;-->
                <!--                                                    <div-->
                <!--                                                        class="text-sm font-bold text-emerald-500 dark:text-emerald-400 md:text-base"-->
                <!--                                                    >-->
                <!--                                                        10,000,000-->
                <!--                                                        <span class="text-xs font-light md:text-sm"-->
                <!--                                                        >تومان</span-->
                <!--                                                        >-->
                <!--                                                    </div>-->
                <!--                                                </div>-->
                <!--                                            </div>-->
                <!--                                        </div>-->
                <!--                                    </div>-->
                <!--                                </div>-->
                <!--                            </div>-->
                <!--                            <div class="swiper-button-next"></div>-->
                <!--                            <div class="swiper-button-prev"></div>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
                <!-- description / specs / commment  -->
                <div
                    class="rounded-lg bg-white p-4 shadow-base dark:bg-zinc-900"
                >
                    <div class="mb-6">
                        <ul
                            class="-mb-px flex justify-between gap-x-2 border-b border-gray-100 text-center text-sm font-medium dark:border-white/5 xs:justify-start xs:gap-x-4 xs:text-base"
                        >
                            <li>
                                <a
                                    href="#description"
                                    class="inline-block rounded-t-lg border-b-2 border-transparent px-2 pb-2 text-zinc-700 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                                >
                                    معرفی
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#specs"
                                    class="inline-block rounded-t-lg border-b-2 border-transparent px-2 pb-2 text-zinc-700 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                                >
                                    مشخصات
                                </a>
                            </li>
                            <li v-if="product?.spare_parts_url">
                                <a
                                    href="#spares"
                                    class="inline-block rounded-t-lg border-b-2 border-transparent px-2 pb-2 text-zinc-700 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                                >
                                    قطعات یدکی
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#comments"
                                    class="relative inline-block rounded-t-lg border-b-2 border-transparent px-2 pb-2 text-zinc-700 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                                >
                                    دیدگاه ها
                                    <span
                                        class="absolute -left-5 -top-4 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs text-white dark:bg-emerald-600 dark:text-white xs:text-sm"
                                    >
                                        {{ product.total_comments_count }}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="space-y-16 divide-y divide-gray-100 dark:divide-white/5"
                    >
                        <div class="py-6" id="description">
                            <div
                                class="relative mb-16 w-fit text-xl font-medium text-zinc-700 dark:text-white"
                            >
                                معرفی
                                <span
                                    class="absolute right-0 top-10 h-[3px] w-full rounded-full bg-emerald-500 dark:bg-emerald-400"
                                >
                                </span>
                            </div>
                            <div
                                class="mb-6 max-h-[500px] overflow-hidden md:mb-10"
                                id="descriptionContainer"
                            >
                                <div
                                    class="space-y-4 text-sm leading-loose text-zinc-600 dark:text-zinc-300 lg:text-base"
                                >
                                    <div
                                        v-html="sanitizeProductDescription"
                                        class="product-description"
                                    ></div>
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <button
                                    class="btn-secondary-nobg hidden md:flex"
                                    id="toggleDescriptionButton"
                                >
                                    مشاهده بیشتر
                                    <svg class="h-5 w-5">
                                        <use xlink:href="#chevron-left" />
                                    </svg>
                                </button>
                                <button
                                    id="descriptionButtonMobile"
                                    aria-controls="mobile-description-drawer-navigation"
                                    data-drawer-show="mobile-description-drawer-navigation"
                                    data-drawer-placement="bottom"
                                    data-drawer-target="mobile-description-drawer-navigation"
                                    type="button"
                                    class="btn-secondary-nobg md:hidden"
                                >
                                    مشاهده بیشتر
                                    <svg class="h-5 w-5">
                                        <use xlink:href="#chevron-left" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="py-6" id="specs">
                            <div
                                class="relative mb-16 w-fit text-xl font-medium text-zinc-700 dark:text-white"
                            >
                                مشخصات
                                <span
                                    class="absolute right-0 top-10 h-[3px] w-full rounded-full bg-emerald-500 dark:bg-emerald-400"
                                >
                                </span>
                            </div>
                            <div
                                class="mb-6 max-h-[500px] overflow-hidden md:mb-10"
                                id="specsContainer"
                            >
                                <ul class="space-y-6 text-sm">
                                    <li
                                        v-for="(
                                            attributeValues, attributeName
                                        ) in product.attributes"
                                        :key="attributeName"
                                        class="grid grid-cols-3 gap-x-2 lg:grid-cols-5"
                                    >
                                        <div
                                            class="col-span-1 text-zinc-500 dark:text-zinc-400"
                                        >
                                            {{ attributeName }}
                                        </div>
                                        <div
                                            class="col-span-2 border-b border-gray-100 pb-4 text-zinc-600 dark:border-white/5 dark:text-zinc-300 lg:col-span-4"
                                        >
                                            <ul class="space-y-4">
                                                <li
                                                    v-for="attributeValue in attributeValues"
                                                    :key="attributeValue.id"
                                                >
                                                    {{ attributeValue.value }}
                                                    <span
                                                        v-if="
                                                            attributeValue.unit
                                                        "
                                                        >({{
                                                            attributeValue.unit
                                                        }})</span
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="flex justify-center">
                                <button
                                    class="btn-secondary-nobg hidden md:flex"
                                    id="toggleSpecsButton"
                                >
                                    مشاهده بیشتر
                                    <svg class="h-5 w-5">
                                        <use xlink:href="#chevron-left" />
                                    </svg>
                                </button>
                                <button
                                    id="specsButtonMobile"
                                    class="btn-secondary-nobg md:hidden"
                                    aria-controls="mobile-spec-drawer-navigation"
                                    data-drawer-show="mobile-spec-drawer-navigation"
                                    data-drawer-placement="bottom"
                                    data-drawer-target="mobile-spec-drawer-navigation"
                                    type="button"
                                >
                                    مشاهده بیشتر
                                    <svg class="h-5 w-5">
                                        <use xlink:href="#chevron-left" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div
                            v-if="product?.spare_parts_url"
                            class="py-6"
                            id="spares"
                        >
                            <div
                                class="relative mb-16 w-fit text-xl font-medium text-zinc-700 dark:text-white"
                            >
                                قطعات یدکی
                                <span
                                    class="absolute right-0 top-10 h-[3px] w-full rounded-full bg-emerald-500 dark:bg-emerald-400"
                                >
                                </span>
                            </div>
                            <div
                                class="mb-6 max-h-[500px] overflow-hidden md:mb-10"
                            >
                                <div class="text-sm">
                                    برای مشاهده ی قطعات یدکی وارد لینک زیر شوید.
                                    <NuxtLink
                                        :href="product.spare_parts_url"
                                        class="btn-primary w-full mt-2 px-4 py-2 md:w-1/2"
                                    >
                                        قطعات یدکی {{ product.name }}
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="py-6" id="comments">
                            <div
                                class="relative mb-16 w-fit text-xl font-medium text-zinc-700 dark:text-white"
                            >
                                دیدگاه ها
                                <span
                                    class="absolute right-0 top-10 h-[3px] w-full rounded-full bg-emerald-500 dark:bg-emerald-400"
                                >
                                </span>
                            </div>

                            <div>
                                <div class="grid grid-cols-12 gap-y-8 md:gap-8">
                                    <!-- Submit New Comment -->
                                    <div
                                        class="col-span-12 md:col-span-4 lg:col-span-3"
                                    >
                                        <div
                                            class="grid grid-cols-2 gap-4 md:sticky md:top-32"
                                        >
                                            <div
                                                class="text-lg text-zinc-700 dark:text-white"
                                            >
                                                ثبت دیدگاه
                                            </div>
                                            <div class="col-span-2">
                                                <label
                                                    for="title"
                                                    class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                                                >
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        v-model="
                                                            createCommentFrom.title
                                                        "
                                                        class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                                        placeholder="عنوان دیدگاه"
                                                    />

                                                    <span
                                                        class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-zinc-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-zinc-300"
                                                    >
                                                        عنوان دیدگاه
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="col-span-2">
                                                <!-- Suggestion -->
                                                <div
                                                    class="mb-4 text-sm text-zinc-500 dark:text-zinc-400"
                                                >
                                                    این محصول را به دیگران
                                                    پیشنهاد
                                                </div>
                                                <fieldset
                                                    class="flex items-center gap-4"
                                                >
                                                    <legend class="sr-only">
                                                        Suggestion
                                                    </legend>

                                                    <div class="w-full">
                                                        <input
                                                            type="radio"
                                                            name="suggest"
                                                            value="1"
                                                            v-model="
                                                                createCommentFrom.suggest
                                                            "
                                                            id="suggest-like"
                                                            class="peer hidden"
                                                        />

                                                        <label
                                                            for="suggest-like"
                                                            class="relative block cursor-pointer rounded-lg border border-gray-100 p-2 shadow-base peer-checked:border-emerald-500 hover:border-gray-200 dark:border-white/5 peer-checked:dark:border-emerald-400 dark:hover:border-white/10"
                                                        >
                                                            <div
                                                                class="flex items-center gap-x-2 text-emerald-500 dark:text-emerald-400"
                                                            >
                                                                <svg
                                                                    class="h-5 w-5"
                                                                >
                                                                    <use
                                                                        xlink:href="#like"
                                                                    />
                                                                </svg>
                                                                <p
                                                                    class="text-sm xs:text-base"
                                                                >
                                                                    میکنم
                                                                </p>
                                                            </div>
                                                        </label>
                                                    </div>

                                                    <div class="w-full">
                                                        <input
                                                            type="radio"
                                                            name="suggest"
                                                            v-model="
                                                                createCommentFrom.suggest
                                                            "
                                                            value="0"
                                                            id="suggest-dislike"
                                                            class="peer hidden"
                                                        />

                                                        <label
                                                            for="suggest-dislike"
                                                            class="relative block cursor-pointer rounded-lg border border-gray-100 p-2 shadow-base peer-checked:border-red-500 hover:border-gray-200 dark:border-white/5 peer-checked:dark:border-red-400 dark:hover:border-white/10"
                                                        >
                                                            <div
                                                                class="flex items-center gap-x-2 text-red-500 dark:text-red-400"
                                                            >
                                                                <svg
                                                                    class="h-5 w-5"
                                                                >
                                                                    <use
                                                                        xlink:href="#dislike"
                                                                    />
                                                                </svg>
                                                                <p
                                                                    class="text-sm xs:text-base"
                                                                >
                                                                    نمیکنم
                                                                </p>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div class="col-span-2">
                                                <label
                                                    for="comment"
                                                    class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                                                >
                                                    <textarea
                                                        type="text"
                                                        id="comment"
                                                        rows="3"
                                                        v-model="
                                                            createCommentFrom.body
                                                        "
                                                        class="main-scroll peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                                        placeholder="متن دیدگاه"
                                                    ></textarea>

                                                    <span
                                                        class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-zinc-600 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-zinc-300"
                                                    >
                                                        متن دیدگاه
                                                    </span>
                                                </label>
                                            </div>
                                            <div
                                                class="col-span-2 flex justify-end"
                                            >
                                                <button
                                                    @click="
                                                        sendComment(
                                                            createCommentFrom.title,
                                                            createCommentFrom.body,
                                                            createCommentFrom.suggest,
                                                            null
                                                        )
                                                    "
                                                    class="btn-primary w-full px-4 py-2 md:w-auto"
                                                >
                                                    ارسال دیدگاه
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Comments -->
                                    <div
                                        class="order-first col-span-12 mb-10 max-h-[500px] overflow-hidden md:order-last md:col-span-8 lg:col-span-9"
                                        id="commentsContainer"
                                    >
                                        <!-- Desktop Comments -->
                                        <div class="hidden md:block">
                                            <ul
                                                class="mb-8 space-y-4 divide-y divide-gray-200 dark:divide-white/10"
                                            >
                                                <li
                                                    v-for="comment in comments"
                                                    :key="comment.id"
                                                    class="space-y-2"
                                                >
                                                    <div class="py-6">
                                                        <div
                                                            class="flex items-center justify-between gap-2"
                                                        >
                                                            <h5
                                                                class="mb-4 leading-relaxed text-zinc-700 dark:text-white xl:text-lg"
                                                            >
                                                                {{
                                                                    comment.title
                                                                }}
                                                            </h5>
                                                            <button
                                                                data-modal-target="submit-answers-to-comments-drawer-navigation"
                                                                data-modal-toggle="submit-answers-to-comments-drawer-navigation"
                                                                type="button"
                                                                class="btn-secondary-nobg"
                                                                @click="
                                                                    createCommentFrom.parent_id =
                                                                        comment.id
                                                                "
                                                            >
                                                                پاسخ
                                                                <svg
                                                                    class="w-5 h-5"
                                                                >
                                                                    <use
                                                                        xlink:href="#chevron-left"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div
                                                            class="mb-6 flex items-center gap-x-4 border-b border-gray-100 pb-6 dark:border-white/5"
                                                        >
                                                            <div
                                                                v-if="
                                                                    comment.suggest
                                                                "
                                                                class="flex items-center gap-x-2 text-emerald-500 dark:text-emerald-400"
                                                            >
                                                                <svg
                                                                    class="h-5 w-5"
                                                                >
                                                                    <use
                                                                        xlink:href="#like"
                                                                    />
                                                                </svg>
                                                                پیشنهاد میکنم
                                                            </div>
                                                            <div
                                                                v-else
                                                                class="flex items-center gap-x-2 text-red-500 dark:text-red-400"
                                                            >
                                                                <svg
                                                                    class="h-5 w-5"
                                                                >
                                                                    <use
                                                                        xlink:href="#dislike"
                                                                    />
                                                                </svg>
                                                                پیشنهاد نمیکنم
                                                            </div>
                                                            <div
                                                                class="flex items-center gap-x-2"
                                                            >
                                                                <div
                                                                    class="text-sm text-zinc-500 dark:text-zinc-400"
                                                                >
                                                                    {{
                                                                        comment.created_at
                                                                    }}
                                                                </div>
                                                                <span
                                                                    class="h-3 w-px rounded-full bg-gray-200 dark:bg-white/10"
                                                                ></span>
                                                                <div
                                                                    class="text-sm text-zinc-500 dark:text-zinc-400"
                                                                >
                                                                    <!--                                                                    خریدار-->
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="mb-6 border-b border-gray-100 pb-6 dark:border-white/5"
                                                        >
                                                            <p
                                                                class="line-clamp-4 text-sm text-zinc-600 dark:text-zinc-300"
                                                            >
                                                                {{
                                                                    comment.body
                                                                }}
                                                            </p>
                                                        </div>
                                                        <div
                                                            class="flex items-center justify-end gap-x-8"
                                                        >
                                                            <div
                                                                class="text-sm text-zinc-500 dark:text-zinc-400"
                                                            >
                                                                آیا این دیدگاه
                                                                برایتان مفید
                                                                بود؟
                                                            </div>
                                                            <button
                                                                @click="
                                                                    setCommentReaction(
                                                                        comment.id,
                                                                        'like'
                                                                    )
                                                                "
                                                                class="flex items-center gap-x-2 text-emerald-500 transition-all duration-200 hover:text-emerald-400 dark:text-emerald-400 hover:dark:text-emerald-500"
                                                            >
                                                                <span
                                                                    class="text-sm"
                                                                >
                                                                    {{
                                                                        comment.likeCount
                                                                    }}
                                                                </span>
                                                                <svg
                                                                    class="h-6 w-6"
                                                                >
                                                                    <use
                                                                        xlink:href="#like"
                                                                    />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                @click="
                                                                    setCommentReaction(
                                                                        comment.id,
                                                                        'dislike'
                                                                    )
                                                                "
                                                                class="flex items-center gap-x-2 text-red-500 transition-all duration-200 hover:text-red-400 dark:text-red-400 hover:dark:text-red-500"
                                                            >
                                                                <span
                                                                    class="text-sm"
                                                                >
                                                                    {{
                                                                        comment.dislikeCount
                                                                    }}
                                                                </span>
                                                                <svg
                                                                    class="h-6 w-6"
                                                                >
                                                                    <use
                                                                        xlink:href="#dislike"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <!-- Answers -->
                                                    <ul class="space-y-2">
                                                        <li
                                                            v-for="commentChild in comment.children"
                                                            :key="comment.id"
                                                        >
                                                            <div
                                                                class="py-6 pr-8 border-r border-gray-200 dark:border-white/10"
                                                            >
                                                                <div
                                                                    class="flex items-center justify-between"
                                                                >
                                                                    <h5
                                                                        class="mb-4 leading-relaxed text-zinc-700 dark:text-white xl:text-lg"
                                                                    >
                                                                        {{
                                                                            commentChild.title
                                                                        }}
                                                                    </h5>
                                                                    <button
                                                                        data-modal-target="submit-answers-to-comments-drawer-navigation"
                                                                        data-modal-toggle="submit-answers-to-comments-drawer-navigation"
                                                                        type="button"
                                                                        class="btn-secondary-nobg"
                                                                        @click="
                                                                            createCommentFrom.parent_id =
                                                                                comment.id
                                                                        "
                                                                    >
                                                                        پاسخ
                                                                        <svg
                                                                            class="w-5 h-5"
                                                                        >
                                                                            <use
                                                                                xlink:href="#chevron-left"
                                                                            />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                                <div
                                                                    class="mb-6 flex items-center gap-x-4 border-b border-gray-100 pb-6 dark:border-white/5"
                                                                >
                                                                    <div
                                                                        class="flex items-center gap-x-2"
                                                                    >
                                                                        <div
                                                                            class="text-sm text-zinc-500 dark:text-zinc-400"
                                                                        >
                                                                            {{
                                                                                commentChild.created_at
                                                                            }}
                                                                        </div>
                                                                        <span
                                                                            class="h-3 w-px rounded-full bg-grauy-200 dark:bg-black/10"
                                                                        ></span>
                                                                        <div
                                                                            class="text-sm text-zinc-500 dark:text-zinc-400"
                                                                        >
                                                                            <!--                                                                            خریدار-->
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="mb-6 border-b border-gray-100 pb-6 dark:border-white/5"
                                                                >
                                                                    <p
                                                                        class="line-clamp-4 text-sm text-zinc-600 dark:text-zinc-300"
                                                                    >
                                                                        {{
                                                                            commentChild.body
                                                                        }}
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    class="flex items-center justify-end gap-x-8"
                                                                >
                                                                    <div
                                                                        class="text-sm text-zinc-500 dark:text-zinc-400"
                                                                    >
                                                                        آیا این
                                                                        دیدگاه
                                                                        برایتان
                                                                        مفید
                                                                        بود؟
                                                                    </div>
                                                                    <button
                                                                        @click="
                                                                            setCommentReaction(
                                                                                comment.id,
                                                                                'like'
                                                                            )
                                                                        "
                                                                        class="flex items-center gap-x-2 text-emerald-500 transition-all duration-200 hover:text-emerald-400 dark:text-emerald-400 hover:dark:text-emerald-500"
                                                                    >
                                                                        <span
                                                                            class="text-sm"
                                                                        >
                                                                            {{
                                                                                commentChild.likeCount
                                                                            }}
                                                                        </span>
                                                                        <svg
                                                                            class="h-6 w-6"
                                                                        >
                                                                            <use
                                                                                xlink:href="#like"
                                                                            />
                                                                        </svg>
                                                                    </button>
                                                                    <button
                                                                        @click="
                                                                            setCommentReaction(
                                                                                comment.id,
                                                                                'dislike'
                                                                            )
                                                                        "
                                                                        class="flex items-center gap-x-2 text-red-500 transition-all duration-200 hover:text-red-400 dark:text-red-400 hover:dark:text-red-500"
                                                                    >
                                                                        <span
                                                                            class="text-sm"
                                                                        >
                                                                            {{
                                                                                commentChild.dislikeCount
                                                                            }}
                                                                        </span>
                                                                        <svg
                                                                            class="h-6 w-6"
                                                                        >
                                                                            <use
                                                                                xlink:href="#dislike"
                                                                            />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- Mobile Comments -->
                                        <div class="md:hidden">
                                            <swiper-container
                                                free-mode="true"
                                                slides-per-view="auto"
                                                space-between="10"
                                            >
                                                <!-- Comment -->
                                                <swiper-slide
                                                    v-for="comment in comments"
                                                    :key="comment.id"
                                                    class="w-80"
                                                >
                                                    <div
                                                        class="flex h-64 flex-col rounded-lg border border-gray-100 px-4 py-6 dark:border-white/5"
                                                    >
                                                        <!-- head -->
                                                        <div
                                                            class="flex items-center justify-between gap-2 mb-4"
                                                        >
                                                            <div
                                                                v-if="
                                                                    comment.suggest
                                                                "
                                                                class="flex items-center gap-x-2 text-emerald-500 dark:text-emerald-400"
                                                            >
                                                                <svg
                                                                    class="h-5 w-5"
                                                                >
                                                                    <use
                                                                        xlink:href="#like"
                                                                    />
                                                                </svg>
                                                                پیشنهاد میکنم
                                                            </div>
                                                            <div
                                                                v-else
                                                                class="flex items-center gap-x-2 text-red-500 dark:text-red-400"
                                                            >
                                                                <svg
                                                                    class="h-5 w-5"
                                                                >
                                                                    <use
                                                                        xlink:href="#dislike"
                                                                    />
                                                                </svg>
                                                                پیشنهاد نمیکنم
                                                            </div>

                                                            <button
                                                                data-modal-target="submit-answers-to-comments-drawer-navigation"
                                                                data-modal-toggle="submit-answers-to-comments-drawer-navigation"
                                                                type="button"
                                                                class="btn-secondary-nobg"
                                                                @click="
                                                                    createCommentFrom.parent_id =
                                                                        comment.id
                                                                "
                                                            >
                                                                پاسخ
                                                                <svg
                                                                    class="w-5 h-5"
                                                                >
                                                                    <use
                                                                        xlink:href="#chevron-left"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <!-- Comment -->
                                                        <div
                                                            class="flex-grow space-y-2"
                                                        >
                                                            <h5
                                                                class="text-sm leading-relaxed text-zinc-700 dark:text-white"
                                                            >
                                                                {{
                                                                    comment.title
                                                                }}
                                                            </h5>

                                                            <p
                                                                class="line-clamp-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
                                                            >
                                                                {{
                                                                    comment.body
                                                                }}
                                                            </p>
                                                        </div>
                                                        <!-- Footer -->
                                                        <div
                                                            class="flex items-center justify-between"
                                                        >
                                                            <div
                                                                class="flex items-center gap-x-4"
                                                            >
                                                                <button
                                                                    @click="
                                                                        setCommentReaction(
                                                                            comment.id,
                                                                            'like'
                                                                        )
                                                                    "
                                                                    class="relative text-emerald-500 dark:text-emerald-400"
                                                                >
                                                                    <svg
                                                                        class="h-6 w-6"
                                                                    >
                                                                        <use
                                                                            xlink:href="#like"
                                                                        />
                                                                    </svg>
                                                                    <span
                                                                        class="absolute -right-2 top-6 text-sm"
                                                                    >
                                                                        {{
                                                                            comment.likeCount
                                                                        }}
                                                                    </span>
                                                                </button>
                                                                <button
                                                                    @click="
                                                                        setCommentReaction(
                                                                            comment.id,
                                                                            'dislike'
                                                                        )
                                                                    "
                                                                    class="relative text-red-500 dark:text-red-400"
                                                                >
                                                                    <svg
                                                                        class="h-6 w-6"
                                                                    >
                                                                        <use
                                                                            xlink:href="#dislike"
                                                                        />
                                                                    </svg>
                                                                    <span
                                                                        class="absolute -right-2 top-6 text-sm"
                                                                    >
                                                                        {{
                                                                            comment.dislikeCount
                                                                        }}
                                                                    </span>
                                                                </button>
                                                            </div>
                                                            <div
                                                                class="flex items-center gap-x-2"
                                                            >
                                                                <div
                                                                    class="text-xs text-zinc-500 dark:text-zinc-400"
                                                                >
                                                                    {{
                                                                        comment.created_at
                                                                    }}
                                                                </div>
                                                                <span
                                                                    class="h-3 w-px rounded-full bg-gray-200 dark:bg-white/10"
                                                                ></span>
                                                                <div
                                                                    class="text-xs text-zinc-500 dark:text-zinc-400"
                                                                >
                                                                    <!--                                                                        خریدار-->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </swiper-slide>
                                                <!-- Comment -->
                                            </swiper-container>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden justify-center md:flex">
                                <button
                                    class="btn-secondary-nobg"
                                    id="toggleCommentsButton"
                                >
                                    مشاهده بیشتر
                                    <svg class="h-5 w-5">
                                        <use xlink:href="#chevron-left" />
                                    </svg>
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
                                        ) in product.galleryUrls"
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
                                        ) in product.galleryUrls"
                                        :key="idx"
                                        class="rounded-lg border border-gray-100 dark:border-white/5"
                                    >
                                        <img
                                            :src="galleryUrl"
                                            :alt="
                                                product.name +
                                                ' image gallery ' +
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
        <!-- Mobile Comments modal -->
        <div
            aria-labelledby="mobile-comments-drawer-navigation-label"
            class="fixed bottom-0 left-0 right-0 z-40 h-full w-full translate-y-full bg-white transition-transform duration-300 dark:bg-zinc-900"
            id="mobile-comments-drawer-navigation"
            tabindex="-1"
        >
            <div
                class="flex items-center justify-between gap-x-4 border-b border-gray-100 p-4 pb-5 dark:border-white/5"
            >
                <h5 class="text-lg text-zinc-600 dark:text-zinc-300">
                    دیدگاه ها
                </h5>
                <button
                    aria-controls="mobile-comments-drawer-navigation"
                    class="inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-gray-900 dark:text-zinc-300 dark:hover:bg-black dark:hover:text-white"
                    data-drawer-target="mobile-comments-drawer-navigation"
                    data-drawer-hide="mobile-comments-drawer-navigation"
                    type="button"
                >
                    <svg class="h-5 w-5">
                        <use xlink:href="#close" />
                    </svg>

                    <span class="sr-only">Close menu</span>
                </button>
            </div>

            <div class="h-full overflow-y-auto p-4 pb-32">
                <ul class="space-y-6">
                    <li v-for="comment in comments" :key="comment.id">
                        <div
                            class="flex h-64 flex-col rounded-lg border border-gray-100 px-4 py-6 dark:border-white/5"
                        >
                            <!-- head -->
                            <div class="flex items-center justify-between mb-4">
                                <div
                                    v-if="comment.suggest"
                                    class="flex items-center gap-x-2 text-emerald-500 dark:text-emerald-400"
                                >
                                    <svg class="h-5 w-5">
                                        <use xlink:href="#like" />
                                    </svg>
                                    پیشنهاد میکنم
                                </div>
                                <div
                                    v-else
                                    class="flex items-center gap-x-2 text-red-500 dark:text-red-400"
                                >
                                    <svg class="h-5 w-5">
                                        <use xlink:href="#dislike" />
                                    </svg>
                                    پیشنهاد نمیکنم
                                </div>

                                <button
                                    data-modal-target="submit-answers-to-comments-drawer-navigation"
                                    data-modal-toggle="submit-answers-to-comments-drawer-navigation"
                                    type="button"
                                    class="btn-secondary-nobg"
                                    @click="
                                        createCommentFrom.parent_id = comment.id
                                    "
                                >
                                    پاسخ
                                    <svg class="w-5 h-5">
                                        <use xlink:href="#chevron-left" />
                                    </svg>
                                </button>
                            </div>
                            <!-- Comment -->
                            <div class="flex-grow space-y-2">
                                <h5
                                    class="text-sm leading-relaxed text-zinc-700 dark:text-white"
                                >
                                    {{ comment.title }}
                                </h5>
                                <p
                                    class="line-clamp-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
                                >
                                    {{ comment.body }}
                                </p>
                            </div>
                            <!-- Footer -->
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-x-4">
                                    <button
                                        @click="
                                            setCommentReaction(
                                                comment.id,
                                                'like'
                                            )
                                        "
                                        class="relative text-emerald-500 dark:text-emerald-400"
                                    >
                                        <svg class="h-6 w-6">
                                            <use xlink:href="#like" />
                                        </svg>
                                        <span
                                            class="absolute -right-2 top-6 text-sm"
                                        >
                                            {{ comment.likeCount }}
                                        </span>
                                    </button>
                                    <button
                                        @click="
                                            setCommentReaction(
                                                comment.id,
                                                'dislike'
                                            )
                                        "
                                        class="relative text-red-500 dark:text-red-400"
                                    >
                                        <svg class="h-6 w-6">
                                            <use xlink:href="#dislike" />
                                        </svg>
                                        <span
                                            class="absolute -right-2 top-6 text-sm"
                                        >
                                            {{ comment.dislikeCount }}
                                        </span>
                                    </button>
                                </div>
                                <div class="flex items-center gap-x-2">
                                    <div
                                        class="text-xs text-zinc-500 dark:text-zinc-400"
                                    >
                                        {{ comment.created_at }}
                                    </div>
                                    <span
                                        class="h-3 w-px rounded-full bg-gray-200 dark:bg-white/10"
                                    ></span>
                                    <div
                                        class="text-xs text-zinc-500 dark:text-zinc-400"
                                    >
                                        <!--                                        خریدار-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Mobile Spec modal -->
        <div
            aria-labelledby="mobile-spec-drawer-navigation-label"
            class="fixed bottom-0 left-0 right-0 z-40 h-full w-full translate-y-full bg-white transition-transform duration-300 dark:bg-zinc-900"
            id="mobile-spec-drawer-navigation"
            tabindex="-1"
        >
            <div
                class="flex items-center justify-between gap-x-4 border-b border-gray-100 p-4 pb-5 dark:border-white/5"
            >
                <h5 class="text-lg text-zinc-600 dark:text-zinc-300">مشخصات</h5>
                <button
                    aria-controls="mobile-spec-drawer-navigation"
                    class="inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-gray-900 dark:text-zinc-300 dark:hover:bg-black dark:hover:text-white"
                    data-drawer-hide="mobile-spec-drawer-navigation"
                    type="button"
                >
                    <svg class="h-5 w-5">
                        <use xlink:href="#close" />
                    </svg>

                    <span class="sr-only">Close menu</span>
                </button>
            </div>

            <div class="h-full overflow-y-auto p-4 pb-32">
                <ul class="space-y-6 text-sm">
                    <li
                        v-for="(
                            attributeValues, attributeName
                        ) in product.attributes"
                        :key="attributeName"
                        class="grid grid-cols-3 gap-x-2 lg:grid-cols-5"
                    >
                        <div
                            class="col-span-1 text-zinc-500 dark:text-zinc-400"
                        >
                            {{ attributeName }}
                        </div>
                        <div
                            class="col-span-2 border-b border-gray-100 pb-4 text-zinc-600 dark:border-white/5 dark:text-zinc-300 lg:col-span-4"
                        >
                            <ul class="space-y-4">
                                <li
                                    v-for="attributeValue in attributeValues"
                                    :key="attributeValue.id"
                                >
                                    {{ attributeValue.value }}
                                    <span v-if="attributeValue.unit"
                                        >({{ attributeValue.unit }})</span
                                    >
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Mobile Description modal -->
        <div
            aria-labelledby="mobile-description-drawer-navigation-label"
            class="fixed bottom-0 left-0 right-0 z-40 h-full w-full translate-y-full bg-white transition-transform duration-300 dark:bg-zinc-900"
            id="mobile-description-drawer-navigation"
            tabindex="-1"
        >
            <div
                class="flex items-center justify-between gap-x-4 border-b border-gray-100 p-4 pb-5 dark:border-white/5"
            >
                <h5 class="text-lg text-zinc-600 dark:text-zinc-300">معرفی</h5>
                <button
                    aria-controls="mobile-description-drawer-navigation"
                    class="inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-gray-900 dark:text-zinc-300 dark:hover:bg-black dark:hover:text-white"
                    data-drawer-hide="mobile-description-drawer-navigation"
                    type="button"
                >
                    <svg class="h-5 w-5">
                        <use xlink:href="#close" />
                    </svg>

                    <span class="sr-only">Close menu</span>
                </button>
            </div>

            <div class="h-full overflow-y-auto p-4 pb-32">
                <div
                    class="space-y-4 text-sm leading-loose text-zinc-600 dark:text-zinc-300 lg:text-base"
                >
                    <div
                        v-html="sanitizeProductDescription"
                        class="product-description"
                    ></div>
                </div>
            </div>
        </div>

        <!-- Submit answer to Comments modal -->

        <div
            id="submit-answers-to-comments-drawer-navigation"
            tabindex="-1"
            aria-hidden="true"
            class="main-scroll fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0"
        >
            <div class="relative max-h-full w-full max-w-2xl">
                <div
                    class="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white shadow ring-1 ring-gray-100 dark:divide-white/5 dark:bg-zinc-900 dark:ring-white/5"
                >
                    <div class="px-4 py-5 sm:px-6">
                        <div class="flex items-center justify-between">
                            <h5
                                class="text-zinc-700 dark:text-white md:text-lg"
                            >
                                ثبت پاسخ
                            </h5>

                            <button
                                class="text-zinc-700 dark:text-white"
                                data-modal-hide="submit-answers-to-comments-drawer-navigation"
                                type="button"
                            >
                                <svg class="h-5 w-5">
                                    <use xlink:href="#close" />
                                </svg>

                                <span class="sr-only">Close menu</span>
                            </button>
                        </div>
                    </div>
                    <div class="space-y-6 px-4 py-5 sm:p-6">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="col-span-2">
                                <label
                                    for="title"
                                    class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                                >
                                    <input
                                        type="text"
                                        id="title"
                                        v-model="createCommentFrom.title"
                                        class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                        placeholder="عنوان دیدگاه"
                                    />

                                    <span
                                        class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-zinc-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-zinc-300"
                                    >
                                        عنوان دیدگاه
                                    </span>
                                </label>
                            </div>
                            <div class="col-span-2">
                                <label
                                    for="comment"
                                    class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                                >
                                    <textarea
                                        type="text"
                                        id="comment"
                                        v-model="createCommentFrom.body"
                                        rows="3"
                                        class="main-scroll peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                        placeholder="متن دیدگاه"
                                    ></textarea>

                                    <span
                                        class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-zinc-600 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-zinc-300"
                                    >
                                        متن دیدگاه
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-end">
                            <!--                                todo set comment.parent_id for answers-->

                            <button
                                @click="
                                    sendComment(
                                        createCommentFrom.title,
                                        createCommentFrom.body,
                                        null,
                                        createCommentFrom.parent_id
                                    )
                                "
                                data-modal-target="submit-answers-to-comments-drawer-navigation"
                                data-modal-hide="submit-answers-to-comments-drawer-navigation"
                                class="btn-primary w-full px-4 py-2 md:w-auto"
                            >
                                ثبت پاسخ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer1></Footer1>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';

import Header1 from '../Layouts/Headers/Header.vue';
import Footer1 from '../Layouts/Footeres/Footer.vue';

import { useCartStore } from '../../../stores/cart';
import axios from 'axios';
import { toast } from 'vue3-toastify';
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
        commentsJson: {
            type: String,
            required: true,
        },
    },
    setup({ productJson, commentsJson }) {
        const product = JSON.parse(productJson);
        const sale1 = product.sales[0];

        const saleCount = ref(1);
        function addToCartClicked(product, sale, count = 1) {
            useCartStore().addToCart(
                sale.id,
                product.name,
                location.href,
                product.imageUrl,
                sale?.prices?.best_price,
                sale?.prices?.sale_price,
                product.package_weight,
                product.id,
                count
            ); // Call the addToCart action in the store
        }

        const copyToClipboardSocialShareDesktop = (e) => {
            const linkToCopy = e.currentTarget.getAttribute('data-link');
            if (linkToCopy) {
                navigator.clipboard
                    .writeText(linkToCopy)
                    .then(function () {
                        const copyToClipboardSocialShareText =
                            document.getElementById(
                                'copyToClipboardSocialShareText'
                            );
                        copyToClipboardSocialShareText.innerText = 'کپی شد !';

                        // Revert the text after 5 seconds
                        setTimeout(function () {
                            copyToClipboardSocialShareText.innerText =
                                'کپی کردن لینک';
                        }, 5000);
                    })
                    .catch(function (err) {
                        console.error('مشکلی در عملیات پیش آمد', err);
                    });
            }
        };
        const copyToClipboardSocialShareMobile = (e) => {
            const linkToCopy = e.currentTarget.getAttribute('data-link');
            if (linkToCopy) {
                navigator.clipboard
                    .writeText(linkToCopy)
                    .then(function () {
                        const copyToClipboardSocialShareNotifyMobile =
                            document.getElementById(
                                'notify-copied-social-share-link-mobile'
                            );
                        copyToClipboardSocialShareNotifyMobile.classList.remove(
                            'hidden'
                        );

                        // Revert the text after 5 seconds
                        setTimeout(function () {
                            copyToClipboardSocialShareNotifyMobile.classList.add(
                                'hidden'
                            );
                        }, 5000);
                    })
                    .catch(function (err) {
                        console.error('مشکلی در عملیات پیش آمد', err);
                    });
            }
        };

        // Define a function to handle the toggling of content and buttons
        function toggleContent(container, button) {
            if (container.offsetHeight !== 500) {
                button.remove();
            }

            button.addEventListener('click', () => {
                if (container.classList.contains('max-h-[500px]')) {
                    container.classList.remove('max-h-[500px]');
                    button.innerHTML =
                        'بستن <svg class="w-5 h-5"><use xlink:href="#chevron-left"/></svg>';
                } else {
                    container.classList.add('max-h-[500px]');
                    button.innerHTML =
                        'مشاهده بیشتر <svg class="w-5 h-5"><use xlink:href="#chevron-left"/></svg>';
                }
            });
        }

        const sanitizeProductDescription = product.description;
        const sanitizeProductShortDescription = product.short_description;

        onMounted(() => {
            // Find and toggle the description content
            const descriptionContainer = document.getElementById(
                'descriptionContainer'
            );
            const toggleDescriptionButton = document.getElementById(
                'toggleDescriptionButton'
            );
            const descriptionButtonMobile = document.getElementById(
                'descriptionButtonMobile'
            );
            if (descriptionContainer.offsetHeight !== 500) {
                descriptionButtonMobile.remove();
            }
            toggleContent(descriptionContainer, toggleDescriptionButton);

            // Find and toggle the specs content
            const specsContainer = document.getElementById('specsContainer');
            const toggleSpecsButton =
                document.getElementById('toggleSpecsButton');
            const specsButtonMobile =
                document.getElementById('specsButtonMobile');
            if (specsContainer.offsetHeight !== 500) {
                specsButtonMobile.remove();
            }
            toggleContent(specsContainer, toggleSpecsButton);

            // Find and toggle the comments content
            const commentsContainer =
                document.getElementById('commentsContainer');
            const toggleCommentsButton = document.getElementById(
                'toggleCommentsButton'
            );
            toggleContent(commentsContainer, toggleCommentsButton);
        });

        // *** comment ***

        const comments = JSON.parse(commentsJson);

        const createCommentFrom = ref({
            title: null,
            body: null,
            suggest: null,
            parent_id: null,
        });
        const sendingComment = ref(false);
        function sendComment(title, body, suggest, parent_id) {
            sendingComment.value = true;

            axios
                .post(route('api.comments.send'), {
                    title: title,
                    body: body,
                    parent_id: parent_id,
                    commentable_type: 'Product',
                    commentable_id: product.id,
                    suggest: suggest,
                })
                .then(() => {
                    toast.success('نظر شما ثبت شد و پس از تایید پخش می شود.');
                    createCommentFrom.value.title = null;
                    createCommentFrom.value.body = null;
                    createCommentFrom.value.suggest = null;
                    createCommentFrom.value.parent_id = null;
                })
                .catch((error) => {
                    console.log(error.response.data.errors);
                    if (error.response.status === 401) {
                        toast.error('برای ثبت نظر ابتدا باید وارد شوید.');
                    } else {
                        let errorMessage = '';

                        for (const key in error.response.data.errors) {
                            if (
                                error.response.data.errors.hasOwnProperty(key)
                            ) {
                                const value = error.response.data.errors[key];
                                errorMessage += `${key}: ${value}, `;
                            }
                        }
                        toast.error(errorMessage);
                    }
                })
                .finally(() => {
                    sendingComment.value = false;
                });
        }

        function setCommentReaction(comment_id, reaction) {
            axios
                .patch(route('api.comments.set-reaction', comment_id), {
                    reaction: reaction,
                })
                .then(() => {})
                .catch((error) => {
                    console.log(error.response.data.errors);
                    if (error.response.status === 401) {
                        toast.error('برای ثبت نظر ابتدا باید وارد شوید.');
                    } else {
                        let errorMessage = '';

                        for (const key in error.response.data.errors) {
                            if (
                                error.response.data.errors.hasOwnProperty(key)
                            ) {
                                const value = error.response.data.errors[key];
                                errorMessage += `${key}: ${value}, `;
                            }
                        }
                        toast.error(errorMessage);
                    }
                });
        }

        return {
            copyToClipboardSocialShareDesktop,
            copyToClipboardSocialShareMobile,
            product,
            sale1,
            addToCartClicked,
            saleCount,
            sanitizeProductDescription,
            sanitizeProductShortDescription,
            sendingComment,
            sendComment,
            createCommentFrom,
            comments,
            setCommentReaction,
        };
    },
};
</script>

<style scoped>
.product-description :deep(h2) {
    @apply font-semibold mt-3 mb-1;
}
</style>
