<template>
  <div>
    <Header :user="user"/>
    <div style="display: flex">
        <Aside />
        <router-view style="flex: 1" @userInfo="getUser" />
    </div>
  </div>


</template>

<script>
import Header from '../components/Header.vue'
import Aside from '../components/Aside.vue'
// import request from "@/utils/request";


export default {
  name: "Layout",
  components: { Header,Aside },
  data() {
    return {
      user: {}
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      let userJson = sessionStorage.getItem("user");
      if (!userJson) {
        return
      }
      // console.log(userJson);
      this.user = JSON.parse(userJson)
      // console.log(this.user)
    }
  }
}
</script>


<style>
</style>
