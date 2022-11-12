<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination pg-blue justify-content-center">
            <button class="page-link" tabindex="-1" @click="previousPage()">Trước</button>
            <li @click="chosePage(i.name)" :class="{active: this.pageStore.activePage == i.name}" class="page-item" v-for="i in rangPage" :key="i.name">
                <button class="page-link" tabindex="-1">{{ i.name }}</button>
            </li>
            <button class="page-link" tabindex="-1" @click="nextPage()">Sau</button>
        </ul>
    </nav>
</template>

<script>
import { mapStores } from "pinia";
import { usePageStore } from "../stores/page.store";

export default {
    props: {
        // endPage: {
        //     type: Number, required: true, default: 1
        // },
        isChose: {
            type: Number, required: false, default: 1
        },
        currentPage: {
            type: Number, required: true, default: 1
        },
        maxPageView: {
            type: Number, required: false, default: 4
        },
        totalPage: {
            type: Number, required: true, default: 1
        },
        activePage: {
            type: Number, required: false, default: 1
        }
        // rangPage: {
        //     type: Array, required: false, default: [1]
        // }
    },
    computed: {
        // activePage: function(){
        //     if(this.currentPage == 1) return 1
        // },
        ...mapStores(usePageStore),
        endPage: function () {
            // return Math.min(this.startPage + this.maxPageView - 1, this.totalPage)
            // return Math.min(this.currentPage + this.maxPageView - 1, this.totalPage);
            // alert(this.pageStore.getTotalPage);
            return Math.min(this.pageStore.getCurrentPage + this.maxPageView - 1, this.pageStore.getTotalPage);

        },

        startPage: function () {
            // return Math.max(1, this.endPage - this.maxPageView + 1)
            return Math.max(1, this.endPage - this.maxPageView + 1)
        },

        rangPage: function () {
            let temp = [];
            for (let i = this.startPage; i <= this.endPage; i++) {
                temp.push({
                    name: i
                });
            }

            return temp;
        }
    },
    methods: {
        nextPage(){
            this.$emit('nextPage', this.pageStore.activePage)
        },
        previousPage(){
            // alert(this.activePage)
            this.$emit('previousPage', this.pageStore.activePage)
        },
        chosePage(name){
            // alert("dgsgd")
            // this.activePage = 3;
            // alert(this.activePage)
            this.$emit('chosePage', name)
        }
    }
};
</script>