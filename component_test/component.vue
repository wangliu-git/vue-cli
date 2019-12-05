<template>
<!-- 模板页面 -->
  <div>
    {{hello }} vue 
  </div>
</template>


// js代码块
<script>
export default {//默认暴露配置对象
  data:function() {
    return {
      hello:"hi"
    }
  }
}
</script>


//样式
<style lang="stylus" scoped>
  div{
    background-color pink
  }
</style>