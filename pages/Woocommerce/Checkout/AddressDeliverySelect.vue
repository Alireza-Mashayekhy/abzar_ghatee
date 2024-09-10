<template>


    <div class="rounded-lg bg-white p-4 dark:bg-zinc-900">
        <!-- Address Section -->

        <div class="mb-6">
            <div class="flex items-center justify-between gap-x-2 pb-4">
                <h1
                    class="flex items-center gap-x-4 text-sm text-zinc-700 dark:text-white xs:text-base md:text-lg"
                >
                    آدرس تحویل سفارش
                </h1>
                <button
                    data-modal-target="address-add-modal"
                    data-modal-toggle="address-add-modal"
                    class="btn-primary-nobg px-3 py-2 text-sm"
                >
                      <span>
                        <svg class="h-6 w-6">
                          <use xlink:href="#address-add"></use>
                        </svg>
                      </span>
                    <span> آدرس جدید </span>
                </button>
            </div>

            <fieldset class="space-y-2">
                <legend class="sr-only">Address</legend>

                <div v-if="result?.addresses?.data" v-for="(address,idx) in result.addresses.data" :key="idx"
                     @click="selectedAddress=address.id;$emit('selectAddressEmit',reciever_phone,reciever_name,address.id,address.province, address.city, address.address, address.postal_code)"

                >
                    <input
                        type="radio"
                        name="address"
                        value="address-1"
                        id="address-1"
                        class="peer hidden"
                        :checked="selectedAddress===address.id"
                    />

                    <label
                        for="address-1"
                        class="relative block cursor-pointer rounded-lg border border-gray-100 p-4 shadow-base peer-checked:border-emerald-500 hover:border-gray-200 dark:border-white/5 peer-checked:dark:border-emerald-400 dark:hover:border-white/10"
                    >
                        <div
                            class="mb-4 flex items-center justify-between gap-x-2 sm:mb-2"
                        >
                            <p
                                class=" text-sm text-zinc-600 dark:text-zinc-300 xs:text-base  "
                            >
                                {{ "استان "+address.province+" ، شهر "+address.address+" ، "+address.city  }}
                            </p>

                            <div class="hidden md:block">
                                <button
                                    id="dropdownMenuIconButton"
                                    data-dropdown-toggle="address-option-1"
                                    type="button"
                                    class="rounded-full p-1 text-zinc-600 hover:bg-gray-100 dark:text-zinc-300 hover:dark:bg-black"
                                >
                                    <svg class="h-6 w-6">
                                        <use xlink:href="#vertical-dot" />
                                    </svg>
                                </button>
                                <!-- Dropdown menu -->
                                <div
                                    class="z-10 !ml-5 hidden w-50 overflow-hidden rounded-lg border border-gray-100 bg-white dark:border-white/5 dark:bg-zinc-900"
                                    id="address-option-1"
                                >
                                    <ul class="space-y-2 p-2">
                                        <li>
                                            <button
                                                type="button"
                                                data-modal-target="address-edit-modal-1"
                                                data-modal-toggle="address-edit-modal-1"
                                                class="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sky-500 hover:bg-sky-500/10 dark:text-sky-400 dark:hover:bg-sky-400/10"
                                                @click="updateAddressForm.id=address.id;updateAddressForm.province=address.province;updateAddressForm.city=address.city;updateAddressForm.address=address.address;updateAddressForm.postal_code=address.postal_code;"
                                            >
                                                <div class="flex items-center gap-x-2">
                                                    <svg class="h-6 w-6">
                                                        <use xlink:href="#address-edit"></use>
                                                    </svg>
                                                    <span> ویرایش </span>
                                                </div>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                data-modal-target="address-delete-modal-1"
                                                data-modal-toggle="address-delete-modal-1"
                                                class="flex w-full items-center justify-between rounded-lg px-4 py-3 text-red-500 hover:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-400/10"
                                                @click="deleteAddress({id:address.id})"
                                            >
                                                <div class="flex items-center gap-x-2">
                                                    <svg class="h-6 w-6">
                                                        <use xlink:href="#address-delete"></use>
                                                    </svg>
                                                    <span> حذف </span>
                                                </div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-between gap-x-2">
                            <p
                                class="line-clamp-1 text-sm text-zinc-500 dark:text-zinc-400"
                            >
                                {{" کدپستی : "+address.postal_code  }}
                            </p>
                            <div class="flex items-center gap-x-2 md:hidden">
                                <button
                                    data-modal-target="address-delete-modal-1"
                                    data-modal-toggle="address-delete-modal-1"
                                    class="btn-red-nobg px-3 py-1 text-sm xs:px-4 xs:py-2"
                                >
                                    حذف
                                </button>
                                <button
                                    data-modal-target="address-edit-modal-1"
                                    data-modal-toggle="address-edit-modal-1"
                                    class="btn-secondary-nobg px-3 py-1 text-sm xs:px-4 xs:py-2"
                                >
                                    ویرایش
                                </button>
                            </div>
                        </div>
                    </label>
                </div>
            </fieldset>
        </div>
        <!-- Delivery Section -->

        <div>
            <div class="flex items-center justify-between gap-x-2 pb-4">
                <h2
                    class="flex items-center gap-x-4 text-sm text-zinc-700 dark:text-white xs:text-base md:text-lg"
                >
                    شیوه ارسال
                </h2>
            </div>

            <fieldset class="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <legend class="sr-only">Delivery</legend>

                <div>
                    <input
                        type="radio"
                        name="delivery"
                        value="delivery-1"
                        id="delivery-1"
                        class="peer hidden"
                    />

                    <label
                        for="delivery-1"
                        class="relative block h-[116px] cursor-pointer rounded-lg border border-gray-100 p-4 shadow-base peer-checked:border-emerald-500 hover:border-gray-200 dark:border-white/5 peer-checked:dark:border-emerald-400 dark:hover:border-white/10"
                    >
                        <div
                            class="mb-4 flex items-center justify-between gap-x-2 sm:mb-2"
                        >
                            <p
                                class="line-clamp-1 text-sm text-zinc-600 dark:text-zinc-300 xs:text-base"
                            >
                                تیپاکس
                            </p>
