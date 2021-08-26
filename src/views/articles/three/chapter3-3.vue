<template>
  <section>
    <h3>自定义物体</h3>
    <canvas ref="canvas" width="400" height="300"></canvas>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  WebGLRenderer,
  Scene,
  OrthographicCamera,
  MeshBasicMaterial,
  Geometry,
  Vector3,
  Face3,
  Mesh,
} from 'three';
import {
  createXyzAxis, createBaseData,
} from './utils/base-item';

export default Vue.extend({
  data() {
    return {
      ...createBaseData(),
    };
  },
  methods: {
    createCustomGeometry() {
      // 初始化一个空的几何体对象
      const geometry = new Geometry();

      // 设置顶点
      // 在顶部 4 个顶点
      geometry.vertices.push(new Vector3(-1, 2, -1));
      geometry.vertices.push(new Vector3(1, 2, -1));
      geometry.vertices.push(new Vector3(1, 2, 1));
      geometry.vertices.push(new Vector3(-1, 2, 1));

      // 在底部 4 个顶点
      geometry.vertices.push(new Vector3(-2, 0, -2));
      geometry.vertices.push(new Vector3(2, 0, -2));
      geometry.vertices.push(new Vector3(2, 0, 2));
      geometry.vertices.push(new Vector3(-2, 0, 2));

      // 设置面
      // 顶部
      geometry.faces.push(new Face3(0, 1, 3));
      geometry.faces.push(new Face3(1, 2, 3));
      // 底部
      geometry.faces.push(new Face3(4, 5, 6));
      geometry.faces.push(new Face3(5, 6, 7));
      // 侧边面
      geometry.faces.push(new Face3(1, 5, 6));
      geometry.faces.push(new Face3(6, 2, 1));
      geometry.faces.push(new Face3(2, 6, 7));
      geometry.faces.push(new Face3(7, 3, 2));
      geometry.faces.push(new Face3(3, 7, 0));
      geometry.faces.push(new Face3(7, 4, 0));
      geometry.faces.push(new Face3(0, 4, 5));
      geometry.faces.push(new Face3(0, 5, 1));

      return geometry;
    },
  },
  mounted() {
    const { scene, camera, material } = this;

    const renderer = new WebGLRenderer({
      canvas: this.$refs.canvas as HTMLCanvasElement,
    });
    renderer.setClearColor(0x000000);

    camera.position.set(25, 25, 25);
    camera.lookAt(new Vector3(0, 0, 0));
    scene.add(camera);

    const { xAxis, yAxis, zAxis } = createXyzAxis();
    scene.add(xAxis);
    scene.add(yAxis);
    scene.add(zAxis);

    const geometry = this.createCustomGeometry();
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    // 渲染
    renderer.render(scene, camera);
  },
});
</script>
