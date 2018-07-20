<template>
  <div class="home">

    <h1>This is an home page</h1>
    <p>组件自己的:{{userid}}/{{username}}/{{userage}}</p>
    <p>全局的:{{$store.state.username}}</p>
    <p>总和:{{sum}}</p>

    <input type="text" name="" id="" ref="input">
    <button @click="modifyName($refs.input.value)">修改</button>
    <button @click="printAction($refs.input.value)">打印</button>

  </div>
</template>

<script>
import Vuex from 'vuex'
export default {
  data(){
    return {
      a:10,
      b:20
      //username:this.$store.state.username
    }
  },
  // methods:{
  //   modifyAction(){
  //     //不能这样修改
  //     //this.$store.state.username = this.$refs.input.value

  //     //正确的修改方式
  //     this.$store.dispatch('modifyName',this.$refs.input.value)
  //   }
  // },

  methods:Vuex.mapActions(['modifyName']),

  methods:{
    ...Vuex.mapActions(['modifyName']),
    printAction(val){
      console.log(val)
    }
  },


  //将全局数据改为自己的局部数据
  // computed:{
  //   username(){
  //     return this.$store.state.username
  //   }
  // },

  // computed:Vuex.mapState(['username']),
  computed:{
    ...Vuex.mapState(['username','userage','userid']),
    sum(){
      return this.a+this.b
    }
  },

  mounted(){
    console.log(Vuex)
    //console.log(this.$store.state.username)
  },
  updated(){
    console.log('updated')
  }
}
</script>


