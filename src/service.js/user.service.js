import createApiClient from "./api.service";

class UserService{
    constructor(baseUrl = "/api/auth"){
        this.api = createApiClient(baseUrl);
    }

    async checkLogin(data){
        return (await this.api.post("/login",data));
    }

    async register(data){
        return (await this.api.post("/register", data)).data;
    }
    
}

export default new UserService();