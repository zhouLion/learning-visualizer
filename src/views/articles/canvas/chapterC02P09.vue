<template>
  <div class="demo-restore">
    <h2>学习 Canvas: 绘制圆与弧</h2>
    <p>
      圆与弧是基本几何图形，在 Canvas 中，
      <code>Canvas</code>的
      <code>CanvasRenderingContext2D</code>对象提供了
      <code>arc</code>和
      <code>arcTo</code>这两个 API，供我们绘制圆弧。
    </p>
    <p>
      先来看看
      <code>arc</code>方法
    </p>

    <details>
      <summary class="x">
        <code>arc(x, y, radius, startRad, endRad, [anticlockwise]);</code>
        其中的参数如下：
      </summary>
      <ul>
        <li>
          <code>x</code>：圆心的 x 坐标
        </li>
        <li>
          <code>y</code>：圆心的 y 坐标
        </li>
        <li>
          <code>radius</code>：圆的半径
        </li>
        <li>
          <code>startRad</code>：开始的弧度
        </li>
        <li>
          <code>endRad</code>：结束的弧度
        </li>
        <li>
          <code>anticlockwise</code>：默认为 false，表示逆时针绘制，设置为 true 则表示顺时针绘制
        </li>
      </ul>
    </details>

    <form @change="changeFormHandler">
      <div class="input-group">
        <span class="input-group-addon">x</span>
        <input
          type="number"
          v-model="arcArguments.x"
          class="form-control"
          placeholder="请输入圆心的 x 坐标"
        />
      </div>
      <div class="input-group">
        <span class="input-group-addon">y</span>
        <input
          type="number"
          v-model="arcArguments.y"
          class="form-control"
          placeholder="请输入圆心的 y 坐标"
        />
      </div>
      <div class="input-group">
        <span class="input-group-addon">radius</span>
        <input
          type="number"
          v-model="arcArguments.radius"
          class="form-control"
          placeholder="请输入圆弧半径"
        />
      </div>
      <div class="input-group">
        <span class="input-group-addon">startRad</span>
        <input
          type="number"
          v-model="arcArguments.startRad"
          class="form-control"
          step="0.1"
          placeholder="请输入圆弧的起始弧度"
        />
        <span>PI</span>
      </div>
      <div class="input-group">
        <span class="input-group-addon">endRad</span>
        <input
          type="number"
          v-model="arcArguments.endRad"
          class="form-control"
          step="0.1"
          placeholder="请输入圆弧的终止弧度"
        />
        <span>PI</span>
      </div>
      <div class="input-group">
        <span class="input-group-addon">anticlockwise</span>
        <q-switch v-model="arcArguments.anticlockwise"></q-switch>
      </div>
    </form>
    <canvas width="400" height="400" ref="circleCanvas"></canvas>
  </div>
</template>
<script lang="ts">
/* eslint-disable no-param-reassign */
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      arcArguments: {
        x: 200,
        y: 200,
        radius: 100,
        startRad: 0,
        endRad: 1,
        anticlockwise: false,
      },
    };
  },
  mounted() {
    this.drawCircle();
  },
  methods: {
    changeFormHandler() {
      this.drawCircle();
    },

    drawCircle() {
      const ctx = (this.$refs.circleCanvas as HTMLCanvasElement).getContext('2d');
      if (ctx) {
        const {
          x, y, radius, startRad, endRad, anticlockwise,
        } = this.arcArguments;
        ctx.clearRect(0, 0, 400, 400);
        ctx.beginPath();
        ctx.arc(x, y, radius, startRad * Math.PI, endRad * Math.PI, anticlockwise);
        ctx.stroke();
      }
    },
  },
});
</script>

<style lang="less" scoped>
form {
  display: flex;
  justify-content: flex-start;
  input.form-control {
    border: 1px solid #bb8bef;
    width: 4em;
    height: 1.5em;
    padding: 0 0.5em;
    margin: 0.2em 1em 0 0;

    &:hover,
    &:focus {
      box-shadow: 0 0 0 2px #4a4ecc7a;
    }
  }

  span.input-group-addon {
    display: inline-block;
    padding: 0 0.5em;
    color: #8000ff;
    border-radius: 0.2em;
    background: gainsboro;
  }
}
</style>
