<template>
    <div
        v-if="useCartStore().isEmpty"
        id="dropdownBasketDesktop"
        class="z-10 !ml-5 hidden w-[400px] overflow-hidden rounded-lg border-t-2 border-t-emerald-500 bg-white dark:border-t-emerald-400 dark:bg-zinc-900"
    >
        <div class="flex justify-center items-center py-6">
            <div class="flex items-center justify-center flex-col gap-y-4">
                <svg class="w-20 h-20 text-zinc-600 dark:text-zinc-300">
                    <use xlink:href="#order-off" />
                </svg>
                <p class="text-zinc-600 dark:text-zinc-300 text-lg">
                    سبد خرید شما خالی میباشد
                </p>
                <NuxtLink :href="route('shop')" class="btn-primary w-full py-3">
                    فروشگاه
                </NuxtLink>
            </div>
        </div>
    </div>

    <div
        v-else
        id="dropdownBasketDesktop"
        class="z-10 !ml-5 hidden w-[400px] overflow-hidden rounded-lg border-2 border-t-emerald-500 bg-white dark:border-t-emerald-400 dark:bg-zinc-900"
    >
        <!-- Head -->
        <div class="flex items-center justify-between p-5 pb-2">
            <div class="text-sm text-zinc-600 dark:text-zinc-300">
                {{ useCartStore().totalVariations.toLocaleString('fa') }} مورد
            </div>
            <a
                :href="route('cart')"
                class="flex items-center gap-x-1 text-sm text-emerald-500 dark:text-emerald-400"
            >
                <div>مشاهده سبد خرید</div>
                <div>
                    <svg class="h-5 w-5">
                        <use xlink:href="#chevron-left" />
                    </svg>
                </div>
            </a>
        </div>
        <!-- Items -->
        <div class="h-96">
            <cart-items></cart-items>
        </div>

        <!-- Footer -->

        <div
            class="flex items-center justify-between border-t border-gray-100 p-5 dark:border-white/5"
        >
            <div class="flex flex-col items-center gap-y-1">
                <div class="text-sm text-zinc-500 dark:text-zinc-400">
                    مبلغ قابل پرداخت
                </div>

                <div class="text-zinc-600 dark:text-zinc-300">
                    <span class="font-bold">{{
                        useCartStore().totalPrice.toLocaleString('fa')
                    }}</span>
                    <span class="text-sm"> تومان </span>
                </div>
            </div>
            <NuxtLink
                :disabled="useCartStore().isEmpty"
                :href="route('checkout')"
                class="btn-primary w-32 py-3 text-sm"
            >
                ثبت سفارش
            </NuxtLink>
        </div>
    </div>
</template>

<script>
import { useCartStore } from '../stores/cart';
import { isNumber } from 'chart.js/helpers';
import CartItems from './CartItems.vue';

export default {
    methods: { isNumber, useCartStore },

    setup() {
        return {};
    },
};
</script>
