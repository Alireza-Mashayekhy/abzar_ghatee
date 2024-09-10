<template>


    <div>

        <div class="box shadow-md p-5 mb-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div >
                <label for="reciever_name"
                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام گیرنده</label>
                <input type="text" id="reciever_name"
                       placeholder="نام گیرنده را وارد کنید."
                       v-model="reciever_name"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            </div>
            <div >
                <label for="reciever_phone"
                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شماره همراه گیرنده</label>
                <input type="text" id="reciever_phone"
                       placeholder="موبایل گیرنده خود را وارد کنید."
                       v-model="reciever_phone"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
            </div>

        </div>
        <div v-if="loading" class="  flex items-center justify-center">
            <LoadingIcon  icon="three-dots" class="w-20 h-20" />
        </div>
        <div v-else class="box shadow-md px-2 py-5 bg-gray-50" >
            <div >
                <div
                    class="block mb-5 text-sm font-medium text-gray-900 dark:text-white">آدرس گیرنده را انتخاب کنید</div>
            </div>
            <div class="grid grid-cols-12 gap-6 ">
                <div v-if="result?.addresses?.data" v-for="(address,idx) in result.addresses.data" :key="idx"
                     class="col-span-12 sm:col-span-6 space-y-2 box shadow-md rounded-md flex flex-col"
                     :class="{'border-2 border-orange-300':selectedAddress===address.id}"
                >
                    <span class="p-5">{{ "استان "+address.province+" ، شهر "+address.city+" ، "+address.address }}</span>
                    <span class="px-5">{{"کدپستی: "+address.postal_code}}</span>
                    <hr class="my-5 ">
                    <div class="">
                        <div class=" p-5 pb-10 mb-2  float-left  flex flex-row-reverse ">
                            <button @click="updateAddressForm.id=address.id;updateAddressForm.province=address.province;updateAddressForm.city=address.city;updateAddressForm.address=address.address;updateAddressForm.postal_code=address.postal_code;updateAddressModalPreview=true" class="btn btn-outline-secondary" >
                                <Edit2Icon class="w-5 h-5 ml-1"/>ویرایش</button>
                            <button @click="deleteAddress({id:address.id})" class="btn btn-outline-secondary ml-2" >
                                <Trash2Icon class="w-5 h-5 ml-1"/>حذف</button>
                        </div>
                    </div>
                    <button @click="selectedAddress=address.id;$emit('selectAddressEmit',reciever_phone,reciever_name,address.id,address.province, address.city, address.address, address.postal_code)"
                            :class="{'btn-warning ':selectedAddress===address.id,'btn-dark':selectedAddress!==address.id}"
                            class="btn absolute bottom-0 w-full">
                        {{(selectedAddress===address.id?"سفارش به این آدرس ارسال می شود" :" ارسال سفارش به این آدرس")}}
                    </button>
                </div>

                <button @click="createAddressModalPreview=true" class="col-span-12 sm:col-span-6 space-y-2 flex flex-col items-center justify-center box shadow-md p-5 rounded-md hover:text-gray-400" >
                    <MapPinIcon class="w-10 h-10 m-2"></MapPinIcon>
                    افزودن آدرس
                </button>

            </div>

        </div>
    </div>