<!--                            <img-->
<!--                                src="./assets/images/others/tipax.png"-->
<!--                                alt=""-->
<!--                                class="w-25"-->
<!--                            />-->
                        </div>

                        <div
                            class="mb-1 text-emerald-500 dark:text-emerald-400"
                        >
                            <span>60,000</span>
                            <span class="text-sm">تومان</span>
                        </div>

                        <div
                            class="text-sm text-emerald-500 dark:text-emerald-400"
                        >
                            <span> رایگان بالای 500,000 </span>
                        </div>
                    </label>
                </div>

                <div>
                    <input
                        type="radio"
                        name="delivery"
                        value="delivery-2"
                        id="delivery-2"
                        class="peer hidden"
                    />

                    <label
                        for="delivery-2"
                        class="relative block h-[116px] cursor-pointer rounded-lg border border-gray-100 p-4 shadow-base peer-checked:border-emerald-500 hover:border-gray-200 dark:border-white/5 peer-checked:dark:border-emerald-400 dark:hover:border-white/10"
                    >
                        <div
                            class="mb-4 flex items-center justify-between gap-x-2 sm:mb-2"
                        >
                            <p
                                class="line-clamp-1 text-sm text-zinc-600 dark:text-zinc-300 xs:text-base"
                            >
                                تیپاکس
                            </p>
