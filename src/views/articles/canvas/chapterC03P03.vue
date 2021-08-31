<template>
  <div>
    <h2>canvas - 图片处理</h2>
    <h3>抗锯齿</h3>
    <table class="canvas-demo-table">
      <colgroup>
        <col width="33%" />
        <col width="33%" />
        <col width="33%" />
      </colgroup>
      <thead>
        <tr>
          <th>图片</th>
          <th>默认画布</th>
          <th>抗锯齿画布</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <canvas
              @mousemove="onmousemove"
              ref="canvas"
              :width="canvasSize.width"
              :height="canvasSize.height"
            ></canvas>
          </td>
          <td>
            <canvas ref="defaultCanvas" width="100" height="100"></canvas>
          </td>
          <td>
            <canvas ref="smoothCanvas" width="100" height="100"></canvas>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import lena from './assets/lena.jpeg';

export default Vue.extend({
  data() {
    return {
      canvasSize: {
        width: 400,
        height: 400,
      },
      scale: 1,
      hoverColor: '',
    };
  },
  mounted() {
    const canvas = this.$refs.canvas as HTMLCanvasElement;
    this.loadImgToCanvas(lena, canvas);
    // 默认的画布
    const defaultCanvas = this.$refs.defaultCanvas as HTMLCanvasElement;
    this.setCanvasSmoothingEnable(defaultCanvas, false);
    // 要设置抗锯齿的画布
    const smoothCanvas = this.$refs.smoothCanvas as HTMLCanvasElement;
    this.setCanvasSmoothingEnable(smoothCanvas, true);
  },
  methods: {
    loadImgToCanvas(src: string, canvas: HTMLCanvasElement) {
      const img = new Image();
      const { width, height } = this.canvasSize;
      img.src = src;
      img.width = width;
      img.height = height;
      img.crossOrigin = 'cors';
      img.onload = () => {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
        }
      };
      img.onerror = error => console.log(error);
    },

    setCanvasSmoothingEnable(
      canvas: HTMLCanvasElement,
      smoothingEnable = false,
    ) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.imageSmoothingEnabled = smoothingEnable;
      }
    },

    onmousemove(evt: any) {
      const target = evt.target as HTMLCanvasElement;
      // 默认的画布
      const defaultCanvas = this.$refs.defaultCanvas as HTMLCanvasElement;
      // 抗锯齿的画布
      const smoothCanvas = this.$refs.smoothCanvas as HTMLCanvasElement;

      const xy = {
        x: evt.layerX,
        y: evt.layerY,
      };

      this.drawCanvasZoom(target, defaultCanvas, xy);
      this.drawCanvasZoom(target, smoothCanvas, xy);
    },

    drawCanvasZoom(
      source: HTMLCanvasElement,
      target: HTMLCanvasElement,
      xy: { x: number; y: number },
    ) {
      const sourceCtx = source.getContext('2d');
      const targetCtx = target.getContext('2d');
      const { x, y } = xy;
      if (sourceCtx && targetCtx) {
        targetCtx.drawImage(
          source,
          Math.min(Math.max(0, x - 5), source.width - 10),
          Math.min(Math.max(0, y - 5), source.height - 10),
          10, 10,
          0, 0,
          100, 100,
        );
      }
    },
  },
});
</script>

<style scoped lang="less">
.canvas-demo-table {
  width: 100%;
  text-align: center;
}
</style>
