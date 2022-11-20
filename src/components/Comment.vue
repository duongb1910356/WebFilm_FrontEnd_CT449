<template>
    <div class="mb-5">
        <h4>Bình luận</h4>
        <div class="bg-light my-3 py-3 px-3" style="border-radius: 5px;">
            <ul class="list-unstyled">
                <li class="media">
                    <form class="media-body">
                        <textarea style="width: 100%; color: black;" v-model="comment"
                            placeholder="Nêu cảm nghĩ của bạn..."></textarea>
                    </form>
                </li>
            </ul>
            <button class="btn btn-primary mb-3" @click="writeComment(slug)"><i
                    class="fa-solid fa-pen-to-square"></i>&nbsp;Đăng</button>
        </div>
        <div class="bg-light" style="border-radius: 5px; padding: 10px 10px;">
            <img v-if="loadPost" style="width: 55px; height: auto;" src="../assets/img/circle_nobackground.gif" alt="">
            <ul class="list-unstyled">
                <li class="media" v-for="cmt in post">
                    <img style="width: 40px; height: 40px;"
                        src="../assets/img/hoahuongduong.jpeg"
                        class="mr-3" alt="...">
                    <div class="media-body">
                        <strong style="color: black; font-size: 17px;" class="mt-0">{{ cmt.author }}
                            <span @click="reply(cmt._id, cmt.author)" class="badge badge-secondary">Phản hồi</span>
                        </strong>
                        <p style="color: black; font-size: 15px;" class="mb-1">{{ cmt.content }}</p>
                        <form class="media-body" v-if="cmt._id == commentActive">
                            <textarea @keyup.enter="submitReply(cmt._id, cmt.author)" style="width: 100%; color: black;"
                                v-model="repcomment" placeholder="Nêu cảm nghĩ của bạn...."></textarea>
                        </form>

                        <ul class="list-unstyled mt-3">
                            <li class="media" v-for="rep in cmt.reply">
                                <img style="width: 40px; height: 40px;"
                                    src="../assets/img/hoahuongduong.jpeg"
                                    class="mr-3" alt="...">
                                <div class="media-body">
                                    <strong style="color: black; font-size: 17px;" class="mt-0">{{ rep.author }}
                                        <span @click="reply(rep._id, rep.author)" class="badge badge-secondary">Phản
                                            hồi</span>
                                    </strong>
                                    <p style="color: black; font-size: 15px;" class="mb-1"><strong
                                            class="pr-2 text-primary">@{{ rep.toAuthor }}</strong>{{ rep.content }}</p>
                                    <form class="media-body" v-if="rep._id == commentActive">
                                        <textarea @keyup.enter="submitReply(cmt._id, rep.author)"
                                            style="width: 100%; color: black;" v-model="repcomment"
                                            placeholder="Nêu cảm nghĩ của bạn..."></textarea>
                                    </form>
                                </div>
                            </li>

                        </ul>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import commentService from "../service.js/comment.service";

export default {
    props: {
        slug: { type: String, required: true, default: "" },
        post: { type: Array, required: true }
        // comment: {type: String, required: false}
    },
    data() {
        return {
            loadPost: false,
            commentActive: "",
        }
    },
    methods: {
        async writeComment(slug) {
            // if (localStorage.getItem("token") == null) {
            //     alert("Vui lòng đăng nhập trước khi thực hiện bình luận")
            // } else {
            //     alert("ok");
            // }
            let data = {
                "author": sessionStorage.getItem("username"),
                "email": sessionStorage.getItem("email"),
                "content": this.comment,
                "date": new Date()
            }
            let status = await commentService.createComment(slug, data);
            if (status != true) {
                alert(status);
            } else {
                this.loadPost = true;
                this.comment = "";
                await this.$emit("updatePost")
                await setTimeout(() => this.loadPost = false, 300);
            }

        },

        async reply(id) {
            this.comment = ""
            this.commentActive = this.commentActive != id ? id : "";
            // let data = {
            //     "author": localStorage.getItem("username"),
            //     "email": localStorage.getItem("email"),
            //     "content": this.comment,
            //     "date": new Date(),
            //     "toAuthor": toAuthor
            // }
            // await commentService.reply(this.slug, id, data);
            // this.$emit("updatePost")
        },

        async submitReply(id, toAuthor) {
            let data = {
                "author": sessionStorage.getItem("username"),
                "email": sessionStorage.getItem("email"),
                "content": this.repcomment,
                "date": new Date(),
                "toAuthor": toAuthor
            }

            let status = await commentService.reply(this.slug, id, data);
            if (status != true) {
                alert(status);
            } else {
                this.repcomment = "";
                this.reply("id");
                this.$emit("updatePost")
            }
        }
    }

}
</script>