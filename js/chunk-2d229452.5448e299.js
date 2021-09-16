(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229452"],{dd73:function(s,a,n){"use strict";n.r(a),a["default"]='<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo-restore&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>学习 Canvas: Save 与 Restore<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Canvas中状态和非状态<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>在Canvas环境中绘图时，可以利用所谓的绘图堆栈状态。每个状态随时存储 Canvas 上下文数据。下面是存储在状态堆栈的数据列表。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ol</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>\n        当前的坐标变换（变换矩阵）信息，比如旋转或平移时使用的\n        <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>rotate()<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span> 和\n        <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>setTransform()<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span> 方法\n      <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>当前剪贴区域<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>图形上下文对象（CanvasRenderingContext2D）的当前属性值<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">ol</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">caption</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>CanvasRenderingContext2D<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span> 的当前属性值主要包括\n    <span class="hljs-tag">&lt;/<span class="hljs-name">caption</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">table</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">colgroup</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">col</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;35%&quot;</span> /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">col</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;55%&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">colgroup</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;col in columns&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;col&quot;</span>&gt;</span>{{ col }}<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(row, index) in rows&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ row[0] }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ row[1] }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n      其中\n      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>save()<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>\n      方法会将Canvas的状态推到Canvas绘图的堆栈中，然后通过\n      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>restore()<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>\n      方法从Canvas绘图的堆栈中取出\n      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>save()<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>\n      保存的状态。\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">canvas</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;400&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;400&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;canvas&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">canvas</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">\n<span class="hljs-comment">/* eslint-disable no-param-reassign */</span>\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">RESTORABLE_ATTRIBUTES</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./consts&#x27;</span>;\n\n<span class="hljs-keyword">const</span> [columns, ...rows] = <span class="hljs-variable constant_">RESTORABLE_ATTRIBUTES</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">extend</span>({\n  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">canvas</span>: <span class="hljs-literal">null</span> <span class="hljs-keyword">as</span> HTMLCanvasElement | <span class="hljs-literal">null</span>,\n      <span class="hljs-attr">ctx</span>: <span class="hljs-literal">null</span> <span class="hljs-keyword">as</span> <span class="hljs-title class_">CanvasRenderingContext</span>2D | <span class="hljs-literal">null</span>,\n      columns,\n      rows,\n    };\n  },\n  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> { ctx, canvas } = <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">getCanvasAndContext</span>();\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">autoSetCanvasSize</span>(canvas);\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">drawScreen</span>(ctx);\n  },\n  <span class="hljs-attr">methods</span>: {\n    <span class="hljs-title function_">getCanvasAndContext</span>(<span class="hljs-params"></span>) {\n      <span class="hljs-keyword">const</span> canvas = <span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">canvas</span> <span class="hljs-keyword">as</span> HTMLCanvasElement;\n      <span class="hljs-keyword">const</span> ctx = canvas.<span class="hljs-title function_">getContext</span>(<span class="hljs-string">&#x27;2d&#x27;</span>);\n      <span class="hljs-keyword">if</span> (!ctx) {\n        <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Error</span>(<span class="hljs-string">&#x27;浏览器太非主流了吧&#x27;</span>);\n      }\n      <span class="hljs-variable language_">this</span>.<span class="hljs-property">canvas</span> = canvas;\n      <span class="hljs-variable language_">this</span>.<span class="hljs-property">ctx</span> = ctx;\n      <span class="hljs-keyword">return</span> { canvas, ctx };\n    },\n\n    <span class="hljs-title function_">autoSetCanvasSize</span>(<span class="hljs-params">canvas: HTMLCanvasElement</span>) {\n      <span class="hljs-keyword">function</span> <span class="hljs-title function_">setCanvasSize</span>(<span class="hljs-params"></span>) {\n        <span class="hljs-keyword">const</span> defaultPadding = <span class="hljs-number">40</span>;\n        <span class="hljs-keyword">const</span> pageWidth = <span class="hljs-variable language_">document</span>.<span class="hljs-property">documentElement</span>.<span class="hljs-property">clientWidth</span> - defaultPadding;\n        <span class="hljs-comment">// const pageHeight = document.documentElement.clientHeight;</span>\n        canvas.<span class="hljs-property">width</span> = pageWidth;\n        <span class="hljs-comment">// canvas.height = pageHeight;</span>\n      }\n      <span class="hljs-title function_">setCanvasSize</span>();\n      <span class="hljs-comment">// 改变窗口大小重新设置</span>\n      <span class="hljs-variable language_">window</span>.<span class="hljs-property">onresize</span> = <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-title function_">setCanvasSize</span>();\n      };\n    },\n\n    <span class="hljs-title function_">sleep</span>(<span class="hljs-params">ms: number = <span class="hljs-number">1000</span></span>) {\n      <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function"><span class="hljs-params">resolve</span> =&gt;</span> <span class="hljs-built_in">setTimeout</span>(resolve, ms));\n    },\n\n    <span class="hljs-keyword">async</span> <span class="hljs-title function_">drawScreen</span>(<span class="hljs-params">ctx: CanvasRenderingContext2D</span>) {\n      ctx.<span class="hljs-property">fillStyle</span> = <span class="hljs-string">&#x27;#FA6900&#x27;</span>;\n      ctx.<span class="hljs-property">shadowOffsetX</span> = <span class="hljs-number">5</span>;\n      ctx.<span class="hljs-property">shadowOffsetY</span> = <span class="hljs-number">5</span>;\n      ctx.<span class="hljs-property">shadowBlur</span> = <span class="hljs-number">4</span>;\n      ctx.<span class="hljs-property">shadowColor</span> = <span class="hljs-string">&#x27;rgba(204, 204, 204, 0.5)&#x27;</span>;\n      ctx.<span class="hljs-title function_">fillRect</span>(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">15</span>, <span class="hljs-number">150</span>);\n      ctx.<span class="hljs-title function_">save</span>(); <span class="hljs-comment">// 将第一个状态推到堆栈中</span>\n\n      <span class="hljs-keyword">await</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">sleep</span>();\n\n      ctx.<span class="hljs-property">fillStyle</span> = <span class="hljs-string">&#x27;#f36&#x27;</span>;\n      ctx.<span class="hljs-property">shadowOffsetX</span> = <span class="hljs-number">10</span>;\n      ctx.<span class="hljs-property">shadowOffsetY</span> = <span class="hljs-number">10</span>;\n      ctx.<span class="hljs-property">shadowBlur</span> = <span class="hljs-number">4</span>;\n      ctx.<span class="hljs-property">shadowColor</span> = <span class="hljs-string">&#x27;rgba(204, 204, 204, 0.5)&#x27;</span>;\n      ctx.<span class="hljs-title function_">fillRect</span>(<span class="hljs-number">50</span>, <span class="hljs-number">10</span>, <span class="hljs-number">30</span>, <span class="hljs-number">150</span>);\n      ctx.<span class="hljs-title function_">save</span>(); <span class="hljs-comment">// 将第二个状态推到堆栈中</span>\n\n      <span class="hljs-keyword">await</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">sleep</span>();\n\n      ctx.<span class="hljs-property">fillStyle</span> = <span class="hljs-string">&#x27;#A7DBD7&#x27;</span>;\n      ctx.<span class="hljs-property">shadowOffsetX</span> = <span class="hljs-number">15</span>;\n      ctx.<span class="hljs-property">shadowOffsetY</span> = <span class="hljs-number">15</span>;\n      ctx.<span class="hljs-property">shadowBlur</span> = <span class="hljs-number">4</span>;\n      ctx.<span class="hljs-property">shadowColor</span> = <span class="hljs-string">&#x27;rgba(204, 204, 204, 0.5)&#x27;</span>;\n      ctx.<span class="hljs-title function_">fillRect</span>(<span class="hljs-number">110</span>, <span class="hljs-number">10</span>, <span class="hljs-number">45</span>, <span class="hljs-number">150</span>);\n      ctx.<span class="hljs-title function_">save</span>(); <span class="hljs-comment">// 将第三个状态推到堆栈中</span>\n\n      <span class="hljs-keyword">await</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">sleep</span>();\n\n      ctx.<span class="hljs-title function_">restore</span>(); <span class="hljs-comment">// 取出堆栈3（第三个状态）</span>\n      ctx.<span class="hljs-title function_">beginPath</span>();\n      ctx.<span class="hljs-title function_">arc</span>(<span class="hljs-number">225</span>, <span class="hljs-number">75</span>, <span class="hljs-number">22</span>, <span class="hljs-number">0</span>, <span class="hljs-title class_">Math</span>.<span class="hljs-property">PI</span> * <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>);\n      ctx.<span class="hljs-title function_">closePath</span>();\n      ctx.<span class="hljs-title function_">fill</span>();\n\n      <span class="hljs-keyword">await</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">sleep</span>();\n\n      ctx.<span class="hljs-title function_">restore</span>(); <span class="hljs-comment">// 取出堆栈2（第二个状态）</span>\n      ctx.<span class="hljs-title function_">beginPath</span>();\n      ctx.<span class="hljs-title function_">arc</span>(<span class="hljs-number">320</span>, <span class="hljs-number">75</span>, <span class="hljs-number">15</span>, <span class="hljs-number">0</span>, <span class="hljs-title class_">Math</span>.<span class="hljs-property">PI</span> * <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>);\n      ctx.<span class="hljs-title function_">closePath</span>();\n      ctx.<span class="hljs-title function_">fill</span>();\n\n      <span class="hljs-keyword">await</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">sleep</span>();\n\n      ctx.<span class="hljs-title function_">restore</span>(); <span class="hljs-comment">// 取出堆栈1（第一个状态）</span>\n      ctx.<span class="hljs-title function_">beginPath</span>();\n      ctx.<span class="hljs-title function_">arc</span>(<span class="hljs-number">400</span>, <span class="hljs-number">75</span>, <span class="hljs-number">8</span>, <span class="hljs-number">0</span>, <span class="hljs-title class_">Math</span>.<span class="hljs-property">PI</span> * <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>);\n      ctx.<span class="hljs-title function_">closePath</span>();\n      ctx.<span class="hljs-title function_">fill</span>();\n    },\n  },\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;less&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="language-css">\n<span class="hljs-selector-class">.demo-restore</span> {\n  <span class="hljs-selector-tag">table</span> {\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;\n    <span class="hljs-attribute">border-collapse</span>: collapse;\n    <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">2em</span>;\n  }\n  <span class="hljs-selector-tag">th</span>,\n  <span class="hljs-selector-tag">td</span> {\n    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">2em</span>;\n    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid gray;\n    <span class="hljs-attribute">border-collapse</span>: collapse;\n    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">1em</span>;\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n'}}]);
//# sourceMappingURL=chunk-2d229452.5448e299.js.map