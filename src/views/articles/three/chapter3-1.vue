<template>
  <section>
    <h2>第三节：物体</h2>
    <h3>空间几何体</h3>
    <form class="q-form">
      <div class="q-checkbox">
        <label class="q-checkbox__label" for="C5_Cube">
          立方体:
          <input type="checkbox" id="C5_Cube" @input="drawCube" />
        </label>
      </div>
      <div class="q-checkbox">
        <label class="q-checkbox__label" for="C5_Plane">
          平面:
          <input type="checkbox" id="C5_Plane" @input="drawPlane" />
        </label>
      </div>
      <div class="q-checkbox">
        <label class="q-checkbox__label" for="C5_Sphere">
          球:
          <input type="checkbox" id="C5_Sphere" @input="drawSphere" />
        </label>
      </div>
      <div class="q-checkbox">
        <label class="q-checkbox__label" for="C5_Circle">
          圆:
          <input type="checkbox" id="C5_Circle" @input="drawCircle" />
        </label>
      </div>
      <div class="q-checkbox">
        <label class="q-checkbox__label" for="C5_Cylinder">
          柱体:
          <input type="checkbox" id="C5_Cylinder" @input="drawCylinder" />
        </label>
      </div>
      <div class="q-checkbox">
        <label class="q-checkbox__label" for="C5_Tetra">
          四面体:
          <input type="checkbox" id="C5_Tetra" @input="drawTetra" />
        </label>
      </div>
      <div class="q-checkbox">
        <label class="q-checkbox__label" for="C5_Octa">
          八面体:
          <input type="checkbox" id="C5_Octa" @input="drawOcta" />
        </label>
      </div>
      <div class="q-checkbox">
        <label class="q-checkbox__label" for="C5_Icosa">
          二十面体:
          <input type="checkbox" id="C5_Icosa" @input="drawIcosa" />
        </label>
      </div>
      <div class="q-checkbox">
        <label class="q-checkbox__label" for="C5_Torus">
          环:
          <input type="checkbox" id="C5_Torus" @input="drawTorus" />
        </label>
      </div>
      <div class="q-checkbox">
        <label class="q-checkbox__label" for="C5_TorusKnot">
          节环:
          <input type="checkbox" id="C5_TorusKnot" @input="drawTorusKnot" />
        </label>
      </div>

      <div class="q-checkbox">
        <label class="q-checkbox__label" for="C5_color">
          颜色选择
          <input type="color" id="C5_color" @input="changeColor" />
        </label>
      </div>
    </form>

    <canvas ref="canvas" width="400" height="300"></canvas>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  Object3D,
  WebGLRenderer,
  Vector3,
  Color,
} from 'three';
import {
  createXyzAxis, drawCube, drawPlane,
  drawSphere, drawCircle, drawCylinder,
  drawTetra, drawOcta, drawIcosa,
  drawTorus, drawTorusKnot, createBaseData,
} from './utils/base-item';
import { startAnimationFrame } from './utils/engine';

export default Vue.extend({
  data() {
    const meshCache: Record<string, Object3D> = {};
    return {
      ...createBaseData(),
      meshCache,
    };
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

    // 启动动画帧
    startAnimationFrame(renderer, scene, camera);
  },

  methods: {
    isTrue(evt: Event) {
      // @ts-ignore
      return evt.target && evt.target.checked;
    },

    draw(key: string, factory: Function, evt: Event) {
      if (!this.meshCache[key]) {
        const mesh = factory(this.material);
        this.meshCache[key] = mesh;
      }
      const object3D = this.meshCache[key];
      if (this.isTrue(evt)) {
        this.scene.add(object3D);
      } else {
        this.scene.remove(object3D);
      }
    },

    changeColor(evt: any) {
      const color = new Color(evt.target.value);
      this.material.color = color;
    },

    drawCube(evt: Event) {
      this.draw('Cube', drawCube, evt);
    },

    drawPlane(evt: Event) {
      this.draw('Plane', drawPlane, evt);
    },

    drawSphere(evt: Event) {
      this.draw('Sphere', drawSphere, evt);
    },

    drawCircle(evt: Event) {
      this.draw('Circle', drawCircle, evt);
    },

    drawCylinder(evt: Event) {
      this.draw('Cylinder', drawCylinder, evt);
    },

    drawTetra(evt: Event) {
      this.draw('Tetra', drawTetra, evt);
    },

    drawOcta(evt: Event) {
      this.draw('Octa', drawOcta, evt);
    },

    drawIcosa(evt: Event) {
      this.draw('Icosa', drawIcosa, evt);
    },

    drawTorus(evt: Event) {
      this.draw('Torus', drawTorus, evt);
    },

    drawTorusKnot(evt: Event) {
      this.draw('TorusKnot', drawTorusKnot, evt);
    },
  },
});
</script>

<style lang="less" scoped>
  .q-form {
    display: flex;
    flex-wrap: wrap;
  }

  .q-checkbox {
    height: 32px;
    line-height: 32px;

    label.q-checkbox__label {
      margin-right: 12px;
      margin-bottom: 12px;
      border-radius: 6px;
      border: 1px solid #b39ddb;
      box-shadow: 0 0 0px 0px #d1c4e9;
    }

    label.q-checkbox__label:hover {
      cursor: pointer;
      border: 1px solid #782eff;
      box-shadow: 0 0 0px 4px #d1c4e9;
    }
  }
</style>
