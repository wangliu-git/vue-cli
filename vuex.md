# 1. vuex是什么
    一个vue插件库
    作用: 对vue应用中组件的状态进行集中式的管理

映射函数映射到计算属性里
让一个函数名/方法名变为一个变量,加[],
将属性名变为字符串--调用tostring

#### 模板需要一个数据的来源:
  
  data
  props---监视组件标签外部
  computed--根据已有的数据产生的

# 2. vuex的核心概念
## 1). state-包含属性
   
    vuex管理的状态对象
    它应该是唯一的
    const state = {
      xxx: initValue
    }

## 2). mutations--包含方法
    
    包含多个直接更新state的方法(回调函数)的对象
    谁来触发: action/组件中 执行commit('mutation名称')
    只能包含同步的代码, 不能写异步代码
    const mutations = {
      yyy (state, {data1}) {
        // 更新state的某个属性
      }
    }
## 3). actions
    
    包含多个事件回调函数的对象
    通过执行: commit()来触发mutation的调用, 间接更新state
    谁来触发: 组件中: $store.dispatch('action名称',data1)  // 'zzz'
    可以包含异步代码(定时器, ajax)
    const actions = {
      zzz ({commit, state}, data1) {  data1 有由dispath传过来
        commit('yyy', {data1})   由mutation传
      }
    }

## 4). getters
    
    包含多个计算属性(get)的对象
    谁来读取: 组件中: $store.getters.xxx
    const getters = {
       mmm (state) {
        return ...
      }
    }

## 5). modules
    包含多个module的对象
    一个module是一个包含state/mutations/actions/getters的对象
    是将一复杂应用的vuex代码进行多模块拆分的第2种方式

## 6). store
    vuex的核心管理对象,vuex与组件通信的中间人
    读取数据的属性
        state: 包含最新状态数据的对象
        getters: 包含getter计算属性的对象
    更新数据的方法
        dispatch(): 分发调用action
        commit(): 提交调用mutation







# 3. 使用vuex
## 1). 创建并向外暴露store对象
    export default new Vuex.Store({
      state,
      mutations,
      actions,
      getters,
      modules: {
        a,
        b
      }
    })

## 2). 注册store: main.js
    import store from './store'
    new Vue({
      store
    })


## 3). 组件中通过store与vuex通信
    import {mapState, mapGetters} from 'vuex'
    export default {
      computed: (
        ...mapState(['xxx']),
        ...mapGetters(['yyy'])
      )
      methods: {
            test () {
                this.$store.dispatch('zzz', data)
                this.$store.commit('zzz', data)
            }
      }
    }









