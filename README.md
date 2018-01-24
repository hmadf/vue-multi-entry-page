********************************************************************************
毛豆商城vue多页面 webpack2+vue2.0

``` bash
# 安装依赖
npm install

# 调试环境 8090
npm run dev

# 生产环境
npm run build

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
                |---main.js
                |---listApp.vue
        |---vuxDemo    #一级目录
            |---button    #二级目录
                |-components/  (非必须)
                |-images/  (非必须)
                |-css/ (非必须)
                |-js/  (非必须)		
                |---index.html(必须)
                |---main.js(必须)
                |---App.vue(非必须,建议写在项目根目录)
        |---aaa
            |-components/  (非必须)
            |-images/  (非必须)
            |-css/ (非必须)
            |-js/  (非必须)
            |-App.vue  (非必须)
            |-index.html   (必须)
            |-main.js (必须)
    |---assets    #资源
        |---css/common.css  #base.css
        |---js/common.js    #自己定义的全局通用事件 工具类函数
    |---components 公共组件
         |---Button.vue  按钮组件
         |---hb-head.vue  head组件
        请严格遵循以上结构！入口JS HTML 文件名称请严格遵守
......

```
