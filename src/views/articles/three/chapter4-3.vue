<template>
  <section>
    <h3>Phong 材质（MeshPhongMaterial）</h3>
    <p>Phong 材质是符合镜面反射物体的材质，因此对金属、镜面的表现尤为适合。</p>
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
  MeshPhongMaterial,
  SphereGeometry,
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
    const light = new PointLight(0xffffff, 1, 200);
    light.position.set(10, 15, 25);
    scene.add(light);

    const material = new MeshPhongMaterial({
      color: 0xff0000,
      specular: 0xffff00,
      shininess: 100,
    });

    const sphere = new Mesh(new SphereGeometry(3, 20, 8), material);
    scene.add(sphere);

    renderer.render(scene, camera);
  },
});
</script>
