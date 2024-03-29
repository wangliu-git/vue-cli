## 1. 初始化项目
    1). 生成package.json
        yarn init -y

    2). 创建入口js: src/index-----入口:xxx:index.js的路径
        console.log('Hello Webpack!')
        document.getElementById('root').innerHTML = '<h1>Hello222</h1>'

    3). 创建页面文件: index.html
        <div id="root"></div>


## 2. webpack基本使用


webpack是遵循CommonJS
ES6:export  default / import
CommonJS:module.export  /exports  ///require  引入


    1). 下载依赖包

        yarn add -D webpack webpack-cli

                    处理页面 自动引入打包文件的js/css
        yarn add -D html-webpack-plugin
      
    2). 创建webpack配置: webpack.config.js--放在根目录
        
        const path = require('path')---path模块-解析路径信息的模块
        const HtmlWebpackPlugin = require('html-webpack-plugin')

        module.exports = {
          // 模式: 生产环境
          mode: 'production',
          
          
          
          // 入口
          entry: {
            app: path.resolve(__dirname, 'src/index.js')
          },
          
          
          
          // 出口(打包生成js)
          output: {
            filename: 'static/js/[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
          },
          
          
          
          // 模块加载器
          module: {
            rules: [

            ]
          },
          
          
          // 插件
          plugins: [
            new HtmlWebpackPlugin({
              template: 'index.html',
              filename: 'index.html'
            })
          ]
        }
    
    3). 生成环境打包并运行
        配置打包命令:  "build": "webpack --mode production"
        打包项目: yarn build
        运行打包项目: serve dist

## 3. 开发环境运行
    1). 现在的问题:
        每次修改项目代码后, 必须重新打包, 重新运行
    
    2). 下载依赖包

        yarn add -D webpack-dev-server
        自动启动服务器,修改代码后自动打包刷新浏览器
    
    3). 配置开发服务器
        devServer: {
          open: true, // 自动打开浏览器
          quiet: true, // 不做太多日志输出
        },

    
    4). 配置开启source-map调试
    
        devtool: 'cheap-module-eval-source-map',

    5). 开发环境运行
        配置命令: "dev": "webpack-dev-server --mode development"
        执行命令: yarn dev

## 4. 打包处理 ES6/CSS/图片
    1). 处理ES6
        a. 下载依赖包                       核心          预设
            yarn add -D babel-loader @babel/core @babel/preset-env
        b. 配置
            {
              test: /\.js$/,
              //exclude: /(node_modules|bower_components)/,
              include: path.resolve(__dirname, 'src'),
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
    
    2). 处理CSS
        a. 下载依赖包
            yarn add -D css-loader style-loader
        b. 配置
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'], // 多个loader从右到左处理
            }

    3). 处理图片
        a. 下载依赖包
       
            yarn add -D url-loader@2.3.0 file-loader@4.3.0
        b. 配置
            {
              test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: 'static/img/[name].[hash:7].[ext]' // 相对于output.path
              }
            }
    4). 测试
        a. 添加图片: src/assets/imgs/logo.png
        b. 添加css: src/assets/css/my.css
            img {
              width: 200px;
              height: 200px;
            }
        c. index.js
            import logo from './assets/imgs/logo.png'
            import  './assets/css/my.css'

            const image = new Image()
            image.src = logo
            document.body.appendChild(image)
            document.getElementById('root').innerHTML = '<h1>Hello222</h1>'





# 自定义Vue开发环境
## 1. 搭建基本开发环境
    1). 下载依赖包
        yarn add -D webpack webpack-cli
        yarn add -D html-webpack-plugin
        yarn add -D webpack-dev-server
        yarn add -D babel-loader @babel/core @babel/preset-env
        yarn add -D css-loader style-loader
        yarn add -D url-loader@2.3.0 file-loader@4.3.0
    
    2). webpack的基本配置: webpack.config.js
        module.exports = {
          mode: 'production|development'
          entry: {

          },
          output: {

          },
          module: {
            rules: [
              
            ]
          },
          plugins: [

          ],
          devServer: {

          },
          devtool: {
          },
          resolve : {

          }

    3). 区分使用生产环境与开发环境
        使用生产环境:
            npm run build   ==> webpack
            1). 在内存中进行编译打包, 生成内存中的打包文件
            2). 保存到本地(在本地生成打包文件)   ===> 此时还不能通过浏览器来访问, 需要手动启动服务器运行
        使用开发环境
            npm run dev   ==> webpack-dev-server
            1). 在内存中进行编译打包, 生成内存中的打包文件
            2). 启动服务器, 运行内存中的打包文件(不生成本地打包文件)   ===> 可以通过浏览器虚拟路径访问


## 2. 搭建vue的环境





    0). 文档:
        https://vue-loader.vuejs.org/zh/

    1). 下载依赖包:
        yarn add vue

        <!-- 模板编译器 -->
        yarn add -D vue-loader vue-template-compiler
    
    2). 配置
        const VueLoaderPlugin = require('vue-loader/lib/plugin')

        {
          test: /\.vue$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'vue-loader'
        }

        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader'],
        }

        new VueLoaderPlugin()

        // 引入模块的解析
        resolve: {
          extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
          alias: { // 路径别名(简写方式)
            'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配
          }
        }
    
    3). 编码: 
        src/App.vue
        src/index.js


组件:
1. 注册  写模板标签
2. 在页面上渲染
3. 父组件要引入




##  解决开发环境ajax请求跨域问题
    1). 利用webpack-dev-server进行请求代理转发
        webpack-dev-server内部利用http-proxy-middle包对特定请求进行转发操作
    2). 配置:
        devServer: {
          proxy: {
            // 处理以/api开头路径的请求
            // '/api': 'http://localhost:4000'
            '/api': {
              target: 'http://localhost:4000', // 转发的目标地址
              pathRewrite: {
                '^/api' : ''  // 转发请求时去除路径前面的/api
              },
              changeOrigin: true, // 支持跨域
            }
          }
        }

##  配置async/await的编译环境

     1). 下载包
        yarn add @babel/runtime-corejs2
    2). 配置
        presets: [
          ['@babel/preset-env', {
            useBuiltIns: 'usage',
            'corejs': 2 // 处理一些新语法的实现
          }]
        ]