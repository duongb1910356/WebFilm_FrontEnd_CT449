<template>
    <!-- <Header></Header> -->
    <FilmList :title="title"></FilmList>
    <!-- <Modal :visibleLiveDemo="visibleLiveDemo" @closeModal="closeModal"></Modal>
    <CButton color="primary" @click="() => { this.visibleLiveDemo = true }">Launch demo modal</CButton> -->

    <Paginate :activePage="activePage" @chosePage="chosePage" @previousPage="previousPage" @nextPage="nextPage"
        :totalPage="totalPage" :maxPageView="maxPageView" :currentPage="currentPage">
    </Paginate>

    <!-- <button @click="test()">ddssd</button> -->
</template>

<script>
import { useFilmStore } from "../stores/films";
import { mapStores } from "pinia";
import FilmList from "@/components/FilmList.vue";
import filmService from "../service.js/film.service";
import Paginate from "@/components/Paginate.vue";
import { usePageStore } from "../stores/page.store";

import { CButton } from '@coreui/bootstrap-vue';
import Modal from "@/components/Modal.vue";


export default {
    components: {
        FilmList, Paginate,
    },
    data() {
        return {
            // title: "Phim mới cập nhật",
            films: [],
            currentPage: 1,
            maxPageView: 5,
            activePage: 1,
            totalPage: 0,
            // visibleLiveDemo: false,
        }
    },
    computed: {
        ...mapStores(useFilmStore, usePageStore),
        title: function () {
            return this.filmStore.title;
        }
    },
    methods: {
        nextPage(activePage) {

            this.pageStore.currentPage = activePage;
            // alert("aa" + this.pageStore.currentPage)
            // this.currentPage = activePage
        },
        previousPage(activePage) {
            this.pageStore.currentPage = Math.max(activePage - this.maxPageView + 1, 1)
            // this.currentPage = Math.max(activePage - this.maxPageView + 1, 1)
        },
        chosePage(name) {

            this.pageStore.activePage = name;
            this.filmStore.page = name;

            this.films = this.filmStore.getFilms;
            localStorage.setItem("token","abc");

        },

        async test() {
            alert(this.filmStore.getFilms);
        },

        // async showNewFilm(page = 1) {
        //     await this.filmStore.fetchFilmMoi();
        //     this.pageStore.totalPage = this.filmStore.totalPage;
        //     // this.films = this.filmStore.getFilms;
        // },
    },
    created() {
        // alert(this.filmStore.films)
        // if(this.filmStore.films !== null){
        //     this.showNewFilm(1)

        // }
    }
    //    ,
    // mounted() {
    //     this.showNewFilm(1)
    // }
}
</script>

<style>

</style>