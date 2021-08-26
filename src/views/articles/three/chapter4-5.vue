<template>
  <section>
    <h3>纹理贴图材质</h3>
    <p>导入图片作为纹理贴图。</p>
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
  Mesh,
  BoxGeometry,
  SphereGeometry,
  TextureLoader,
  MeshLambertMaterial,
} from 'three';
import { createBaseData } from './utils/base-item';
import { getRelativePath } from '@/utils/register-components';

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

  mounted() {
    const { camera, scene } = this;
    const renderer = new WebGLRenderer({
      canvas: this.$refs.canvas as HTMLCanvasElement,
    });
    renderer.setClearColor(0x00ff00);

    camera.position.set(25, 25, 25);
    camera.lookAt(new Vector3(0, 0, 0));
    scene.add(camera);

    const light = new PointLight(0xffffff, 1, 100);
    light.position.set(10, 15, 5);
    scene.add(light);

    const textureLoader = new TextureLoader();

    textureLoader.load(getRelativePath('/img/three/chess.png'), (texture) => {
      const material = new MeshLambertMaterial({
        map: texture,
      });

      const cube = new Mesh(new BoxGeometry(5, 5, 5), material);
      scene.add(cube);

      // const sphere = new Mesh(new SphereGeometry(4, 10, 10), material);
      // scene.add(sphere);

      renderer.render(scene, camera);
    });
  },
});
</script>
