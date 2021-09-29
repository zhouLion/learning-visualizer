const hljs = require('highlight.js/lib/common');

/**
 * 实现一个 webpack loader，是为了将源码解析为高亮后的 html 片段
 * @description 原理
 * - 输入「source」 >-> 「highlight-loader」 >-> 「hljs 解析」 >-> 「语法高亮的代码片段」 >-> 输出 JS 字符串
 * @param {string} source 源码内容
 * @link [加载器](https://webpack.docschina.org/loaders/)
 * @example
 * ``` js
 * // vue 文件在 vue-cli 项目中会被默认加载器 vue-loader + babel-loader 以及其它预先处理
 * // 因此使用该加载器时需要手动声明加载器，并且用 「!!」 修饰符屏蔽前置加载器，才能生效
 * const ButtonGroupText = () => import(
 *  '!!@snoopylion/highlight-loader!~/test/ButtonGroupTest.vue'
 * );
 *```
 */
module.exports = function HighlightLoader(source) {
  // sourceMap 对于代码片段来说是无意义的，而且消耗性能
  this.sourceMap = false;
  // 同上
  this.hot = false;
  // 😂 暂未验证上述配置是否有效

  const { value } = hljs.highlightAuto(source);
  // 同步返回
  return `export default ${JSON.stringify(value)}`;
};

module.exports.seperable = true;
