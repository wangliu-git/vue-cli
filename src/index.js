// import logo from './assets/imgs/logo.png'
// import  './assets/css/my.css'
// const image = new Image()//创建图片的DOM对象
// image.src = logo//指定图片的路径
// document.body.appendChild(image)//把image节点添加到body属性
// document.getElementById('root').innerHTML = '<h1>Hello</h1>'




// import Vue from 'vue/dist/vue.runtime.common'-----不带编译器模块
// import Vue from 'vue/dist/vue.esm.js'



import Vue from 'vue'  //找第三方模块的时候写模块名---

import App from './App.vue'//引入自定义组件---只是个配置--需注册才能用---需要相对路径

// Vue.component('App',App)//注册全局组件(所有范围内都有效)--确定标签名======>方式一

new Vue({
    components:{     //注册组件(只能在当前有效)--才能写组件标签=====>方式二
      App1:App      //左边是标签名-右边是引入的
    },
    template : '<App1/>', //模板 --组件标签
}).$mount('#root')













