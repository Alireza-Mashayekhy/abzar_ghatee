<template>
    <Head>
        <title>پروفایل</title>
        <meta name="robots" content="noindex" />
    </Head>
    <div class="bg-gray-50">
        <!-- Mobile menu -->
        <Header1></Header1>
        <main class="flex-grow bg-gray-100 pb-14 pt-36 dark:bg-black xs:pt-36">
            <div class="container">
                <div class="grid grid-cols-12 gap-4">
                    <my-account-side-bar></my-account-side-bar>

                    <!-- content -->
                    <div class="col-span-12 lg:col-span-9">
                        <div
                            class="rounded-lg bg-white p-5 shadow-base dark:bg-zinc-900"
                        >
                            <!-- Title -->
                            <h1
                                class="relative mb-16 w-fit text-xl font-medium text-zinc-700 dark:text-white"
                            >
                                پیشخوان
                                <span
                                    class="absolute right-0 top-10 h-[3px] w-full rounded-full bg-emerald-500 dark:bg-emerald-400"
                                >
                                </span>
                            </h1>
                            <div class="mb-8">
                                <h2
                                    class="mb-8 flex items-center gap-x-4 text-lg text-zinc-600 dark:text-zinc-300"
                                >
                                    <span
                                        class="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400"
                                    ></span>
                                    حساب کاربری
                                </h2>
                                <div
                                    class="grid grid-cols-2 gap-4 md:gap-6 xl:grid-cols-4"
                                >
                                    <NuxtLink
                                        :href="route('my-account.my-info')"
                                        class="flex flex-col items-center gap-4 rounded-base bg-sky-500 p-2 dark:bg-sky-600 md:flex-row"
                                    >
                                        <div
                                            class="relative rounded-base bg-sky-600/50 p-2 dark:bg-sky-500/50"
                                        >
                                            <svg class="h-8 w-8 text-white">
                                                <use
                                                    xlink:href="#user-setting"
                                                />
                                            </svg>
                                        </div>

                                        <div
                                            class="text-sm font-medium text-white md:text-base"
                                        >
                                            تکمیل مشخصات
                                        </div>
                                    </NuxtLink>
                                    <NuxtLink
                                        :href="route('my-account.my-info')"
                                        class="flex flex-col items-center gap-4 rounded-base bg-red-500 p-2 dark:bg-red-600 md:flex-row"
                                    >
                                        <div
                                            class="relative rounded-base bg-red-600/50 p-2 dark:bg-red-500/50"
                                        >
                                            <svg class="h-8 w-8 text-white">
                                                <use
                                                    xlink:href="#password-lock"
                                                />
                                            </svg>
                                        </div>

                                        <div
                                            class="text-sm font-medium text-white md:text-base"
                                        >
                                            ثبت کلمه عبور
                                        </div>
                                    </NuxtLink>
                                    <NuxtLink
                                        :href="route('my-account.favorite')"
                                        class="flex flex-col items-center gap-4 rounded-base bg-rose-500 p-2 dark:bg-rose-600 md:flex-row"
                                    >
                                        <div
                                            class="relative rounded-base bg-rose-600/50 p-2 dark:bg-rose-500/50"
                                        >
                                            <svg class="h-8 w-8 text-white">
                                                <use xlink:href="#heart" />
                                            </svg>
                                            <span
                                                class="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-sm font-medium text-white dark:bg-rose-500 md:hidden"
                                            >
                                                6
                                            </span>
                                        </div>

                                        <div
                                            class="flex items-center gap-x-2 text-sm font-medium text-white md:text-base"
                                        >
                                            علاقه منده ها
                                        </div>
                                    </NuxtLink>
                                    <NuxtLink
                                        :href="route('my-account.notification')"
                                        class="flex flex-col items-center gap-4 rounded-base bg-emerald-500 p-2 dark:bg-emerald-600 md:flex-row"
                                    >
                                        <div
                                            class="relative rounded-base bg-emerald-600/50 p-2 dark:bg-emerald-500/50"
                                        >
                                            <svg class="h-8 w-8 text-white">
                                                <use
                                                    xlink:href="#notification"
                                                />
                                            </svg>
                                            <span
                                                class="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-sm font-medium text-white dark:bg-emerald-500 md:hidden"
                                            >
                                                6
                                            </span>
                                        </div>

                                        <div
                                            class="flex items-center gap-x-2 text-sm font-medium text-white md:text-base"
                                        >
                                            اعلان ها
                                        </div>
                                    </NuxtLink>
                                </div>
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

import { computed } from 'vue';
import MyAccountSideBar from './MyAccountSideBar.vue';

export default {
    components: {
        MyAccountSideBar,
        Head,
        Link,
        Footer1,
        Header1,
    },
    setup() {
        const page = usePage();

        const user = computed(() => page.props.auth.user);
        const roles = computed(() => page.props.auth.user.roles);
        return {
            user,
            roles,
        };
    },
};
</script>

<style scoped>
.product-description :deep(h2) {
    @apply font-semibold mt-3 mb-1;
}
</style>
