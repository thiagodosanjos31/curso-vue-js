import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import MenuLateral from './components/templates/MenuLateral.vue'
import MenuCabecalho from './components/templates/MenuCabecalho.vue'
import Carousel from './components/widgets/Carousel.vue'



Vue.config.productionTip = false
Vue.component('menu-lateral', MenuLateral)
Vue.component('menu-cabecalho', MenuCabecalho)
Vue.component('carrosel', Carousel)


new Vue({
  render: h => h(App),
}).$mount('#app')
