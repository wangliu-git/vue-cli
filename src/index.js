// import logo from './assets/imgs/logo.png'
// import  './assets/css/my.css'

// const image = new Image()//创建图片的DOM对象
// image.src = logo//指定图片的路径
// document.body.appendChild(image)//把image节点添加到body属性


// document.getElementById('root').innerHTML = '<h1>Hello</h1>'

import Vue from 'vue'

import App from './App.vue'//引入自定义组件---只是个配置--需注册才能用

Vue.component('App',App)//注册全局组件--确定标签名

new Vue({
    components:{     //注册组件
      App1:App      //左边是标签名-右边是引入的
    },
    template : '<App1/>', 
}).$mount('#root')













