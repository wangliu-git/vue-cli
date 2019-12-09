<template>
  <div>
    <!-- 添加移入移除事件 -->
      <li :style = '{background:bgColor}' @mouseenter = "handleEnter(true)" @mouseleave = "handleEnter(false)"  >
        <label>
          <input type="checkbox" v-model="todo.completed"/>
          <!-- //v-model="todo.completed"---判断是否完成 -->
          <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click='deleteItem'  v-show = 'isShow' style="display:none">删除</button>
      </li>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
     data(){
       return{
          bgColor:"white",
          isShow : false,
       }
     },

  // 声明接收属性--props可以传对象
      props: {
        //指定名称和类型
        todo : Object,
        deleTodo : Function,

        
      },
    
    methods:{
      // 移入事件
        handleEnter(isEnter){
          if (isEnter) {
             this.bgColor = 'red'
            // 改变事件的状态
             this.isShow = true
          }else{
              this.bgColor = 'white'
               this.isShow = false
          }
         
        },

        deleteItem(){
            if (window.confirm('确定删除吗')) {
              // comfirm有返回值--由你点击的确认 取消决定
              // this.index
              this.deleTodo(this.index)
            }
        }

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
      /* display: none; */
      margin-top: 3px;
    }

    li:before {
      content: initial;
    }

    li:last-child {
      border-bottom: none;
    }
 
</style>
