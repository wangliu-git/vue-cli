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

单文件组件
App.vue{
    
}
script{
    export default{
        prop : []/{}---声明接收属性
        data(){}
        computed:{}
        methods:{}
        watch:{}
        filters:{}
        
    }
}


## 实现todoList   

### 步骤

1. 拆页面组件
2. 实现静态组件
3. 动态组件(初始化显示  交互  )
4. 交互
> 注意配置文件路径
5. 拆页面
6. 拆CSS 
> 在页面引入基本基本css就不放在src下
> 在index.js下引入css---就写在src里
7. 在对应的组件下引入对应的css

### 设计data--
    类型: [{id : 1 , title  }]
    位置: 如果许多组件都需要就放在共同的父组件里
    名称: 
    
状态数据的更新
    更新组件的data数据的行为    data在哪就在哪更新
    如果子组件要更新父组件的数据,调用父组件的更新函数来更新父组件的数据
    一个组件结束数据不要直接修改,只是用来读取显示的
### 交互:
    1.绑定事件监听

不在子组件里直接修改数据

单向绑定--数据绑定
双向绑定---v-model


JSON.parse--接受的是JSON字符串
JSON.parse('[]')--JSON数组
每种JSON的数据类型都有相对的JS数据类型对应

















