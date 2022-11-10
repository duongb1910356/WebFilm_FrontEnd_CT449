<template>
  <Header @getFilmBo="getFilmBo"></Header>
  <router-view />
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components:{
    Header,
  },
  methods:{
    getFilmBo(){
      this.currentPage  = 5;
    }
  }
}
</script>

<style scoped>

</style>
