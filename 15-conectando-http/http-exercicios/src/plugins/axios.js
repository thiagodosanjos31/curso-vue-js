import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-b8b90.firebaseio.com/'

Vue.use({
    install(Vue){
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-b8b90.firebaseio.com/'
        })

        // Vue.prototype.$http.interceptos.request.use(config => {
            // console.log(config.method)
            // if(config.method == 'post'){
            //     config.method = 'put'
            // }
        //     return config
        // })
    }
})