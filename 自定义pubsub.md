## PubSub的语法:
    1. token subscribe(msgName, callback): 订阅消息, 并返回一个标识token  ===> 绑定事件监听
    2. publish(msgName, data): 异步发布消息  ==>   分发事件
    3. publishSync(msgName, data): 同步发布消息
  发布会触发回调函数:
      如果函数在内部执行,按顺序执行 --- 同步
      在执行之后执行 ---- 异步

      两个数据--用对象包起来

    4. unsubscribe(flag): 根据flag取消订阅   ===>  解除事件绑定


  ## eventBus:
      1). on(eventName, listener): 绑定事件监听
      2). emit(eventName, data): 分发事件
      3). off(eventName): 移除事件监听
 

vue插件
引入后声明使用Vue.use()





