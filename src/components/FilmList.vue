<template>
    <div class="my-4" style="">
        <h5 style="border-left: solid 3px white; padding-left: 3px;">{{ title }}</h5>
        <div style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); padding: 12px 0px;">
            <div class="row">
                <div class="col-sm-3" v-for="(film, index) in films">
                    <router-link :to="{ name: 'watchpage', params: { slug: film.slug } }">
                        <img class="card-img-top" :src="film.thumb_url">
                        <p class="text-center overflow-text" v-text="film.name"></p>
                    </router-link>
                    <!-- <a href="">
                        
                    </a> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { mapStores } from "pinia";
import { useFilmStore } from "../stores/films";

export default {
    props: {
        title: { type: String, default: "" },
        // films: {type: Array, default: []}
    },
    computed: {
        ...mapStores(useFilmStore),
        films: function () {
            return this.filmStore.getFilms;
        }
    }
}
</script>

<style>
.card-img-top {
    width: 232px;
    height: 348px;
}
</style>