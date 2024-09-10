// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    css: ['~/assets/styles/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    runtimeConfig: {
        public: {
            apiBase: 'http://test.abzarghete.com',
        },
    },

    modules: ['@nuxt/image', '@pinia/nuxt'],

    vite: {
        optimizeDeps: {
            include: [
                '@headlessui/vue',
                'axios',
                'vue3-toastify',
                'chart.js',
                'chart.js/helpers',
            ],
        },
    },
});
