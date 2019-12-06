<template>
     <ul class="todo-main">
       <Item />
    </ul>
</template>

<script type="text/ecmascript-6">

import  Item from "./item";
  
  export default {
      data(){

      },

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
