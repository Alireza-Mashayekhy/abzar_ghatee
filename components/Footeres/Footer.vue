<template>
    <footer
        class="relative border-t border-gray-100 bg-white dark:border-white/5 dark:bg-zinc-900"
    >
        <!-- Footer Logo -->
        <div class="absolute inset-x-0 -top-3 flex items-center justify-center">
            <div class="relative flex h-10 w-14 justify-center">
                <div
                    class="absolute inset-0 -top-[2px] h-full w-full rounded-full bg-white blur-[6px] dark:bg-zinc-900"
                ></div>

                <svg
                    class="relative h-5 w-5 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="135"
                    height="90"
                    viewBox="0 0 14 14"
                >
                    <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="7" cy="7" r="6.5" />
                        <path
                            d="M.5 7h13m-4 0A11.22 11.22 0 0 1 7 13.5A11.22 11.22 0 0 1 4.5 7A11.22 11.22 0 0 1 7 .5A11.22 11.22 0 0 1 9.5 7Z"
                        />
                    </g>
                </svg>
            </div>
        </div>

        <!-- content -->
        <div class="container">
            <!-- Contact - Go to Top -->
            <div
                class="mt-10 flex flex-col items-center justify-between gap-y-4 md:flex-row"
            >
                <div
                    class="flex flex-col items-center gap-x-4 gap-y-4 text-sm text-zinc-500 dark:text-zinc-300 md:flex-row"
                >
                    <a href="tel:03191013410">تلفن پشتیبانی 91013410 - 031</a>
                    <span
                        class="hidden h-4 w-px rounded-full bg-gray-200 dark:bg-white/20 md:block"
                    ></span>
                    <p>روز های هفته ساعت 8 تا 20 پاسخگوی شما هستیم.</p>
                </div>
                <div class="order-first flex md:order-last">
                    <button
                        class="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 p-2 text-sm text-zinc-700 hover:bg-gray-200/20 dark:border-white/5 dark:text-white dark:hover:bg-white/5"
                        id="scroll-top-button-footer"
                        type="button"
                    >
                        <span>برگشت به بالا</span>
                        <span aria-hidden="true">
                            <svg class="h-5 w-5 lg:h-6 lg:w-6">
                                <use xlink:href="#chevron-up" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            <!-- Subscribe - Social Links  -->
            <div
                class="relative mb-10 mt-10 flex flex-col items-center justify-between gap-x-4 gap-y-8 rounded-xl bg-gray-100 px-10 py-4 shadow-base backdrop-blur-3xl dark:bg-black md:flex-row"
            >
                <div>
                    <p class="text-sm text-zinc-500 dark:text-zinc-300">
                        از جدیدترین تخفیف ها با خبر شوید
                    </p>
                </div>
                <div class="w-full flex-1 flex-grow md:max-w-lg">
                    <div
                        class="flex w-full items-center justify-between gap-x-2 rounded-lg bg-white dark:bg-zinc-900"
                    >
                        <label class="sr-only" for="emailInput" id="email-label"
                            >ایمیل</label
                        >
                        <input
                            aria-labelledby="email-label"
                            autocomplete="off"
                            class="w-full border-none bg-transparent px-4 py-2.5 text-right text-zinc-600 outline-none placeholder:text-right placeholder:text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-0 dark:text-zinc-300 placeholder:dark:text-zinc-400"
                            dir="ltr"
                            id="emailInput"
                            placeholder="ایمیل شما"
                            type="text"
                        />
                        <button class="btn-primary ml-1 w-24 py-2 text-sm">
                            ثبت
                        </button>
                    </div>
                </div>
                <div
                    class="flex items-center justify-center gap-x-10 md:gap-x-6"
                >
                    <div
                        class="text-zinc-700 transition-colors duration-200 hover:text-rose-600 dark:text-white hover:dark:text-rose-500"
                    >
                        <a
                            aria-label="Follow us on instagram"
                            href="#"
                            target="_blank"
                        >
                            <div class="sr-only">instagram link</div>
                            <svg class="h-6 w-6">
                                <use xlink:href="#instagram" />
                            </svg>
                        </a>
                    </div>
                    <div
                        class="text-zinc-700 transition-colors duration-200 hover:text-blue-600 dark:text-white hover:dark:text-blue-500"
                    >
                        <a
                            aria-label="Follow us on twitter"
                            href="#"
                            target="_blank"
                        >
                            <div class="sr-only">x - twitter link</div>
                            <svg class="h-6 w-6">
                                <use xlink:href="#twitter" />
                            </svg>
                        </a>
                    </div>
                    <div
                        class="text-zinc-700 transition-colors duration-200 hover:text-red-600 dark:text-white hover:dark:text-red-500"
                    >
                        <a
                            aria-label="Follow us on aparat"
                            href="#"
                            target="_blank"
                        >
                            <div class="sr-only">aparat link</div>
                            <svg class="h-6 w-6">
                                <use xlink:href="#aparat" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-12 gap-y-10">
                <div class="col-span-12 md:col-span-6">
                    <div
                        class="grid grid-cols-12 justify-items-center md:justify-items-start"
                    >
                        <div class="col-span-6 flex flex-col gap-y-6">
                            <p
                                class="select-none text-lg text-zinc-700 dark:text-white"
                            >
                                ابزار قطعه
                            </p>
                            <ul
                                class="space-y-4 text-zinc-500 dark:text-zinc-300"
                            >
                                <li>
                                    <NuxtLink
                                        class="py-2 hover:text-emerald-500 hover:dark:text-emerald-400"
                                        :href="route('return-terms')"
                                    >
                                        شرایط مرجوعی
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink
                                        class="py-2 hover:text-emerald-500 hover:dark:text-emerald-400"
                                        :href="route('how-to-buy')"
                                    >
                                        راهنمای خرید
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink
                                        class="py-2 hover:text-emerald-500 hover:dark:text-emerald-400"
                                        :href="route('privacy')"
                                    >
                                        حریم خصوصی
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink
                                        class="py-2 hover:text-emerald-500 hover:dark:text-emerald-400"
                                        :href="route('why-us')"
                                    >
                                        چرا ابزارقطعه
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div class="col-span-6 flex flex-col gap-y-6">
                            <p
                                class="select-none text-lg text-zinc-700 dark:text-white"
                            >
                                دسترسی سریع
                            </p>
                            <ul
                                class="space-y-4 text-zinc-500 dark:text-zinc-300"
                            >
                                <li>
                                    <NuxtLink
                                        class="py-2 hover:text-emerald-500 hover:dark:text-emerald-400"
                                        :href="route('my-account.orders')"
                                    >
                                        پیگیری سفارشات
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink
                                        class="py-2 hover:text-emerald-500 hover:dark:text-emerald-400"
                                        :href="route('contact-us')"
                                    >
                                        تماس با ما
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink
                                        class="py-2 hover:text-emerald-500 hover:dark:text-emerald-400"
                                        :href="route('faq')"
                                    >
                                        سوالات متداول
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink
                                        class="py-2 hover:text-emerald-500 hover:dark:text-emerald-400"
                                        :href="route('about-us')"
                                    >
                                        درباره ما
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    class="col-span-12 flex items-center justify-center gap-x-2 md:col-span-6 md:justify-end"
                >
                    <a href="#" class="relative">
                        <img
                            alt="namad"
                            class="h-[130px] w-[130px] blur-sm"
                            src="../../../../../assets/images/logo-ecunion.png"
                        />
                        <!-- Delete This -->
                        <span
                            class="absolute inset-x-0 top-0 mx-auto w-fit rounded-lg bg-red-500 px-4 py-2 text-white dark:bg-red-600"
                        >
                            اینماد
                        </span>
                    </a>
                    <a href="#" class="relative">
                        <img
                            alt="samandehi"
                            class="h-[130px] w-[130px] blur-sm"
                            src="../../../../../assets/images/logo-ecunion.png"
                        />
                        <span
                            class="absolute inset-x-0 top-0 mx-auto w-fit rounded-lg bg-red-500 px-4 py-2 text-white dark:bg-red-600"
                        >
                            ساماندهی
                        </span>
                    </a>
                    <div class="relative">
                        <img
                            alt="ecunion"
                            class="h-[130px] w-[130px]"
                            src="../../../../../assets/images/logo-ecunion.png"
                        />
                    </div>
                </div>
            </div>

            <!-- Copyright -->
            <div
                class="mt-4 flex items-center justify-center border-t border-gray-100 py-4 dark:border-white/5"
            >
                <p class="text-xs text-zinc-500 dark:text-zinc-400 xs:text-sm">
                    کلیه حقوق این سایت متعلق به فروشگاه ابزار قطعه می‌باشد.
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    // Scroll Top Function Start
    const scrollTopFooter = document.getElementById('scroll-top-button-footer');
    if (scrollTopFooter)
        scrollTopFooter.addEventListener('click', () =>
            window.scrollTo({ top: 0, behavior: 'smooth' })
        );

    // Scroll Top Function End
});
</script>
