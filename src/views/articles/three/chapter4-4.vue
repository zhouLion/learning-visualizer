<template>
  <section>
    <h3>法向材质（MeshNormalMaterial）</h3>
    <p>这不是真实世界的材质。通常使用该材质进行调试，因为它为每个平面分配随机的颜色，便于调试时候观察具体的平面。</p>
    <canvas ref="canvas" width="400" height="300"></canvas>
    <form>
      <fieldset>
        <label for>相机机位：</label>
        <label for="c4-4_camera_x">
          x：
          <input
            type="range"
            id="c4-4_camera_x"
            :min="1"
            :max="25"
            v-model="cameraPosition.x"
            @input="changeCameraPosition"
          />
        </label>
        <label for="c4-4_camera_y">
          y：
          <input
            type="range"
            id="c4-4_camera_y"
            :min="1"
            :max="25"
            v-model="cameraPosition.y"
            @input="changeCameraPosition"
          />
        </label>
        <label for="c4-4_camera_z">
          z：
          <input
            type="range"
            id="c4-4_camera_z"
            :min="1"
            :max="25"
            v-model="cameraPosition.z"
            @input="changeCameraPosition"
          />
        </label>
      </fieldset>
    </form>
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
  Mesh,
  MeshNormalMaterial,
  BoxGeometry,
} from 'three';
import { startAnimationFrame } from './utils/engine';
import { createBaseData } from './utils/base-item';

export default Vue.extend({
  data() {
    return {
      ...createBaseData(),
      cameraPosition: {
        x: 0,
        y: 0,
        z: 0,
      },
    };
  },

  methods: {
    changeCameraPosition() {
      const { camera, cameraPosition } = this;
      const { x, y, z } = cameraPosition;
      // camera.lookAt(new Vector3(x, y, z));
      camera.position.set(x, y, z);
    },
  },

  mounted() {
    const { camera, scene } = this;
    const renderer = new WebGLRenderer({
      canvas: this.$refs.canvas as HTMLCanvasElement,
    });
    renderer.setClearColor(0x000000);

    this.changeCameraPosition();
    camera.position.set(25, 25, 25);
    camera.lookAt(new Vector3(0, 0, 0));
    scene.add(camera);

    const light = new PointLight(0xffffff, 1, 100);
    light.position.set(10, 15, 5);
    scene.add(light);

    // 法向材质（MeshNormalMaterial）
    const material = new MeshNormalMaterial();

    const cube = new Mesh(new BoxGeometry(5, 5, 5), material);
    scene.add(cube);

    startAnimationFrame(renderer, scene, camera);
  },
});
</script>
