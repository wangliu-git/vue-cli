<template>
<!-- 模板页面 -->
  <div>
    {{hello }} vue 
  </div>
</template>


// js代码块
<script>
export default {
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