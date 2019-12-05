组件--实现所有功能界面代码模块的集合

定义组件
---vue.component--模板没有提示
---.vue


https://github.com/zxfjd3g/190719_VueComponent.git

配置 "scripts": {
    "build": "webpack --mode production",
    
    就不用 npx webpack了}



dist文件夹--"后台工程师"


"devDependencies": {----编译打包的时候用--开发时依赖

根据依赖声明下载所有的包--依赖声明里声明的包就是直接依赖

"dependencies":  ---是为了实现功能,效果

v-for="(item , index) in  items"   :key:"index"-遍历数组
    item    确定意义(组件的含义) 
    items   需要遍历的数据[{},{},{}]
    :key:"index"    加冒号--动态     index--数据的标识

注册组件的时候  标签名 与 引入的文件名 同名可省

<!-- 模板里面访问的都是VM的属性 -->

App.vue{
    
}
