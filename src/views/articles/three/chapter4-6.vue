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
  Vector3,
  PointLight,
  Mesh,
  BoxGeometry,
  TextureLoader,
  MeshBasicMaterial,
  MeshLambertMaterial,
  PlaneGeometry,
  MeshPhongMaterial,
  Material,
} from 'three';
import { createBaseData } from './utils/base-item';
import { getRelativePath } from '@/utils/register-components';

export default Vue.extend({
  data() {
    const {
      camera, scene, renderer,
    } = createBaseData();
    return {
      camera,
      scene,
      renderer,
      materials: [] as Array<Material>,
    };
  },

  mounted() {
    if (!this.renderer) {
      this.renderer = new WebGLRenderer({
        canvas: this.$refs.canvas as HTMLCanvasElement,
      });
    }
    const { camera, scene, renderer } = this;
    const textureLoader = new TextureLoader();

    camera.position.set(5, 5, 5);
    camera.lookAt(new Vector3(0, 0, 0));
    scene.add(camera);

    // light
    const light = new PointLight(0x0ff4ff, 1, 1000);
    light.position.set(10, 15, 20);
    scene.add(light);

    // MeshBasicMaterial 对光源无感
    this.materials = Array(6).fill('').map((_, i) => new MeshBasicMaterial({
      map: textureLoader.load(getRelativePath(`/img/three/${i}.png`), () => {
        renderer.render(scene, camera);
      }),
    }));

    const box = new BoxGeometry(5, 5, 5);
    const cube = new Mesh(box, this.materials);

    scene.add(cube);
    renderer.render(scene, camera);
  },
});
</script>
