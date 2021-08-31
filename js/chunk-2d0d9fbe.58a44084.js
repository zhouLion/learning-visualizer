(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d9fbe"],{"6a52":function(s,a,n){"use strict";n.r(a),a["default"]='<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>canvas - 图片处理<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>抗锯齿<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;canvas-demo-table&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">colgroup</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">col</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;33%&quot;</span> /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">col</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;33%&quot;</span> /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">col</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;33%&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">colgroup</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>图片<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>默认画布<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>抗锯齿画布<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">canvas</span>\n              @<span class="hljs-attr">mousemove</span>=<span class="hljs-string">&quot;onmousemove&quot;</span>\n              <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;canvas&quot;</span>\n              <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;canvasSize.width&quot;</span>\n              <span class="hljs-attr">:height</span>=<span class="hljs-string">&quot;canvasSize.height&quot;</span>\n            &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">canvas</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">canvas</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;defaultCanvas&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">canvas</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">canvas</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;smoothCanvas&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">canvas</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> lena <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./assets/lena.jpeg&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">extend</span>({\n  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">canvasSize</span>: {\n        <span class="hljs-attr">width</span>: <span class="hljs-number">400</span>,\n        <span class="hljs-attr">height</span>: <span class="hljs-number">400</span>,\n      },\n      <span class="hljs-attr">scale</span>: <span class="hljs-number">1</span>,\n      <span class="hljs-attr">hoverColor</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n    };\n  },\n  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> canvas = <span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">canvas</span> <span class="hljs-keyword">as</span> HTMLCanvasElement;\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">loadImgToCanvas</span>(lena, canvas);\n    <span class="hljs-comment">// 默认的画布</span>\n    <span class="hljs-keyword">const</span> defaultCanvas = <span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">defaultCanvas</span> <span class="hljs-keyword">as</span> HTMLCanvasElement;\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setCanvasSmoothingEnable</span>(defaultCanvas, <span class="hljs-literal">false</span>);\n    <span class="hljs-comment">// 要设置抗锯齿的画布</span>\n    <span class="hljs-keyword">const</span> smoothCanvas = <span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">smoothCanvas</span> <span class="hljs-keyword">as</span> HTMLCanvasElement;\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setCanvasSmoothingEnable</span>(smoothCanvas, <span class="hljs-literal">true</span>);\n  },\n  <span class="hljs-attr">methods</span>: {\n    <span class="hljs-title function_">loadImgToCanvas</span>(<span class="hljs-params">src: string, canvas: HTMLCanvasElement</span>) {\n      <span class="hljs-keyword">const</span> img = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Image</span>();\n      <span class="hljs-keyword">const</span> { width, height } = <span class="hljs-variable language_">this</span>.<span class="hljs-property">canvasSize</span>;\n      img.<span class="hljs-property">src</span> = src;\n      img.<span class="hljs-property">width</span> = width;\n      img.<span class="hljs-property">height</span> = height;\n      img.<span class="hljs-property">crossOrigin</span> = <span class="hljs-string">&#x27;cors&#x27;</span>;\n      img.<span class="hljs-property">onload</span> = <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-keyword">const</span> ctx = canvas.<span class="hljs-title function_">getContext</span>(<span class="hljs-string">&#x27;2d&#x27;</span>);\n        <span class="hljs-keyword">if</span> (ctx) {\n          ctx.<span class="hljs-title function_">drawImage</span>(img, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, width, height);\n        }\n      };\n      img.<span class="hljs-property">onerror</span> = <span class="hljs-function"><span class="hljs-params">error</span> =&gt;</span> <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(error);\n    },\n\n    <span class="hljs-title function_">setCanvasSmoothingEnable</span>(<span class="hljs-params">\n      canvas: HTMLCanvasElement,\n      smoothingEnable = <span class="hljs-literal">false</span>,\n    </span>) {\n      <span class="hljs-keyword">const</span> ctx = canvas.<span class="hljs-title function_">getContext</span>(<span class="hljs-string">&#x27;2d&#x27;</span>);\n      <span class="hljs-keyword">if</span> (ctx) {\n        ctx.<span class="hljs-property">imageSmoothingEnabled</span> = smoothingEnable;\n      }\n    },\n\n    <span class="hljs-title function_">onmousemove</span>(<span class="hljs-params">evt: any</span>) {\n      <span class="hljs-keyword">const</span> target = evt.<span class="hljs-property">target</span> <span class="hljs-keyword">as</span> HTMLCanvasElement;\n      <span class="hljs-comment">// 默认的画布</span>\n      <span class="hljs-keyword">const</span> defaultCanvas = <span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">defaultCanvas</span> <span class="hljs-keyword">as</span> HTMLCanvasElement;\n      <span class="hljs-comment">// 抗锯齿的画布</span>\n      <span class="hljs-keyword">const</span> smoothCanvas = <span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">smoothCanvas</span> <span class="hljs-keyword">as</span> HTMLCanvasElement;\n\n      <span class="hljs-keyword">const</span> xy = {\n        <span class="hljs-attr">x</span>: evt.<span class="hljs-property">layerX</span>,\n        <span class="hljs-attr">y</span>: evt.<span class="hljs-property">layerY</span>,\n      };\n\n      <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">drawCanvasZoom</span>(target, defaultCanvas, xy);\n      <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">drawCanvasZoom</span>(target, smoothCanvas, xy);\n    },\n\n    <span class="hljs-title function_">drawCanvasZoom</span>(<span class="hljs-params">\n      source: HTMLCanvasElement,\n      target: HTMLCanvasElement,\n      xy: { x: number; y: number },\n    </span>) {\n      <span class="hljs-keyword">const</span> sourceCtx = source.<span class="hljs-title function_">getContext</span>(<span class="hljs-string">&#x27;2d&#x27;</span>);\n      <span class="hljs-keyword">const</span> targetCtx = target.<span class="hljs-title function_">getContext</span>(<span class="hljs-string">&#x27;2d&#x27;</span>);\n      <span class="hljs-keyword">const</span> { x, y } = xy;\n      <span class="hljs-keyword">if</span> (sourceCtx &amp;&amp; targetCtx) {\n        targetCtx.<span class="hljs-title function_">drawImage</span>(\n          source,\n          <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">min</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">max</span>(<span class="hljs-number">0</span>, x - <span class="hljs-number">5</span>), source.<span class="hljs-property">width</span> - <span class="hljs-number">10</span>),\n          <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">min</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">max</span>(<span class="hljs-number">0</span>, y - <span class="hljs-number">5</span>), source.<span class="hljs-property">height</span> - <span class="hljs-number">10</span>),\n          <span class="hljs-number">10</span>, <span class="hljs-number">10</span>,\n          <span class="hljs-number">0</span>, <span class="hljs-number">0</span>,\n          <span class="hljs-number">100</span>, <span class="hljs-number">100</span>,\n        );\n      }\n    },\n  },\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;less&quot;</span>&gt;</span><span class="language-css">\n<span class="hljs-selector-class">.canvas-demo-table</span> {\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;\n  <span class="hljs-attribute">text-align</span>: center;\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n'}}]);
//# sourceMappingURL=chunk-2d0d9fbe.58a44084.js.map