<template>
    <!-- <CButton color="primary" @click="() => { visibleLiveDemo = true }">Launch demo modal</CButton> -->
    <CModal :visible="visibleLiveDemo" @close="() => { visibleLiveDemo = false }">
        <CModalHeader>
            <CModalTitle></CModalTitle>
        </CModalHeader>
        <CModalBody>
            <div class="form-title text-center">
                <h4 style="color: black;">ĐĂNG NHẬP</h4>
            </div>
            <div class="d-flex flex-column text-center">
                <form>
                    <div v-if="visualForm">
                        <div class="form-group">
                            <input type="email" class="form-control" v-model="email" placeholder="Nhập email...">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" v-model="password"
                                placeholder="Nhập password...">
                        </div>
                    </div>
                    <img v-if="visualimg" src="../assets/img/suscesslogin.gif" alt="">
                    <button class="btn btn-info btn-block btn-round" @click.prevent="submitLogin()">Login</button>
                </form>

            </div>
        </CModalBody>
        <CModalFooter>
            <CButton color="secondary" @click="closeModal()">
                Đóng
            </CButton>
            <CButton color="primary" v-if="isLogout" @click="resetModalLogin()">Đăng xuất</CButton>
        </CModalFooter>
    </CModal>
</template>

<script>
import { CButton } from '@coreui/bootstrap-vue';
import { CModal } from '@coreui/bootstrap-vue';
import { CModalHeader } from '@coreui/bootstrap-vue';
import { CModalTitle } from '@coreui/bootstrap-vue';
import { CModalBody } from '@coreui/bootstrap-vue';
import { CModalFooter } from '@coreui/bootstrap-vue';
import userService from '../service.js/user.service';

export default {
    inheritAttrs: false,

    props: {
        visibleLiveDemo: { type: Boolean, required: true, default: false }
    },
    data() {
        return {
            visualimg: false,
            visualForm: true,
            isLogout: false,
        }
    },
    components: {
        CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter,
    },
    methods: {
        closeModal() {
            this.$emit("closeModal")
        },
        async submitLogin() {
            let data = {};
            data["email"] = this.email;
            data["password"] = this.password;
            const checkLogin = await userService.checkLogin(data);
            if (checkLogin.data != false) {
                sessionStorage.setItem("token", checkLogin.headers['auth-token']);
                sessionStorage.setItem("username", checkLogin.data.username);
                sessionStorage.setItem("email", checkLogin.data.email)
                // await setTimeout(5000);
                this.visualForm = false;
                this.visualimg = true;
                await setTimeout(() => this.$emit("closeModal"), 2000);
                this.$emit("loginsucess");
                this.isLogout = true;

            } else {
                alert("Lỗi đăng nhập")
            }
            console.log(checkLogin);
            // alert(checkLogin);
        },

        resetModalLogin(){
            this.email = "";
            this.password = "";
            this.visualForm = true;
            this.visualimg = false;
            this.isLogout = false;
            sessionStorage.clear();
            this.$emit("logout")
        }
    },
}
</script>

<style>

</style>