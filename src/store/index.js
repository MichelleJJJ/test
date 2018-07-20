import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  username:'',
  userage:'',
  userid:''
}


const getters = {
  isLogin(state){
    if(state.username){
      return true
    }else{
      return false
    }
    console.log(rest)
  }
}

const mutations = {
  modifyname(state,value){
    state.username = value
  }
}

const actions = {
  modifyName(context,params){
    //console.log('modifyName执行了')
    //context.state.username = params
    context.commit('modifyname',params)
  },
  initUserData(context,params){
    console.log(params)
    context.state.username = params.name
    context.state.userage = params.age
    context.state.userid = params.id
  },
  logoutAction(context){
    context.state.username = ''
    context.state.userage = ''
    context.state.userid = ''
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})

export default store;
console.log(store)