<!--                            <img-->
<!--                                src="./assets/images/others/tipax.png"-->
<!--                                alt=""-->
<!--                                class="w-25"-->
<!--                            />-->
                        </div>

                        <div class="text-emerald-500 dark:text-emerald-400">
                            <span class="text-sm">پرداخت در مقصد</span>
                        </div>
                    </label>
                </div>
            </fieldset>
        </div>
    </div>

    <!-- Address Delete modal -->
    <div
        id="address-delete-modal-1"
        tabindex="-1"
        aria-hidden="true"
        class="main-scroll fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0"
    >
        <div class="relative max-h-full w-full max-w-md">
            <div
                class="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white shadow ring-1 ring-gray-100 dark:divide-white/5 dark:bg-zinc-900 dark:ring-white/5"
            >
                <div class="px-4 py-5 sm:px-6">
                    <div class="flex items-center justify-between">
                        <h3 class="text-zinc-700 dark:text-white md:text-lg">
                            حذف آدرس
                        </h3>

                        <button
                            class="text-zinc-700 dark:text-white"
                            data-modal-hide="address-delete-modal-1"
                            type="button"
                        >
                            <svg class="h-5 w-5">
                                <use xlink:href="#close"></use>
                            </svg>

                            <span class="sr-only">Close Modal</span>
                        </button>
                    </div>
                </div>
                <div class="space-y-6 px-4 py-5 sm:p-6">
                    <p class="text-zinc-600 dark:text-zinc-300">
                        آیا از حذف این آدرس اطمینان دارید؟
                    </p>
                    <div class="flex items-center justify-end gap-x-4">
                        <button
                            class="btn-secondary px-4 py-2 text-sm"
                            data-modal-hide="address-delete-modal-1"
                            type="button"
                        >
                            انصراف
                        </button>
                        <button class="btn-red px-4 py-2 text-sm" type="button">
                            حذف آدرس
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Address Add modal -->
    <div
        id="address-add-modal"
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
                        <h3 class="text-zinc-700 dark:text-white md:text-lg">
                            ثبت آدرس جدید
                        </h3>

                        <button
                            class="text-zinc-700 dark:text-white"
                            data-modal-hide="address-add-modal"
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
                    <div class="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-6">
                        <!-- Receiver name -->
                        <div class="col-span-2 sm:col-span-1">
                            <label
                                for="name"
                                class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="name"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    placeholder="نام گیرنده"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      نام گیرنده
                    </span>
                            </label>
                        </div>
                        <!-- Receiver family -->
                        <div class="col-span-2 sm:col-span-1">
                            <label
                                for="family"
                                class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="family"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    placeholder="نام خانوادگی گیرنده"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      نام خانوادگی گیرنده
                    </span>
                            </label>
                        </div>
                        <!-- Receiver Phone number -->
                        <div class="col-span-2 sm:col-span-1">
                            <label
                                for="phoneNumber"
                                class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    placeholder="شماره تماس گیرنده"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      شماره تماس گیرنده
                    </span>
                            </label>
                        </div>
                        <!-- Receiver National Code -->
                        <div class="col-span-2 sm:col-span-1">
                            <label
                                for="nationalCode"
                                class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="nationalCode"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    placeholder="کد ملی گیرنده"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      کد ملی گیرنده
                    </span>
                            </label>
                        </div>

                        <!-- Receiver Address -->
                        <div class="col-span-2">
                            <label
                                for="address"
                                class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                    <textarea
                        type="text"
                        id="address"
                        rows="3"
                        class="main-scroll peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                        placeholder="نشانی گیرنده"
                    ></textarea>

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      نشانی گیرنده
                    </span>
                            </label>
                        </div>
                        <!-- Receiver City -->
                        <div class="col-span-2 sm:col-span-1">
                            <label
                                for="city"
                                class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="city"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    placeholder="شهر"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      شهر
                    </span>
                            </label>
                        </div>
                        <!-- Receiver Province -->
                        <div class="col-span-2 sm:col-span-1">
                            <label
                                for="province"
                                class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="province"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    placeholder="استان"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      استان
                    </span>
                            </label>
                        </div>
                        <!-- Receiver Building Info -->
                        <div
                            class="col-span-2 flex w-full items-center gap-x-4 gap-y-5 sm:col-span-1 sm:gap-6"
                        >
                            <label
                                for="buildingNumber"
                                class="relative block w-full rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="buildingNumber"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    placeholder="پلاک"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      پلاک
                    </span>
                            </label>
                            <label
                                for="buildingUnit"
                                class="relative block w-full rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="buildingUnit"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    placeholder="واحد"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      واحد
                    </span>
                            </label>
                        </div>
                        <!-- Receiver Postal Code -->
                        <div class="col-span-2 sm:col-span-1">
                            <label
                                for="postalCode"
                                class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="postalCode"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    placeholder="کد پستی"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      کد پستی
                    </span>
                            </label>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <button class="btn-primary w-full px-4 py-2 md:w-auto">
                  <span>
                    <svg class="h-5 w-5">
                      <use xlink:href="#address-add" />
                    </svg>
                  </span>
                            <span> ثبت آدرس جدید </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Address Edit modal -->
    <div
        id="address-edit-modal-1"
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
                        <h3 class="text-zinc-700 dark:text-white md:text-lg">
                            ویرایش آدرس
                        </h3>

                        <button
                            class="text-zinc-700 dark:text-white"
                            data-modal-hide="address-edit-modal-1"
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
                    <div class="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-6">
                        <!-- Receiver name -->
                        <div class="col-span-2 sm:col-span-1">
                            <label
                                for="name"
                                class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="name"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    value="تایماز"
                                    placeholder="نام گیرنده"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      نام گیرنده
                    </span>
                            </label>
                        </div>
                        <!-- Receiver family -->
                        <div class="col-span-2 sm:col-span-1">
                            <label
                                for="family"
                                class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="family"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    value="اکبری"
                                    placeholder="نام خانوادگی گیرنده"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      نام خانوادگی گیرنده
                    </span>
                            </label>
                        </div>
                        <!-- Receiver Phone number -->
                        <div class="col-span-2 sm:col-span-1">
                            <label
                                for="phoneNumber"
                                class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    value="09999999999"
                                    placeholder="شماره تماس گیرنده"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      شماره تماس گیرنده
                    </span>
                            </label>
                        </div>
                        <!-- Receiver National Code -->
                        <div class="col-span-2 sm:col-span-1">
                            <label
                                for="nationalCode"
                                class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="nationalCode"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    value="1666666666"
                                    placeholder="کد ملی گیرنده"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      کد ملی گیرنده
                    </span>
                            </label>
                        </div>

                        <!-- Receiver Address -->
                        <div class="col-span-2">
                            <label
                                for="address"
                                class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                    <textarea
                        type="text"
                        id="address"
                        rows="3"
                        class="main-scroll peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                        placeholder="نشانی گیرنده"
                    >
