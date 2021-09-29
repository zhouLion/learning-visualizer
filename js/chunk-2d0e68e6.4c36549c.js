(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e68e6"],{"98f7":function(s,a,n){"use strict";n.r(a),a["default"]='<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Canvas 基础交互：<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>1. 如何获取 canvas 上鼠标位置<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>getBoundingClientRect<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>在获取视口大小方面，是非常重要的，因为它可以适配标准盒子模型（content-box）与怪异盒子模型（border-box）之间的差异\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n      如果是标准盒子模型，也就是\n      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>box-sizing: content-box;<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>\n      元素的尺寸等于\n      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>width/height + padding + border-width<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>\n      的总和。如果\n      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>box-sizing: border-box;<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>\n      ，元素的的尺寸等于\n      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>width/height<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>。\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>border-box<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">canvas</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo--border-box&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;300&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;300&quot;</span> @<span class="hljs-attr">mousemove</span>=<span class="hljs-string">&quot;mousemoveHandler&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">canvas</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>content-box<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">canvas</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo--content-box&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;300&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;300&quot;</span> @<span class="hljs-attr">mousemove</span>=<span class="hljs-string">&quot;mousemoveHandler&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">canvas</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">hr</span> /&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>2. 关于 Canvas 的 width 和 height<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Canvas 的宽高存在三种控制方式：<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">details</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">summary</span>&gt;</span>CSS 样式：<span class="hljs-tag">&lt;/<span class="hljs-name">summary</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span>\ncanvas {\n  width: 100px;\n  height: 100px;\n}\n          <span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">details</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">summary</span>&gt;</span>通过 width 和 height 属性表示：<span class="hljs-tag">&lt;/<span class="hljs-name">summary</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span><span class="hljs-symbol">&amp;lt;</span>canvas width=&quot;100&quot; height=&quot;100&quot;<span class="hljs-symbol">&amp;gt;</span><span class="hljs-symbol">&amp;lt;</span>/canvas<span class="hljs-symbol">&amp;gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>单位默认为 px，不接受百分比单位。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n            额外的，css 的\n            <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>box-sizing<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span> 属性不会影响画布可用于绘制区域的大小。\n          <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">details</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">summary</span>&gt;</span>默认宽高：<span class="hljs-tag">&lt;/<span class="hljs-name">summary</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>canvas 如果既不通过 css 样式，又不通过自身元素 width、height 属性指定其宽和高的话，那么它的默认宽和高分别为：300 和 150<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> throttle <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;lodash/throttle&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">extend</span>({\n  <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;chapterC0401&#x27;</span>,\n  <span class="hljs-attr">methods</span>: {\n    <span class="hljs-attr">mousemoveHandler</span>: <span class="hljs-title function_">throttle</span>(<span class="hljs-function">(<span class="hljs-params">e: MouseEvent</span>) =&gt;</span> {\n      <span class="hljs-keyword">const</span> canvas = e.<span class="hljs-property">target</span> <span class="hljs-keyword">as</span> HTMLCanvasElement;\n      <span class="hljs-keyword">const</span> ctx = canvas.<span class="hljs-title function_">getContext</span>(<span class="hljs-string">&#x27;2d&#x27;</span>);\n      <span class="hljs-keyword">if</span> (ctx) {\n        <span class="hljs-keyword">const</span> cRect = canvas.<span class="hljs-title function_">getBoundingClientRect</span>();\n        <span class="hljs-keyword">const</span> mouseX = <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(e.<span class="hljs-property">clientX</span> - cRect.<span class="hljs-property">left</span>);\n        <span class="hljs-keyword">const</span> mouseY = <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(e.<span class="hljs-property">clientY</span> - cRect.<span class="hljs-property">top</span>);\n        ctx.<span class="hljs-property">fillStyle</span> = <span class="hljs-string">&#x27;#ff0000&#x27;</span>;\n        ctx.<span class="hljs-property">font</span> = <span class="hljs-string">&#x27;20px Arial&#x27;</span>;\n        ctx.<span class="hljs-title function_">clearRect</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, canvas.<span class="hljs-property">width</span>, canvas.<span class="hljs-property">height</span>);\n        ctx.<span class="hljs-title function_">fillText</span>(<span class="hljs-string">`x: <span class="hljs-subst">${mouseX}</span>, y: <span class="hljs-subst">${mouseY}</span>`</span>, <span class="hljs-number">10</span>, <span class="hljs-number">20</span>);\n        ctx.<span class="hljs-title function_">fillRect</span>(mouseX, mouseY, <span class="hljs-number">5</span>, <span class="hljs-number">5</span>);\n      }\n    }, <span class="hljs-number">50</span>),\n  },\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span> <span class="hljs-attr">less</span>&gt;</span><span class="language-css">\n<span class="hljs-selector-class">.demo--border-box</span> {\n  <span class="hljs-attribute">box-sizing</span>: border-box;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">4px</span> solid <span class="hljs-number">#ccc</span>;\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">4px</span>;\n}\n\n<span class="hljs-selector-class">.demo--content-box</span> {\n  <span class="hljs-attribute">box-sizing</span>: content-box;\n  <span class="hljs-attribute">border</span>: <span class="hljs-number">4px</span> solid <span class="hljs-number">#ccc</span>;\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">4px</span>;\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n'}}]);
//# sourceMappingURL=chunk-2d0e68e6.4c36549c.js.map