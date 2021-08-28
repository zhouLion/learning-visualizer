<template>
  <section>
    <h2>第一节：概述</h2>
    <p>WebGL 是基于OpenGL ES 2.0的Web标准，可以通过HTML5 Canvas元素作为DOM接口访问。</p>
    <canvas ref="canvas" width="400" height="300"></canvas>
    <p>ThreeJS 是一个基于 WebGL 封装的库。</p>
    <ol>
      <li>
        <a href="https://webglfundamentals.org/webgl/lessons/zh_cn/">WebGL 理论基础</a>
      </li>
      <li>
        <a href="https://webgl2fundamentals.org/webgl/lessons/zh_cn/">WebGL2 理论基础</a>
      </li>
      <li>
        <a href="https://threejsfundamentals.org/threejs/lessons/zh_cn/">Three.js 基础</a>
      </li>
    </ol>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  WebGLRenderer, Scene, MeshBasicMaterial,
} from 'three';
import {
  createCamera,
  createPlane,
  createTriangle,
} from './utils/base-item';

export default Vue.extend({
  mounted() {
    const renderer = new WebGLRenderer({
      canvas: this.$refs.canvas as HTMLCanvasElement,
    });
    renderer.setClearColor(0x000000);
    const scene = new Scene();

    // 白色材质
    const meterial = new MeshBasicMaterial({
      color: 0xffffff,
    });
    const camera = createCamera();
    const planeMesh = createPlane(meterial);
    const triangle = createTriangle(meterial);

    // 构建场景
    scene.add(camera);
    scene.add(planeMesh);
    scene.add(triangle);

    renderer.render(scene, camera);
  },
});
</script>
