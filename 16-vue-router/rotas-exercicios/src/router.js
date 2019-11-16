import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'

// import Usuario from './components/usuario/Usuario.vue'
// import UsuarioLista from './components/usuario/UsuarioLista.vue'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
// import UsuarioEditar from './components/usuario/UsuarioEditar.vue'

import Menu from './components/template/Menu.vue'
import MenuAlt from './components/template/MenuAlt.vue'


Vue.use(Router)
// USANDO IMPORT DINAMICO, OU SEJA, NAO SERÁ CARREGADO NO BUNDLE
// INICIAL DA APLICAÇÃO, SOMENTE QUANDO FOR SOLICITADO
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import('./components/usuario/UsuarioDetalhe')
const Usuario = () => import('./components/usuario/Usuario')

// export default new Router({
const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition
        }else if(to.hash){
            return { selector: to.hash }
        }
        return { x: 0, y: 1000}
    },
    // mode: 'hash',
    routes: [{
        path:'/',
        // component: Inicio,
        name: 'inicio',
        components: {
            default: Inicio,
            menu: Menu
        }
    }, {
        path: '/usuario',
        // component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista},
            { path: ':id', component: UsuarioDetalhe, props: true,
                beforeEnter: (to, from, next) => {
                    console.log('antes da rota -> usuário detalhe')
                    next()
                } },
            { path: ':id/editar', component: UsuarioEditar, props: true,
              name: 'editarUsuario' },
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    }, {
        path: '*',
        redirect: '/'
        //QUALQUER REQUISIÇÃO PARA UMA URL QUE NÃO EXISTE SERÁ DIRECIONADA
        // PARA A PÁGINA INICIAL
    }]


})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas -> global')
    // if(to.path !== 'usuario')
    //     next('/usuario')
    next()
})

export default router