********************************************************************************
vue-multi-entry-page webpack2+vue2.0

这里默认是移动版 使用了  require('postcss-px2rem') 在 build/veu-loader.conf.js
配合 assets/js/lib/Lib 里面引入的waprem.js  在css 中 以设计图 750 为标准 CSS 里面 100px 就是设计图的100pX 会自动转换成rem

``` bash
# 安装依赖
npm install

# 调试环境 8090
npm run dev
# 测试环境
npm  run staging

# 生产环境
npm run build

#单测
npm run unit 
```
本地默认访问端口为8090，需要更改的童鞋请到项目目录文件`config/index.js`修改。

## 目录结构
```
webpack
|---build(webpack打包配置)
|---src (源代码目录)
    |---apps    #各个页面模块，模块名自定义！
        |---router  #一级目录
            |---details    #二级目录
                |---addApp.vue
                |---index.html
                |---index.js
                |---listApp.vue
        |---Demo    #一级目录
            |---detail    #二级目录
                |-components/  (非必须)
                |-images/  (非必须)
                |-css/ (非必须)
                |-js/  (非必须)		
                |---index.html(必须名字必须index)
                |---index.js(必须名字必须index)
                |---App.vue(必须,建议写在项目根目录,建议命名App.vue)
        |---vuex #一级目录
            |-components/  (非必须)
            |-images/  (非必须)
            |-css/ (非必须)
            |-js/  (非必须)
            |-App.vue  (必须)
            |-index.html   (必须)
            |-index.js (必须)
    |---assets    #资源
        |---css/common.css  #base.css
        |---js
            |-lib/  
            |-util/  一些工具函数 rem.JS 埋点 api 等
           
    |---components 公共组件
         |---hello.vue  #测试用例
        请严格遵循以上结构！入口JS HTML 文件名称请严格遵守
......

```
