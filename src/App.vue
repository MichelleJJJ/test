<template>
  <div id="app">

    <keep-alive>
        <router-view/>
    </keep-alive>
    


    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/product">Product</router-link>
      <router-link to="/about">About</router-link>
    </div>

  </div>
</template>

<script>
export default {
  mounted(){
    //登录,获得用户信息
    let name = '李四'
    let age = 25
    let id = 2

    //把用户信息告诉全局
    this.$store.dispatch('initUserData',{
      name,
      age,
      id
    })


  }
}
</script>


<style lang="scss">
#nav{
  width: 100%;
  height: 49px;
  background: lemonchiffon;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  line-height: 49px;
}
#nav a{
  flex: 1;
}
#nav a.router-link-exact-active{
  background: lightblue
}
</style>
