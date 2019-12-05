<template>
  <div>
      <h1>{{title}}</h1>
  </div>
</template>



<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        title:'吃饭'
      }
    },
  }
</script>


/* scoped: 限定当前组件的样式只对当前组件有效, 对外部和内部的其它组件无效 */

<style scoped>

 
</style>
