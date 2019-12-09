/* 
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import Message from "@/pages/Message";
import MessageDetail from "@/pages/MessageDetail";

// 声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter({
  //应用中所有路由
  routes:[
    //配置路由
    {
      path:"/about",
      component:About
    },
    {     //一级路由(父路由)
      path:"/home",
      component:Home,
      children:[
        // 注册子路由
        {
          name:"news",
          path:"/home/news",
          component:News
        },
        {

          path:"message",  //相当于/home/message
          component:Message,
          children:[
            {
              name:"detail",
              path :"/home/news/message/detail/:id",  //动态路由
              component :MessageDetail
            }
          ]
        },
        {
          // 默认到news的路由下
          path:'',
          redirect:'/home/news'
        }
      ]
    },
    {
      path:"/",
      redirect:"/about"

    }

  ]
})