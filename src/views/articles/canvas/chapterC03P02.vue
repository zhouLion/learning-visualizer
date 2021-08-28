<template>
  <div>
    <h2>canvas - 图片处理</h2>
    <canvas ref="canvas" :width="canvasSize.width" :height="canvasSize.height"></canvas>
    <h3>色彩处理</h3>
    <div>
      <q-button-group>
        <q-button :disabled="colorType === 'origin'" @click="onSwitchColor('origin')">原图</q-button>
        <q-button :disabled="colorType === 'invert'" @click="onSwitchColor('invert')">反色</q-button>
        <q-button :disabled="colorType === 'pseudo'" @click="onSwitchColor('pseudo')">伪彩</q-button>
        <!-- eslint-disable-next-line max-len -->
        <q-button :disabled="colorType === 'grayscale'" @click="onSwitchColor('grayscale')">灰度</q-button>
      </q-button-group>
    </div>

    <h3>滤镜处理</h3>
    <div>
      <q-button-group>
        <q-button :disabled="colorType === 'removeRed'" @click="onSwitchColor('removeRed')">去除红色通道</q-button>
        <q-button
          :disabled="colorType === 'removeGreen'"
          @click="onSwitchColor('removeGreen')"
        >去除绿色通道</q-button>
        <q-button :disabled="colorType === 'removeBlue'" @click="onSwitchColor('removeBlue')">去除蓝色通道</q-button>
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
  'grayscale' |
  'removeRed' |
  'removeGreen' |
  'removeBlue'

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
        case 'removeRed':
          this.drawDoubleChannelImg(canvas, img, 0);
          break;
        case 'removeGreen':
          this.drawDoubleChannelImg(canvas, img, 1);
          break;
        case 'removeBlue':
          this.drawDoubleChannelImg(canvas, img, 2);
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
          imageData.data[pointIndex++] = Math.round(0.393 * red + 0.769 * green + 0.189 * blue);
          imageData.data[pointIndex++] = Math.round(0.349 * red + 0.686 * green + 0.168 * blue);
          imageData.data[pointIndex++] = Math.round(0.272 * red + 0.534 * green + 0.131 * blue);
          imageData.data[pointIndex++] = alpha;
        }
        ctx.putImageData(imageData, 0, 0);
      }
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

    drawDoubleChannelImg(canvas: HTMLCanvasElement, img: HTMLImageElement, channel: number) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const len = imageData.data.length;
        let pointIndex = 0;
        while (pointIndex <= len) {
          imageData.data[pointIndex + channel] = 0;
          pointIndex += 4;
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
