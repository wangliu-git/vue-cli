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
  mode:"history",   //去掉路由路径中的#
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
          name:"news",  //起名字--代替path
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
              component :MessageDetail,
              // props:true,//内部自动将接受的params参数以标签的属性传入路由组件
              //函数写法-更灵活--query参数必须用这种方式
              props:(route) => ({ id: route.params.id })//函数返回的对象中的所有属性都会以标签的属性传入路由组件
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