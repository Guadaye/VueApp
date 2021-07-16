import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import {vuexfireMutations, firestoreAction} from 'vuexfire'
import user from '@/store/user.js'

Vue.use(Vuex,Axios)
Axios.defaults.basURL= 'http://localhost:2990'

export default new Vuex.Store({
mutations:{
 //...vuexfireMutations,
},

  modules: {
    user,
   // question
  }
  
})
