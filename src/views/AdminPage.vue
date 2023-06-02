<template>
    <h1>Thiết kế temple ở đây nghe Huy ùi</h1>
</template>

<script>
import { useFilmStore } from "../stores/films";
import { mapStores } from "pinia";
import FilmList from "@/components/FilmList.vue";
import Paginate from "@/components/Paginate.vue";
import { usePageStore } from "../stores/page.store";

export default {
    components: {
        FilmList, Paginate,
    },
    data() {
        return {
           
        }
    },
    computed: {
       
    },
    methods: {
        
    },
    created() {
    },
    mounted() {
    }
}
</script>

<style></style>