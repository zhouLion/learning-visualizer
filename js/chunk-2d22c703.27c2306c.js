(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c703"],{f2de:function(s,a,n){"use strict";n.r(a),a["default"]='<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Canvas学习：Canvas 里的坐标系统<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>在 Web 页面中，或者说浏览器中有一个坐标系统。只是他和我们数学中的坐标系统不一样。Web的坐标系统的原点是在屏幕（浏览器屏幕）的左上角。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>它有两个坐标轴，x轴（水平轴）和y轴（垂直轴）。两轴的交汇点（左上角）为坐标原点(0,0)。原点沿x轴向右是正值，原点沿y轴向下是正值。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrap&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;padding&quot;</span>&gt;</span>\n        边距：\n        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>\n          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span>\n          <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;20&quot;</span>\n          <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;100&quot;</span>\n          <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;padding&quot;</span>\n          <span class="hljs-attr">v-model.number</span>=<span class="hljs-string">&quot;canvasSize.padding&quot;</span>\n          @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;drawWebCartesian&quot;</span>\n        /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrap&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;grid&quot;</span>&gt;</span>\n        网格：\n        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>\n          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span>\n          <span class="hljs-attr">:min</span>=<span class="hljs-string">&quot;10&quot;</span>\n          <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;50&quot;</span>\n          <span class="hljs-attr">v-model.number</span>=<span class="hljs-string">&quot;canvasSize.grid&quot;</span>\n          @<span class="hljs-attr">input</span>=<span class="hljs-string">&quot;drawWebCartesian&quot;</span>\n        /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">canvas</span>\n      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;border: 2px solid #8000ff; border-radius: .5em; margin: 1em 0;&quot;</span>\n      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;WebCartesian&quot;</span>\n      <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;canvasSize.width&quot;</span>\n      <span class="hljs-attr">:height</span>=<span class="hljs-string">&quot;canvasSize.height&quot;</span>\n    &gt;</span>你的设备太差了，不支持 canvas<span class="hljs-tag">&lt;/<span class="hljs-name">canvas</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">small</span>&gt;</span>Web 笛卡尔坐标系<span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">sleep</span>(<span class="hljs-params">ms: number</span>) {\n  <span class="hljs-keyword">return</span> {\n    <span class="hljs-attr">isSleep</span>: <span class="hljs-literal">false</span>,\n    <span class="hljs-title function_">stop</span>(<span class="hljs-params"></span>) {\n      <span class="hljs-variable language_">this</span>.<span class="hljs-property">isSleep</span> = <span class="hljs-literal">false</span>;\n    },\n    <span class="hljs-title function_">delay</span>(<span class="hljs-params"></span>) {\n      <span class="hljs-variable language_">this</span>.<span class="hljs-property">isSleep</span> = <span class="hljs-literal">true</span>;\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-variable language_">this</span>.<span class="hljs-property">isSleep</span> = <span class="hljs-literal">false</span>;\n      }, ms);\n    },\n  };\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">extend</span>({\n  <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;&#x27;</span>,\n  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">canvasSize</span>: {\n        <span class="hljs-attr">width</span>: <span class="hljs-number">375</span>,\n        <span class="hljs-attr">height</span>: <span class="hljs-number">400</span>,\n        <span class="hljs-attr">padding</span>: <span class="hljs-number">40</span>,\n        <span class="hljs-attr">grid</span>: <span class="hljs-number">50</span>,\n      },\n      <span class="hljs-attr">delayFn</span>: <span class="hljs-title function_">sleep</span>(<span class="hljs-number">60</span>),\n    };\n  },\n  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">drawWebCartesian</span>();\n  },\n  <span class="hljs-attr">methods</span>: {\n    <span class="hljs-keyword">async</span> <span class="hljs-title function_">drawWebCartesian</span>(<span class="hljs-params"></span>) {\n      <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">this</span>.<span class="hljs-property">delayFn</span>.<span class="hljs-property">isSleep</span>) {\n        <span class="hljs-keyword">return</span>;\n      }\n      <span class="hljs-variable language_">this</span>.<span class="hljs-property">delayFn</span>.<span class="hljs-title function_">delay</span>();\n      <span class="hljs-keyword">await</span> <span class="hljs-variable language_">this</span>.$nextTick();\n      <span class="hljs-keyword">const</span> canvas = <span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">WebCartesian</span> <span class="hljs-keyword">as</span> HTMLCanvasElement;\n      <span class="hljs-keyword">const</span> ctx = canvas.<span class="hljs-title function_">getContext</span>(<span class="hljs-string">&#x27;2d&#x27;</span>);\n      <span class="hljs-keyword">const</span> {\n        padding, width, height, grid,\n      } = <span class="hljs-variable language_">this</span>.<span class="hljs-property">canvasSize</span>;\n      <span class="hljs-keyword">const</span> point = {\n        <span class="hljs-attr">x</span>: <span class="hljs-number">0</span> + padding,\n        <span class="hljs-attr">y</span>: <span class="hljs-number">0</span> + padding,\n      };\n      <span class="hljs-keyword">if</span> (ctx) {\n        ctx.<span class="hljs-title function_">clearRect</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, width, height);\n        ctx.<span class="hljs-property">lineWidth</span> = <span class="hljs-number">1</span>;\n        ctx.<span class="hljs-property">strokeStyle</span> = <span class="hljs-string">&#x27;#000&#x27;</span>;\n        <span class="hljs-comment">// draw x axis</span>\n        ctx.<span class="hljs-title function_">beginPath</span>();\n        ctx.<span class="hljs-title function_">moveTo</span>(point.<span class="hljs-property">x</span>, point.<span class="hljs-property">y</span>);\n        ctx.<span class="hljs-title function_">lineTo</span>(width - padding, point.<span class="hljs-property">y</span>);\n        ctx.<span class="hljs-title function_">stroke</span>();\n        <span class="hljs-comment">// draw y axis</span>\n        ctx.<span class="hljs-title function_">beginPath</span>();\n        ctx.<span class="hljs-title function_">moveTo</span>(point.<span class="hljs-property">x</span>, point.<span class="hljs-property">y</span>);\n        ctx.<span class="hljs-title function_">lineTo</span>(point.<span class="hljs-property">x</span>, height - padding);\n        ctx.<span class="hljs-title function_">stroke</span>();\n        <span class="hljs-comment">// draw grid</span>\n        ctx.<span class="hljs-title function_">beginPath</span>();\n        ctx.<span class="hljs-property">lineWidth</span> = <span class="hljs-number">0.5</span>;\n        ctx.<span class="hljs-property">strokeStyle</span> = <span class="hljs-string">&#x27;#ccc&#x27;</span>;\n        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = padding; i &lt; (width - padding); i += grid) {\n          ctx.<span class="hljs-title function_">moveTo</span>(i, point.<span class="hljs-property">y</span>);\n          ctx.<span class="hljs-title function_">lineTo</span>(i, height - padding);\n          ctx.<span class="hljs-property">font</span> = <span class="hljs-string">&#x27;12px Arial&#x27;</span>;\n          ctx.<span class="hljs-property">fillStyle</span> = <span class="hljs-string">&#x27;#000&#x27;</span>;\n          ctx.<span class="hljs-title function_">fillText</span>(<span class="hljs-string">`<span class="hljs-subst">${i - padding}</span>`</span>, i, padding);\n        }\n        ctx.<span class="hljs-title function_">stroke</span>();\n\n        ctx.<span class="hljs-title function_">beginPath</span>();\n        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = padding; i &lt; (height - padding); i += grid) {\n          ctx.<span class="hljs-title function_">moveTo</span>(point.<span class="hljs-property">x</span>, i);\n          ctx.<span class="hljs-title function_">lineTo</span>(width - padding, i);\n          ctx.<span class="hljs-property">font</span> = <span class="hljs-string">&#x27;12px Arial&#x27;</span>;\n          ctx.<span class="hljs-property">fillStyle</span> = <span class="hljs-string">&#x27;#0cc&#x27;</span>;\n          ctx.<span class="hljs-title function_">fillText</span>(<span class="hljs-string">`<span class="hljs-subst">${i - padding}</span>`</span>, padding - <span class="hljs-number">20</span>, i);\n        }\n        ctx.<span class="hljs-title function_">stroke</span>();\n      }\n    },\n  },\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n'}}]);
//# sourceMappingURL=chunk-2d22c703.27c2306c.js.map