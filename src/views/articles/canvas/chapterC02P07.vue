<template>
  <div class="demo-restore">
    <h2>学习 Canvas: 制作扇形图和饼图</h2>
    <h3>扇形图思路</h3>
    <p>
      输入：
      <code>center</code>、
      <code>radius</code>、
      <code>startDeg</code>和
      <code>endDeg</code>。
    </p>
    <p>结果输出一个扇形图形</p>
    <canvas width="400" height="400" ref="arcCanvas"></canvas>
    <hr />
    <h3>饼图思路：</h3>
    <p>
      输入的
      <code>startDeg</code>和
      <code>endDeg</code>两个数组，基于扇形图思路，执行函数的循环调用。
    </p>
    <canvas width="400" height="400" ref="pieCanvas"></canvas>
  </div>
</template>
<script lang="ts">
/* eslint-disable no-param-reassign */
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      arcCanvas: null as HTMLCanvasElement | null,
      arcCtx: null as CanvasRenderingContext2D | null,
      pieCanvas: null as HTMLCanvasElement | null,
      pieCtx: null as CanvasRenderingContext2D | null,
    };
  },
  mounted() {
    this.initCanvases();
    // eslint-disable-next-line no-unused-expressions
    this.arcCtx && this.drawArc(this.arcCtx, [200, 200], 100, 0, 190);
    this.drawPie([200, 200], 100, [30, 60, 90], [0, 90, 180]);
  },
  methods: {
    initCanvases() {
      if (this.$refs.arcCanvas) {
        const { canvas: arcCanvas, ctx: arcCtx } = this.getCanvasAndContext(this.$refs.arcCanvas as HTMLCanvasElement);
        this.autoSetCanvasSize(arcCanvas);
        this.arcCanvas = arcCanvas;
        this.arcCtx = arcCtx;
      }
      if (this.$refs.pieCanvas) {
        const { canvas: pieCanvas, ctx: pieCtx } = this.getCanvasAndContext(this.$refs.pieCanvas as HTMLCanvasElement);
        this.autoSetCanvasSize(pieCanvas);
        this.pieCanvas = pieCanvas;
        this.pieCtx = pieCtx;
      }
    },

    getCanvasAndContext(canvas: HTMLCanvasElement) {
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('浏览器太非主流了吧');
      }
      return { canvas, ctx };
    },

    autoSetCanvasSize(canvas: HTMLCanvasElement) {
      function setCanvasSize() {
        const defaultPadding = 40;
        const pageWidth = document.documentElement.clientWidth - defaultPadding;
        canvas.width = pageWidth;
      }
      setCanvasSize();
      // 改变窗口大小重新设置
      window.onresize = () => {
        setCanvasSize();
      };
    },

    drawArc(ctx: CanvasRenderingContext2D, center: number[], radius: number, startDeg: number, endDeg: number) {
      const [x, y] = center;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x, y, radius, startDeg, endDeg);
      ctx.closePath();
      ctx.strokeStyle = '#000';
      ctx.stroke();
    },

    drawPie(center: number[], radius: number, startDeg: number[], endDeg: number[]) {
      const [x, y] = center;
      const ctx = this.pieCtx;
      if (!ctx) {
        return;
      }
      ctx.clearRect(0, 0, x * 2, y * 2);
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < startDeg.length; i++) {
        this.drawArc(ctx, center, radius, startDeg[i], endDeg[i]);
      }
    },
  },
});
</script>
