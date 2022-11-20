import createApiClient from "./api.service";

class FilmService {
    constructor(baseUrl = "/api/films") {
        this.api = createApiClient(baseUrl);
    }

    async getNewFilm(page) {
        return (await this.api.get("/film-new-update", {
            params: {
                page: page
            }
        })).data;
    }

    async getFilmLe() {
        return (await this.api.get("/film-le")).data;
    }

    async getFilmBo() {
        return (await this.api.get("/film-bo")).data;
    }

    async getFilmHoatHinh() {
        return (await this.api.get("/film-hoat-hinh")).data;
    }

    async getFilFromSlug(slug) {
        return (await this.api.get(`/film/${slug}`)).data;
    }

    async getFilmFromSearchBox(name) {
        return (await this.api.get('/film-search', {
            params: { "name": name }
        })).data;
    }
}

export default new FilmService();