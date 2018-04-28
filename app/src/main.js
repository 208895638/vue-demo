import Vue from 'vue'
import App from './App'
import vueResource from "vue-resource"
import routers from 'vue-router'
import IndexPage from "./pages/index"
Vue.use(routers)
Vue.use(vueResource)
let router = new routers({
  mode:"history",
  routes:[
    {
      path:"/",
      component:IndexPage
    }
  ]
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
