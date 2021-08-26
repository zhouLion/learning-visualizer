(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf8a2"],{"63c2":function(s,a,n){"use strict";n.r(a),a["default"]='<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>最简单地图<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100%; height: 50vh;&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;map&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="language-javascript">\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">Vue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">Map</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ol/Map&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">View</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ol/View&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-variable constant_">OSM</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ol/source/OSM&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">Tile</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ol/layer/Tile&#x27;</span>;\n<span class="hljs-keyword">import</span> { fromLonLat } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;ol/proj&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">extend</span>({\n  <span class="hljs-title function_">mounted</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> map = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Map</span>({\n      <span class="hljs-attr">target</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">$refs</span>.<span class="hljs-property">map</span> <span class="hljs-keyword">as</span> HTMLElement,\n      <span class="hljs-attr">layers</span>: [\n        <span class="hljs-keyword">new</span> <span class="hljs-title class_">Tile</span>({\n          <span class="hljs-attr">source</span>: <span class="hljs-keyword">new</span> <span class="hljs-title function_">OSM</span>(),\n        }),\n      ],\n      <span class="hljs-attr">view</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">View</span>({\n        <span class="hljs-attr">center</span>: <span class="hljs-title function_">fromLonLat</span>([<span class="hljs-number">112.41</span>, <span class="hljs-number">20.82</span>]),\n        <span class="hljs-attr">zoom</span>: <span class="hljs-number">7</span>,\n      }),\n    });\n  },\n});\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n'}}]);
//# sourceMappingURL=chunk-2d0cf8a2.a8555a07.js.map