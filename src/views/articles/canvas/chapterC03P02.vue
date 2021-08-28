<template>
  <div>
    <h2>canvas - 图片处理</h2>
    <h3>色彩处理</h3>
    <div>
      <canvas ref="canvas" :width="canvasSize.width" :height="canvasSize.height"></canvas>
      <q-button-group>
        <q-button :disabled="colorType === 'origin'" @click="onSwitchColor('origin')">原图</q-button>
        <q-button :disabled="colorType === 'invert'" @click="onSwitchColor('invert')">反色</q-button>
        <q-button :disabled="colorType === 'pseudo'" @click="onSwitchColor('pseudo')">伪彩</q-button>
        <!-- eslint-disable-next-line max-len -->
        <q-button :disabled="colorType === 'grayscale'" @click="onSwitchColor('grayscale')">灰度</q-button>
      </q-button-group>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-plusplus */
import Vue from 'vue';
import lena from './assets/lena.jpeg';

type ColorTypes = 'origin' |
  'invert' |
  'pseudo' |
  'grayscale'

export default Vue.extend({
  data() {
    return {
      canvasSize: {
        width: 400,
        height: 400,
      },
      img: null as HTMLImageElement | null,
      colorType: 'origin' as ColorTypes,
    };
  },
  mounted() {
    this.loadImage(lena).then((img) => {
      this.img = img;
      this.onSwitchColor('origin', true);
    });
  },
  methods: {
    loadImage(src: string) {
      const img = new Image();
      const { width, height } = this.canvasSize;
      img.src = src;
      img.width = width;
      img.height = height;
      img.crossOrigin = 'cors';
      return new Promise<HTMLImageElement>((resolve, reject) => {
        img.onload = () => resolve(img);
        img.onerror = reject;
      });
    },

    onSwitchColor(colorType: ColorTypes, force = false) {
      const { img } = this;
      if (!force) {
        if (this.colorType === colorType) {
          return;
        }
      }
      this.colorType = colorType;
      const canvas = this.$refs.canvas as HTMLCanvasElement;
      if (!img) {
        return;
      }
      switch (colorType) {
        case 'origin':
          this.drawOriginImg(canvas, img);
          break;
        case 'invert':
          this.drawInvertImg(canvas, img);
          break;
        case 'pseudo':
          this.drawPseudoImg(canvas, img);
          break;
        case 'grayscale':
          this.drawGrayscaleImg(canvas, img);
          break;
        default:
          break;
      }
    },

    drawOriginImg(canvas: HTMLCanvasElement, img: HTMLImageElement) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    },

    drawInvertImg(canvas: HTMLCanvasElement, img: HTMLImageElement) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const len = imageData.data.length;
        let pointIndex = 0;
        while (pointIndex <= len) {
          const red = imageData.data[pointIndex];
          const green = imageData.data[pointIndex + 1];
          const blue = imageData.data[pointIndex + 2];
          const alpha = imageData.data[pointIndex + 3];
          imageData.data[pointIndex++] = 255 - red;
          imageData.data[pointIndex++] = 255 - green;
          imageData.data[pointIndex++] = 255 - blue;
          imageData.data[pointIndex++] = alpha;
        }
        ctx.putImageData(imageData, 0, 0);
      }
    },

    drawPseudoImg(canvas: HTMLCanvasElement, img: HTMLImageElement) {
      // TODO
    },

    drawGrayscaleImg(canvas: HTMLCanvasElement, img: HTMLImageElement) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const len = imageData.data.length;
        let pointIndex = 0;
        while (pointIndex <= len) {
          const red = imageData.data[pointIndex];
          const green = imageData.data[pointIndex + 1];
          const blue = imageData.data[pointIndex + 2];
          const alpha = imageData.data[pointIndex + 3];
          const avg = Math.round((red + green + blue) / 3);
          imageData.data[pointIndex++] = avg;
          imageData.data[pointIndex++] = avg;
          imageData.data[pointIndex++] = avg;
          imageData.data[pointIndex++] = alpha;
        }
        ctx.putImageData(imageData, 0, 0);
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
