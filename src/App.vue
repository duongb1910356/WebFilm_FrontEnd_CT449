<template>
  <Header :username="username" @openModalLogin="openModalLogin" @openModalRegister="openModalRegister"></Header>
  <Modal @logout="logout" @loginsucess="loginsucess" :email="email" :visibleLiveDemo="visibleLiveDemo" @closeModal="closeModal"></Modal>
  <ModalRegister :visibleRegister="visibleRegister" @closeModalRegister="closeModalRegister"></ModalRegister>
  <router-view></router-view>

</template>

<script>
import Header from "@/components/Header.vue";
import Modal from "@/components/Modal.vue";
import ModalRegister from "./components/ModalRegister.vue";
export default {
  components: {
    Header, Modal, ModalRegister
  },
  data() {
    return {
      visibleLiveDemo: false,
      username: "Đăng nhập",
      visibleRegister: false
    }
  },
  methods: {
    async openModalLogin() {
      this.visibleLiveDemo = await this.visibleLiveDemo ? false : true;
      this.visibleLiveDemo = await true;
    },
    closeModal(){
      this.visibleLiveDemo = false;
    },
    loginsucess(){
      this.username = "Hello, " + sessionStorage.getItem("username");
    },
    async openModalRegister(){
      this.visibleRegister = await this.visibleRegister ? false : true;
      this.visibleRegister = await true;
    },
    closeModalRegister(){
      this.visibleRegister = false;
    },
    closeModalRegister(){
      this.visibleRegister = false;
    },
    logout(){
      this.username = "Đăng nhập";
    }
  }
}
</script>

<style scoped>

</style>
