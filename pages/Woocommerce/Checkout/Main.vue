<template>
    <Head>
        <title>تکمیل خرید </title>

    </Head>
    <div class="flex min-h-screen flex-col">
        <!-- Mobile menu -->
        <Header1></Header1>

        <main class="flex-grow bg-gray-100 pb-14 pt-36 dark:bg-black xs:pt-36">

            <div class="container pb-14 ">
                <div class="grid grid-cols-12 gap-2 lg:gap-6">

                    <!-- breadCrumb -->
                    <div class="col-span-12 rounded-lg bg-white dark:bg-zinc-900">
                        <ol class="grid grid-cols-4 overflow-hidden rounded-lg">
                            <li
                                class="flex flex-col items-center justify-center gap-2 p-4 text-xs text-emerald-500 dark:text-emerald-400 sm:text-sm md:text-base"
                                :class="{'bg-emerald-500/10':step===1 , 'dark:bg-emerald-400/10':step===1 , 'opacity-50':step!==1}"
                            >
                                <svg class="h-6 w-6 md:h-8 md:w-8">
                                    <use xlink:href="#address" />
                                </svg>
                                <p class="leading-none">انتخاب آدرس</p>
                            </li>

                            <li
                                class="flex flex-col items-center justify-center gap-2 p-4 text-xs text-emerald-500 dark:text-emerald-400 sm:text-sm md:text-base"
                                :class="{'bg-emerald-500/10':step===2 , 'dark:bg-emerald-400/10':step===2 , 'opacity-50':step!==2}"
                            >
                                <svg class="h-6 w-6 md:h-8 md:w-8">
                                    <use xlink:href="#delivery-truck" />
                                </svg>
                                <p class="leading-none">شیوه ارسال</p>
                            </li>

                            <li
                                class="flex flex-col items-center justify-center gap-2 p-4 text-xs text-emerald-500 dark:text-emerald-400 sm:text-sm md:text-base"
                                :class="{'bg-emerald-500/10':step===3 , 'dark:bg-emerald-400/10':step===3 , 'opacity-50':step!==3}"
                            >
                                <svg class="h-6 w-6 md:h-8 md:w-8">
                                    <use xlink:href="#order-delivered" />
                                </svg>
                                <p class="leading-none">فاکتور</p>
                            </li>

                            <li
                                class="flex flex-col items-center justify-center gap-2 p-4 text-xs text-emerald-500 dark:text-emerald-400 sm:text-sm md:text-base"
                                :class="{'bg-emerald-500/10':step===4 , 'dark:bg-emerald-400/10':step===4 , 'opacity-50':step!==4}"
                            >
                                <svg class="h-6 w-6 md:h-8 md:w-8">
                                    <use xlink:href="#credit" />
                                </svg>

                                <p class="leading-none">نهایی</p>
                            </li>
                        </ol>
                    </div>
                    <!-- Content -->
                    <div class="col-span-12 md:col-span-8">
                        <div v-if="step===1">
                            <address-select  :selectedAddressID="orderDetail.order.info.shipping.receiver.address.id" @selectAddressEmit="selectAddressEmit"></address-select>

                        </div>
                        <div v-if="step===2">
