<template>
    <Head>
        <title>پرداخت ناموفق</title>
    </Head>
    <div class="bg-gray-50">
        <!-- Mobile menu -->
        <Header1></Header1>
        <main class="flex-grow bg-gray-100 pb-14 pt-36 dark:bg-black xs:pt-36">
            <div class="container">
                <div
                    class="mx-auto max-w-[500px] rounded-lg bg-white p-5 dark:bg-zinc-900"
                >
                    <!-- Head -->
                    <div
                        class="flex flex-col items-center justify-center gap-y-4"
                    >
                        <div>
                            <svg
                                class="h-20 w-20 text-red-500 dark:text-red-400"
                            >
                                <use xlink:href="#close" />
                            </svg>
                        </div>
                        <h1
                            class="mb-8 text-center text-base text-red-500 dark:text-red-400 md:text-lg lg:text-xl"
                        >
                            پرداخت شما ناموفق بود!
                        </h1>
                    </div>

                    <div class="mb-10 space-y-6">
                        <div class="flex gap-x-2">
                            <div>
                                <svg
                                    class="h-6 w-6 text-red-500 dark:text-red-400"
                                >
                                    <use xlink:href="#warning" />
                                </svg>
                            </div>
                            <p
                                class="text-sm leading-loose text-zinc-600 dark:text-zinc-300 md:text-base"
                            >
                                {{ error_message }}
                            </p>
                        </div>
                        <div class="flex gap-x-2">
                            <div>
                                <svg
                                    class="h-6 w-6 text-red-500 dark:text-red-400"
                                >
                                    <use xlink:href="#warning" />
                                </svg>
                            </div>
                            <p
                                class="text-sm leading-loose text-zinc-600 dark:text-zinc-300 md:text-base"
                            >
                                چنانچه مبلغی از حساب شما کسر شده است، تا ۲۴ ساعت
                                آینده به حساب شما باز خواهد گشت.
                            </p>
                        </div>
                        <div v-if="order_id" class="flex gap-x-2">
                            <div>
                                <svg
                                    class="h-6 w-6 text-red-500 dark:text-red-400"
                                >
                                    <use xlink:href="#warning" />
                                </svg>
                            </div>
                            <p
                                class="text-sm leading-loose text-zinc-600 dark:text-zinc-300 md:text-base"
                            >
                                سفارش شما تا
                                <span class="text-red-500 dark:text-red-400"
                                    >45</span
                                >
                                دقیقه دیگر لغو خواهد شد. برای تکمیل نهایی سفارش،
                                نسبت به پرداخت اقدام نمایید
                            </p>
                        </div>
                    </div>
                    <div class="mb-6 flex items-center justify-center text-sm">
                        <div
                            class="flex flex-col items-center gap-y-2 md:gap-y-4"
                        >
                            <p
                                class="font-medium text-zinc-700 dark:text-white md:text-lg"
                            >
                                جرئیات پرداخت
                            </p>
                            <div class="flex items-center gap-x-4">
                                <p class="text-zinc-600 dark:text-zinc-300">
                                    شماره پیگیری :
                                    <span class="tracking-wider">{{
                                        payment_transaction_id
                                    }}</span>
                                </p>
                                <p class="text-zinc-600 dark:text-zinc-300">
                                    تاریخ :
                                    <span>
                                        {{
                                            dayjs(payment_date)
                                                .locale('fa')
                                                .format(' HH:mm YYYY/M/D')
                                        }}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-x-4">
                        <div v-if="order_id" class="w-full">
                            <NuxtLink
                                :href="
                                    route('my-account.orders.order', order_id)
                                "
                                class="btn-primary py-3"
                            >
                                مشاهده سفارش
                            </NuxtLink>
                        </div>
                        <div class="w-full">
                            <NuxtLink
                                :href="route('my-account')"
                                class="btn-secondary py-3"
                            >
                                برگشت
                            </NuxtLink>
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

import dayjs from 'dayjs';
import jalali from 'jalali-dayjs';

export default {
    name: 'FailedPayment',
    computed: {
        dayjs() {
            return dayjs;
        },
    },
    components: {
        Head,
        Link,
        Footer1,
        Header1,
    },
    props: {
        payment_transaction_id: {
            type: String,
            required: true,
        },
        payment_date: {
            type: Date,
            required: true,
        },
        order_id: {
            type: Number,
            required: false,
        },
        error_message: {
            type: String,
            required: false,
        },
    },
    setup() {
        dayjs.extend(jalali);

        return {};
    },
};
</script>
