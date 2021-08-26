<template>
  <section>
    <h2>第四章：材质（Material）</h2>
    <p>材质是独立于物体顶点信息之外的渲染效果相关的属性。通过设置材质可以改变物体的颜色、纹理贴图和光照模式。</p>
    <h3>基本材质（MeshBasicMaterial）</h3>
    <p>使用基本材质渲染后的物体的颜色始终为该材质的颜色，不会因光照而改变物体的颜色、明暗、阴影效果。</p>
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
  BoxGeometry,
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

    const material = new MeshBasicMaterial({
      color: 0xffff00,
      opacity: 0.75,
    });

    const cube = new Mesh(new BoxGeometry(5, 5, 5), material);
    scene.add(cube);

    renderer.render(scene, camera);
  },
});
</script>
