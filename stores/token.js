import { defineStore } from "pinia";

export const useTokenStore = defineStore("token", {
    state: () => ({
        tokenValue: localStorage.getItem("token"),
    }),
    getters: {
        token(state) {
            return state.tokenValue;
        },
    },
    actions: {
        setToken(token) {
            localStorage.setItem("token", token);
            this.tokenValue = token;
        },
        removeToken() {
            localStorage.removeItem("token");
            this.tokenValue = null;
        }
    },
});
