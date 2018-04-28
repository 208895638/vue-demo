import Vue from "vue"
import Router from "vue-router"
import App from "./index"
import login from "./login"
import register from "./register"

const routers = {
    mode:"history",
    routes:[
      {
        path:"/",
        component:login
      },
      {
        path:"/login",
        component:login
      },
      {
        path:"/register",
        component:register
      }
    ]
}
const router = new Router({
    routers
})

Vue.use(Router)
new Vue({
    el:"#app",
    router,
    components: { App },
    template: '<App/>'
})