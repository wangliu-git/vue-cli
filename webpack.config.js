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
          //处理 ES6 ===>  ES5
        //配置JS
        {
          test: /\.js$/, // 用于匹配文件(对哪些文件进行处理)
          // exclude: /node_modules/,
          include: [path.resolve(__dirname, 'src')], // 只针对哪些处理
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  useBuiltIns: 'usage',
                  'corejs': 2 // 处理一些新语法的实现
                }]
              ], // 预设包: 包含多个常用插件包的一个大包
  
              plugins: [
                
                ['component', {
                  "libraryName": "mint-ui", // 针对mint-ui库实现按需引入打包
                  "style": true // 自动打包对应的css
                }]
              ]
              // Error: .plugins[0][1] must be an object, false, or undefined
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
    port: 8081,
    open: true, // 自动打开浏览器
    // quiet: true, // 不做太多日志输出
    proxy: {
      // 处理以/api开头路径的请求
      // '/api': 'http://localhost:4000'   // http://localhost:4000/api/search/users
      '/api': {
        target: 'http://localhost:4000', // 转发的目标地址
        pathRewrite: {
          '^/api' : ''  // 转发请求时去除路径前面的/api
        },
      },

      '/gh': {
        target: 'https://api.github.com', // 转发的目标地址
        pathRewrite: {
          '^/gh' : ''  // 转发请求时去除路径前面的/api
        },
        changeOrigin: true, // 支持跨域, 如果协议/主机也不相同, 必须加上
      }
    },

    historyApiFallback: true, // 任意的 404 响应都被替代为 index.html
  
  },

  // 引入模块的解析
  resolve: {
    extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
    alias: { // 路径别名(简写方式)
      'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
 
    }
  },

//配置开启source-map调试---出了问题会知道是哪个
  devtool: 'cheap-module-eval-source-map',

}
