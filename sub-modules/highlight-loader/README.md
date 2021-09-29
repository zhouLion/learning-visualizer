实现一个 webpack loader，是为了将源码解析为高亮后的 html 片段

```
npm i @snoopylion/highlight-loader -D
```

## 原理
 - 输入「source」 >-> 「highlight-loader」 >-> 「hljs 解析」 >-> 「语法高亮的代码片段」 >-> 输出 JS 字符串
 @param {string} source 源码内容
- [加载器](https://webpack.docschina.org/loaders/)

## example

 ``` js
 // vue 文件在 vue-cli 项目中会被默认加载器 vue-loader + babel-loader 以及其它预先处理
 // 因此使用该加载器时需要手动声明加载器，并且用 「!!」 修饰符屏蔽前置加载器，才能生效
 const ButtonGroupText = () => import(
  '!!@snoopylion/highlight-loader!~/test/ButtonGroupTest.vue'
 );
 *```