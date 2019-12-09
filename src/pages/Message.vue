<template>
    <div>
      <ul>
      <li v-for="(m, index) in messages" :key="m.id">
        <!-- <router-link :to="'/home/message/detail/' + m.id">{{m.title}}</router-link> -->
        
        <!-- <router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link> -->
        <router-link :to="{name: 'detail', params: {id: m.id}}">{{m.title}}</router-link>
        --<button @click="pushShow(m.id)">push查看</button>
        --<button @click="replaceShow(m.id)">replace查看</button>
      </li>
    </ul>

    <button @click="$router.back()">返回</button>

    <hr>

    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        // 初始数据
        messages: []
      }
    },

    mounted () {
      // 路由组件是在第一次请求的时候创建对象
      console.log('Message mounted()')
      // 模拟发送异步ajax请求获取消息列表数据
      setTimeout(() => {
        const messages = [
          {id: 1, title: 'message001'},
          {id: 3, title: 'message003'},
          {id: 4, title: 'message004'},
        ]

        // 更新数据
        this.messages = messages

      }, 1000);
    },

    methods: {
      pushShow (id) {
        console.log('pushShow()', this.$router)
        // 编程式路由导航(跳转)
        // this.$router.push(`/home/message/detail/${id}`)
        this.$router.push({name: 'detail', params: {id}})
      },
      replaceShow (id) {
        console.log('pushShow()', this.$router)
        // 编程式路由导航(跳转)
        // this.$router.replace(`/home/message/detail/${id}`)
        this.$router.replace({name: 'detail', params: {id}})
      },
      // tfbn
    }
  }
</script>

<style scoped>

 
</style>
