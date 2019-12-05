// 父组件--显示所有blog的数据


<template>
  <div>
      <h2>Blogs列表</h2>
      <ul>
        <!-- 生成数据--遍历             父组件向子组件传递数据---标签属性props -->
        <Blog v-for="(blog , index) in  blogs"   :key="blog.id"   :blog="blog"/>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
 // 引入每个blog组件
import Blog from './Blog'


  export default {

    // 列表做对应得数据--组件本身
    data() {
      return {
        // 显示列表的数据--数组----去生成展示在标签里
          blogs:[
              {id : 1 , title : "qwer"},
              {id : 3 , title : "asdf"},
              {id : 4 , title : "zxcv"},
              ]
      }
    },  

    components:{//注册局部组件--只能在当前组件使用
      Blog
    }
  }
</script>

<style scoped>
  h2{
    color: blue
  }
 
</style>
