<template>
  <section>
    <h3>Lambert 材质（MeshLambertMaterial）</h3>
    <p>Lambert 材质是符合 Lambert 光照模型的材质。它只考虑漫反射而忽略镜面反射的效果。真实世界中除了像镜子、金属平面外，大部分的物体都适用于漫反射材质。</p>
    <canvas ref="canvas" width="400" height="300"></canvas>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  WebGLRenderer,
  Scene,
  OrthographicCamera,
  Vector3,
  PointLight,
  MeshBasicMaterial,
  Mesh,
  MeshLambertMaterial,
  BoxGeometry,
  Color,
} from 'three';

export default Vue.extend({
  mounted() {
    const renderer = new WebGLRenderer({
      canvas: this.$refs.canvas as HTMLCanvasElement,
    });
    renderer.setClearColor(0x000000);
    const scene = new Scene();

    // camera
    const camera = new OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
    camera.position.set(25, 25, 25);
    camera.lookAt(new Vector3(0, 0, 0));
    scene.add(camera);

    // light
    const light = new PointLight(0xffffff, 1, 100);
    light.position.set(10, 15, 5);
    scene.add(light);

    const material = new MeshLambertMaterial({
      color: 0xffff00,
      // emissive: 0xff0000
    });

    const cube = new Mesh(new BoxGeometry(5, 5, 5), material);
    scene.add(cube);
    // var sphere = new Mesh(new SphereGeometry(3, 20, 8), material);
    // scene.add(sphere);

    renderer.render(scene, camera);
  },
});
</script>
