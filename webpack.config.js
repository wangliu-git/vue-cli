const path = require('path')//node模块,去解析路径信息
const VueLoaderPlugin = require('vue-loader/lib/plugin')
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
          
        //配置JS
          {
            test: /\.js$/,//匹配文件
            exclude: /node_modules/,//排除文件\
            include:[path.resolve(__dirname,'src')],//只针对哪些处理--写绝对路径--用path解析
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']//预设包--包含多个常用插件的工具
              }
            }
          },

          // 配置CSS
          {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader'],//从右向左执行的
          },

          //处理图片
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
                }
              }
            ]
          } ,

      
          // 配置VUE单文件组件
          {
            test: /\.vue$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'vue-loader'
          }
          
        ]
    },
  //插件--打包HTML  目的是自动引入打包生产的JS
  plugins:[
    //可以配多个插件
    new HtmlWebpackPlugin({//配置的插件是每一个构造函数的实例,创建实例的时候需要指定一个配置选项的对象
      template: 'index.html',//将哪个页面作为模板页面打包
      filename: 'index.html',//生成的页面(在Output指定的path下)
    }),

    new VueLoaderPlugin()
  ],

  //配置开发服务器
  devServer: {
    open: true, // 自动打开浏览器
    quiet: true, // 不做太多日志输出
  },

  // 引入模块的解析
  resolve: {
    extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
    alias: { // 路径别名(简写方式)
      'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配
    }
  },

//配置开启source-map调试---出了问题会知道是哪个
  devtool: 'cheap-module-eval-source-map',

}
