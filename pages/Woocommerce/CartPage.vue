<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
    <Head>
        <title>سبد خرید - ابزارقطعه</title>
    </Head>
    <div class="bg-gray-50">
        <!-- Mobile menu -->
        <Header1></Header1>

        <main
            class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
            <div class="flex flex-row">
                <h1
                    class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                >
                    سبد خرید
                </h1>
                <div v-if="useCartStore().isLoadingState">
                    <LoadingIcon
                        icon="tail-spin"
                        class="block w-10 h-10 pr-2"
                    />
                </div>
            </div>

            <div v-if="useCartStore().isEmpty">
                <div class="flex justify-center items-center py-6">
                    <div
                        class="flex items-center justify-center flex-col gap-y-4"
                    >
                        <svg class="w-20 h-20 text-zinc-600 dark:text-zinc-300">
                            <use xlink:href="#order-off" />
                        </svg>
                        <p class="text-zinc-600 dark:text-zinc-300 text-lg">
                            سبد خرید شما خالی میباشد
                        </p>
                        <NuxtLink
                            :href="route('shop')"
                            class="btn-primary w-full py-3"
                        >
                            فروشگاه
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div
                v-else
                class="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16"
            >
                <section aria-labelledby="cart-heading" class="lg:col-span-7">
                    <h2 id="cart-heading">کالا های موجود در سبد خرید شما</h2>
                    <cart-items></cart-items>
                </section>

                <!-- Order summary -->
                <section
                    aria-labelledby="summary-heading"
                    class="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
                >
                    <h2
                        id="summary-heading"
                        class="text-lg font-medium text-gray-900"
                    >
                        خلاصه سفارش
                    </h2>

                    <dl class="mt-6 space-y-4">
                        <div class="flex items-center justify-between">
                            <dt class="text-sm text-gray-600">مجموع هزینه</dt>
                            <dd class="text-sm font-medium text-gray-900">
                                {{
                                    isNumber(useCartStore().totalPrice)
                                        ? useCartStore().totalPrice.toLocaleString(
                                              'fa'
                                          )
                                        : '...'
                                }}
                                تومان
                            </dd>
                        </div>
                        <div
                            class="border-t border-gray-200 pt-4 flex items-center justify-between"
                        >
                            <dt class="flex items-center text-sm text-gray-600">
                                <span>تعداد کالا</span>
                                <a
                                    href="#"
                                    class="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                                >
                                    <span class="sr-only">تعداد کالا ها</span>
                                    <QuestionMarkCircleIcon
                                        class="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </a>
                            </dt>
                            <div class="text-sm font-medium text-gray-900">
                                {{ useCartStore().total.toLocaleString('fa') }}
                            </div>
                        </div>
                    </dl>

                    <div class="mt-6"></div>
                    <div class="mt-6">
                        <NuxtLink
                            :href="route('checkout')"
                            class="btn btn-primary w-full"
                            >ثبت سفارش</NuxtLink
                        >
                    </div>
                    <div>
                        <p class="mt-2 text-xs text-gray-500">
                            هزینه های ارسال و مالیات در صفحه ی تسویه حساب محاسبه
                            می شود.
                        </p>
                    </div>
                </section>
            </div>

            <!-- Related products -->
            <!--            <section aria-labelledby="related-heading" class="mt-24">-->
            <!--                <h2 id="related-heading" class="text-lg font-medium text-gray-900">کالا های پیشنهادی &hellip;</h2>-->

            <!--                <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">-->
            <!--                    <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="group relative">-->
            <!--                        <div class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">-->
            <!--                            <img :src="relatedProduct.imageSrc" :alt="relatedProduct.imageAlt" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />-->
            <!--                        </div>-->
            <!--                        <div class="mt-4 flex justify-between">-->
            <!--                            <div>-->
            <!--                                <h3 class="text-sm text-gray-700">-->
            <!--                                    <a :href="relatedProduct.href">-->
            <!--                                        <span aria-hidden="true" class="absolute inset-0" />-->
            <!--                                        {{ relatedProduct.name }}-->
            <!--                                    </a>-->
            <!--                                </h3>-->
            <!--                                <p class="mt-1 text-sm text-gray-500">{{ relatedProduct.color }}</p>-->
            <!--                            </div>-->
            <!--                            <p class="text-sm font-medium text-gray-900">{{ relatedProduct.price }}</p>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </section>-->
        </main>

        <Footer1></Footer1>
    </div>
</template>

<script>
import Header1 from '../Layouts/Headers/Header.vue';
import Footer1 from '../Layouts/Footeres/Footer.vue';

import { useCartStore } from '../../../stores/cart';
import { isNumber } from 'chart.js/helpers';
import Cart from '../../../Components/Cart.vue';
import CartItems from '../../../Components/CartItems.vue';

export default {
    methods: { isNumber, useCartStore },
    components: {
        CartItems,
        Cart,
        Link,
        Head,
        Footer1,
        Header1,
    },

    setup() {
        return {};
    },
};
</script>

<style scoped>
.product-description :deep(h2) {
    @apply font-semibold mt-3 mb-1;
}
</style>
