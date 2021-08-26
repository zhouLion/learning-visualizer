<template>
  <section>
    <h3>字体</h3>
    <canvas ref="canvas" width="400" height="300"></canvas>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  WebGLRenderer,
  Vector3,
  DirectionalLight,
  FontLoader,
  Mesh,
  TextGeometry,
} from 'three';
import { getRelativePath } from '@/utils/register-components';
import {
  createXyzAxis, createBaseData,
} from './utils/base-item';

export default Vue.extend({
  data() {
    return {
      ...createBaseData(),
    };
  },
  mounted() {
    const { scene, camera, material } = this;

    const renderer = new WebGLRenderer({
      canvas: this.$refs.canvas as HTMLCanvasElement,
    });
    renderer.setClearColor(0x000000);

    camera.position.set(5, 5, 20);
    camera.lookAt(new Vector3(1, 0, 0));
    scene.add(camera);

    const { xAxis, yAxis, zAxis } = createXyzAxis();
    scene.add(xAxis);
    scene.add(yAxis);
    scene.add(zAxis);

    // 添加场景光源
    const light = new DirectionalLight(0xffffff);
    light.position.set(-5, 10, 5);
    scene.add(light);

    // 加载字体
    const loader = new FontLoader();

    loader.load(getRelativePath('/lib/three/helvetiker_regular.typeface.json'), (font) => {
      const mesh = new Mesh(new TextGeometry('Hello', {
        font,
        size: 1,
        height: 1,
      }), material);
      scene.add(mesh);

      renderer.render(scene, camera);
    });
  },
});
</script>
