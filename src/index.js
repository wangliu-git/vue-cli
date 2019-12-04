import logo from './assets/imgs/logo.png'
import  './assets/css/my.css'

const image = new Image()//创建图片的DOM对象
image.src = logo//指定图片的路径
document.body.appendChild(image)//把image节点添加到body属性


document.getElementById('root').innerHTML = '<h1>Hello</h1>'