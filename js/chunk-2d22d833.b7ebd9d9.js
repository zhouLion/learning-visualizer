(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d833"],{f88c:function(s,a,n){"use strict";n.r(a),a["default"]='<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo-restore&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>学习 Canvas: 绘制圆与弧<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n      圆与弧是基本几何图形，在 Canvas 中，\n      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>Canvas<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>的\n      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>CanvasRenderingContext2D<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>对象提供了\n      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>arc<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>和\n      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>arcTo<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>这两个 API，供我们绘制圆弧。\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n      先来看看\n      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>arc<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>方法\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">details</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">summary</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>arc(x, y, radius, startRad, endRad, [anticlockwise]);<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>\n        其中的参数如下：\n      <span class="hljs-tag">&lt;/<span class="hljs-name">summary</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>x<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>：圆心的 x 坐标\n        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>y<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>：圆心的 y 坐标\n        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>radius<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>：圆的半径\n        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>startRad<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>：开始的弧度\n        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>endRad<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>：结束的弧度\n        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>anticlockwise<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>：默认为 false，表示逆时针绘制，设置为 true 则表示顺时针绘制\n        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">form</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;changeFormHandler&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input-group&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input-group-addon&quot;</span>&gt;</span>x<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>\n          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>\n          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;arcArguments.x&quot;</span>\n          <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-control&quot;</span>\n          <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入圆心的 x 坐标&quot;</span>\n        /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input-group&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input-group-addon&quot;</span>&gt;</span>y<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>\n          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>\n          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;arcArguments.y&quot;</span>\n          <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-control&quot;</span>\n          <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入圆心的 y 坐标&quot;</span>\n        /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input-group&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input-group-addon&quot;</span>&gt;</span>radius<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>\n          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>\n          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;arcArguments.radius&quot;</span>\n          <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-control&quot;</span>\n          <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入圆弧半径&quot;</span>\n        /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input-group&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input-group-addon&quot;</span>&gt;</span>startRad<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>\n          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>\n          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;arcArguments.startRad&quot;</span>\n          <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-control&quot;</span>\n          <span class="hljs-attr">step</span>=<span class="hljs-string">&quot;0.1&quot;</span>\n          <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入圆弧的起始弧度&quot;</span>\n        /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>PI<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input-group&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input-group-addon&quot;</span>&gt;</span>endRad<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">input</span>\n          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span>\n          <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;arcArguments.endRad&quot;</span>\n          <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-control&quot;</span>\n          <span class="hljs-attr">step</span>=<span class="hljs-string">&quot;0.1&quot;</span>\n          <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;请输入圆弧的终止弧度&quot;</span>\n        /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>PI<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input-group&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;input-group-addon&quot;</span>&gt;</span>anticlockwise<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">q-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;arcArguments.anticlockwise&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">q-switch</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">canvas</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;400&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;400&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;circleCanvas&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">canvas</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">\n<span class="hljs-comment">/* eslint-disable no-param-reassign */</span>\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">extend</span>({\n  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">arcArguments</span>: {\n        <span class="hljs-attr">x</span>: <span class="hljs-number">200</span>,\n        <span class="hljs-attr">y</span>: <span class="hljs-number">200</span>,\n        <span class="hljs-attr">radius</span>: <span class="hljs-number">100</span>,\n        <span class="hljs-attr">startRad</span>: <span class="hljs-number">0</span>,\n        <span class="hljs-attr">endRad</span>: <span class="hljs-number">1</span>,\n        <span class="hljs-attr">anticlockwise</span>: <span class="hljs-literal">false</span>,\n      },\n    };\n  },\n  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">drawCircle</span>();\n  },\n  <span class="hljs-attr">methods</span>: {\n    <span class="hljs-title function_">changeFormHandler</span>(<span class="hljs-params"></span>) {\n      <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">drawCircle</span>();\n    },\n\n    <span class="hljs-title function_">drawCircle</span>(<span class="hljs-params"></span>) {\n      <span class="hljs-keyword">const</span> ctx = (<span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">circleCanvas</span> <span class="hljs-keyword">as</span> HTMLCanvasElement).<span class="hljs-title function_">getContext</span>(<span class="hljs-string">&#x27;2d&#x27;</span>);\n      <span class="hljs-keyword">if</span> (ctx) {\n        <span class="hljs-keyword">const</span> {\n          x, y, radius, startRad, endRad, anticlockwise,\n        } = <span class="hljs-variable language_">this</span>.<span class="hljs-property">arcArguments</span>;\n        ctx.<span class="hljs-title function_">clearRect</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">400</span>, <span class="hljs-number">400</span>);\n        ctx.<span class="hljs-title function_">beginPath</span>();\n        ctx.<span class="hljs-title function_">arc</span>(x, y, radius, startRad * <span class="hljs-title class_">Math</span>.<span class="hljs-property">PI</span>, endRad * <span class="hljs-title class_">Math</span>.<span class="hljs-property">PI</span>, anticlockwise);\n        ctx.<span class="hljs-title function_">stroke</span>();\n      }\n    },\n  },\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;less&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="language-css">\n<span class="hljs-selector-tag">form</span> {\n  <span class="hljs-attribute">display</span>: flex;\n  <span class="hljs-attribute">justify-content</span>: flex-start;\n  <span class="hljs-selector-tag">input</span><span class="hljs-selector-class">.form-control</span> {\n    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#bb8bef</span>;\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">4em</span>;\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">1.5em</span>;\n    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">0.5em</span>;\n    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0.2em</span> <span class="hljs-number">1em</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span>;\n\n    &amp;<span class="hljs-selector-pseudo">:hover</span>,\n    &amp;<span class="hljs-selector-pseudo">:focus</span> {\n      <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">2px</span> <span class="hljs-number">#4a4ecc</span>7a;\n    }\n  }\n\n  <span class="hljs-selector-tag">span</span><span class="hljs-selector-class">.input-group-addon</span> {\n    <span class="hljs-attribute">display</span>: inline-block;\n    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">0.5em</span>;\n    <span class="hljs-attribute">color</span>: <span class="hljs-number">#8000ff</span>;\n    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">0.2em</span>;\n    <span class="hljs-attribute">background</span>: gainsboro;\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n'}}]);
//# sourceMappingURL=chunk-2d22d833.b7ebd9d9.js.map