<template>
  <div>
    App
       <!-- <p>click {{$store.state.count}} times, count is {{$store.state.evenOrOdd}}</p> -->
   <p>click {{count}} times, count is {{evenOrOdd}}</p>
   <button @click="increment">+</button>
   <button @click="decrement">-</button>
   <button @click="incrementIfOdd">increment if odd</button>
   <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script type="text/ecmascript-6">

  /* 
  store对象
    1. state: 包含所有state数据的对象
    2. getters: 包含所有getter计算属性的对象
    3. dispatch(actionName, data)
    4. commit(mutationName, data)

  */

/*
    map : 映射 对应关系  key  value
读数据
    mapState: (函数类型)    映射状态
    mapGetters:(函数类型)   getter数据
更新数据
    mapMutations:   commit
    mapActions:  dispath
*/


// 用于简化组件通信的函数
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {


//计算属性的名字和状态的名字一致
    computed: {

      // count () {
      //   return this.$store.state.count
      // },

      // evenOrOdd () {
      //   return this.$store.getters.evenOrOdd
      // }


//函数-接受的是数组--返回值是(...写在对象里) --对象   
  ...mapState(['count']), // {count () {return this.$store.state['count']}}

      ...mapGetters(['evenOrOdd']) // {evenOrOdd () {return this.$store.getters['evenOrOdd']}}
    },
    
    mounted () {
      console.log(this.$store)
    },
    

    methods: {


//commit让nmutation调用的  mapMutations简化

      // increment () {
      //   this.$store.commit('INCREMENT')
      // },

      // decrement () {
      //   this.$store.commit('DECREMENT')
      // },


//分发-mapActions简化

      // incrementIfOdd () {
      //   this.$store.dispatch('incrementIfOdd')
      // },

      // incrementAsync () {
      //   this.$store.dispatch('incrementAsync')
      // },

      ...mapActions(['incrementIfOdd', 'incrementAsync']),
      ...mapMutations({
      
    //由于不同的名字,使名字相对应
        increment: 'INCREMENT',
        decrement: 'DECREMENT'
      }),
    }
  }
</script>

<style scoped>


</style>