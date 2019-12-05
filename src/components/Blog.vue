// 子组件-显示blog的标题


<template>
<!-- 现在模板里面的属性都是组件对象的属性 -->
<!-- 一个组件对象都是小的VM -->
<!-- 模板中获取数据读取组件对象对应的属性 -->
  <div>
    <li>
      <header>{{blog.title}}</header>
    </li>
      
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // 声明接收属性--值可以是对象/字符串/不传
    // 接收的所有标签属性  都会成为组件对象的属性
    // 组件里回调函数的this 都是组件对象
  props:['blog']

  }
</script>

<style >
  header{
    background:blue
  }
 
</style>
