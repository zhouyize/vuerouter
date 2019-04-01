// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'

Vue.use(VueRouter)

Vue.config.productionTip = false

//创建路由
const router = new VueRouter({
  routes:[
    {
      path:'/hello',
      name:'HelloWorld',
      component:HelloWorld
    }
  ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