<!--                            <address-delivery-select  :selected-address-delivery="orderDetail.order.info.shipping.delivery.delivery_type" @selectAddressDeliveryEmit="selectAddressEmit"></address-delivery-select>>-->

                            <delivery-type-select :selected-delivery="orderDetail.order.info.shipping.delivery.delivery_type" :shippingProvince="orderDetail.order.info.shipping.receiver.address.province" :delivery-types="deliveryTypes" @selectDeliveryEmit="selectDeliveryEmit"></delivery-type-select>

                        </div>
                        <div v-if="step===3">
                            <invoice-detail :invoice_detail_prop="orderDetail.order.info.invoice" @invoiceEmit="invoiceEmit"></invoice-detail>

                        </div>
                        <div v-if="step===4">
                            <div>
                                <div class="box p-5 rounded-md  mb-5 ">

                                    <cart-items></cart-items>

                                </div>

                                <div class="box p-5 rounded-md shadow-md grid grid-cols-1 md:grid-cols-2 gap-5   " >
                                    <div>
                                        <label for="name" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">نام و نام خانوادگی تحویل گیرنده :</label>
                                        <span id="name" class="font-bold">{{orderDetail.order.info.shipping.receiver.name}}</span>
                                    </div>
                                    <div>
                                        <label for="phone" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">موبایل تحویل گیرنده :</label>
                                        <span id="phone" class="font-bold ">{{orderDetail.order.info.shipping.receiver.phone}}</span>
                                    </div>
                                    <div class="col-span-2">
                                        <label for="address" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">آدرس تحویل گیرنده :</label>
                                        <span id="address" class="font-bold ">{{orderDetail.order.info.shipping.receiver.address.province +' , '+orderDetail.order.info.shipping.receiver.address.city+' , '+
                                        orderDetail.order.info.shipping.receiver.address.address}}</span>
                                    </div>
                                    <div>
                                        <label for="postal_code" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">کدپستی تحویل گیرنده :</label>
                                        <span id="postal_code" class="font-bold ">{{orderDetail.order.info.shipping.receiver.address.postal_code}}</span>
                                    </div>
                                    <div>
                                        <label for="delivery_type" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">روش ارسال :</label>
                                        <span id="delivery_type" class="font-bold ">{{orderDetail.order.info.shipping.delivery.delivery_type}}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Cart Price Detail -->
                    <div class="col-span-12 md:col-span-4">
                        <div class="rounded-lg bg-white p-4 dark:bg-zinc-900 md:block">

                            <div class="flex items-center mt-3">

                                قیمت کالا ها ( {{useCartStore().total.toLocaleString('fa')}} کالا):
                                <div class="ltr:ml-auto rtl:mr-auto">{{useCartStore().totalNormalPrice.toLocaleString('fa')}} <span class="text-xs">تومان</span></div>
                            </div>
                            <div class="flex items-center mt-3">

                                تخفیف کالا ها:
                                <div class="ltr:ml-auto rtl:mr-auto text-red-500">  {{ (useCartStore().totalNormalPrice - useCartStore().totalPrice).toLocaleString('fa') }} <span class="text-xs">تومان</span></div>
                            </div>
                            <div class="flex items-center mt-3">

                                جمع خرید:
                                <div class="ltr:ml-auto rtl:mr-auto">{{useCartStore().totalPrice.toLocaleString('fa')}} <span class="text-xs">تومان</span></div>
                            </div>
                            <div class="flex items-center mt-3 border-t border-slate-200/60 dark:border-darkmode-400 pt-3">

                                هزینه ی ارسال (
                                {{ useCartStore().totalWeight / 1000 }}kg
                                ):
                                <div class="ltr:ml-auto rtl:mr-auto">{{ orderDetail.order.info.shipping.delivery.price ? orderDetail.order.info.shipping.delivery.price.toLocaleString('fa') : '' }} <span class="text-xs">تومان</span></div>
                            </div>
                            <div class="flex items-center mt-3">

                                مالیات بر ارزش افزوده(%{{orderDetail.order.info.tax.percentage.toLocaleString('fa')}}):
                                <div class="ltr:ml-auto rtl:mr-auto">{{orderDetail.order.info.tax.price.toLocaleString('fa')}} <span class="text-xs">تومان</span></div>
                            </div>
                            <div
                                class="flex items-center border-t border-slate-200/60 dark:border-darkmode-400 pt-5 mt-5 font-medium"
                            >

                                مبلغ قابل پرداخت:
                                <div class="ltr:ml-auto rtl:mr-auto">{{ (orderDetail.order.info.tax.price + useCartStore().totalPrice + (orderDetail.order.info.shipping.delivery.price??0)).toLocaleString('fa') }} <span class="text-xs">تومان</span></div>
                            </div>
                            <div>
                                <button
                                    :disabled="sendingCheckout && step===4"
                                    @click="onNextButtonClick"
                                    class="btn btn-primary  mt-5 w-full">

                                    {{sendingCheckout?'در حال پردازش':nextButtonText}}
                                </button>
                            </div>
                            <div>
                                <button
                                    @click="onBackButtonClick"
                                    class="btn btn-outline-secondary mt-3 w-full">
                                    بازگشت
                                </button>
                            </div>
                        </div>
                        <div class="box p-3 text-orange-800 rounded-lg mt-5 bg-orange-100" >
                            کالا های موجود در سبد کالای شما هنوز ثبت و رزرو نشده است، برای ثبت سفارش مراحل بعدی را تکمیل کنید
                        </div>
                        <div v-if="checkoutErrors" class="box p-3 text-red-800 rounded-md mt-5 bg-red-100" >
                            <div class="font-bold">
                                خطا ها :
                            </div>
                            <div v-for="error in checkoutErrors" class="py-2">
                                {{error}}
                            </div>
                        </div>


                    </div>


                </div>

            </div>

        </main>
    </div>
