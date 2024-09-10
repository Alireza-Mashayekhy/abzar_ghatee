<template>
    <Head>
        <title>is coming</title>
        <meta name="robots" content="noindex" />
    </Head>
    <div class="bg-gray-50">
        <!-- Mobile menu -->
        <Header1></Header1>
        <main class="flex-grow bg-gray-100 pb-14 pt-36 dark:bg-black xs:pt-36">
            <div class="container">
                <div class="grid grid-cols-12 gap-4">
                    <my-account-side-bar></my-account-side-bar>

                    <!-- content -->
                    <div class="col-span-12 lg:col-span-9">
                        <div
                            class="rounded-lg bg-white p-5 shadow-base dark:bg-zinc-900"
                        >
                            <!-- Title -->
                            <h1
                                class="relative mb-16 w-fit text-xl font-medium text-zinc-700 dark:text-white"
                            >
                                به زودی
                                <span
                                    class="absolute right-0 top-10 h-[3px] w-full rounded-full bg-emerald-500 dark:bg-emerald-400"
                                >
                                </span>
                            </h1>
                            <div class="mb-8">
                                <h2
                                    class="mb-8 flex items-center gap-x-4 text-lg text-zinc-600 dark:text-zinc-300"
                                >
                                    <span
                                        class="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400"
                                    ></span>
                                    این قسمت در حال آماده سازی است و در
                                    بروزرسانی های بعدی در دسترس خواهد بود
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <Footer1></Footer1>
    </div>
</template>

<script>
import Header1 from '../Layouts/Headers/Header.vue';
import Footer1 from '../Layouts/Footeres/Footer.vue';

import { computed } from 'vue';
import MyAccountSideBar from './MyAccountSideBar.vue';

export default {
    components: {
        MyAccountSideBar,
        Head,
        Link,
        Footer1,
        Header1,
    },
    setup() {
        const page = usePage();

        const user = computed(() => page.props.auth.user);
        const roles = computed(() => page.props.auth.user.roles);
        return {
            user,
            roles,
        };
    },
};
</script>

<style scoped>
.product-description :deep(h2) {
    @apply font-semibold mt-3 mb-1;
}
</style>
