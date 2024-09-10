<template>
    <RadioGroup v-model="selectedDeliveryType">
        <RadioGroupLabel class="text-gray-900">
            روش ارسال را انتخاب کنید.
        </RadioGroupLabel>

        <div class="mt-4 grid grid-cols-2 gap-4">
            <RadioGroupOption
                :disabled="false"
                as="template"
                v-for="(deliveryType, index) in deliveryTypes"
                :key="index"
                :value="deliveryType.name"
                v-slot="{ checked, active }"
            >
                <div
                    :class="[
                        checked ? 'border-transparent' : 'border-gray-300',
                        active ? 'ring-2 ring-emerald-500' : '',
                        'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none',
                    ]"
                >
                    <div class="flex-1 flex">
                        <div class="flex flex-col">
                            <RadioGroupLabel
                                as="span"
                                class="block font-medium text-gray-900"
                            >
                                {{ deliveryType.name }}
                                <span v-if="deliveryType.city" class="text-xs">
                                    ( تنها مخصوص شهر {{ deliveryType.city }} )
                                </span>
                            </RadioGroupLabel>
                            <RadioGroupDescription
                                as="span"
                                class="mt-1 flex items-center text-xs text-gray-500"
                            >
                                {{ deliveryType.description }}
                            </RadioGroupDescription>
                            <RadioGroupDescription
                                as="span"
                                class="mt-6 text-sm text-gray-900"
                            >
                                <div
                                    v-if="deliveryType.price === 0"
                                    class="text-green-500"
                                >
                                    رایگان
                                </div>
                                <div v-else>
                                    {{
                                        deliveryType.price.toLocaleString('fa')
                                    }}
                                    تومان
                                </div>
                            </RadioGroupDescription>
                        </div>
                    </div>
                    <CheckCircleIcon
                        v-if="checked"
                        class="h-5 w-5 text-emerald-600"
                        aria-hidden="true"
                    />
                    <div
                        :class="[
                            active ? 'border' : 'border-2',
                            checked
                                ? 'border-emerald-500'
                                : 'border-transparent',
                            'absolute -inset-px rounded-lg pointer-events-none',
                        ]"
                        aria-hidden="true"
                    />
                </div>
            </RadioGroupOption>
        </div>
    </RadioGroup>
</template>
<script>
import { computed, ref, watch } from 'vue';
import {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
} from '@headlessui/vue';

const page = usePage();
const user = computed(() => page.props.auth.user);

const provinces = [
    '',
    'آذربایجان شرقی',
    'آذربایجان غربی',
    'اردبیل',
    'اصفهان',
    'البرز',
    'ایلام',
    'بوشهر',
    'تهران',
    'چهارمحال و بختیاری',
    'خراسان جنوبی',
    'خراسان رضوی',
    'خراسان شمالی',
    'خوزستان',
    'زنجان',
    'سمنان',
    'سیستان و بلوچستان',
    'فارس',
    'قزوین',
    'قم',
    'کردستان',
    'کرمان',
    'کرمانشاه',
    'کهگیلویه و بویراحمد',
    'گلستان',
    'گیلان',
    'لرستان',
    'مازندران',
    'مرکزی',
    'هرمزگان',
    'همدان',
    'یزد',
];
export default {
    components: {
        RadioGroupDescription,
        RadioGroupOption,
        RadioGroupLabel,
        RadioGroup,
    },
    emits: {
        selectDeliveryEmit: String,
    },
    props: {
        deliveryTypes: {
            type: String,
            required: true,
        },
        shippingProvince: {
            type: String,
        },
        selectedDelivery: String,
    },
    setup(props, { emit }) {
        const deliveryTypes = Object.values(
            JSON.parse(props.deliveryTypes)
        ).filter((dt) => {
            if (dt.province === '') return true;
            return dt.province === props.shippingProvince;
        });
        const selectedDeliveryType = ref('');
        selectedDeliveryType.value = props.selectedDelivery;

        watch(selectedDeliveryType, (newVal, oldVal) => {
            emit('selectDeliveryEmit', newVal);
        });

        return {
            provinces,
            deliveryTypes,
            selectedDeliveryType,
        };
    },
};
</script>
