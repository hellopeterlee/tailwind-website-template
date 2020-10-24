# tailwindcss 史上最简单用法

#### tailwindcss的使用无外乎两种用法

1. cdn引入的方式，但是：

   - You can't customize Tailwind's default theme

   - You can't use any [directives](https://www.tailwindcss.cn/docs/functions-and-directives) like `@apply`, `@variants`, etc.

   - You can't enable features like [`group-hover`](https://www.tailwindcss.cn/docs/pseudo-class-variants#group-hover)

   - You can't install third-party plugins

     

   > 这么多好用的功能都无法使用，本人是无法忍的，于是乎放弃这种用法

2. npm安装

   对于不太熟悉前端的后台开发人员来说，安装用于，配置并正式使用起来就没那么容易了。

   本人作为一条后台狗，总结一下：

   1. 首先创建你的项目目录,在项目跟目录下，先执行

      ```bash
      yarn init #初始化项目，并创建package.json
      ```

   2. 安装tailwind:

      ```
      yarn add tailwindcss
      ```

   3.  要定制tailwind,需要导出配置：

      ```
      npx tailwindcss init -full
      ```

      > 这样项目根目录会生成tailwind.conf.js文件，想要定制tailwind，就在这个文件里面做文章

   4. 安装postcss相关的包

      ```
      {
          "name": "tsl_html.v2.0.1",
          "version": "1.0.0",
          "description": "",
          "main": "index.js",
          "keywords": [],
          "author": "",
          "license": "ISC",
          "scripts": {
              "clean": "rm dist/bundle.js",
              "start": "live-server public",
              "build:tailwindcss": "npx tailwindcss build src/css/tailwindcss.css -o public/styles/tailwindcss.dist.css",
              "build:css": "postcss src/css/*.css src/css/*.scss --dir public/styles --ext .css --watch"
          },
          "dependencies": {
              "postcss": "^8.1.2",
              "postcss-cli": "^8.1.0",
              "postcss-import": "^13.0.0",
              "tailwindcss": "^1.9.5"
          },
          "devDependencies": {
              "@babel/core": "^7.12.3",
              "@babel/preset-env": "^7.12.1",
              "autoprefixer": "^9.8.6",
              "live-server": "^1.2.1",
              "parcel-bundler": "^1.12.4",
              "postcss-loader": "^4.0.4",
              "postcss-modules": "^3.2.2",
              "postcss-purgecss": "^2.0.3",
              "postcss-scss": "^3.0.2",
              "precss": "^4.0.0",
              "sass": "^1.27.0"
          }
      }
      
      ```

      

   5. 修改tailwind.conf.js后要重新编译tailwind，生成新的tailwind样式文件，需要借助编译工具

      - 就需要用到postcss工具

        ```
        npx tailwindcss build src/css/tailwindcss.css -o public/styles/tailwindcss.dist.css
        ```

        

      - 或者tailwindcss自己的命令行工具

        ```
        postcss src/css/tailwindcss.css --dir public/styles
        ```

        > 我比较习惯另外新建scss 并@apply tailwindcss的样式，感觉用postcss会跟方便一些

      

   6. postcss的相关配置：

      ```
      # postcss.config.js
      
      module.exports = {
        syntax: 'postcss-scss',
        plugins: [
          require('precss'),
          require('postcss-import'),
          require('tailwindcss'),
          require('autoprefixer')
        ]
      };
      ```

      

分别运行

```
yarn run start # 开启live-server

yarn run build:css # 开启postcss监控css和sass,并自动编译
```

修改了sass或者HTML，浏览器自动刷新，愉快的coding吧！！！