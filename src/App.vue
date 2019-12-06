<template>
  
<div class="todo-container">
  <div class="todo-wrap">
    <Header />
    <List />
    <Footer />
  </div>
</div>


</template>



<script type="text/ecmascript-6">

import Header from "./components/header";
import List from "./components/list";
import Footer from "./components/footer";

  export default {//向外默认暴露配置对象
    data(){

    },

    components:{
      Header,
      List,
      Footer
    }
    
  }
</script>


/* scoped: 限定当前组件的样式只对当前组件有效, 对外部和内部的其它组件无效 */

<style scoped>
    /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
 
</style>
