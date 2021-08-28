<template>
  <div>
    <h2>canvas - 图片处理</h2>
    <h3>色彩选择</h3>
    <table class="canvas-demo-table">
      <colgroup>
        <col width="50%" />
        <col width="25%" />
        <col width="25%" />
      </colgroup>
      <thead>
        <tr>
          <th>图片</th>
          <th>鼠标位置像素值</th>
          <th>选中像素值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <canvas
              @mousemove="onmousemove"
              @click="onSelect"
              ref="canvas"
              :width="canvasSize.width"
              :height="canvasSize.height"
            ></canvas>
          </td>
          <td>
            <span
              :style="{
                backgroundColor: hoverColor,
                color: '#eee'
              }"
            >{{ hoverColor }}</span>
          </td>
          <td>
            <span
              :style="{
                backgroundColor: selectedColor,
                color: '#eee'
              }"
            >{{ selectedColor }}</span>
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
      selectedColor: '',
    };
  },
  mounted() {
    const canvas = this.$refs.canvas as HTMLCanvasElement;
    this.loadImgToCanvas(lena, canvas);
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

    pickColorAtXY(
      canvas: HTMLCanvasElement,
      x: number,
      y: number,
    ) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const imageData = ctx.getImageData(x, y, 1, 1);
        const [r, g, b, a] = imageData.data;
        return `rgba(${r}, ${g}, ${b}, ${a / 255})`;
      }
      return 'rgba(0,0,0,0)';
    },

    onmousemove(evt: any) {
      const target = evt.target as HTMLCanvasElement;
      this.hoverColor = this.pickColorAtXY(target, evt.layerX, evt.layerY);
    },

    onSelect(evt: any) {
      const target = evt.target as HTMLCanvasElement;
      this.selectedColor = this.pickColorAtXY(target, evt.layerX, evt.layerY);
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
