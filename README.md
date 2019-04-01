1.路由
  注意：项目在初始化的时候不要集成vue-router
2.安装
  npm install vue-router
3.如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：
  import Vue from 'vue'
  import VueRouter from 'vue-router'

  Vue.use(VueRouter)

4.创建路由
  const router = new VueRouter({
    routers:[
      {
        path:'/',
        name:'HelloWorld',
        component:HelloWorld
      }
    ]
  })

5.给出路由显示的位置
  <router-view />

6.将路由对象注入Vue实例中
  router