استان تهران شهر تهران - خیابان گاندی جنوبی - نبش خیابان ۲۱ - پلاک ۲۸</textarea
                    >

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      نشانی گیرنده
                    </span>
                            </label>
                        </div>
                        <!-- Receiver City -->
                        <div class="col-span-2 sm:col-span-1">
                            <label
                                for="city"
                                class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="city"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    value="تهران"
                                    placeholder="شهر"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      شهر
                    </span>
                            </label>
                        </div>
                        <!-- Receiver Province -->
                        <div class="col-span-2 sm:col-span-1">
                            <label
                                for="province"
                                class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="province"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    value="تهران"
                                    placeholder="استان"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      استان
                    </span>
                            </label>
                        </div>

                        <!-- Receiver Building Info -->
                        <div
                            class="col-span-2 flex w-full items-center gap-x-4 gap-y-5 sm:col-span-1 sm:gap-6"
                        >
                            <label
                                for="buildingNumber"
                                class="relative block w-full rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="buildingNumber"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    value="28"
                                    placeholder="پلاک"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      پلاک
                    </span>
                            </label>
                            <label
                                for="buildingUnit"
                                class="relative block w-full rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="buildingUnit"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    value="0"
                                    placeholder="واحد"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      واحد
                    </span>
                            </label>
                        </div>
                        <!-- Receiver Postal Code -->
                        <div class="col-span-2 sm:col-span-1">
                            <label
                                for="postalCode"
                                class="relative block rounded-lg border border-gray-100 shadow-base dark:border-white/5"
                            >
                                <input
                                    type="text"
                                    id="postalCode"
                                    class="peer w-full rounded-lg border-none bg-transparent px-4 py-3 text-zinc-700 placeholder-transparent focus:outline-none focus:ring-0 dark:text-white"
                                    value="0000000000"
                                    placeholder="کد پستی"
                                />

                                <span
                                    class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-2 py-0.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm dark:bg-zinc-900 dark:text-gray-300"
                                >
                      کد پستی
                    </span>
                            </label>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <button class="btn-primary w-full px-4 py-2 md:w-auto">
                  <span>
                    <svg class="h-5 w-5">
                      <use xlink:href="#address-edit" />
                    </svg>
                  </span>
                            <span> ویرایش آدرس </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import gql from "graphql-tag";
import {useMutation, useQuery} from "@vue/apollo-composable";

import {computed, onMounted, ref} from "vue";

const page = usePage()
const user = computed(() => page.props.auth.user)