<!--    create address modal-->
    <Modal
        :show="createAddressModalPreview"
        @hidden="createAddressModalPreview = false"

    >
        <!-- BEGIN: Modal Header -->
        <ModalHeader>
            <h2 class="font-medium text-base ltr:mr-auto rtl:ml-auto">افزودن آدرس</h2>
            <p v-if="createAddressHasError" class="text-red-500">مشکلی در ورودی ها وجود دارد</p>
        </ModalHeader>
        <!-- END: Modal Header -->
        <!-- BEGIN: Modal Body -->
        <ModalBody class="grid grid-cols-12 gap-4 gap-y-3">
            <div class="col-span-12  space-y-6">

                <div class="mb-6">
                    <label for="create_address_province"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">استان</label>
                    <TomSelect id="create_address_province" v-model="createAddressForm.province" :options="{
                                              placeholder: 'استان خود را انتخاب کنید.',
                                            }" class="w-full">

                        <option v-for="(province,idx) in provinces" :key="idx" :value="province"  >{{ province }}</option>

                    </TomSelect>
                </div>
                <div class="mb-6">
                    <label for="create_address_city"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شهر</label>
                    <input type="text" id="create_address_city"
                           v-model="createAddressForm.city"
                           placeholder="شهر خود را وارد کنید."
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">

                </div>

                <div class="mb-6">
                    <label for="create_address_address"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">آدرس</label>
                    <input type="text" id="create_address_address"
                           placeholder="آدرس خود را وارد کنید."
                           v-model="createAddressForm.address"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                </div>
                <div class="mb-6">
                    <label for="create_address_postal_code"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">کد پستی</label>
                    <input type="text" id="create_address_postal_code"
                           placeholder="کد پستی خود را وارد کنید."
                           v-model="createAddressForm.postal_code"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                </div>


            </div>

        </ModalBody>
        <!-- END: Modal Body -->
        <!-- BEGIN: Modal Footer -->
        <ModalFooter class="text-right">
            <button
                type="button"
                @click="createAddressModalPreview = false"
                class="btn btn-outline-secondary w-20 ltr:mr-1 rtl:ml-2"
            >
                لغو
            </button>


            <button @click="createAddress" type="button" class="btn btn-primary w-20">
                ذخیره
            </button>
        </ModalFooter>
        <!-- END: Modal Footer -->
    </Modal>

<!--    update Address modal-->
    <Modal
        :show="updateAddressModalPreview"
        @hidden="updateAddressModalPreview = false"

    >
        <!-- BEGIN: Modal Header -->
        <ModalHeader>
            <h2 class="font-medium text-base ltr:mr-auto rtl:ml-auto">ویرایش آدرس</h2>
            <p v-if="updateAddressHasError" class="text-red-500">مشکلی در ورودی ها وجود دارد</p>
        </ModalHeader>
        <!-- END: Modal Header -->
        <!-- BEGIN: Modal Body -->
        <ModalBody class="grid grid-cols-12 gap-4 gap-y-3">
            <div class="col-span-12  space-y-6">

                <div class="mb-6">
                    <label for="update_address_province"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">استان</label>
                    <TomSelect id="update_address_province" v-model="updateAddressForm.province" :options="{
                                              placeholder: 'استان خود را انتخاب کنید.',
                                            }" class="w-full">

                        <option v-for="(province,idx) in provinces" :key="idx" :value="province"  >{{ province }}</option>

                    </TomSelect>
                </div>
                <div class="mb-6">
                    <label for="update_address_city"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شهر</label>
                    <input type="text" id="update_address_city"
                           v-model="updateAddressForm.city"
                           placeholder="شهر خود را وارد کنید."
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">

                </div>

                <div class="mb-6">
                    <label for="update_address_address"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">آدرس</label>
                    <input type="text" id="update_address_address"
                           placeholder="آدرس خود را وارد کنید."
                           v-model="updateAddressForm.address"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                </div>
                <div class="mb-6">
                    <label for="update_address_postal_code"
                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">کد پستی</label>
                    <input type="text" id="update_address_postal_code"
                           placeholder="کد پستی خود را وارد کنید."
                           v-model="updateAddressForm.postal_code"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                </div>


            </div>

        </ModalBody>
        <!-- END: Modal Body -->
        <!-- BEGIN: Modal Footer -->
        <ModalFooter class="text-right">
            <button
                type="button"
                @click="updateAddressModalPreview = false"
                class="btn btn-outline-secondary w-20 ltr:mr-1 rtl:ml-2"
            >
                لغو
            </button>


            <button @click="updateAddress" type="button" class="btn btn-primary w-20">
                ذخیره
            </button>
        </ModalFooter>
        <!-- END: Modal Footer -->
    </Modal>

</template>
<script>
import gql from "graphql-tag";
import {useMutation, useQuery} from "@vue/apollo-composable";

import {computed, ref} from "vue";

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
