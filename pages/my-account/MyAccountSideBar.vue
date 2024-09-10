<template>
    <!-- sidebar -->
    <div class="col-span-12 lg:col-span-3">
        <!-- Desktop sidebar -->
        <div
            class="sticky top-32 hidden w-full overflow-hidden rounded-lg bg-white shadow-base dark:bg-zinc-900 lg:block"
        >
            <div
                dir="ltr"
                class="max-h-[calc(90vh_-_100px)] overflow-y-auto p-4 xl:p-6"
            >
                <div dir="rtl">
                    <!-- Head -->
                    <div
                        class="mb-2 flex items-center justify-between border-b border-gray-200 pb-6 dark:border-white/10"
                    >
                        <div class="flex items-center gap-x-4">
                            <div>
                                <svg class="w-12 h-12 rounded-full">
                                    <use xlink:href="#user" />
                                </svg>
                            </div>
                            <div class="flex flex-col">
                                <div
                                    class="line-clamp-1 text-zinc-700 dark:text-white"
                                >
                                    {{ user.name }}
                                </div>
                                <div
                                    class="line-clamp-1 text-zinc-600 dark:text-zinc-300"
                                >
                                    {{ user.phone }}
                                </div>
                                <div
                                    class="line-clamp-1 text-zinc-600 dark:text-zinc-300 text-xs"
                                >
                                    <div
                                        v-for="role_name in JSON.parse(roles)"
                                        class="text-slate-500"
                                    >
                                        {{ role_name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <NuxtLink :href="route('my-account.my-info')">
                            <svg
                                class="h-6 w-6 text-emerald-500 dark:text-emerald-400"
                            >
                                <use xlink:href="#edit" />
                            </svg>
                        </NuxtLink>
                    </div>

                    <ul class="space-y-1">
                        <li>
                            <NuxtLink
                                :href="route('my-account')"
                                :class="{
                                    'profile-menu-active ':
                                        $page.url === '/my-account',
                                }"
                                class="profile-menu flex items-center justify-between rounded-lg px-2 py-4 xl:px-4"
                            >
                                <div class="flex items-center gap-x-4">
                                    <svg class="h-6 w-6">
                                        <use xlink:href="#home" />
                                    </svg>
                                    <div>پیشخوان</div>
                                </div>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                :href="route('my-account.orders')"
                                :class="{
                                    'profile-menu-active ':
                                        $page.url === '/my-account/orders',
                                }"
                                class="profile-menu flex items-center justify-between rounded-lg px-2 py-4 xl:px-4"
                            >
                                <div class="flex items-center gap-x-4">
                                    <svg class="h-6 w-6">
                                        <use xlink:href="#order" />
                                    </svg>
                                    <div>سفارش ها</div>
                                </div>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                :href="route('my-account.favorite')"
                                :class="{
                                    'profile-menu-active ':
                                        $page.url === '/my-account/favorite',
                                }"
                                class="profile-menu flex items-center justify-between rounded-lg px-2 py-4 xl:px-4"
                            >
                                <div class="flex items-center gap-x-4">
                                    <svg class="h-6 w-6">
                                        <use xlink:href="#heart" />
                                    </svg>
                                    <div>علاقه‌مندی ها</div>
                                </div>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                :href="route('my-account.recent-visit')"
                                :class="{
                                    'profile-menu-active ':
                                        $page.url ===
                                        '/my-account/recent-visit',
                                }"
                                class="profile-menu flex items-center justify-between rounded-lg px-2 py-4 xl:px-4"
                            >
                                <div class="flex items-center gap-x-4">
                                    <svg class="h-6 w-6">
                                        <use xlink:href="#recent" />
                                    </svg>
                                    <div>بازدید های اخیر</div>
                                </div>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                :href="route('my-account.notification')"
                                :class="{
                                    'profile-menu-active ':
                                        $page.url ===
                                        '/my-account/notification',
                                }"
                                class="profile-menu flex items-center justify-between rounded-lg px-2 py-4 xl:px-4"
                            >
                                <div class="flex items-center gap-x-4">
                                    <svg class="h-6 w-6">
                                        <use xlink:href="#notification" />
                                    </svg>
                                    <div>پیام ها</div>
                                </div>
                                <div
                                    class="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500 text-sm font-bold text-white dark:bg-emerald-600"
                                >
                                    10
                                </div>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                :href="route('my-account.addresses')"
                                :class="{
                                    'profile-menu-active ':
                                        $page.url === '/my-account/addresses',
                                }"
                                class="profile-menu flex items-center justify-between rounded-lg px-2 py-4 xl:px-4"
                            >
                                <div class="flex items-center gap-x-4">
                                    <svg class="h-6 w-6">
                                        <use xlink:href="#address" />
                                    </svg>
                                    <div>آدرس ها</div>
                                </div>
                            </NuxtLink>
                        </li>

                        <li>
                            <NuxtLink
                                :href="route('my-account.my-info')"
                                :class="{
                                    'profile-menu-active ':
                                        $page.url === '/my-account/my-info',
                                }"
                                class="profile-menu flex items-center justify-between rounded-lg px-2 py-4 xl:px-4"
                            >
                                <div class="flex items-center gap-x-4">
                                    <svg class="h-6 w-6">
                                        <use xlink:href="#user-setting" />
                                    </svg>
                                    <div>اطلاعات حساب کاربری</div>
                                </div>
                            </NuxtLink>
                        </li>
                        <li>
                            <button
                                class="flex items-center justify-between rounded-lg p-4 text-red-500 hover:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-400/10"
                                @click.prevent="logoutClickHandler"
                            >
                                <div class="flex items-center gap-x-2">
                                    <svg class="h-6 w-6">
                                        <use xlink:href="#exit"></use>
                                    </svg>
                                    <span> خروج </span>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Mobile menu -->
        <div
            class="rounded-lg bg-white p-6 shadow-base dark:bg-zinc-900 lg:hidden"
        >
            <div class="flex items-center justify-center">
                <div class="flex flex-col items-center justify-center gap-y-4">
                    <div class="relative">
                        <svg class="w-20 h-20 only:rounded-full">
                            <use xlink:href="#user" />
                        </svg>

                        <NuxtLink
                            :href="route('my-account.my-info')"
                            class="absolute -right-2 -top-2 rounded-full bg-emerald-500 p-2 text-sm text-white dark:bg-emerald-600"
                        >
                            <svg class="h-5 w-5">
                                <use xlink:href="#edit" />
                            </svg>
                        </NuxtLink>
                    </div>
                    <div>
                        <div class="line-clamp-1 text-zinc-700 dark:text-white">
                            {{ user.name }}
                        </div>
                        <div
                            class="line-clamp-1 text-zinc-600 dark:text-zinc-300"
                        >
                            {{ user.phone }}
                        </div>
                        <div
                            class="line-clamp-1 text-zinc-600 dark:text-zinc-300 text-xs"
                        >
                            <div
                                v-for="role_name in JSON.parse(roles)"
                                class="text-slate-500"
                            >
                                {{ role_name }}
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            class="btn-primary px-4 py-2"
                            aria-controls="profile-menu-drawer-navigation"
                            data-drawer-show="profile-menu-drawer-navigation"
                            data-drawer-placement="bottom"
                            data-drawer-target="profile-menu-drawer-navigation"
                            type="button"
                        >
                            <svg class="h-6 w-6 text-white">
                                <use xlink:href="#menu" />
                            </svg>
                            منوی پنل کاربری
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Mobile Profile Menu Drawer -->
    <div
        aria-labelledby="profile-menu-drawer-navigation-label"
        class="fixed bottom-0 left-0 right-0 z-40 w-full translate-y-full rounded-t-3xl bg-white transition-transform duration-300 dark:bg-zinc-900"
        id="profile-menu-drawer-navigation"
        tabindex="-1"
    >
        <div
            class="flex items-center justify-between gap-x-4 border-b border-gray-100 p-4 pb-5 dark:border-white/5"
        >
            <h5 class="text-lg text-zinc-600 dark:text-zinc-300">
                منوی پنل کاربری
            </h5>
            <button
                aria-controls="user-account-drawer-navigation"
                class="inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-zinc-600 hover:bg-zinc-100 hover:text-gray-900 dark:text-zinc-300 dark:hover:bg-black dark:hover:text-white"
                data-drawer-hide="profile-menu-drawer-navigation"
                type="button"
            >
                <svg class="h-5 w-5">
                    <use xlink:href="#close" />
                </svg>

                <span class="sr-only">Close menu</span>
            </button>
        </div>
        <div class="p-4">
            <ul class="space-y-1">
                <li>
                    <NuxtLink
                        :href="route('my-account')"
                        :class="{
                            'profile-menu-active ': $page.url === '/my-account',
                        }"
                        class="profile-menu flex items-center justify-between rounded-lg px-2 py-4 xl:px-4"
                    >
                        <div class="flex items-center gap-x-4">
                            <svg class="h-6 w-6">
                                <use xlink:href="#home" />
                            </svg>
                            <div>پیشخوان</div>
                        </div>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        :href="route('my-account.orders')"
                        :class="{
                            'profile-menu-active ':
                                $page.url === '/my-account/orders',
                        }"
                        class="profile-menu flex items-center justify-between rounded-lg px-2 py-4 xl:px-4"
                    >
                        <div class="flex items-center gap-x-4">
                            <svg class="h-6 w-6">
                                <use xlink:href="#order" />
                            </svg>
                            <div>سفارش ها</div>
                        </div>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        :href="route('my-account.favorite')"
                        :class="{
                            'profile-menu-active ':
                                $page.url === '/my-account/favorite',
                        }"
                        class="profile-menu flex items-center justify-between rounded-lg px-2 py-4 xl:px-4"
                    >
                        <div class="flex items-center gap-x-4">
                            <svg class="h-6 w-6">
                                <use xlink:href="#heart" />
                            </svg>
                            <div>علاقه‌مندی ها</div>
                        </div>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        :href="route('my-account.recent-visit')"
                        :class="{
                            'profile-menu-active ':
                                $page.url === '/my-account/recent-visit',
                        }"
                        class="profile-menu flex items-center justify-between rounded-lg px-2 py-4 xl:px-4"
                    >
                        <div class="flex items-center gap-x-4">
                            <svg class="h-6 w-6">
                                <use xlink:href="#recent" />
                            </svg>
                            <div>بازدید های اخیر</div>
                        </div>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        :href="route('my-account.notification')"
                        :class="{
                            'profile-menu-active ':
                                $page.url === '/my-account/notification',
                        }"
                        class="profile-menu flex items-center justify-between rounded-lg px-2 py-4 xl:px-4"
                    >
                        <div class="flex items-center gap-x-4">
                            <svg class="h-6 w-6">
                                <use xlink:href="#notification" />
                            </svg>
                            <div>پیام ها</div>
                        </div>
                        <div
                            class="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500 text-sm font-bold text-white dark:bg-emerald-600"
                        >
                            10
                        </div>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        :href="route('my-account.addresses')"
                        :class="{
                            'profile-menu-active ':
                                $page.url === '/my-account/addresses',
                        }"
                        class="profile-menu flex items-center justify-between rounded-lg px-2 py-4 xl:px-4"
                    >
                        <div class="flex items-center gap-x-4">
                            <svg class="h-6 w-6">
                                <use xlink:href="#address" />
                            </svg>
                            <div>آدرس ها</div>
                        </div>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        :href="route('my-account.my-info')"
                        :class="{
                            'profile-menu-active ':
                                $page.url === '/my-account/my-info',
                        }"
                        class="profile-menu flex items-center justify-between rounded-lg px-2 py-4 xl:px-4"
                    >
                        <div class="flex items-center gap-x-4">
                            <svg class="h-6 w-6">
                                <use xlink:href="#user-setting" />
                            </svg>
                            <div>اطلاعات حساب کاربری</div>
                        </div>
                    </NuxtLink>
                </li>
                <li>
                    <button
                        class="flex items-center justify-between rounded-lg p-4 text-red-500 hover:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-400/10"
                        @click.prevent="logoutClickHandler"
                    >
                        <div class="flex items-center gap-x-2">
                            <svg class="h-6 w-6">
                                <use xlink:href="#exit"></use>
                            </svg>
                            <span> خروج </span>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import axios from 'axios';
import { useTokenStore } from '../../../stores/token';

const page = usePage();

const user = computed(() => page.props.auth.user);
const roles = computed(() => page.props.auth.user.roles);
function logoutClickHandler() {
    axios
        .post(
            route('logout'),
            {},
            {
                headers: {
                    Authorization: `Bearer ${useTokenStore().token}`,
                },
            }
        )
        .then(() => {
            let redirectUrl = window?.location?.href;
            useTokenStore().removeToken();
            router.visit(route('shop'));
        });
}
</script>
