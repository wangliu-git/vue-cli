<template>
  
<div class="todo-container">
  <div class="todo-wrap">
    <Header :addTodo='addTodo'/>
    <!-- 通过List传给 Item -->
    <List :todos='todos' :deleTodo='deleTodo'/>
    <!-- //传数据(让List接收数据--读的是组件对象的属性) -->
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
        return {
          todos : [
          {id : 1 , title :'aqqq', completed: false},//默认是否选中
          {id : 3 , title :'assss', completed: true},
          {id : 5 , title :'zxxx', completed: false},
        ]
        }
    },
  methods:{
    // 添加todo--改变todos
    addTodo(todo){
      // 在列表前面添加--添加之后要传给Header-Header要接收
        this.todos.unshift(todo)
     },

    deleTodo(index){
        this.todos.splice(index,1)
    }
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
