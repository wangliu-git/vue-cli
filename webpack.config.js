const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  //模式:生产环境
  mode : 'prodution',

  //入口
  entry : {
      //xxx:index.js的路径
    app: path.resolve(__dirname,"src/index.js")
  },

  //出口
  output : {
    filename: 'static/js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')

  },

  //模块加载器
  module : {
    
    rules : [

    ]
  },


  //插件
  plugins : [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    })
  ],

  //配置开发服务器
  devServer: {
    open: true, // 自动打开浏览器
    quiet: true, // 不做太多日志输出
  },

//配置开启source-map调试
  devtool: 'cheap-module-eval-source-map',
}