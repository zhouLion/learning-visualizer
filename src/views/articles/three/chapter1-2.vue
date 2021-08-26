<template>
  <section>
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
    this.init();
  },
  methods: {
    init() {
      const renderer = new WebGLRenderer({
        canvas: this.$refs.canvas as HTMLCanvasElement,
      });
      renderer.setClearColor(0x000000); // 黑色

      // 🎑
      const scene = new Scene();

      // 📷
      const camera = new PerspectiveCamera(45, 4 / 3, 1, 1000);
      camera.position.set(0, 0, 5);
      scene.add(camera);

      // 🈁
      const cube = new Mesh(
        new BoxGeometry(1, 2, 3),
        new MeshBasicMaterial({
          // 红色
          color: 0xff0000,
        }),
      );
      scene.add(cube);

      // render
      renderer.render(scene, camera);
    },
  },
});
</script>
