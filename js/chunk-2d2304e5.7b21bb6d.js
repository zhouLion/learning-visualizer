(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2304e5"],{ec5f:function(s,a,n){"use strict";n.r(a),a["default"]='<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>字体<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">canvas</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;canvas&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;400&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;300&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">canvas</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> {\n  <span class="hljs-title class_">Web</span>GLRenderer,\n  <span class="hljs-title class_">Vector</span>3,\n  <span class="hljs-title class_">DirectionalLight</span>,\n  <span class="hljs-title class_">FontLoader</span>,\n  <span class="hljs-title class_">Mesh</span>,\n  <span class="hljs-title class_">TextGeometry</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;three&#x27;</span>;\n<span class="hljs-keyword">import</span> { getRelativePath } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@/utils/register-components&#x27;</span>;\n<span class="hljs-keyword">import</span> {\n  createXyzAxis, createBaseData,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;./utils/base-item&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">extend</span>({\n  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">return</span> {\n      ...<span class="hljs-title function_">createBaseData</span>(),\n    };\n  },\n  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> { scene, camera, material } = <span class="hljs-variable language_">this</span>;\n\n    <span class="hljs-keyword">const</span> renderer = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Web</span>GLRenderer({\n      <span class="hljs-attr">canvas</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">canvas</span> <span class="hljs-keyword">as</span> HTMLCanvasElement,\n    });\n    renderer.<span class="hljs-title function_">setClearColor</span>(<span class="hljs-number">0x000000</span>);\n\n    camera.<span class="hljs-property">position</span>.<span class="hljs-title function_">set</span>(<span class="hljs-number">5</span>, <span class="hljs-number">5</span>, <span class="hljs-number">20</span>);\n    camera.<span class="hljs-title function_">lookAt</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Vector</span>3(<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>));\n    scene.<span class="hljs-title function_">add</span>(camera);\n\n    <span class="hljs-keyword">const</span> { xAxis, yAxis, zAxis } = <span class="hljs-title function_">createXyzAxis</span>();\n    scene.<span class="hljs-title function_">add</span>(xAxis);\n    scene.<span class="hljs-title function_">add</span>(yAxis);\n    scene.<span class="hljs-title function_">add</span>(zAxis);\n\n    <span class="hljs-comment">// 添加场景光源</span>\n    <span class="hljs-keyword">const</span> light = <span class="hljs-keyword">new</span> <span class="hljs-title class_">DirectionalLight</span>(<span class="hljs-number">0xffffff</span>);\n    light.<span class="hljs-property">position</span>.<span class="hljs-title function_">set</span>(-<span class="hljs-number">5</span>, <span class="hljs-number">10</span>, <span class="hljs-number">5</span>);\n    scene.<span class="hljs-title function_">add</span>(light);\n\n    <span class="hljs-comment">// 加载字体</span>\n    <span class="hljs-keyword">const</span> loader = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FontLoader</span>();\n\n    loader.<span class="hljs-title function_">load</span>(<span class="hljs-title function_">getRelativePath</span>(<span class="hljs-string">&#x27;/lib/three/helvetiker_regular.typeface.json&#x27;</span>), <span class="hljs-function">(<span class="hljs-params">font</span>) =&gt;</span> {\n      <span class="hljs-keyword">const</span> mesh = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Mesh</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">TextGeometry</span>(<span class="hljs-string">&#x27;Hello&#x27;</span>, {\n        font,\n        <span class="hljs-attr">size</span>: <span class="hljs-number">1</span>,\n        <span class="hljs-attr">height</span>: <span class="hljs-number">1</span>,\n      }), material);\n      scene.<span class="hljs-title function_">add</span>(mesh);\n\n      renderer.<span class="hljs-title function_">render</span>(scene, camera);\n    });\n  },\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n'}}]);
//# sourceMappingURL=chunk-2d2304e5.7b21bb6d.js.map