
import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LearnVue from '@/components/LearnVue'
import Base from '@/components/Base'
import Http from '@/components/Http'
import NotFound from '@/components/404'

Vue.use(VueRouter)

//创建路由
export default new VueRouter({
  linkActiveClass:"active",
  routes:[
    {
      path:'*',
      component:NotFound
    },
    {
      path:'/',
      redirect:'learn'    //重定向
    },
    {
      path:'/hello',
      name:'HelloWorld',    //跳转使用
      component:HelloWorld
    },
    {
      path:'/learn',
      name:'LearnVue',      //跳转使用
      component:LearnVue,
      children:[
        {
          path:'base',
          component:Base
        },
        {
          path:'http',
          component:Http
        }
      ]
    }
  ]
})
