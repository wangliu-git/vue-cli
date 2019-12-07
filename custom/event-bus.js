/* 
自定义全局事件总线对象模块
*/

(function (window) {

  const eventBus = {}

  // 定义一个回调函数的容器
  let callbackContainer = {}




  // 1). on(eventName, listener): 绑定事件监听
  eventBus.on=function (eventName,listener) {
    
    let callbacks = callbackContainer[eventName]
    
    if (!callbacks) {
      callbacks =[]
      callbackContainer[eventName] = callbacks
      
    }
      //往每一个回调对象数组里加入回调监听
      callbacks.push(listener)
      
  }



  // 2). emit(eventName, data): 分发事件
  eventBus.emit=function (eventName,data) {
    const callbacks = callbackContainer[eventName]
    
    if (callbacks) {
      callbacks.forEach(listener => {
        listener(data) 
      });
      // Object.values(callbacks).forEach(callback => {
        
        // listener(eventName,data) 
      // })
    }
  }




  // 3). off(eventName): 移除事件监听
  eventBus.off=function (eventName) {


    
    if (eventName===undefined) {
      callbackContainer = {}
    } else {
      delete callbackContainer[eventName]
    }
      
    
  }

  window.eventBus = eventBus
})(window)