<template>
  <section>
    <h3>透视摄影：PerspectiveCamera</h3>
    <canvas ref="canvas" width="400" height="300"></canvas>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
} from 'three';

export default Vue.extend({
  mounted() {
    const renderer = new WebGLRenderer({
      canvas: this.$refs.canvas as HTMLCanvasElement,
    });
    renderer.setClearColor(0x000000);
    const scene = new Scene();

    // camera
    // canvas size is 400x300
    const camera = new PerspectiveCamera(60, 400 / 300, 1, 10);
    camera.position.set(0, 0, 5);
    scene.add(camera);

    // 创建一个正方体
    const cube = new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true,
      }),
    );
    scene.add(cube);

    // render
    renderer.render(scene, camera);
  },
});
</script>
