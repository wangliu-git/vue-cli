<template>
     <ul class="todo-main">
       <Item v-for="(todo,index) in todos" :key='todo.id' :todo='todo' :deleTodo='deleTodo' :index='index'/>
       <!-- //:todo='todo'--给item传数据 -->
    </ul>
</template>

<script type="text/ecmascript-6">

import  Item from "./item";
  
  export default {
      data(){
        return{}
      },

      props: ['todos', 'deleTodo'],
      //声明接收属性[属性名]----组件就多了一个属性
      
      
      components:{
        Item
      }
  }

 
</script>

<style scoped>

  /*main*/
    .todo-main {
      margin-left: 0px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 0px;
    }

    .todo-empty {
      height: 40px;
      line-height: 40px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding-left: 5px;
      margin-top: 10px;
    }
</style>
