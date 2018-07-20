<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>全局的:{{$store.state.username}}</p>


    <button v-if="$store.getters.isLogin" @click="logoutAction()">退出</button>
  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  data(){
    return {}
  },
  computed:Vuex.mapState(['username']),
  methods:Vuex.mapActions(['logoutAction'])
}
</script>

