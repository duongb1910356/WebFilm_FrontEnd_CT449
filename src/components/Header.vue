<template>
    <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container-fluid" style="padding: 0px 0px;">
            <a class="navbar-brand text" href="#">FILMCHUA</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarID">
                <div class="navbar-nav">
                    <button class="nav-link" aria-current="page" href="#" data-toggle="modal"
                        data-target="#loginModal">Đăng nhập</button>
                    <a class="nav-link " aria-current="page" href="#">Đăng ký</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="d-flex justify-content-between align-items-center bg-white border my-0 py-0"
        style="border-radius: 3px;">
        <div class="d-flex flex-row">
            <router-link to="/"><button @click="getFilmBo()" class="btn p-2 bd-highlight header-link btn-no">Phim
                    bộ</button></router-link>
            <router-link to="/"><button @click="getFilmLe()" class="btn p-2 bd-highlight header-link">Phim lẻ</button>
            </router-link>
            <router-link to="/"><button @click="getFilmHoatHinh()" class="btn p-2 bd-highlight header-link">Hoạt
                    hình</button></router-link>
        </div>
        <div class="">
            <form action="" class="input-wrapper">
                <input type="text" name="" class="search-bar border-0" id="" style="width: 250px;">
                <!-- <i class="fa-solid fa-magnifying-glass"></i> -->
            </form>
        </div>
    </div>


    <div id="app">
        <div v-if="showModal">
            <transition name="modal fade">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" @click="showModal = false">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>Modal body text goes here.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        @click="showModal = false">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
    <button @click="showModal = true">Click</button>




</template>

<script>
import { mapStores } from "pinia";
import { useFilmStore } from "../stores/films";
import { usePageStore } from "../stores/page.store";
import filmService from "../service.js/film.service";

export default {

    inheritAttrs: false,
    data() {
        return {showModal: false}
    },
    computed: {
        ...mapStores(useFilmStore, usePageStore)
    },
    methods: {
        async getFilmBo() {
            await this.filmStore.fetchFilmBo();
            this.pageStore.currentPage = 1;
            this.pageStore.totalPage = this.filmStore.totalPage;
            this.filmStore.page = 1;
            this.pageStore.activePage = 1;
        },

        async getFilmLe() {
            await this.filmStore.fetchFilmLe();
            this.pageStore.currentPage = 1;
            this.pageStore.totalPage = this.filmStore.totalPage;
            this.filmStore.page = 1;
            this.pageStore.activePage = 1;
        },

        async getFilmHoatHinh() {
            await this.filmStore.fetchFilmHoatHinh();
            this.pageStore.currentPage = 1;
            this.pageStore.totalPage = this.filmStore.totalPage;
            this.filmStore.page = 1;
            this.pageStore.activePage = 1;
        }
    }

}
</script>

<style>
.text {
    background: linear-gradient(to right, #e6dada, #274046);
    font-size: 35px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.btn:focus {
    outline: none;
    box-shadow: none;
}

.header-link {
    text-decoration: none;
    padding-right: 5px;
    color: black;
    font-weight: 900;
}

button.p-2.bd-highlight:hover {
    background-color: orange;
    color: white;
}

.search-bar {
    background: #FFFFFF;
    box-shadow: inset 0px -3px 4px 1px rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    color: black;
}

.input-wrapper {
    display: inline-block;
    position: relative;
    width: 255px
}

.input-wrapper:after {
    font-family: 'FontAwesome';
    content: '\f002';
    position: absolute;
    right: 10px;
    color: black;
}
</style>