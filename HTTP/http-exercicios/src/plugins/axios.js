import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-35d49-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue) {
       Vue.prototype.$http = axios 
    }
})