<template>
  <section>
    <h2>第五节：光源</h2>
    <canvas ref="canvas" width="400" height="300"></canvas>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  WebGLRenderer,
  Vector3,
  PointLight,
  Mesh,
  BoxGeometry,
  TextureLoader,
  MeshLambertMaterial,
  DirectionalLight,
} from 'three';
import { createBaseData } from './utils/base-item';

export default Vue.extend({
  data() {
    const {
      camera, scene, renderer,
    } = createBaseData();
    return {
      camera,
      scene,
      renderer,
    };
  },

  mounted() {
    if (!this.renderer) {
      this.renderer = new WebGLRenderer({
        canvas: this.$refs.canvas as HTMLCanvasElement,
      });
    }
    const { camera, scene, renderer } = this;
    renderer.setClearColor(0x000000);

    camera.position.set(5, 5, 20);
    camera.lookAt(new Vector3(0, 0, 0));
    scene.add(camera);

    const material = new MeshLambertMaterial({
      color: 0xffff00,
    });
    const geometry = new BoxGeometry(1, 2, 3);
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    const light = new DirectionalLight(0xffffff);
    light.position.set(20, 10, 5);
    scene.add(light);

    // render
    renderer.render(scene, camera);
  },
});
</script>
