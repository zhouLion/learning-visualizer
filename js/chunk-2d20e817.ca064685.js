(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20e817"],{b03f:function(s,n,a){"use strict";a.r(n),n["default"]='<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Canvas学习：Canvas 绘制线段<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>在 Canvas 中，我们使用路径（path）绘制图形，其中最常见也是最基础的路径便是「线段路径」了。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">canvas</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;canvas&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;300&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;400&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">canvas</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">\n<span class="hljs-comment">/* eslint-disable no-param-reassign */</span>\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">extend</span>({\n  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> canvas = <span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">canvas</span> <span class="hljs-keyword">as</span> HTMLCanvasElement;\n    <span class="hljs-keyword">const</span> ctx = canvas.<span class="hljs-title function_">getContext</span>(<span class="hljs-string">&#x27;2d&#x27;</span>);\n    <span class="hljs-keyword">if</span> (ctx) {\n      <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">drawLine</span>(ctx)\n        .<span class="hljs-title function_">drawStyledLine</span>(ctx)\n        .<span class="hljs-title function_">drawDashedLine</span>(ctx)\n        .<span class="hljs-title function_">drawLinearGridientLine</span>(ctx)\n        .<span class="hljs-title function_">drawRadialGridientLine</span>(ctx)\n        .<span class="hljs-title function_">drewMultiLine</span>(ctx);\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    <span class="hljs-title function_">drawLine</span>(<span class="hljs-params">ctx: CanvasRenderingContext2D</span>) {\n      ctx.<span class="hljs-title function_">beginPath</span>();\n      ctx.<span class="hljs-title function_">moveTo</span>(<span class="hljs-number">50</span>, <span class="hljs-number">50</span>);\n      ctx.<span class="hljs-title function_">lineTo</span>(<span class="hljs-number">250</span>, <span class="hljs-number">50</span>);\n      ctx.<span class="hljs-title function_">stroke</span>();\n      <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>;\n    },\n\n    <span class="hljs-title function_">drawStyledLine</span>(<span class="hljs-params">ctx: CanvasRenderingContext2D</span>) {\n      ctx.<span class="hljs-title function_">beginPath</span>();\n      ctx.<span class="hljs-property">strokeStyle</span> = <span class="hljs-string">&#x27;#ff0000&#x27;</span>;\n      ctx.<span class="hljs-property">lineWidth</span> = <span class="hljs-number">5</span>;\n      ctx.<span class="hljs-title function_">moveTo</span>(<span class="hljs-number">50</span>, <span class="hljs-number">100</span>);\n      ctx.<span class="hljs-title function_">lineTo</span>(<span class="hljs-number">250</span>, <span class="hljs-number">100</span>);\n      ctx.<span class="hljs-title function_">stroke</span>();\n      <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>;\n    },\n\n    <span class="hljs-title function_">drawDashedLine</span>(<span class="hljs-params">ctx: CanvasRenderingContext2D</span>) {\n      ctx.<span class="hljs-title function_">beginPath</span>();\n      ctx.<span class="hljs-title function_">setLineDash</span>([<span class="hljs-number">10</span>, <span class="hljs-number">5</span>]);\n      ctx.<span class="hljs-title function_">moveTo</span>(<span class="hljs-number">50</span>, <span class="hljs-number">150</span>);\n      ctx.<span class="hljs-title function_">lineTo</span>(<span class="hljs-number">250</span>, <span class="hljs-number">150</span>);\n      ctx.<span class="hljs-title function_">stroke</span>();\n      <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>;\n    },\n\n    <span class="hljs-title function_">drawLinearGridientLine</span>(<span class="hljs-params">ctx: CanvasRenderingContext2D</span>) {\n      ctx.<span class="hljs-title function_">beginPath</span>();\n      <span class="hljs-keyword">const</span> cavansGradient = ctx.<span class="hljs-title function_">createLinearGradient</span>(<span class="hljs-number">50</span>, <span class="hljs-number">50</span>, <span class="hljs-number">250</span>, <span class="hljs-number">50</span>);\n      cavansGradient.<span class="hljs-title function_">addColorStop</span>(<span class="hljs-number">0</span>, <span class="hljs-string">&#x27;#ff0000&#x27;</span>);\n      cavansGradient.<span class="hljs-title function_">addColorStop</span>(<span class="hljs-number">0.5</span>, <span class="hljs-string">&#x27;#00ff00&#x27;</span>);\n      cavansGradient.<span class="hljs-title function_">addColorStop</span>(<span class="hljs-number">1</span>, <span class="hljs-string">&#x27;#0000ff&#x27;</span>);\n      ctx.<span class="hljs-property">strokeStyle</span> = cavansGradient;\n      ctx.<span class="hljs-title function_">setLineDash</span>([<span class="hljs-number">0</span>]);\n      ctx.<span class="hljs-property">lineWidth</span> = <span class="hljs-number">5</span>;\n      ctx.<span class="hljs-title function_">moveTo</span>(<span class="hljs-number">50</span>, <span class="hljs-number">200</span>);\n      ctx.<span class="hljs-title function_">lineTo</span>(<span class="hljs-number">250</span>, <span class="hljs-number">200</span>);\n      ctx.<span class="hljs-title function_">stroke</span>();\n      <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>;\n    },\n\n    <span class="hljs-title function_">drawRadialGridientLine</span>(<span class="hljs-params">ctx: CanvasRenderingContext2D</span>) {\n      ctx.<span class="hljs-title function_">beginPath</span>();\n      <span class="hljs-keyword">const</span> cavansGradient = ctx.<span class="hljs-title function_">createRadialGradient</span>(<span class="hljs-number">50</span>, <span class="hljs-number">50</span>, <span class="hljs-number">0</span>, <span class="hljs-number">50</span>, <span class="hljs-number">50</span>, <span class="hljs-number">50</span>);\n      cavansGradient.<span class="hljs-title function_">addColorStop</span>(<span class="hljs-number">0</span>, <span class="hljs-string">&#x27;#ff0000&#x27;</span>);\n      cavansGradient.<span class="hljs-title function_">addColorStop</span>(<span class="hljs-number">0.5</span>, <span class="hljs-string">&#x27;#00ff00&#x27;</span>);\n      cavansGradient.<span class="hljs-title function_">addColorStop</span>(<span class="hljs-number">1</span>, <span class="hljs-string">&#x27;#0000ff&#x27;</span>);\n      ctx.<span class="hljs-property">strokeStyle</span> = cavansGradient;\n      ctx.<span class="hljs-title function_">setLineDash</span>([<span class="hljs-number">0</span>]);\n      ctx.<span class="hljs-property">lineWidth</span> = <span class="hljs-number">10</span>;\n      ctx.<span class="hljs-title function_">moveTo</span>(<span class="hljs-number">50</span>, <span class="hljs-number">250</span>);\n      ctx.<span class="hljs-title function_">lineTo</span>(<span class="hljs-number">250</span>, <span class="hljs-number">250</span>);\n      ctx.<span class="hljs-title function_">stroke</span>();\n      <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>;\n    },\n\n    <span class="hljs-title function_">drewMultiLine</span>(<span class="hljs-params">ctx: CanvasRenderingContext2D</span>) {\n      ctx.<span class="hljs-title function_">beginPath</span>();\n      ctx.<span class="hljs-title function_">moveTo</span>(<span class="hljs-number">50</span>, <span class="hljs-number">300</span>);\n      ctx.<span class="hljs-title function_">lineTo</span>(<span class="hljs-number">100</span>, <span class="hljs-number">320</span>);\n      ctx.<span class="hljs-title function_">lineTo</span>(<span class="hljs-number">250</span>, <span class="hljs-number">300</span>);\n      ctx.<span class="hljs-property">strokeStyle</span> = <span class="hljs-string">&#x27;#ff0000&#x27;</span>;\n      ctx.<span class="hljs-title function_">stroke</span>();\n      <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>;\n    },\n  },\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n'}}]);
//# sourceMappingURL=chunk-2d20e817.ca064685.js.map