</template>
<script>
import {defineComponent, ref,watch} from "vue";
import Header1 from "../../Layouts/Headers/Header.vue";
import AddressSelect from "./AddressSelect.vue";
import InvoiceDetail from "./InvoiceDetail.vue";
import DeliveryTypeSelect from "./DeliveryTypeSelect.vue";
import AddressDeliverySelect from "./AddressDeliverySelect.vue";
import {useCartStore} from "../../../../stores/cart";
import {isNumber} from "chart.js/helpers";
import axios from "axios";
import {toast} from "vue3-toastify";
import invoiceDetail from "./InvoiceDetail.vue";
import CartItems from "../../../../Components/CartItems.vue";

export default defineComponent({
    computed: {
        invoiceDetail() {
            return invoiceDetail
        }
    },
    methods: { isNumber, useCartStore},
    components: {CartItems, DeliveryTypeSelect, InvoiceDetail, AddressSelect,AddressDeliverySelect, Header1},
    props:{
        deliveryTypes : {
            type : String,
            required : true
        }
    },
    setup (props) {

        const step = ref(1);

        const nextButtonText=ref('ثبت آدرس و ادامه');
        function setNextButtonText(){
            if (step.value===1) {
                nextButtonText.value = 'ثبت آدرس و ادامه'
            }
            if (step.value===2) {
                nextButtonText.value = 'ثبت شیوه ارسال و ادامه'
            }
            if (step.value===3) {
                nextButtonText.value = 'ثبت مشخصات فاکتور و ادامه'
            }
            if (step.value===4) {
                nextButtonText.value = 'ثبت سفارش'
            }
        }
        function onNextButtonClick(){
            if (!stepValidate().is_valid){
                toast.warning(stepValidate().message);
            }
            else if (step.value<4){
                step.value= step.value+1;
                setNextButtonText();
            } else if(step.value===4){
                checkout();

            }
        }
        function onBackButtonClick() {
            if (step.value > 1) {
                step.value = step.value-1;
                setNextButtonText();
            }
            else {
                history.back();
            }
        }
        //
        function stepValidate() {
            let message='';
            if (step.value===1) {
                if (orderDetail.value.order.info.shipping.receiver.address.province==='' || orderDetail.value.order.info.shipping.receiver.address.province===null) {
                    message += "\nیک آدرس انتخاب کنید."
                }
                if (orderDetail.value.order.info.shipping.receiver.name==='' || orderDetail.value.order.info.shipping.receiver.name===null) {
                    message += "\nنام گیرنده را وارد کنید."
                }
                if (orderDetail.value.order.info.shipping.receiver.phone==='' || orderDetail.value.order.info.shipping.receiver.phone===null) {
                    message += "\nموبایل گیرنده را وارد کنید."
                }
            }
            if (step.value===2) {


                if (orderDetail.value.order.info.shipping.delivery.delivery_type==='' || orderDetail.value.order.info.shipping.delivery.delivery_type===null) {
                    message += "\nیک روش ارسال انتخاب کنید."
                }


            }
            if (step.value===3) {
                const invoice=orderDetail.value.order.info.invoice;
                if (invoice.want_official_bill){
                    if (invoice.phone===""){
                        message += "تلفن را وارد کنید.\n"
                    }if (invoice.address.country===""){
                        message += "کشور را وارد کنید.\n"
                    }if (invoice.address.province===""){
                        message += "استان را وارد کنید.\n"
                    }if (invoice.address.city===""){
                        message += "شهر را وارد کنید.\n"
                    }if (invoice.address.address===""){
                        message += "آدرس را وارد کنید.\n"
                    }if (invoice.address.postal_code===""){
                        message += "کدپستی را وارد کنید.\n"
                    }

                    if(invoice.customer_type==='person') {
                        if (invoice.name===""){
                            message += "نام و نام خانوادگی را وارد کنید.\n"
                        }
                        if (invoice.national_code===""){
                            message += "مقدار کد ملی را وارد کنید.\n"
                        }

                    }else if(invoice.customer_type==='company') {
                        if (invoice.company===""){
                            message += "نام شرکت را وارد کنید.\n"
                        }
                        if (invoice.economic_code===""){
                            message += "کد اقتصادی را وارد کنید.\n"
                        }
                        if (invoice.national_id===""){
                            message += "شناسه ملی را وارد کنید.\n"
                        }
                        if (invoice.registration_number===""){
                            message += "شماره ثبت را وارد کنید.\n"
                        }

                    }else {
                        message = "نوع مشتری را مشخص کنید.\n"
                    }
                }
            }
            if (step.value===4) {
            }
            return {'is_valid': message==='', 'message':message};
        }
        // order detail
        const orderDetail=ref({
            "order":{
                "info":{
                    "invoice":{
                        "want_official_bill":false,
                        "customer_type":"",
                        "name":"",
                        "national_code":"",

                        "company":"",
                        "economic_code":"",
                        "national_id":"",
                        "registration_number":"",

                        "phone":"",
                        "address":{
                            "country":"iran",
                            "province":"",
                            "city":"",
                            "address":"",
                            "postal_code":""
                        }
                    },
                    "shipping":{
                        "delivery":{
                            "delivery_type":"",
                            "weight":null
                        },
                        "receiver":{
                            "name":"",
                            "phone":"",
                            "address":{
                                "id":'',
                                "country":"iran",
                                "province":"",
                                "city":"",
                                "latitude":"",
                                "longitude":"",
                                "address":"",
                                "postal_code":""
                            }
                        }
                    },
                    "tax":{
                        "percentage":0,
                        "price":0,
                    }
                }
            }
        })

        // selectAddressEmit
        function selectAddressEmit(reciever_phone,reciever_name,address_id,province, city, address, postal_code){
            orderDetail.value.order.info.shipping.receiver={
                "name":reciever_name,
                "phone":reciever_phone,
                "address":{
                    "id":address_id,
                    "country":"iran",
                    "province":province,
                    "city":city,
                    "latitude":"",
                    "longitude":"",
                    "address":address,
                    "postal_code":postal_code
                }
            }
        }

        function selectDeliveryEmit(name){
            orderDetail.value.order.info.shipping.delivery.delivery_type=name;
            const deliveryTypesJson=JSON.parse(props.deliveryTypes);
            let selected_dt=Object.values(deliveryTypesJson).find((dt)=>dt.name===name);
            orderDetail.value.order.info.shipping.delivery.price=selected_dt.price;

        }

        function invoiceEmit(invoice_detail){
            orderDetail.value.order.info.invoice.want_official_bill=invoice_detail.want_official_bill;
            orderDetail.value.order.info.invoice.customer_type=invoice_detail.customer_type;
            orderDetail.value.order.info.invoice.name = invoice_detail.name;
            orderDetail.value.order.info.invoice.national_code = invoice_detail.national_code;
            orderDetail.value.order.info.invoice.company = invoice_detail.company;
            orderDetail.value.order.info.invoice.economic_code = invoice_detail.economic_code;
            orderDetail.value.order.info.invoice.national_id = invoice_detail.national_id;
            orderDetail.value.order.info.invoice.registration_number = invoice_detail.registration_number;
            orderDetail.value.order.info.invoice.phone = invoice_detail.phone;
            orderDetail.value.order.info.invoice.address.postal_code = invoice_detail.address.postal_code;
            orderDetail.value.order.info.invoice.address.province = invoice_detail.address.province;
            orderDetail.value.order.info.invoice.address.city = invoice_detail.address.city;
            orderDetail.value.order.info.invoice.address.address = invoice_detail.address.address;

        }


        const checkoutErrors=ref([]);
        const sendingCheckout = ref(false)
        function checkout() {
            sendingCheckout.value=true;
            axios.post(route('checkout.checkout'), {
                invoice: JSON.stringify(orderDetail.value.order.info.invoice),
                shipping: JSON.stringify(orderDetail.value.order.info.shipping),
                tax: JSON.stringify(orderDetail.value.order.info.tax)
            })
                .then((res) => {
                    // session is now active
                    toast.success(res.data.message);
                    let redirectUrl = route('my-account.orders.order',res.data.order_number);
                    router.visit(redirectUrl);
                })
                .catch((error) => {
                    checkoutErrors.value = error.response.data;
                })
                .finally(()=>(sendingCheckout.value=false));
        }


        return {
            step,
            nextButtonText,onNextButtonClick,
            onBackButtonClick,
            selectAddressEmit,orderDetail,selectDeliveryEmit,invoiceEmit,
            checkout,sendingCheckout,checkoutErrors
        }
    }
});

</script>
