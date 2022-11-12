import { defineStore } from "pinia";
export const usePageStore = defineStore("page",{
    state: () => ({
        currentPage: 1,
        totalPage: 1,
        activePage: 1,
    }),
    getters: {
        getCurrentPage: (state) => {
            return state.currentPage
        },
        getTotalPage: (state) => {
            return state.totalPage
        }
    },
    actions: {
        
    },
})