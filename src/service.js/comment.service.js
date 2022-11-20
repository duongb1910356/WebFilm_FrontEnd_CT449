import createApiClient from "./api.service";

// var headers = {
//     'auth-token': localStorage.getItem('token'),
// };

class CommentService {
    constructor(baseUrl = "/api/comment") {
        this.api = createApiClient(baseUrl);
    }

    async createComment(slug, data) {
        let d = (await this.api.post(`/create/${slug}`, data, {headers: {"auth-token": sessionStorage.getItem('token')}})).data;
        // if(d != undefined){
        //     return d.data
        // }
        console.log(d)
        return d;
        // alert(slug);
    }

    async getPost(slug){
        let data = (await this.api.get(`/post/${slug}`, {headers: {"auth-token": sessionStorage.getItem('token')}}));
        if(data != null){
            return data.data;
        }
        return null;
    }

    async reply(slug, _id, data){
        return (await this.api.post(`/reply/${slug}/${_id}`, data, {headers: {"auth-token": sessionStorage.getItem('token')}})).data;
    }

}

export default new CommentService();