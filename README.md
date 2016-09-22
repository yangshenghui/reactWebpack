## react-router-webpack
* react router webpack 前端项目开法和构建，包含按需加载页面、webpack多个入口配置、多个html打包压缩等

###可以直接访问dist目录下的页面

##将项目clone到本地
      npm install         //将用到的依赖包下载下来
      npm run build       //运行即可在dist文件可以访问对应的页面查看效果

##目录结构说明：
* dist            //是编译好的文件发布时可以直接将dist里面的文件放到服务器
* src             //是项目的源码
* .babelrc        //是配置语法转换 详情请参考官方文档 http://babeldev.dan.cx/docs/usage/babelrc/
* .gitignore             //可以将不必要的文件忽略不提交
* package.json           //包含各种npm安装所需的模块以及项目的配置信息

##环境说明：
* 安装node.js  官网地址：https://nodejs.org/en/
* cmd命令查看版本是否安装成功#：node -v

##需要掌握的技术：
* 具备es6的编写思想，可以参考阮一峰老师出的文档 http://es6.ruanyifeng.com/#docs/intro
* 了解前端模块化和AMD、CMD、commonjs之间的不同规范性及构建方式，方便更深入的学习webpack的构建及模块化
   * webpack官网：http://webpack.github.io/
     * webpack+React参考文档：https://fakefish.github.io/react-webpack-cookbook/

##安装webpack
项目中：             npm install webpack --save-dev       //--save-dev 说明安装到package.json配置中devDependencies{}本地
全局中：              npm install webpack -g
##安装react
      npm install react --save-dev
      npm install react-router --save-dev
      npm install react-dom --save-dev
