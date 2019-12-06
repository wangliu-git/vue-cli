<template>
  <div>
      <li>
        <label>
          <input type="checkbox" v-model="todo.completed"/>
          <!-- //v-model="todo.completed"---判断是否完成 -->
          <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" style="display:none">删除</button>
      </li>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      data(){
        
      },

      // 声明接收属性--props可以传对象
          props: {
            //指定名称和类型
            todo : Object,
           
          }
  }
</script>

<style scoped>
/*item*/
    li {
      list-style: none;
      height: 36px;
      line-height: 36px;
      padding: 0 5px;
      border-bottom: 1px solid #ddd;
    }

    li label {
      float: left;
      cursor: pointer;
    }

    li label li input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }

    li button {
      float: right;
      display: none;
      margin-top: 3px;
    }

    li:before {
      content: initial;
    }

    li:last-child {
      border-bottom: none;
    }
 
</style>
