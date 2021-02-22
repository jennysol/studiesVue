import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Menu from './components/templates/Menu'
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
      // return { x: 0, y: 1000 }
      if (savedPosition) {
        return savedPosition
      } else if (to.hash) {
          return { selector: to.hash }
       }
      return{ x: 0, y: 0 }

    },
    routes: [{
      path: '/',
      name: 'inicio',
      // component: Inicio
      components: {
        default: Inicio,
        menu: Menu
      }
    }, {
      path: '/usuario',
      // component: Usuario,
      components: {
        default: Usuario,
      },
      props: true,
      children: [
        { path: '', component: UsuarioLista},
        { path: ':id', component: UsuarioDetalhe, props: true},
        { 
          path: ':id/editar', 
          component: UsuarioEditar, 
          props: true,
          name: 'editarUsuario'
        },
      ]
    },
    {
      path:'/redirecionar',
      redirect: '/usuario'
    },
    {
      path:'*',
      redirect: '/'
    },
  ]
})