const provinces=[
    "","آذربایجان شرقی", "آذربایجان غربی", "اردبیل", "اصفهان", "البرز", "ایلام", "بوشهر", "تهران", "چهارمحال و بختیاری", "خراسان جنوبی", "خراسان رضوی", "خراسان شمالی", "خوزستان", "زنجان", "سمنان", "سیستان و بلوچستان", "فارس", "قزوین", "قم", "کردستان", "کرمان", "کرمانشاه", "کهگیلویه و بویراحمد", "گلستان", "گیلان", "لرستان", "مازندران", "مرکزی", "هرمزگان", "همدان", "یزد"
];
export default {
    emits: {
        'selectAddressEmit':(reciever_phone,reciever_name,address_id,province, city, address, postal_code)=>{
            return !!(reciever_phone && reciever_name && address_id && province && city && address && postal_code);
        }
    },
    props:
        ['selectedAddressID']
    ,
    setup(props,{emit}) {


        const {result, loading, error,refetch:addressRefetch} = useQuery(gql`
             query getAddresses($userID:ID){
                    addresses(  user_id: $userID ){
                       data{
                        id,province,city,address,postal_code
                       }
                    }
                    }
                `,{
            userID:user.value.id
        });

        const reciever_phone=ref(user.value.phone);
        const reciever_name=ref(user.value.name);

        // create address
        const createAddressModalPreview = ref(false);
        const createAddressForm = ref({
            'province': '',
            'city': '',
            'address': '',
            'postal_code': '',

        })


        const {
            mutate: createAddress,
            onDone, onError, loading: createAddressLoading
        } = useMutation(gql`
                  mutation createAddress($province:String!,$city:String!, $address:String!, $postal_code:String, $userID:ID!) {
                    createAddress (input: {country: "iran" ,province:$province, city: $city, address: $address, postal_code: $postal_code, user_id: $userID }) {

                        id,province,city,address,postal_code
                    }
              }
            `, () => ({
            variables: {
                province: createAddressForm.value.province,
                city: createAddressForm.value.city,
                address: createAddressForm.value.address,
                postal_code: createAddressForm.value.postal_code,
                userID:user.value.id
            }
        }))

        const createAddressHasError = ref(false);
        onDone(() => {
            createAddressForm.value.province = "";
            createAddressForm.value.city = "";
            createAddressForm.value.address = "";
            createAddressForm.value.postal_code = "";


            createAddressModalPreview.value = false;

            // successNotificationToggle();
            addressRefetch()
        })
        onError(error => {
            console.log(error);
            createAddressHasError.value = true;
        })


        // update address
        const updateAddressModalPreview = ref(false);
        const updateAddressForm = ref({
            'id': 0,
            'province': '',
            'city': '',
            'address': '',
            'postal_code': '',

        })


        const {
            mutate: updateAddress,
            onDone:updateAddressOnDone, onError:updateAddressOnError, loading: updateAddressLoading
        } = useMutation(gql`
                  mutation updateAddress($id:ID!, $province:String ,$city:String , $address:String , $postal_code:String) {
                    updateAddress (input: {id: $id, country: "iran" ,province:$province, city: $city, address: $address, postal_code: $postal_code }) {

                        id,province,city,address,postal_code
                    }
              }
            `, () => ({
            variables: {
                province: updateAddressForm.value.province,
                city: updateAddressForm.value.city,
                address: updateAddressForm.value.address,
                postal_code: updateAddressForm.value.postal_code,
                id:updateAddressForm.value.id
            }
        }))

        const updateAddressHasError = ref(false);
        updateAddressOnDone((res) => {
            updateAddressForm.value.province = "";
            updateAddressForm.value.city = "";
            updateAddressForm.value.address = "";
            updateAddressForm.value.postal_code = "";

            updateAddressModalPreview.value = false;
            updateAddressHasError.value=false;

            // successNotificationToggle();
            const address=res.data.updateAddress;
            emit('selectAddressEmit', reciever_phone.value ,reciever_name.value, address.id, address.province, address.city, address.address, address.postal_code);
            selectedAddress.value=address.id;

            addressRefetch()
        })
        updateAddressOnError(error => {
            console.log(error);
            updateAddressHasError.value = true;
        })



        //delete address ****

        const {
            mutate: deleteAddressMutate,
            onDone:deleteAddressOnDone, onError:deleteAddressOnError, loading: deleteAddressLoading
        } = useMutation(gql`
                  mutation deleteAddress($id:ID!) {
                    deleteAddress (id: $id) {
                        id,province,city,address,postal_code
                    }
              }
            `,)
        deleteAddressOnDone(()=>{
            selectedAddress.value=0;
            addressRefetch()
        })
        deleteAddressOnError(error=>{
            console.log(error);
        })

        function deleteAddress(address_id) {
            if (confirm('مایلید آدرس را حذف کنید؟')) {
                deleteAddressMutate(address_id);
            }
        }

        // selected address
        const selectedAddress=ref(props.selectedAddressID);




        // *********

        return {
            provinces,reciever_name,reciever_phone,
            result, loading, error,
            createAddressModalPreview, createAddressHasError, createAddressForm, createAddress,
            updateAddressModalPreview, updateAddressHasError, updateAddressForm, updateAddress,
            deleteAddress,
            selectedAddress

        }

    }
}


</script>
