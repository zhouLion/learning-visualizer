<template>
  <div class="demo-restore">
    <h2>学习 Canvas: 绘制矩形</h2>
    <p>在 Canvas 中，我们绘制矩形的方式有很多种</p>
    <h3>线段绘制法：</h3>
    <p>我们可以通过四条线段，通过对边平行的原理来成为一个矩形。</p>
    <canvas
      width="400"
      height="400"
      ref="rectUsingLines"
      @mousedown="mousedownHandler"
      @mousemove="mousemoveHandler"
      @mouseup="mouseupHandler"
    ></canvas>
    <hr />
    <h3>使用 Canvas 提供的 API：</h3>
    <p>由于矩形是几种非常基础的几何图形，Canvas 提供了下列几个 API，供我们绘制矩形</p>
    <ul>
      <li>
        <code>ctx.fillRect(x, y, width, height)</code>
        绘制一个填充的矩形
      </li>
      <li>
        <code>ctx.strokeRect(x, y, width, height)</code>
        绘制一个矩形的边框
      </li>
      <li>
        <code>ctx.clearRect(x, y, width, height)</code>
        绘制一个透明填充的矩形，通常该 API 是用来做橡皮擦功能
      </li>
      <li>
        <code>ctx.rect(x, y, width, height)</code>
        这是一个通用的矩形方法，它配合
        <code>ctx.fill()</code>效果等于
        <code>ctx.fillRect</code>，如果配合
        <code>ctx.stroke()</code>，就等于
        <code>ctx.strokeRect</code>。
      </li>
    </ul>
    <p>填充的矩形：</p>
    <canvas
      width="400"
      height="400"
      ref="rectUsingFillRect"
      @mousedown="mousedownHandler"
      @mousemove="mousemoveHandler"
      @mouseup="mouseupHandler"
    ></canvas>
    <hr />
    <p>边框的矩形：</p>
    <canvas
      width="400"
      height="400"
      ref="rectUsingStrokeRect"
      @mousedown="mousedownHandler"
      @mousemove="mousemoveHandler"
      @mouseup="mouseupHandler"
    ></canvas>
    <hr />
    <p>
      <code>rect()</code>组合的方式
    </p>
    <canvas
      width="400"
      height="700"
      ref="rectUsingRectAPI"
      @mousedown="mousedownHandler"
      @mousemove="mousemoveHandler"
      @mouseup="mouseupHandler"
    ></canvas>
  </div>
</template>
<script lang="ts">
/* eslint-disable no-param-reassign */
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      eraserEnabled: false,
    };
  },
  mounted() {
    this.drawAllCanvas();
  },
  methods: {
    drawAllCanvas() {
      this.drawRectUsingLines();
      this.drawRectUsingFillRect();
      this.drawRectUsingStrokeRect();
      this.drawRectUsingRectAPI();
    },
    /** 线段绘制法： */
    drawRectUsingLines() {
      const ctx = (this.$refs.rectUsingLines as HTMLCanvasElement).getContext('2d');
      if (!ctx) {
        throw new Error('Context is not empty!');
      }
      ctx.beginPath();
      // 起点
      ctx.moveTo(100, 100);
      ctx.lineTo(300, 100);
      ctx.lineTo(300, 300);
      ctx.lineTo(100, 300);
      // 最终使用 closePath() 方法, 将路径末尾点与起点连接起来
      ctx.closePath();
      ctx.stroke();
    },

    drawRectUsingFillRect() {
      const ctx = (this.$refs.rectUsingFillRect as HTMLCanvasElement).getContext('2d');
      if (!ctx) {
        throw new Error('Context is not empty!');
      }
      ctx.fillStyle = '#9f9';
      // ctx.beginPath();
      ctx.fillRect(100, 100, 200, 200);
    },

    drawRectUsingStrokeRect() {
      const ctx = (this.$refs.rectUsingStrokeRect as HTMLCanvasElement).getContext('2d');
      if (!ctx) {
        throw new Error('Context is not empty!');
      }
      ctx.strokeStyle = '#f00';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.strokeRect(100, 100, 200, 200);
    },

    drawRectUsingRectAPI() {
      const ctx = (this.$refs.rectUsingRectAPI as HTMLCanvasElement).getContext('2d');
      if (!ctx) {
        throw new Error('Context is not empty!');
      }
      ctx.fillStyle = '#9f9';
      ctx.fillRect(100, 100, 200, 200);
      ctx.strokeStyle = '#f00';
      ctx.lineWidth = 5;
      ctx.strokeRect(100, 100, 200, 200);

      ctx.rect(100, 400, 200, 200);
      ctx.fill();
      ctx.stroke();
    },

    /** 每个画布都可以擦除 */
    clearRectAsEraser(evt: MouseEvent) {
      const canvas = (evt.currentTarget as HTMLCanvasElement);
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Context is not empty!');
      }
      ctx.clearRect(evt.offsetX - 5, evt.offsetY - 5, 10, 10);
    },

    mousedownHandler(evt: MouseEvent) {
      this.eraserEnabled = true;
    },

    mousemoveHandler(evt: MouseEvent) {
      if (this.eraserEnabled) {
        this.clearRectAsEraser(evt);
      }
    },

    mouseupHandler(evt: MouseEvent) {
      this.eraserEnabled = false;
    },
  },
});
</script>

<style lang="less" scoped>
.demo-restore {
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2em;
  }
  th,
  td {
    line-height: 2em;
    border: 1px solid gray;
    border-collapse: collapse;
    padding: 0 1em;
  }
}
</style>
