(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d09e5"],{"696b":function(s,a,n){"use strict";n.r(a),a["default"]='<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Phong 材质（MeshPhongMaterial）<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Phong 材质是符合镜面反射物体的材质，因此对金属、镜面的表现尤为适合。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">canvas</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;canvas&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;400&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;300&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">canvas</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> {\n  <span class="hljs-title class_">Web</span>GLRenderer,\n  <span class="hljs-title class_">Scene</span>,\n  <span class="hljs-title class_">OrthographicCamera</span>,\n  <span class="hljs-title class_">Vector</span>3,\n  <span class="hljs-title class_">PointLight</span>,\n  <span class="hljs-title class_">Mesh</span>,\n  <span class="hljs-title class_">MeshPhongMaterial</span>,\n  <span class="hljs-title class_">SphereGeometry</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;three&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">extend</span>({\n  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> renderer = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Web</span>GLRenderer({\n      <span class="hljs-attr">canvas</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">canvas</span> <span class="hljs-keyword">as</span> HTMLCanvasElement,\n    });\n    renderer.<span class="hljs-title function_">setClearColor</span>(<span class="hljs-number">0x000000</span>);\n    <span class="hljs-keyword">const</span> scene = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Scene</span>();\n\n    <span class="hljs-comment">// camera</span>\n    <span class="hljs-keyword">const</span> camera = <span class="hljs-keyword">new</span> <span class="hljs-title class_">OrthographicCamera</span>(-<span class="hljs-number">5</span>, <span class="hljs-number">5</span>, <span class="hljs-number">3.75</span>, -<span class="hljs-number">3.75</span>, <span class="hljs-number">0.1</span>, <span class="hljs-number">100</span>);\n    camera.<span class="hljs-property">position</span>.<span class="hljs-title function_">set</span>(<span class="hljs-number">25</span>, <span class="hljs-number">25</span>, <span class="hljs-number">25</span>);\n    camera.<span class="hljs-title function_">lookAt</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Vector</span>3(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>));\n    scene.<span class="hljs-title function_">add</span>(camera);\n\n    <span class="hljs-comment">// light</span>\n    <span class="hljs-keyword">const</span> light = <span class="hljs-keyword">new</span> <span class="hljs-title class_">PointLight</span>(<span class="hljs-number">0xffffff</span>, <span class="hljs-number">1</span>, <span class="hljs-number">200</span>);\n    light.<span class="hljs-property">position</span>.<span class="hljs-title function_">set</span>(<span class="hljs-number">10</span>, <span class="hljs-number">15</span>, <span class="hljs-number">25</span>);\n    scene.<span class="hljs-title function_">add</span>(light);\n\n    <span class="hljs-keyword">const</span> material = <span class="hljs-keyword">new</span> <span class="hljs-title class_">MeshPhongMaterial</span>({\n      <span class="hljs-attr">color</span>: <span class="hljs-number">0xff0000</span>,\n      <span class="hljs-attr">specular</span>: <span class="hljs-number">0xffff00</span>,\n      <span class="hljs-attr">shininess</span>: <span class="hljs-number">100</span>,\n    });\n\n    <span class="hljs-keyword">const</span> sphere = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Mesh</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">SphereGeometry</span>(<span class="hljs-number">3</span>, <span class="hljs-number">20</span>, <span class="hljs-number">8</span>), material);\n    scene.<span class="hljs-title function_">add</span>(sphere);\n\n    renderer.<span class="hljs-title function_">render</span>(scene, camera);\n  },\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n'}}]);
//# sourceMappingURL=chunk-2d0d09e5.b4a01521.js.map