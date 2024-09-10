<template>
    <!--
      This example requires updating your template:

      ```
      <html class="h-full bg-gray-50">
      <body class="h-full">
      ```
    -->
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <!--            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />-->
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                باز نشانی رمزعبور
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                یا
                {{ ' ' }}
                <NuxtLink
                    href="/register"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                    ساخت حساب کاربری
                </NuxtLink>
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div v-if="resetPasswordErrors">
                    <div v-for="error in resetPasswordErrors">
                        {{ error }}
                    </div>
                </div>
                <form class="space-y-6" action="#" method="POST">
                    <div>
                        <label
                            for="phone"
                            class="block text-sm font-medium text-gray-700"
                        >
                            تلفن همراه
                        </label>
                        <div class="mt-1">
                            <input
                                v-model="resetPasswordForm.phone"
                                id="phone"
                                name="phone"
                                type="text"
                                required="true"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            for="verify_code"
                            class="block text-sm font-medium text-gray-700"
                        >
                            تایید تلفن همراه
                        </label>
                        <div class="mt-1 flex flex-row">
                            <input
                                v-model="resetPasswordForm.verify_code"
                                id="verify_code"
                                name="verify_code"
                                type="text"
                                required="true"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <button
                                class="mr-2 w-full flex justify-center py-2 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                :disabled="
                                    verifyCodeTimer > 0 || verifyCodeLoading
                                "
                                @click.prevent="sendVerifyCode"
                            >
                                ارسال کد پیامکی
                                <span
                                    v-if="verifyCodeTimer > 0"
                                    class="rtl:mr-1 ltr:ml-1"
                                    >{{ verifyCodeTimer }}</span
                                >
                            </button>
                        </div>
                    </div>

                    <div>
                        <label
                            for="password"
                            class="block text-sm font-medium text-gray-700"
                        >
                            رمز عبور
                        </label>
                        <div class="mt-1">
                            <input
                                v-model="resetPasswordForm.pass"
                                id="password"
                                name="password"
                                type="password"
                                autocomplete="current-password"
                                required="true"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <label
                            for="pass-verify"
                            class="block text-sm font-medium text-gray-700"
                            >تکرار رمز عبور
                        </label>
                        <div class="mt-1">
                            <input
                                v-model="resetPasswordForm.verify_pass"
                                id="pass-verify"
                                name="pass-verify"
                                type="password"
                                autocomplete="current-password"
                                required="true"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                :class="{
                                    'border-red-500':
                                        resetPasswordForm.pass !==
                                        resetPasswordForm.verify_pass,
                                }"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            @click="resetPassword"
                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            :disabled="loading"
                        >
                            تغییر رمز عبور
                            <LoadingIcon
                                v-if="loading"
                                icon="oval"
                                class="w-5 h-5 rtl:mr-2 ltr:ml-2"
                            />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useTokenStore } from '../../../stores/token';
import axios from 'axios';
export default {
    name: 'ResetPassword',
    components: {
        Link,
    },
    setup() {
        const resetPasswordForm = ref({
            phone: '',
            pass: '',
            verify_pass: '',
            verify_code: '',
        });
        const resetPasswordErrors = ref([]);
        const verifyCodeTimer = ref(0);
        function countDownTimer() {
            if (verifyCodeTimer.value > 0) {
                setTimeout(() => {
                    verifyCodeTimer.value -= 1;
                    countDownTimer();
                }, 1000);
            }
        }
        const loading = ref(false);
        const verifyCodeLoading = ref(false);
        function resetPassword() {
            loading.value = true;
            axios
                .post('/reset-password', {
                    phone: resetPasswordForm.value.phone,
                    password: resetPasswordForm.value.pass,
                    verify_code: resetPasswordForm.value.verify_code,
                })
                .then(() => {
                    // session is now active
                    window.location.href = '/login';
                    loading.value = false;
                })
                .catch((error) => {
                    resetPasswordErrors.value.push(error.response.data.errors);

                    loading.value = false;
                });
        }
        function sendVerifyCode() {
            verifyCodeLoading.value = true;
            axios
                .post('/verify-code', {
                    phone: resetPasswordForm.value.phone,
                    usefor: 'reset_pass',
                })
                .then(() => {
                    verifyCodeTimer.value = 60;
                    countDownTimer();
                    verifyCodeLoading.value = false;
                })
                .catch((error) => {
                    verifyCodeLoading.value = false;
                    resetPasswordErrors.value.push(error.response.data.errors);
                });
        }

        return {
            resetPassword,
            resetPasswordErrors,
            verifyCodeTimer,
            loading,
            verifyCodeLoading,
            resetPasswordForm,
            sendVerifyCode,
        };
    },
};
</script>

<style scoped></style>
