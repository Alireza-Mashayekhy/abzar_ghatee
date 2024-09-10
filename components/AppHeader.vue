<template>
    <div>
        <!-- Mobile menu -->
        <TransitionRoot as="template" :show="open">
            <Dialog
                as="div"
                class="fixed inset-0 flex z-50 lg:hidden"
                @close="open = false"
            >
                <TransitionChild
                    as="template"
                    enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <DialogOverlay
                        class="fixed inset-0 bg-black bg-opacity-25"
                    />
                </TransitionChild>

                <TransitionChild
                    as="template"
                    enter="transition ease-in-out duration-300 transform"
                    ltr:enter-from="-translate-x-full"
                    ltr:enter-to="translate-x-0"
                    rtl:enter-from="-translate-x-full"
                    rtl:enter-to="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    ltr:leave-from="translate-x-0"
                    ltr:leave-to="-translate-x-full"
                >
                    <div
                        class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
                    >
                        <div class="px-4 pt-5 pb-2 flex">
                            <button
                                type="button"
                                class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                @click="open = false"
                            >
                                <span class="sr-only">Close menu</span>
                                <XIcon class="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <!-- Links -->
                        <TabGroup as="div" class="mt-2">
                            <div class="border-b border-gray-200">
                                <TabList class="-mb-px flex px-4 space-x-8">
                                    <Tab
                                        as="template"
                                        v-for="category in navigation.categories"
                                        :key="category.name"
                                        v-slot="{ selected }"
                                    >
                                        <button
                                            :class="[
                                                selected
                                                    ? 'text-indigo-600 border-indigo-600'
                                                    : 'text-gray-900 border-transparent',
                                                'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium',
                                            ]"
                                        >
                                            {{ category.name }}
                                        </button>
                                    </Tab>
                                </TabList>
                            </div>
                            <TabPanels as="template">
                                <TabPanel
                                    v-for="category in navigation.categories"
                                    :key="category.name"
                                    class="pt-10 pb-8 px-4 space-y-10"
                                >
                                    <div class="grid grid-cols-2 gap-x-4">
                                        <div
                                            v-for="item in category.featured"
                                            :key="item.name"
                                            class="group relative text-sm"
                                        >
                                            <div
                                                class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75"
                                            >
                                                <img
                                                    :src="item.imageSrc"
                                                    :alt="item.imageAlt"
                                                    class="object-center object-cover"
                                                />
                                            </div>
                                            <NuxtLink
                                                :href="item.href"
                                                class="mt-6 block font-medium text-gray-900"
                                            >
                                                <span
                                                    class="absolute z-10 inset-0"
                                                    aria-hidden="true"
                                                />
                                                {{ item.name }}
                                            </NuxtLink>
                                            <p aria-hidden="true" class="mt-1">
                                                Shop now
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        class="flex flex-col items-start space-y-2"
                                    >
                                        <Disclosure
                                            v-for="section in category.sections"
                                            :key="section.name"
                                        >
                                            <DisclosureButton>
                                                <p
                                                    :id="`${category.id}-${section.id}-heading-mobile`"
                                                    class="font-medium text-gray-900"
                                                >
                                                    {{ section.name }}
                                                </p>
                                            </DisclosureButton>
                                            <DisclosurePanel>
                                                <ul
                                                    role="list"
                                                    :aria-labelledby="`${category.id}-${section.id}-heading-mobile`"
                                                    class="mt-6 flex flex-col space-y-6"
                                                >
                                                    <li
                                                        v-for="item in section.items"
                                                        :key="item.name"
                                                        class="flow-root"
                                                    >
                                                        <NuxtLink
                                                            :href="item.href"
                                                            class="-m-2 p-2 block text-gray-500"
                                                        >
                                                            {{ item.name }}
                                                        </NuxtLink>
                                                    </li>
                                                </ul>
                                            </DisclosurePanel>
                                        </Disclosure>
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>

                        <div
                            class="border-t border-gray-200 py-6 px-4 space-y-6"
                        >
                            <div
                                v-for="page in navigation.pages"
                                :key="page.name"
                                class="flow-root"
                            >
                                <NuxtLink
                                    :href="page.href"
                                    class="-m-2 p-2 block font-medium text-gray-900"
                                    >{{ page.name }}</NuxtLink
                                >
                            </div>
                        </div>

                        <div
                            v-if="user"
                            class="border-t border-gray-200 py-6 px-4 space-y-6"
                        >
                            <div class="flow-root">
                                <NuxtLink
                                    :href="route('login')"
                                    class="-m-2 p-2 block font-medium text-gray-900"
                                    >{{ user.name }}</NuxtLink
                                >
                            </div>
                        </div>
                        <div
                            v-else
                            class="border-t border-gray-200 py-6 px-4 space-y-6"
                        >
                            <div class="flow-root">
                                <NuxtLink
                                    href="/login"
                                    class="-m-2 p-2 block font-medium text-gray-900"
                                    >ورود</NuxtLink
                                >
                            </div>
                            <div class="flow-root">
                                <NuxtLink
                                    :href="route('register')"
                                    class="-m-2 p-2 block font-medium text-gray-900"
                                    >ثبت نام</NuxtLink
                                >
                            </div>
                        </div>

                        <div class="border-t border-gray-200 py-6 px-4">
                            <a href="#" class="-m-2 p-2 flex items-center">
                                <img
                                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                                    alt=""
                                    class="w-5 h-auto block flex-shrink-0"
                                />
                                <span
                                    class="ml-3 block text-base font-medium text-gray-900"
                                >
                                    CAD
                                </span>
                                <span class="sr-only">, change currency</span>
                            </a>
                        </div>
                    </div>
                </TransitionChild>
            </Dialog>
        </TransitionRoot>

        <header class="relative bg-white">
            <p
                class="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8"
            >
                Get free delivery on orders over $100
            </p>

            <nav
                aria-label="Top"
                class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div class="border-b border-gray-200">
                    <div class="h-16 flex items-center">
                        <button
                            type="button"
                            class="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                            @click="open = true"
                        >
                            <span class="sr-only">Open menu</span>
                            <MenuIcon class="h-6 w-6" aria-hidden="true" />
                        </button>

                        <!-- Logo -->
                        <div
                            class="ltr:ml-4 rtl:mr-4 flex ltr:lg:ml-0 rtl:lg:mr-0"
                        >
                            <a href="#">
                                <span class="sr-only">Workflow</span>
                                <img
                                    class="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </a>
                        </div>

                        <!-- Flyout menus -->
                        <PopoverGroup
                            class="hidden ltr:lg:ml-8 rtl:lg:mr-8 lg:block lg:self-stretch"
                        >
                            <div
                                class="h-full flex space-x-8 rtl:space-x-reverse"
                            >
                                <Popover
                                    v-for="category in navigation.categories"
                                    :key="category.name"
                                    class="flex"
                                    v-slot="{ open }"
                                >
                                    <div class="relative flex">
                                        <PopoverButton
                                            :class="[
                                                open
                                                    ? 'border-indigo-600 text-indigo-600'
                                                    : 'border-transparent text-gray-700 hover:text-gray-800',
                                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px',
                                            ]"
                                        >
                                            {{ category.name }}
                                        </PopoverButton>
                                    </div>

                                    <transition
                                        enter-active-class="transition ease-out duration-200"
                                        enter-from-class="opacity-0"
                                        enter-to-class="opacity-100"
                                        leave-active-class="transition ease-in duration-150"
                                        leave-from-class="opacity-100"
                                        leave-to-class="opacity-0"
                                    >
                                        <PopoverPanel
                                            class="absolute z-20 top-full inset-x-0 text-sm text-gray-500"
                                        >
                                            <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                                            <div
                                                class="absolute inset-0 top-1/2 bg-white shadow"
                                                aria-hidden="true"
                                            />

                                            <div class="relative bg-white">
                                                <div
                                                    class="max-w-7xl mx-auto px-8"
                                                >
                                                    <div
                                                        class="grid grid-cols-2 gap-y-10 gap-x-8 py-16"
                                                    >
                                                        <div
                                                            class="col-start-2 grid grid-cols-2 gap-x-8"
                                                        >
                                                            <div
                                                                v-for="item in category.featured"
                                                                :key="item.name"
                                                                class="group relative text-base sm:text-sm"
                                                            >
                                                                <div
                                                                    class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75"
                                                                >
                                                                    <img
                                                                        :src="
                                                                            item.imageSrc
                                                                        "
                                                                        :alt="
                                                                            item.imageAlt
                                                                        "
                                                                        class="object-center object-cover"
                                                                    />
                                                                </div>
                                                                <a
                                                                    :href="
                                                                        item.href
                                                                    "
                                                                    class="mt-6 block font-medium text-gray-900"
                                                                >
                                                                    <span
                                                                        class="absolute z-10 inset-0"
                                                                        aria-hidden="true"
                                                                    />
                                                                    {{
                                                                        item.name
                                                                    }}
                                                                </a>
                                                                <p
                                                                    aria-hidden="true"
                                                                    class="mt-1"
                                                                >
                                                                    Shop now
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm"
                                                        >
                                                            <div
                                                                v-for="section in category.sections"
                                                                :key="
                                                                    section.name
                                                                "
                                                            >
                                                                <p
                                                                    :id="`${section.name}-heading`"
                                                                    class="font-medium text-gray-900"
                                                                >
                                                                    {{
                                                                        section.name
                                                                    }}
                                                                </p>
                                                                <ul
                                                                    role="list"
                                                                    :aria-labelledby="`${section.name}-heading`"
                                                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                >
                                                                    <li
                                                                        v-for="item in section.items"
                                                                        :key="
                                                                            item.name
                                                                        "
                                                                        class="flex"
                                                                    >
                                                                        <a
                                                                            :href="
                                                                                item.href
                                                                            "
                                                                            class="hover:text-gray-800"
                                                                        >
                                                                            {{
                                                                                item.name
                                                                            }}
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </PopoverPanel>
                                    </transition>
                                </Popover>

                                <NuxtLink
                                    v-for="page in navigation.pages"
                                    :key="page.name"
                                    :href="page.href"
                                    class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                    >{{ page.name }}</NuxtLink
                                >
                            </div>
                        </PopoverGroup>

                        <div class="ltr:ml-auto rtl:mr-auto flex items-center">
                            <Dropdown v-if="user">
                                <DropdownToggle
                                    tag="div"
                                    role="button"
                                    class="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                >
                                    <svg
                                        class="w-3 h-3 ml-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        ></path>
                                    </svg>
                                    <span class="ml-2 text-sm font-medium"
                                        >حساب کاربری</span
                                    >
                                </DropdownToggle>
                                <DropdownMenu class="w-48">
                                    <DropdownContent
                                        class="absolute right-0 z-10 py-2 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                                    >
                                        <DropdownHeader
                                            tag="div"
                                            class="!font-normal"
                                        >
                                            <div class="font-medium">
                                                {{ user.name }}
                                            </div>
                                            <div
                                                class="text-xs mt-0.5 dark:text-slate-500"
                                            >
                                                {{ user.phone }}
                                            </div>
                                        </DropdownHeader>
                                        <DropdownDivider
                                            class="border-white/[0.08]"
                                        />
                                        <DropdownItem
                                            class="dropdown-item hover:bg-gray-100"
                                        >
                                            <UserIcon
                                                class="w-4 h-4 ltr:mr-2 rtl:ml-2"
                                            />
                                            پروفایل</DropdownItem
                                        >
                                        <DropdownItem
                                            class="dropdown-item hover:bg-gray-100"
                                        >
                                            <EditIcon
                                                class="w-4 h-4 ltr:mr-2 rtl:ml-2"
                                            />تنظیمات</DropdownItem
                                        >
                                        <DropdownItem
                                            class="dropdown-item hover:bg-gray-100"
                                        >
                                            <LockIcon
                                                class="w-4 h-4 ltr:mr-2 rtl:ml-2"
                                            />
                                            سفارش ها</DropdownItem
                                        >
                                        <DropdownItem
                                            class="dropdown-item hover:bg-gray-100"
                                        >
                                            <HelpCircleIcon
                                                class="w-4 h-4 ltr:mr-2 rtl:ml-2"
                                            />
                                            راهنما</DropdownItem
                                        >
                                        <DropdownDivider
                                            class="border-white/[0.08]"
                                        />
                                        <DropdownItem
                                            @click.prevent="logoutClickHandler"
                                            class="dropdown-item hover:bg-gray-100"
                                        >
                                            <ToggleRightIcon
                                                class="w-4 h-4 ltr:mr-2 rtl:ml-2"
                                            />
                                            خروج</DropdownItem
                                        >
                                    </DropdownContent>
                                </DropdownMenu>
                            </Dropdown>
                            <div
                                v-else
                                class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 rtl:space-x-reverse"
                            >
                                <NuxtLink
                                    :href="loginHref"
                                    class="text-sm font-medium text-gray-700 hover:text-gray-800"
                                    >ورود</NuxtLink
                                >
                                <span
                                    class="h-6 w-px bg-gray-200"
                                    aria-hidden="true"
                                />
                                <NuxtLink
                                    :href="registerHref"
                                    class="text-sm font-medium text-gray-700 hover:text-gray-800"
                                    >عضویت</NuxtLink
                                >
                            </div>

                            <!-- Search -->
                            <div class="flex ltr:lg:ml-6 rtl:lg:mr-6">
                                <a
                                    href="#"
                                    class="p-2 text-gray-400 hover:text-gray-500"
                                >
                                    <span class="sr-only">Search</span>
                                    <SearchIcon
                                        class="w-6 h-6"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>

                            <!-- Cart -->
                            <div class="ml-4 flow-root lg:ml-6">
                                <button
                                    @click="useCartStore().cartOpenState = true"
                                    class="group -m-2 p-2 flex items-center"
                                >
                                    <ShoppingBagIcon
                                        class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                    <span
                                        class="ltr:ml-1 rtl:mr-1 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                                        >{{ useCartStore().total }}</span
                                    >
                                    <span class="sr-only"
                                        >items in cart, view bag</span
                                    >
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <TransitionRoot as="template" :show="useCartStore().cartOpenState">
            <Dialog
                as="div"
                class="relative z-10"
                @close="useCartStore().cartOpenState = false"
            >
                <TransitionChild
                    as="template"
                    enter="ease-in-out duration-500"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in-out duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div
                        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    />
                </TransitionChild>

                <div class="fixed inset-0 overflow-hidden">
                    <div class="absolute inset-0 overflow-hidden">
                        <div
                            class="pointer-events-none fixed inset-y-0 ltr:right-0 rtl:left-0 flex max-w-full ltr:pl-10 rtl:pr-10"
                        >
                            <TransitionChild
                                as="template"
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enter-from="ltr:translate-x-full rtl:-translate-x-full"
                                enter-to="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leave-from="translate-x-0"
                                leave-to="ltr:translate-x-full rtl:-translate-x-full"
                            >
                                <DialogPanel
                                    class="pointer-events-auto w-screen max-w-md"
                                >
                                    <div
                                        class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"
                                    >
                                        <div
                                            class="flex-1 overflow-y-auto px-4 py-6 sm:px-6"
                                        >
                                            <div
                                                class="flex items-start justify-between"
                                            >
                                                <div
                                                    v-if="
                                                        useCartStore()
                                                            .isLoadingState
                                                    "
                                                >
                                                    <LoadingIcon
                                                        icon="tail-spin"
                                                        class="block w-8 h-8"
                                                    />
                                                </div>
                                                <DialogTitle
                                                    class="text-lg font-medium text-gray-900"
                                                    >سبد خرید</DialogTitle
                                                >

                                                <div
                                                    class="ltr:ml-3 rtl:mr-3 flex h-7 items-center"
                                                >
                                                    <button
                                                        type="button"
                                                        class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        @click="
                                                            useCartStore().cartOpenState = false
                                                        "
                                                    >
                                                        <span
                                                            class="absolute -inset-0.5"
                                                        />
                                                        <span class="sr-only"
                                                            >Close panel</span
                                                        >
                                                        <XIcon
                                                            class="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="mt-8">
                                                <cart />
                                            </div>
                                        </div>

                                        <div
                                            class="border-t border-gray-200 px-4 py-6 sm:px-6"
                                        >
                                            <div
                                                class="flex justify-between text-base font-medium text-gray-900"
                                            >
                                                <p>مجموع</p>
                                                <p>
                                                    {{
                                                        isNumber(
                                                            useCartStore()
                                                                .totalPrice
                                                        )
                                                            ? useCartStore().totalPrice.toLocaleString(
                                                                  'fa'
                                                              )
                                                            : '...'
                                                    }}
                                                    تومان
                                                </p>
                                            </div>
                                            <p
                                                class="mt-0.5 text-xs text-gray-500"
                                            >
                                                هزینه های ارسال و مالیات در صفحه
                                                ی تسویه حساب محاسبه می شود.
                                            </p>
                                            <div class="mt-6">
                                                <button
                                                    class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 w-full"
                                                    @click="
                                                        router.visit(
                                                            route('checkout')
                                                        )
                                                    "
                                                    :disabled="
                                                        useCartStore().isEmpty
                                                    "
                                                >
                                                    تسویه حساب
                                                </button>
                                            </div>
                                            <div
                                                class="mt-6 flex justify-center text-center text-sm text-gray-500"
                                            >
                                                <p>
                                                    یا
                                                    <button
                                                        type="button"
                                                        class="font-medium text-indigo-600 hover:text-indigo-500"
                                                        @click="
                                                            useCartStore().cartOpenState = false
                                                        "
                                                    >
                                                        ادامه دادن خرید
                                                        <span
                                                            aria-hidden="true"
                                                        >
                                                            &rarr;</span
                                                        >
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import {
    Dialog,
    DialogOverlay,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue';
import {
    MenuIcon,
    SearchIcon,
    ShoppingBagIcon,
    XIcon,
} from '@heroicons/vue/outline';
import { useTokenStore } from '@/stores/token';
import { useCartStore } from '@/stores/cart';
import axios from 'axios';
import { isNumber } from 'chart.js/helpers';

const router = useRouter();
const route = useRoute();

const open = ref(false);

const user = '';

const loginHref = '/login' + '?redirect_to=' + route.fullPath;
const registerHref = '/register' + '?redirect_to=' + route.fullPath;

function logoutClickHandler() {
    axios
        .post(
            'logout',
            {},
            {
                headers: {
                    Authorization: `Bearer ${useTokenStore().token}`,
                },
            }
        )
        .then(() => {
            useTokenStore().removeToken();
            router.push('/shop');
        });
}

onMounted(() => {
    useCartStore().fetchCart();
});
const navigation = {
    categories: [
        {
            id: 'powertools',
            name: 'ابزار برقی',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc:
                        'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt:
                        'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc:
                        'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt:
                        'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'سنگ فرز ها',
                    items: [
                        { name: 'فرز سنگبری', href: '#' },
                        { name: 'فرز آهنگری', href: '#' },
                        { name: 'مینی فرز', href: '#' },
                        { name: 'مینی فرز شارژی', href: '#' },
                        { name: 'فرز متوسط', href: '#' },
                        { name: 'مینی دسته بلند', href: '#' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'دریل ها',
                    items: [
                        { name: 'دریل', href: '#' },
                        { name: 'بتن کن 3 کیلویی', href: '#' },
                        { name: 'بتن کن 5 کیلویی', href: '#' },
                        { name: 'بتن کن 7 کیلویی', href: '#' },
                        { name: 'بتن کن 10 کیلویی', href: '#' },
                        { name: 'بتن کن 16 کیلویی', href: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'برند ها',
                    items: [
                        { name: 'پوکا', href: '#' },
                        { name: 'دی سی ای', href: '#' },
                        { name: 'پی ای پی', href: '#' },
                        { name: 'توسن', href: '#' },
                        { name: 'رونیکس', href: '#' },
                    ],
                },
            ],
        },
        {
            id: 'spareparts',
            name: 'قطعات یدکی',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc:
                        'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt:
                        'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc:
                        'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                {
                    id: 'main',
                    name: 'اصلی',
                    items: [
                        { name: 'آرمیچر', href: '#' },
                        { name: 'بالشتک', href: '#' },
                        { name: 'ذغال', href: '#' },
                        { name: 'بلبرینگ', href: '#' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', href: '#' },
                        { name: 'Wallets', href: '#' },
                        { name: 'Bags', href: '#' },
                        { name: 'Sunglasses', href: '#' },
                        { name: 'Hats', href: '#' },
                        { name: 'Belts', href: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Re-Arranged', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: 'درباره ما', href: '#' },
        { name: 'فروشگاه', href: '/shop' },
    ],
};

defineExpose({
    logoutClickHandler,
});
</script>
