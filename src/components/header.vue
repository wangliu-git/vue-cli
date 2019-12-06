<template>
    <div class="todo-header">
      <input type="text" placeholder="请输入你的任务名称，按回车键确认" 
      @keyup.enter = "add" v-model="title" />
      <!-- @keyup.enter = "add"-----绑定事件----add事件名  -->
      <!-- v-model="title"---自动收集数据 -->
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // 声明接收属性--更新函数的属性
    props:{
      addTodo:{
        type:Function,
        required:true
      }
    },

    // 初始化数据
    data(){
        return{
          // 初始化是空串
          title:"",
        }
    },

    // 事件监听方法
    methods:{
      // 添加事件-在 todos列表里添加 todo对象
      add () {
        // 首先要有一个todo对象--根据title生成todo对象
        const title = this.title.trim()
        // 如果没有输入就返回
        if (!title) return

        const todo ={
          id:Date.now(),//当前时间值
          title,
          completed : false,
          }

        // 调用更新函
         数来添加改变todos
        this.addTodo(todo)
        
        // 清除输入
        this.title = ''
      }
       
    }
  }
</script>

<style scoped>
    /*header*/
    .todo-header input {
      width: 560px;
      height: 28px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 7px;
    }

    .todo-header input:focus {
      outline: none;
      border-color: rgba(82, 168, 236, 0.8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
 
</style>
