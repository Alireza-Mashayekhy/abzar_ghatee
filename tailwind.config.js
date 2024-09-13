/** @type {import('tailwindcss').Config} */
import tailwind_scrollbar from 'tailwind-scrollbar';
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    darkMode: 'class',
    theme: {
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1380px',
        },

        extend: {
            spacing: {
                25: '6.25rem',
                50: '12.5rem',
            },
            boxShadow: {
                base: '0px 1px 10px rgba(0, 0, 0, 0.05)',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    lg: '0.625rem',
                },
            },
            animation: {
                'border-width': 'border-width 500ms forwards',
                'border-width-reverse': 'border-width-reverse 500ms forwards',
            },
            keyframes: {
                'border-width': {
                    from: {
                        width: '0',
                        opacity: '0',
                    },
                    to: {
                        width: '100%',
                        opacity: '1',
                    },
                },
                'border-width-reverse': {
                    from: {
                        width: '100%',
                        opacity: '1',
                    },
                    to: {
                        width: '0',
                        opacity: '0',
                    },
                },
            },
            colors: {
                white: '#FEFEFF',
                black: '#0D0D0D',
            },
            borderRadius: {
                base: '13px',
            },
            fontFamily: {
                iranyekan: 'IRANYekan',
            },
        },
    },
    plugins: [tailwind_scrollbar({ nocompatible: true })],
};
