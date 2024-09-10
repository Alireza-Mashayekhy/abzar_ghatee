<template>


    <div>
        <div
            class="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"
        >
            <label class="form-check-label ml-0" for="show-example-1"
            >مایل به دریافت فاکتور رسمی هستم؟( 9 درصد مالیات به مبلغ فاکتور اضافه می شود.)</label
            >
            <input
                v-model="invoice_detail.want_official_bill"
                class="form-check-input ltr:mr-0 rtl:ml-0 ltr:ml-3 rtl:mr-3"
                type="checkbox"
            />
        </div>
        <div v-show="invoice_detail.want_official_bill" class="box shadow-md p-5 my-5 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5">
            <div class="col-span-2">
                <label for="customer_type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نوع  مشتری</label>
                <select id="customer_type" v-model="invoice_detail.customer_type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                    <option value="person">شخص حقیقی</option>
                    <option value="company">شخص حقوقی</option>
                </select>
            </div>

            <div v-show="invoice_detail.customer_type==='person'" class="col-span-2">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام و نام خانوادگی</label>
                <input type="text" id="name" v-model="invoice_detail.name" placeholder="نام  خود را وارد کنید" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            </div>

            <div v-show="invoice_detail.customer_type==='person'" class="col-span-2">
                <label for="national_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">کد ملی</label>
                <input type="text" id="national_code" v-model="invoice_detail.national_code" placeholder="کد ملی  خود را وارد کنید" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            </div>

            <div v-show="invoice_detail.customer_type==='company'" class="col-span-2">
                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام شرکت</label>
                <input type="text" id="company" v-model="invoice_detail.company" placeholder="نام شرکت  خود را وارد کنید" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            </div>

            <div v-show="invoice_detail.customer_type==='company'" class="col-span-2">
                <label for="economic_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">کد اقتصادی</label>
                <input type="text" id="economic_code" v-model="invoice_detail.economic_code" placeholder="کد اقتصادی  خود را وارد کنید" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            </div>

            <div v-show="invoice_detail.customer_type==='company'" class="col-span-2">
                <label for="national_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شناسه ملی</label>
                <input type="text" id="national_id" v-model="invoice_detail.national_id" placeholder="شناسه ملی  خود را وارد کنید" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            </div>

            <div v-show="invoice_detail.customer_type==='company'" class="col-span-2">
                <label for="registration_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شماره ثبت</label>
                <input type="text" id="registration_number" v-model="invoice_detail.registration_number" placeholder="شماره ثبت  خود را وارد کنید" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            </div>

            <div v-show="invoice_detail.customer_type==='person' || invoice_detail.customer_type==='company'" class="col-span-2">
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شماره ثلفن ثابت</label>
                <input type="text" id="phone" v-model="invoice_detail.phone" placeholder="شماره تلفن ثابت را وارد کنید" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            </div>

            <div v-show="invoice_detail.customer_type==='person' || invoice_detail.customer_type==='company'" class="col-span-2">
                <label for="postal_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">کد پستی</label>
                <input type="text" id="postal_code" v-model="invoice_detail.address.postal_code" placeholder="کد پستی  خود را وارد کنید" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            </div>

            <div v-show="invoice_detail.customer_type==='person' || invoice_detail.customer_type==='company'" class="col-span-2">
                <label for="province" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">استان</label>
                <TomSelect

                    id="create_address_province"
                    v-model="invoice_detail.address.province" :options="{
                                              placeholder: 'استان خود را انتخاب کنید.',
                                            }" class="w-full">

                    <option v-for="(province,idx) in provinces" :key="idx" :value="province"  >{{ province }}</option>

                </TomSelect>
              </div>

            <div v-show="invoice_detail.customer_type==='person' || invoice_detail.customer_type==='company'" class="col-span-2">
                <label for=" city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> شهر</label>
                <input type="text" id=" city" v-model="invoice_detail.address. city" placeholder=" شهر  خود را وارد کنید" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            </div>

            <div v-show="invoice_detail.customer_type==='person' || invoice_detail.customer_type==='company'" class="col-span-2 lg:col-span-6 md:col-span-4">
                <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">آدرس</label>
                <textarea id="address" v-model="invoice_detail.address.address" placeholder="آدرس  خود را وارد کنید"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"></textarea>
            </div>
        </div>


    </div>

</template>
<script>
import gql from "graphql-tag";
import {useMutation, useQuery} from "@vue/apollo-composable";

import {computed, ref, watch} from "vue";

const page = usePage()
const user = computed(() => page.props.auth.user)



const provinces=[
    "","آذربایجان شرقی", "آذربایجان غربی", "اردبیل", "اصفهان", "البرز", "ایلام", "بوشهر", "تهران", "چهارمحال و بختیاری", "خراسان جنوبی", "خراسان رضوی", "خراسان شمالی", "خوزستان", "زنجان", "سمنان", "سیستان و بلوچستان", "فارس", "قزوین", "قم", "کردستان", "کرمان", "کرمانشاه", "کهگیلویه و بویراحمد", "گلستان", "گیلان", "لرستان", "مازندران", "مرکزی", "هرمزگان", "همدان", "یزد"
];
export default {
    emits: ['invoiceEmit'],
    props:{
        'invoice_detail_prop':Object
    },
    setup(props,{emit}) {


            const invoice_detail=ref({
            "want_official_bill":props.invoice_detail_prop.want_official_bill,
            "customer_type":props.invoice_detail_prop.customer_type,
            "name":props.invoice_detail_prop.name,
            "national_code":props.invoice_detail_prop.national_code,

            "company":props.invoice_detail_prop.company,
            "economic_code":props.invoice_detail_prop.economic_code,
            "national_id":props.invoice_detail_prop.national_id,
            "registration_number":props.invoice_detail_prop.registration_number,

            "phone":props.invoice_detail_prop.phone,
            "address":{
                "country":props.invoice_detail_prop.address.country,
                "province":props.invoice_detail_prop.address.province,
                "city":props.invoice_detail_prop.address.city,
                "address":props.invoice_detail_prop.address.address,
                "postal_code":props.invoice_detail_prop.address.postal_code
            }
        })

        watch(invoice_detail.value, (newVal,oldVal)=>{
            emit('invoiceEmit',newVal);
        })

        return {
            provinces,invoice_detail

        }

    }
}


</script>
