<template>
    <IntroFilm :film="film"></IntroFilm>
    <ViewVideo :videolink="videolink" @playEpsode="playEpsode" :film="film"></ViewVideo>
    <Comment></Comment>
    
</template>

<script>
// import { mapStores } from "pinia";
// import { useFilmStore } from "../stores/films";
// import { usePageStore } from "../stores/page.store";
import $ from 'jquery';
import { useRoute } from 'vue-router';
import IntroFilm from '../components/IntroFilm.vue';
import filmService from '../service.js/film.service';
import ViewVideo from '../components/ViewVideo.vue';
import Comment from '../components/Comment.vue';

// const route = useRoute();

export default {
    // setup() {
    //     const route = useRoute();
    //     const slug = route.params.slug;
    //     return {
    //         slug,
    //     }
    // },
    props: {
        slug: { type: String, require: true }
    },
    components: {
        IntroFilm, ViewVideo, Comment
    },
    data() {
        return {
            film: new Object(),
            videolink: ""
        }
    },
    computed: {
        // ...mapStores(useFilmStore, usePageStore),
        // thumb_nail: () => {
        //     return slug
        // }

    },
    methods: {
        async getFilm(slug){
            // this.film = slug;
            try {
                this.film = await filmService.getFilFromSlug(slug);
                this.videolink = this.film.episodes[0].link_embed;
                console.log(this.film)
            } catch (error) {
                console.log(error)
            }
        },

        playEpsode(name){
            this.videolink = this.film.episodes[name - 1].link_embed;
            // alert(this.videolink)
        }
    },
    created() {
        this.getFilm(this.slug);
    },
    mounted() {
        // thumb_nail: slug
        // alert(route.params.slug)
        // $("button").addClass("jhjhjhjh")
    }
}
</script>

<style>
.poster {
    width: 85%;
    height: auto;
    float: right;
}

/* button:focus {outline:0;} */
</style>