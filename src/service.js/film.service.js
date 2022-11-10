import createApiClient from "./api.service";

class FilmService{
    constructor(baseUrl = "/api/films"){
        this.api = createApiClient(baseUrl);
    }

    async getNewFilm(page){
        return (await this.api.get("/film-new-update",{
            params:{
                page: page
            }
        })).data;
    }
}

export default new FilmService();