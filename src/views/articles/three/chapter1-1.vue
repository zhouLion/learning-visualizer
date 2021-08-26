<template>
  <section>
    <h2>第一节：概述</h2>
    <p>Three 是一个基于 webGL 技术</p>
    <canvas ref="canvas" width="400" height="300"></canvas>
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
