<template>
  <div>
    <h2>Canvas学习：Canvas 绘制线段</h2>
    <p>在 Canvas 中，我们使用路径（path）绘制图形，其中最常见也是最基础的路径便是「线段路径」了。</p>
    <canvas ref="canvas" width="300" height="400"></canvas>
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
      this.drawLine(ctx)
        .drawStyledLine(ctx)
        .drawDashedLine(ctx)
        .drawLinearGridientLine(ctx)
        .drawRadialGridientLine(ctx)
        .drewMultiLine(ctx);
    }
  },
  methods: {
    drawLine(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.lineTo(250, 50);
      ctx.stroke();
      return this;
    },

    drawStyledLine(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.strokeStyle = '#ff0000';
      ctx.lineWidth = 5;
      ctx.moveTo(50, 100);
      ctx.lineTo(250, 100);
      ctx.stroke();
      return this;
    },

    drawDashedLine(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.setLineDash([10, 5]);
      ctx.moveTo(50, 150);
      ctx.lineTo(250, 150);
      ctx.stroke();
      return this;
    },

    drawLinearGridientLine(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      const cavansGradient = ctx.createLinearGradient(50, 50, 250, 50);
      cavansGradient.addColorStop(0, '#ff0000');
      cavansGradient.addColorStop(0.5, '#00ff00');
      cavansGradient.addColorStop(1, '#0000ff');
      ctx.strokeStyle = cavansGradient;
      ctx.setLineDash([0]);
      ctx.lineWidth = 5;
      ctx.moveTo(50, 200);
      ctx.lineTo(250, 200);
      ctx.stroke();
      return this;
    },

    drawRadialGridientLine(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      const cavansGradient = ctx.createRadialGradient(50, 50, 0, 50, 50, 50);
      cavansGradient.addColorStop(0, '#ff0000');
      cavansGradient.addColorStop(0.5, '#00ff00');
      cavansGradient.addColorStop(1, '#0000ff');
      ctx.strokeStyle = cavansGradient;
      ctx.setLineDash([0]);
      ctx.lineWidth = 10;
      ctx.moveTo(50, 250);
      ctx.lineTo(250, 250);
      ctx.stroke();
      return this;
    },

    drewMultiLine(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.moveTo(50, 300);
      ctx.lineTo(100, 320);
      ctx.lineTo(250, 300);
      ctx.strokeStyle = '#ff0000';
      ctx.stroke();
      return this;
    },
  },
});
</script>
