<template>
    <!-- <CButton color="primary" @click="() => { visibleRegister = true }">Launch demo modal</CButton> -->
    <CModal :visible="visibleRegister" @close="() => { visibleRegister = false }">
        <CModalHeader>
            <CModalTitle></CModalTitle>
        </CModalHeader>
        <CModalBody>
            <div class="form-title text-center">
                <h4 style="color: black;">ĐĂNG KÝ</h4>
            </div>
            <div class="d-flex flex-column text-center">
                <form>
                    <div v-if="visualForm">
                        <div class="form-group">
                            <input type="email" class="form-control" v-model="email" placeholder="Nhập email...">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="username" placeholder="Nhập username...">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" v-model="password"
                                placeholder="Nhập password...">
                        </div>
                    </div>
                    <img v-if="visualimg" src="../assets/img/suscesslogin.gif" alt="">
                    <button class="btn btn-info btn-block btn-round" @click.prevent="submitRegister()">Đăng ký</button>
                </form>

            </div>
        </CModalBody>
        <CModalFooter>
            <CButton color="secondary" @click="closeModalRegister()">
                Đóng
            </CButton>
            <!-- <CButton color="primary">Xác nhận</CButton> -->
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
        visibleRegister: { type: Boolean, required: true, default: false }
    },
    data() {
        return {
            visualimg: false,
            visualForm: true,
        }
    },
    components: {
        CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter,
    },
    methods: {
        closeModalRegister() {
            this.$emit("closeModalRegister")
        },
        async submitRegister() {
            let data = {};
            data["username"] = this.username;
            data["email"] = this.email;
            data["password"] = this.password;
            console.log(data);

            const checkCreate = await userService.register(data);
            if (checkCreate) {
                // await setTimeout(5000);
                this.visualForm = false;
                this.visualimg = true;
                await setTimeout(() => this.$emit("closeModalRegister"), 2000);
                // this.$emit("loginsucess")

            } else {
                alert("Lỗi đăng ký")
            }
            console.log(checkCreate);
            // alert(checkLogin);
        }
    },
}
</script>

<style>

</style>