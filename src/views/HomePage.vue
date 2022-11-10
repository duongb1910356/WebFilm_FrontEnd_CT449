<template>
    <!-- <Header></Header> -->

    <FilmList :title="title" :films="films"></FilmList>
    <Paginate :activePage="activePage" @chosePage="chosePage" @previousPage="previousPage" @nextPage="nextPage"
        :totalPage="totalPage()" :startPage="startPage" :maxPageView="maxPageView" :currentPage="currentPage"
        :endPage="endPage"></Paginate>
</template>

<script>
import FilmList from "@/components/FilmList.vue";
import filmService from "../service.js/film.service";
import Paginate from "@/components/Paginate.vue"
import Header from "@/components/Header.vue"
export default {
    components: {
        FilmList, Paginate, Header
    },
    data() {
        return {
            title: "Phim mới cập nhật",
            films: [],
            currentPage: 1,
            maxPageView: 5,
            startPage: 1,
            endPage: 5,
            activePage: 1
            // totalPage: 7,
            // activePage: 7
        }
    },
    // computed: {
    //     // getNewFilm() {
    //     //     // try {
    //     //     //     var temp = await filmService.getNewFilm();
    //     //     //     this.films = await temp[0]._id;
    //     //     //     console.log(this.films)
    //     //     // } catch (error) {
    //     //     //     console.log(error)
    //     //     // }
    //     //     this.films = []
    //     //     // console.log(this.films[0]._id)
    //     // }
    // },
    methods: {

        totalPage() {
            return 2;
        },
        nextPage(activePage) {
            this.currentPage = activePage
        },
        previousPage(activePage) {
            this.currentPage = Math.max(activePage - this.maxPageView + 1, 1)
        },
        chosePage(name) {
            this.activePage = name;
            this.showNewFilm(this.activePage)
        },


        async showNewFilm(page = 1) {
            try {
                this.films = await filmService.getNewFilm(page);
            } catch (error) {
                console.log(error)
            }
        },

        getFilmBo() {
            alert("ya")
        }
    },
    mounted() {
        this.showNewFilm(1)
    }
}
</script>

<style>

</style>