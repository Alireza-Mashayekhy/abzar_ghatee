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
                ساخت حساب کاربری
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                یا
                {{ ' ' }}
                <NuxtLink
                    href="/login"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                    از قبل حساب دارم
                </NuxtLink>
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div v-if="registerErrors">
                    <div v-for="error in registerErrors">
                        {{ error }}
                    </div>
                </div>

                <form class="space-y-6" action="#" method="POST">
                    <div>
                        <label
                            for="name"
                            class="block text-sm font-medium text-gray-700"
                        >
                            نام و نام خانوادگی
                        </label>
                        <div class="mt-1">
                            <input
                                v-model="registerForm.name"
                                id="name"
                                name="name"
                                type="text"
                                required="true"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            for="phone"
                            class="block text-sm font-medium text-gray-700"
                        >
                            تلفن همراه
                        </label>
                        <div class="mt-1">
                            <input
                                v-model="registerForm.phone"
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
                                v-model="registerForm.verify_code"
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
                            for="email"
                            class="block text-sm font-medium text-gray-700"
                        >
                            ایمیل
                        </label>
                        <div class="mt-1">
                            <input
                                v-model="registerForm.email"
                                id="email"
                                name="email"
                                type="email"
                                required="false"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
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
                                v-model="registerForm.pass"
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
                                v-model="registerForm.verify_pass"
                                id="pass-verify"
                                name="pass-verify"
                                type="password"
                                autocomplete="current-password"
                                required="true"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                :class="{
                                    'border-red-500':
                                        registerForm.pass !==
                                        registerForm.verify_pass,
                                }"
                            />
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input
                                v-model="registerForm.remember"
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                                for="remember-me"
                                class="ltr:ml-2 rtl:mr-2 block text-sm text-gray-900"
                            >
                                مرا به خاطر داشته باش.
                            </label>
                        </div>

                        <div class="text-sm">
                            <NuxtLink
                                href="'/login"
                                class="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                قبلا حساب ساخته ام
                            </NuxtLink>
                        </div>
                    </div>

                    <div>
                        <button
                            @click="register"
                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            :disabled="loading"
                        >
                            ساخت حساب
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
import axios from 'axios';
export default {
    name: 'Register',
    components: {
        Link,
    },
    setup() {
        const registerForm = ref({
            name: '',
            phone: '',
            pass: '',
            verify_pass: '',
            email: '',
            verify_code: '',
            remember: false,
        });
        const verifyCodeTimer = ref(0);
        const registerErrors = ref([]);

        const loading = ref(false);
        const verifyCodeLoading = ref(false);
        function register() {
            loading.value = true;
            axios
                .post('/register', {
                    name: registerForm.value.name,
                    phone: registerForm.value.phone,
                    password: registerForm.value.pass,
                    email: registerForm.value.email,
                    verify_code: registerForm.value.verify_code,
                    remember: registerForm.value.remember,
                })
                .then(() => {
                    // session is now active
                    let redirectUrl = '/';

                    const params = new URLSearchParams(window.location.search);
                    if (params.get('redirect_to')) {
                        redirectUrl = params.get('redirect_to');
                    }

                    // router.get(redirectUrl); //if use this we have error 419 for csrf token
                    window.location.replace(redirectUrl);
                    loading.value = false;
                })
                .catch((error) => {
                    registerErrors.value.push(error.response.data.errors);
                    loading.value = false;
                });
        }
        function sendVerifyCode() {
            verifyCodeLoading.value = true;
            axios
                .post('/verify-code', {
                    phone: registerForm.value.phone,
                    usefor: 'signup',
                })
                .then(() => {
                    verifyCodeTimer.value = 60;
                    countDownTimer();
                    verifyCodeLoading.value = false;
                })
                .catch((error) => {
                    verifyCodeLoading.value = false;
                    registerErrors.value.push(error.response.data.errors);
                });
        }

        function countDownTimer() {
            if (verifyCodeTimer.value > 0) {
                setTimeout(() => {
                    verifyCodeTimer.value -= 1;
                    countDownTimer();
                }, 1000);
            }
        }

        return {
            register,
            verifyCodeTimer,
            loading,
            verifyCodeLoading,
            registerForm,
            sendVerifyCode,
            registerErrors,
        };
    },
};
</script>

<style scoped></style>
