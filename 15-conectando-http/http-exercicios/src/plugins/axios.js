import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-b8b90.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'token'
// axios.defaults.headers.get['Accepts'] = 'applications/json'

Vue.use({
    install(Vue){
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-b8b90.firebaseio.com/',
            // headers:{
            //     "Authorization": "abc123"
            // }
            // headers: {
            //     get: {
            //         "Authorization": "abc123"
            //     }
            // }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            
            // if(config.method == 'post'){
            //     config.method = 'put'
            // }
            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = []
            // for(let chave in res.data){
            //     array.push({id: chave, ...res.data[chave]})
            // }

            // res.data = array
            return res
        }, error => Promise.reject(error))
    }
})