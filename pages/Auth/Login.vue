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
                ورود به حساب کاربری
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                یا
                {{ ' ' }}
                <NuxtLink
                    href="/register/"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                    ساخت حساب کاربری
                </NuxtLink>
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div v-if="loginErrors">
                    <div class="pb-5 text-red-500" v-for="error in loginErrors">
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
                                v-model="loginForm.phone"
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
                            for="password"
                            class="block text-sm font-medium text-gray-700"
                        >
                            رمز عبور
                        </label>
                        <div class="mt-1">
                            <input
                                v-model="loginForm.pass"
                                id="password"
                                name="password"
                                type="password"
                                autocomplete="current-password"
                                required="true"
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input
                                v-model="loginForm.remember"
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
                                href="/reset-password"
                                class="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                رمز عبور را فراموش کرده ام
                            </NuxtLink>
                        </div>
                    </div>

                    <div>
                        <button
                            @click="login"
                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            :disabled="loading"
                        >
                            ورود
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
import { useTokenStore } from '../../../stores/token';
import axios from 'axios';

export default {
    name: 'Login',
    components: {
        Link,
    },
    setup() {
        const loginForm = ref({
            phone: '',
            pass: '',
            name: navigator.userAgent,
            remember: false,
        });
        const loginErrors = ref([]);
        const loading = ref(false);
        function login() {
            loading.value = true;
            axios
                .post('/login', {
                    phone: loginForm.value.phone,
                    password: loginForm.value.pass,
                    remember: loginForm.value.remember,
                })
                .then((res) => {
                    useTokenStore().setToken(res.data.api_token);
                    // session is now active
                    let redirectUrl = '/my-account';

                    const params = new URLSearchParams(window.location.search);
                    if (params.get('redirect_to')) {
                        redirectUrl = params.get('redirect_to');
                    }

                    // router.get(redirectUrl); //if use this we have error 419 for csrf token
                    // router.visit(redirectUrl);
                    window.location.replace(redirectUrl);
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        // validation errors
                        loginErrors.value.push(error.response.data.errors);
                    } else {
                        // other error
                        loginErrors.value.push(error.response.data.errors);
                    }
                })
                .finally(() => (loading.value = false));
        }

        return {
            login,
            loading,
            loginForm,
            loginErrors,
        };
    },
};
</script>

<style scoped></style>
