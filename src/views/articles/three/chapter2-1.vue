<template>
  <section>
    <h2>第二节：相机</h2>
    <p>ThreeJS 内置了四种相机机位</p>
    <ul>
      <li>
        OrthographicCamera
        <a
          href="https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js"
          target="_blank"
        >源码</a>
      </li>
      <li>
        PerspectiveCamera
        <a
          href="https://github.com/mrdoob/three.js/blob/master/src/cameras/PerspectiveCamera.js"
          target="_blank"
        >源码</a>
      </li>
      <li>
        StereoCamera
        <a
          href="https://github.com/mrdoob/three.js/blob/master/src/cameras/StereoCamera.js"
          target="_blank"
        >源码</a>
      </li>
      <li>
        ArrayCamera
        <a
          href="https://github.com/mrdoob/three.js/blob/master/src/cameras/ArrayCamera.js"
          target="_blank"
        >源码</a>
      </li>
    </ul>
    <br />
    <h3>正摄摄影：OrthographicCamera</h3>
    <canvas ref="canvas" width="400" height="300"></canvas>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  WebGLRenderer,
  Scene,
  OrthographicCamera,
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
    const camera = new OrthographicCamera(-2, 2, 1.5, -1.5, 1, 10);
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
