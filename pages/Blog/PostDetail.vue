<template>
    <Head>
        <title>{{ post.title }}</title>
        <!--        <meta name="description" :content="'همه چیز در مورد ' + post.title  + 'را بررسی کنید و با خیال راحت خرید کنید. '" />-->

        <meta property="og:locale" content="fa_IR" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" :content="post.created_at" />
        <meta property="article:modified_time" :content="post.updated_at" />
        <meta property="article:author" :content="post.author.name" />
        <meta property="og:title" :content="post.title" />

        <!--        <meta property="og:description" :content="'اطلاعات، قیمت و مشخصات محصولات برند '+   name   +' را بررسی کنید و با خیال راحت خرید کنید.'" />-->
        <meta property="og:site_name" content="ابزار قطعه" />

        <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <div class="bg-white">
        <Header1></Header1>

        <main class="flex-grow bg-gray-100 pb-14 pt-36 dark:bg-black xs:pt-36">
            <div class="container relative">
                <div class="mb-6 hidden md:block">
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
                                <span class="text-zinc-600 dark:text-zinc-300">
                                    <svg class="h-5 w-5">
                                        <use xlink:href="#chevron-left" />
                                    </svg>
                                </span>
                            </li>
                            <li
                                v-for="(
                                    breadcrumb, breadcrumbIdx
                                ) in post.breadcrumbs"
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
                                        post.breadcrumbs.length - 1
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
                <div class="mb-4 flex flex-wrap items-center gap-2 md:hidden">
                    <div
                        class="flex items-center gap-x-1 text-sm font-light text-emerald-500 dark:text-emerald-400 sm:text-base md:text-base"
                    >
                        <NuxtLink href="/"> ابزار قطعه </NuxtLink>
                        <svg class="h-5 w-5">
                            <use xlink:href="#chevron-left" />
                        </svg>
                    </div>
                    <div
                        v-for="(breadcrumb, breadcrumbIdx) in post.breadcrumbs"
                        :key="breadcrumb.id"
                        class="flex items-center gap-x-1 text-sm font-light text-emerald-500 dark:text-emerald-400 sm:text-base md:text-base"
                    >
                        <NuxtLink :href="breadcrumb.href">
                            {{ breadcrumb.name }}
                        </NuxtLink>
                        <svg
                            v-if="breadcrumbIdx !== post.breadcrumbs.length - 1"
                            class="h-5 w-5"
                        >
                            <use xlink:href="#chevron-left" />
                        </svg>
                    </div>
                </div>
                <div
                    class="grid grid-cols-12 grid-rows-[60px_min(500px,_1fr)] gap-4"
                >
                    <div
                        class="col-span-12 space-y-4 md:col-span-8 lg:col-span-9"
                    >
                        <div
                            class="rounded-lg bg-white p-3 shadow-base dark:bg-zinc-900 md:p-5"
                        >
                            <h1
                                class="mb-8 font-medium text-zinc-700 dark:text-white md:text-xl"
                            >
                                {{ post.title }}
                            </h1>

                            <div
                                class="mb-8 flex flex-col items-center justify-between gap-4 xs:flex-row"
                            >
                                <div
                                    class="flex items-center gap-x-2 text-sm text-zinc-600 dark:text-zinc-300"
                                >
                                    <div class="flex items-center gap-x-2">
                                        <svg class="h-5 w-5">
                                            <use xlink:href="#user" />
                                        </svg>
                                        <p class="font-medium">
                                            {{ post.author.name }}
                                        </p>
                                    </div>
                                    <div
                                        class="h-3 w-px rounded-full bg-gray-200 dark:bg-white/5"
                                    ></div>
                                    <div>
                                        {{
                                            dayjs(post.updated_at)
                                                .locale('fa')
                                                .format('DD / MMMM / YYYY')
                                        }}
                                    </div>
                                </div>
                                <div>
                                    <button
                                        id="dropdownMenuCopySocialShareLink"
                                        data-dropdown-toggle="copy-social-share-link"
                                        data-tooltip-target="share-on-social"
                                        type="button"
                                        class="btn-primary-nobg"
                                    >
                                        <svg class="h-5 w-5">
                                            <use xlink:href="#social-share" />
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
                                                    data-link="#"
                                                    onclick="copyToClipboardSocialShareDesktop(this)"
                                                    class="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sky-500 hover:bg-sky-500/10 dark:text-sky-400 dark:hover:bg-sky-400/10"
                                                >
                                                    <div
                                                        class="flex items-center gap-x-2"
                                                    >
                                                        <svg class="h-6 w-6">
                                                            <use
                                                                xlink:href="#copy"
                                                            ></use>
                                                        </svg>
                                                        <span
                                                            id="copyToClipboardSocialShareText"
                                                        >
                                                            کپی کردن لینک
                                                        </span>
                                                    </div>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-8">
                                <img
                                    :src="post.imageUrl"
                                    :alt="post.title + ' تصویر '"
                                    class="w-full rounded-xl"
                                />
                            </div>

                            <div
                                v-for="(section, index) in post.content"
                                :key="index"
                            >
                                <div v-if="section.type === 'text'">
                                    <div
                                        v-html="section.text"
                                        class="leading-loose text-zinc-600 dark:text-zinc-300"
                                    ></div>
                                </div>
                                <div v-else-if="section.type === 'image'">
                                    <div>
                                        <img
                                            :src="section.url"
                                            :alt="section.alt"
                                            :title="section.title"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Desktop Filter Section -->
                    <div
                        class="col-span-4 row-span-2 hidden md:block lg:col-span-3"
                    >
                        <div class="sticky top-32 mb-4 overflow-hidden">
                            <!-- related Blogs -->
                            <div
                                class="mb-8 rounded-lg bg-white px-2 py-3 shadow-base dark:bg-zinc-900 xl:px-4"
                            >
                                <p
                                    class="mb-4 text-center text-sm font-medium text-zinc-700 dark:text-white xl:text-base"
                                >
                                    دیگر پست ها
                                </p>
                                <ul class="space-y-8">
                                    <li
                                        v-for="otherPost in otherPosts"
                                        :key="otherPost.id"
                                    >
                                        <NuxtLink
                                            :href="
                                                route('blog.post-detail', [
                                                    otherPost.slug,
                                                ])
                                            "
                                        >
                                            <div
                                                class="flex gap-x-2 xl:gap-x-4"
                                            >
                                                <div class="min-w-fit">
                                                    <img
                                                        :src="
                                                            otherPost.imageUrl
                                                        "
                                                        :alt="otherPost.title"
                                                        class="w-25 rounded-xl xl:w-32"
                                                    />
                                                </div>
                                                <div
                                                    class="flex flex-col gap-y-2"
                                                >
                                                    <p
                                                        class="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-300 xl:text-base"
                                                    >
                                                        {{ otherPost.title }}
                                                    </p>
                                                    <p
                                                        class="text-xs text-zinc-500 dark:text-zinc-400 xl:text-sm"
                                                    >
                                                        {{
                                                            dayjs(
                                                                otherPost.updated_at
                                                            )
                                                                .locale('fa')
                                                                .format(
                                                                    'DD / MMMM / YYYY'
                                                                )
                                                        }}
                                                    </p>
                                                </div>
                                            </div>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                            <!-- Categories Blogs -->
                            <div
                                class="mb-8 rounded-lg bg-white px-2 py-3 shadow-base dark:bg-zinc-900 xl:px-4"
                            >
                                <p
                                    class="mb-4 text-center text-sm font-medium text-zinc-700 dark:text-white xl:text-base"
                                >
                                    دسته‌بندی ها
                                </p>
                                <ul class="space-y-4">
                                    <li
                                        v-for="category in postCategories"
                                        :key="category.id"
                                    >
                                        <NuxtLink
                                            :href="
                                                route('blog.category', [
                                                    category.slug,
                                                ])
                                            "
                                            class="group py-2"
                                        >
                                            <div
                                                class="flex items-center justify-between"
                                            >
                                                <p
                                                    class="flex items-center gap-x-2 text-sm text-zinc-600 transition-all duration-200 group-hover:text-zinc-700 dark:text-zinc-300 group-hover:dark:text-white xl:text-base"
                                                >
                                                    <svg class="h-4 w-4">
                                                        <use
                                                            xlink:href="#chevron-left"
                                                        />
                                                    </svg>
                                                    {{ category.name }}
                                                </p>
                                            </div>
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <Footer1></Footer1>
    </div>
</template>

<script>
import Header1 from '../Layouts/Headers/Header.vue';
import Footer1 from '../Layouts/Footeres/Footer.vue';
import Pagination3 from '../../../Components/Pagination3.vue';
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
        postJson: {
            type: String,
            required: true,
        },
        otherPostsJson: {
            type: String,
            required: true,
        },
        postCategoriesJson: {
            type: String,
            required: true,
        },
    },

    setup({ postJson, otherPostsJson, postCategoriesJson }) {
        dayjs.extend(jalali);
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

        const post = JSON.parse(postJson);
        const otherPosts = JSON.parse(otherPostsJson);
        const postCategories = JSON.parse(postCategoriesJson);

        return {
            copyToClipboardSocialShareDesktop,
            copyToClipboardSocialShareMobile,
            post,
            otherPosts,
            postCategories,
        };
    },
};
</script>
