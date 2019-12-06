<template>
  <div>
      <h1>{{title}}</h1>
      <!-- 引入的组件 -->
      <Blogs/>
  </div>
</template>



<script type="text/ecmascript-6">
// 引入组件挂载到App--显示到页面
import Blogs from './components/Blogs'

  export default {//向外默认暴露配置对象
    data() {
      return {
        title:'吃饭'
      }
    },


    // 注册引入的组件

    components:{
      Blogs
    }
    
  }
</script>


/* scoped: 限定当前组件的样式只对当前组件有效, 对外部和内部的其它组件无效 */

<style scoped>

 
</style>
