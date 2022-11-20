import { defineStore } from "pinia";
import filmService from "../service.js/film.service";
const maxFilmOnPage = 12;
export const useFilmStore = defineStore("film",{
    state: () => ({
        films: [],
        totalPage: 0,
        page: 1,
        title: "Phim mới cập nhật"
    }),
    getters: {
        getFilms: (state) => {
            return state.films.slice((state.page - 1) * maxFilmOnPage,(state.page - 1) * maxFilmOnPage + maxFilmOnPage)
        }
    },
    actions: {
        async fetchFilmMoi(){
            try {
                this.films = await filmService.getNewFilm(this.page);
                this.totalPage = Math.floor((this.films.length + maxFilmOnPage - 1) / maxFilmOnPage);
            } catch (error) {
                console.log(error);
            }
        },

        async fetchFilmBo(){
            try {
                this.films = await filmService.getFilmBo(this.page);
                this.totalPage = Math.floor((this.films.length + maxFilmOnPage - 1) / maxFilmOnPage);
                this.title = "Phim bộ mới nhất"
            } catch (error) {
                console.log(error);
            }
        },

        async fetchFilmLe(){
            try {
                this.films = await filmService.getFilmLe();
                this.totalPage = Math.floor((this.films.length + maxFilmOnPage - 1) / maxFilmOnPage);
                this.title = "Phim lẻ mới nhất"
            } catch (error) {
                console.log(error);
            }
        },
        
        async fetchFilmHoatHinh(){
            try {
                this.films = await filmService.getFilmHoatHinh();
                this.totalPage = Math.floor((this.films.length + maxFilmOnPage - 1) / maxFilmOnPage);
                this.title = "Phim hoạt hình"
            } catch (error) {
                console.log(error);
            }
        },

        async fetchFromSearchBox(name){
            try {
                this.films = await filmService.getFilmFromSearchBox(name);
                this.totalPage = Math.floor((this.films.length + maxFilmOnPage - 1) / maxFilmOnPage);
                this.title = "Kết quả"
            } catch (error) {
                console.log(error);
            }
        }
    },
})