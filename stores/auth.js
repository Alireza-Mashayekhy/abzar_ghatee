import { defineStore } from "pinia";
import axios from "axios";
import {useTokenStore} from "./token";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        isAuthenticated: false,
    }),
    getters: {
        getUser(state) {
            return state.user;
        },
        isAuthenticated(state) {
            return state.isAuthenticated;
        },
    },
    actions: {
        async checkAuth() {
            axios.get('/api/user',{
                headers: {
                    Authorization: `Bearer ${useTokenStore().token}`
                }
            })
                .then((res) => {
                    this.user=res.data;
                    this.isAuthenticated=true;
                })
                .catch((error) => {
                    this.user=null;
                    this.isAuthenticated=false;
                    console.log(error);
                })
                .finally(()=>({}));
        },
    },
});
