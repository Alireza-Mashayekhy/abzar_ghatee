import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";
import {useTokenStore} from "./token";
import { toast} from 'vue3-toastify';


export const useCartStore = defineStore("cart", {
    state: () => {
        return {
            isLoadingState:false,
            isChangedState: false,
            cartState: {},
            cartOpenState: false
        }
    },
    getters: {
        cart(state) {
            return state.cartState;
        },
        total(state) {
            if (state.cartState) {
                const cartItems = Object.values(state.cartState);
                return cartItems.reduce((total, product) => total + product.quantity, 0);

            }
            else return 0;
        },
        totalPrice(state) {
            if (state.cartState) {
                const cartItems = Object.values(state.cartState);
                return cartItems.reduce((totalPrice, product) => totalPrice + (product.quantity * product.price), 0);
            }
            else return 0;
        },
        totalNormalPrice(state){
            if (state.cartState) {
                const cartItems = Object.values(state.cartState);
                return cartItems.reduce((totalNormalPrice, product) => totalNormalPrice + (product.quantity * product.normalPrice), 0);
            }
            else return 0;
        },
        totalWeight(state) {
            if (state.cartState) {
                const cartItems = Object.values(state.cartState);
                return cartItems.reduce((totalWeight, product) => totalWeight + (product.quantity * product.weight), 0);
            }
            else return 0;
        },
        totalVariations(state) {
            if (state.cartState) {
                const cartItems = Object.values(state.cartState);
                return cartItems.reduce((total, product) => total + (product.quantity===0 ? 0:1 ), 0);
            }
            else return 0;
        },

        isEmpty(state) {
            if (state.cartState) {
                const cartItems = Object.values(state.cartState);
                return cartItems.length===0;
            }
            else return 0;
        }
    },
    actions: {
        async fetchCart() {
            this.isLoadingState=true;
            try {
                const response = await axios.get('/api/cart',  {
                    headers: {
                        Authorization: `Bearer ${useTokenStore().token}`
                    }
                })
                this.cartState = response.data.cart.cart;
                this.isChangedState = response.data.cart.is_changed;
                if (this.isChangedState){
                    toast.warning('بعضی از کالا های سبد خرید تغییر یافتند');
                }

            } catch (e) {
                toast.error("خطای در دریافت سبد خرید از سرور");
            } finally {
                this.isLoadingState=false;
            }
        },
        // type=normal,sparepart
        async addToCart(saleID, productName, url, imageUrl, price, normalPrice, weight,mainProductID, count = 1, type="normal" ) {
            const loading = ref(true);
            loading.value = true;



            const toastID = toast.loading(
                'در حال اضافه کردن محصول به سبد خرید ...',
            );

            try {
                const response = await axios.post('/api/cart/items', {
                    saleID,
                    type,
                    productName,
                    url,
                    imageUrl,
                    price,
                    normalPrice,
                    count,
                    mainProductID,
                    weight,
                }, {
                    headers: {
                        Authorization: `Bearer ${useTokenStore().token}`,
                    },
                });

                this.cartState = response.data.cart.cart;
                this.isChangedState = response.data.cart.is_changed;

                toast.update(toastID, {
                    render: 'محصول به سبد خرید اضافه شد.',
                    type: 'success',
                    autoClose: true,
                    closeOnClick: true,
                    closeButton: true,
                    isLoading: false,
                    "rtl": true,

                });

            } catch (error) {
                showErrors(error,toastID);

            }finally {
                loading.value = false;
            }
        },

        async removeFromCart(id) {
            const loading = ref(true);
            loading.value = true;

            const toastID = toast.loading(
                'در حال حذف کردن محصول از سبد خرید ...',
            );

            try {
                const response = await axios.delete('/api/cart/items/'+id, {
                    headers: {
                        Authorization: `Bearer ${useTokenStore().token}`,
                    },
                });
                this.cartState = response.data.cart.cart;
                this.isChangedState = response.data.cart.is_changed;

                toast.update(toastID, {
                    render: 'محصول از سبد خرید حذف شد.',
                    type: 'success',
                    autoClose: true,
                    closeOnClick: true,
                    closeButton: true,
                    isLoading: false,
                    "rtl": true,

                });
            } catch (error) {
                let errorMessage = '';

                for (const key in error.response.data.errors) {
                    if (error.response.data.errors.hasOwnProperty(key)) {
                        const value = error.response.data.errors[key];
                        errorMessage += `${key}: ${value}, `;
                    }
                }

                toast.update(toastID, {
                    render: errorMessage,
                    type: 'error',
                    autoClose: true,
                    closeOnClick: true,
                    closeButton: true,
                    isLoading: false,
                    "rtl": true,

                });
            } finally {
                loading.value = false;
            }
        },
        async changeQuantity(id, quantity) {
            const loading = ref(true);
            loading.value = true;
            const toastID = toast.loading(
                'در حال تغییر تعداد محصول در سبد خرید ...',
            );
            try {
                const response = await axios.patch('/api/cart/items/'+ id, { quantity }, {
                    headers: {
                        Authorization: `Bearer ${useTokenStore().token}`,
                    },
                });

                this.cartState = response.data.cart.cart;
                this.isChangedState = response.data.cart.is_changed;

                toast.update(toastID, {
                    render: 'تغییرات به موفقیت اعمال شد.',
                    type: 'success',
                    autoClose: 3000,
                    closeOnClick: true,
                    closeButton: true,
                    isLoading: false,
                    "rtl": true,

                });

            } catch (error) {
                let errorMessage = '';

                for (const key in error.response.data.errors) {
                    if (error.response.data.errors.hasOwnProperty(key)) {
                        const value = error.response.data.errors[key];
                        errorMessage += `${key}: ${value}, `;
                    }
                }
                toast.update(toastID, {
                    render: errorMessage,
                    type: 'error',
                    autoClose: true,
                    closeOnClick: true,
                    closeButton: true,
                    isLoading: false,
                    "rtl": true,

                });
            } finally {
                loading.value = false;
            }
        },



    },
});

function showErrors(error,toastID=null) {
    let errorMessage = '';
    for (const key in error.response.data.errors) {
        if (error.response.data.errors.hasOwnProperty(key)) {
            const value = error.response.data.errors[key];
            errorMessage += `${key}: ${value}, `;
        }
    }
    if (toastID)
    {
        toast.update(toastID, {
            render: errorMessage,
            type: 'error',
            autoClose: true,
            closeOnClick: true,
            closeButton: true,
            isLoading: false,
            "rtl": true,

        });
    } else{
        toast.error(errorMessage);
    }
}


