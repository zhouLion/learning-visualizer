<template>
  <div>
    <h2>Canvas学习：Canvas 绘制线段</h2>
    <p>
      在 Canvas 中，我们可以使用
      <code>moveTo()</code>、
      <code>lineTo()</code>、
      <code>stroke()</code>、
      <code>strokeRect()</code>、
      <code>strokeText()</code>、
      <code>fill()</code>、
      <code>fillRect()</code>、
      <code>fillText()</code>等方法来绘制图形。
    </p>
    <p>其中最常见也是最基础的便是线段的绘制了。</p>
    <canvas ref="canvas" width="300" height="200"></canvas>
    <h3>总结：</h3>
    <p>
      <code>moveTo()</code>、
      <code>lineTo()</code>、和
      <code>stroke()</code>可以很轻易的在Canvas中绘制出实线（线段）。
    </p>
    <p>
      画一个线段，但是它并不是真的绘制出来，而是将线段的起点和终点保存起来，当我们调用
      <code>stroke()</code>时，才真正的绘制出来。
    </p>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-param-reassign */

import Vue from 'vue';

export default Vue.extend({
  mounted() {
    const canvas = this.$refs.canvas as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      this.drawLine(ctx);
      this.drawStyledLine(ctx);
      this.drewMultiLine(ctx);
    }
  },
  methods: {
    // 绘制一条实线
    drawLine(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.lineTo(250, 50);
      ctx.stroke();
    },

    // 绘制线段的样式
    drawStyledLine(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.strokeStyle = '#ff0000';
      ctx.lineWidth = 5;
      ctx.moveTo(50, 100);
      ctx.lineTo(250, 100);
      ctx.stroke();
    },

    // 绘制多条线段
    drewMultiLine(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.moveTo(50, 150);
      ctx.strokeStyle = '#ff00ff';
      ctx.lineTo(100, 200);
      // lineTo 可以多次调用，每次调用都会新增一个端点
      ctx.lineTo(250, 150);
      ctx.stroke();
    },
  },
});
</script>
