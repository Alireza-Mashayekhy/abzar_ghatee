<template>
    <div>
        <div class="sr-only">
            <svg>
                <!-- Close -->
                <symbol
                    aria-hidden="true"
                    fill="currentColor"
                    id="close"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clip-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        fill-rule="evenodd"
                    ></path>
                </symbol>
                <!-- plus  -->
                <symbol
                    aria-hidden="true"
                    id="plus"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                    <path
                        d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                        fill="currentColor"
                    ></path>
                </symbol>
                <!-- minus  mdi-minus -->
                <symbol id="minus" viewBox="0 0 24 24">
                    <path d="M19 13H5v-2h14v2Z" fill="currentColor"></path>
                </symbol>
                <!-- trash solar-trash-bin-trash-broken -->
                <symbol id="trash" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                        <path
                            d="M20.5 6h-17m6 5l.5 5m4.5-5l-.5 5"
                            stroke-linecap="round"
                        ></path>
                        <path
                            d="M6.5 6h.11a2 2 0 0 0 1.83-1.32l.034-.103l.097-.291c.083-.249.125-.373.18-.479a1.5 1.5 0 0 1 1.094-.788C9.962 3 10.093 3 10.355 3h3.29c.262 0 .393 0 .51.019a1.5 1.5 0 0 1 1.094.788c.055.106.097.23.18.479l.097.291A2 2 0 0 0 17.5 6"
                        ></path>
                        <path
                            d="M18.373 15.4c-.177 2.654-.265 3.981-1.13 4.79c-.865.81-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81c-.865-.809-.953-2.136-1.13-4.79l-.46-6.9m13.666 0l-.2 3"
                            stroke-linecap="round"
                        ></path>
                    </g>
                </symbol>
            </svg>
        </div>
        <ul
            class="main-scroll h-full space-y-2 divide-y divide-gray-100 overflow-y-auto p-5 pl-2 dark:divide-white/5"
        >
            <li v-for="item in useCartStore().cart" :key="item.id">
                <div class="flex gap-x-2 py-5">
                    <!-- Product Image -->

                    <div class="relative min-w-fit">
                        <NuxtLink :href="item.url">
                            <img
                                :alt="item.name"
                                class="h-[120px] w-[120px]"
                                loading="lazy"
                                :src="item.imageUrl"
                            />
                        </NuxtLink>
                        <button
                            class="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-black"
                            type="button"
                            @click="useCartStore().removeFromCart(item.id)"
                        >
                            <svg class="h-6 w-6 text-red-600 dark:text-red-500">
                                <use xlink:href="#close" />
                            </svg>
                        </button>
                    </div>

                    <div class="w-full space-y-1.5">
                        <!-- Product Title -->

                        <NuxtLink
                            class="line-clamp-2 h-12 text-zinc-700 dark:text-white"
                            :href="item.url"
                        >
                            {{ item.name }}
                        </NuxtLink>
                        <!-- Product Attribute -->
                        <div
                            class="flex items-center gap-x-2 text-sm text-zinc-500 dark:text-gray-300"
                        >
                            <div>
                                تعداد : {{ item.quantity.toLocaleString('fa') }}
                            </div>
                            <div
                                class="h-3 w-px rounded-full bg-gray-200 dark:bg-white/5"
                            ></div>
                            <div class="flex items-center gap-x-2">
                                <span> فی : </span>
                                <sapn
                                    v-if="item.normalPrice !== item.price"
                                    class="ltr:ml-4 rtl:mr-4 line-through"
                                >
                                    {{
                                        item.normalPrice.toLocaleString('fa')
                                    }}</sapn
                                >
                                <span class="font-bold">{{
                                    item.price.toLocaleString('fa')
                                }}</span>
                            </div>
                        </div>

                        <div class="flex items-center justify-between gap-x-2">
                            <!-- Product Price -->
                            <div class="text-emerald-500 dark:text-emerald-400">
                                <span class="text-lg font-bold">{{
                                    (item.price * item.quantity).toLocaleString(
                                        'fa'
                                    )
                                }}</span>
                                <span class="text-sm">تومان</span>
                            </div>
                            <!-- Product Quantity -->
                            <div
                                class="flex h-10 w-24 items-center justify-between rounded-lg border border-gray-100 px-2 py-1 dark:border-white/5"
                            >
                                <button
                                    data-action="increment"
                                    type="button"
                                    @click="
                                        useCartStore().changeQuantity(
                                            item.id,
                                            item.quantity + 1
                                        )
                                    "
                                >
                                    <svg
                                        class="h-5 w-5 text-emerald-500 dark:text-emerald-400"
                                    >
                                        <use xlink:href="#plus" />
                                    </svg>
                                </button>
                                <input
                                    class="flex h-5 w-full grow select-none items-center justify-center bg-transparent text-center text-sm text-zinc-700 outline-none dark:text-white"
                                    type="number"
                                    :value="item.quantity"
                                    @change="
                                        useCartStore().changeQuantity(
                                            item.id,
                                            $event.target.value
                                        )
                                    "
                                />
                                <button
                                    data-action="decrement"
                                    type="button"
                                    @click="
                                        useCartStore().changeQuantity(
                                            item.id,
                                            item.quantity - 1
                                        )
                                    "
                                >
                                    <svg
                                        class="h-5 w-5 text-red-600 dark:text-red-500"
                                    >
                                        <use
                                            v-if="item.quantity === 1"
                                            xlink:href="#trash"
                                        />
                                        <use v-else xlink:href="#minus" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';
</script>
