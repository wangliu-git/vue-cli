const path = require('path')//node模块,去解析路径信息
const HtmlWebpackPlugin = require('html-webpack-plugin')//HtmlWebpackPlugin是一个构造函数

module.exports = {
  // //模式:生产环境----配置命令后可以不写
  mode : 'prodution',

  //入口--可以是字符串或是对像--指定入口文件的路径
  entry : {
      //xxx(名字可随便写):index.js的路径
      // resolve()--解析路径
      // __dirname-代表当前文件所在路径的文件夹
    app: path.resolve(__dirname,"src/index.js")
  },

  //出口(打包生产JS)--必须是对象
  output : {

    filename: 'static/js/[name].bundle.js',//生成的文件名
    path: path.resolve(__dirname, 'dist')//生成的文件路径

  },

  //模块加载器
  module : {
    //loder的配置规则
    rules : [

    ]
  },


  //插件--打包HTML  目的是自动引入打包生产的JS
  plugins : [//可以配多个插件
    new HtmlWebpackPlugin({//配置的插件是每一个构造函数的实例,创建实例的时候需要指定一个配置选项的对象
      template: 'index.html',//将哪个页面作为模板页面打包
      filename: 'index.html',//生成的页面(在Output指定的path下)
    })
  ],

  //配置开发服务器
  devServer: {
    open: true, // 自动打开浏览器
    quiet: true, // 不做太多日志输出
  },

//配置开启source-map调试---出了问题会知道是哪个
  devtool: 'cheap-module-eval-source-map',
}