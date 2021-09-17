<template>
  <div class="demo-whiteboard">
    <canvas width="400" height="400" ref="canvas"></canvas>
    <div class="actions">
      <svg @click="brushHandler" class="icon" :class="{ active: !eraserEnabled }">
        <use xlink:href="#icon-Pencil" />
      </svg>
      <svg @click="eraserHandler" class="icon" :class="{ active: eraserEnabled }">
        <use xlink:href="#icon-eraser" />
      </svg>
      <svg @click="downloadHandler" class="icon">
        <use xlink:href="#icon-save" />
      </svg>
      <svg @click="clearHandler" class="icon">
        <use xlink:href="#icon-clear" />
      </svg>
    </div>
    <ul class="sizes">
      <li class="size thin action-item" :class="{ active: lineWidth === 3 }" @click="lineWidth = 3"></li>
      <li
        class="size thick action-item"
        :class="{ active: lineWidth === 6 }"
        @click="lineWidth = 6"
      ></li>
    </ul>
    <ul class="colors">
      <li
        v-for="color in colorList"
        :key="color"
        class="color action-item"
        :class="{
          active: color === strokeStyle
        }"
        :style="{ backgroundColor: color }"
        @click="setColor(color)"
      ></li>
    </ul>
  </div>
</template>
<script lang="ts">
/* eslint-disable no-param-reassign */
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      eraserEnabled: false,
      lineWidth: 3,
      strokeStyle: '',
      canvas: null as HTMLCanvasElement | null,
      ctx: null as CanvasRenderingContext2D | null,
      colorList: ['#000000', '#70FF56', '#FB6164', '#FFE931', '#83FFB6', '#FF7520'],
    };
  },
  mounted() {
    const { canvas, ctx } = this.getCanvasAndContext();
    this.initCanvasBackground(canvas, ctx);
    this.disableScroll();
    this.registerUserEvents(canvas, ctx);
  },
  methods: {
    getCanvasAndContext() {
      const canvas = this.$refs.canvas as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error('浏览器太非主流了吧');
      }
      this.canvas = canvas;
      this.ctx = ctx;
      return { canvas, ctx };
    },

    drawLine(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineWidth = this.lineWidth || 3;
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
    },

    registerUserEvents(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
      // 鼠标操作
      let enableDrag = false;
      let lastPoint = { x: 0, y: 0 };
      // 特性检测
      if (document.body.ontouchstart === undefined) {
        // 非触屏设备
        canvas.addEventListener('mousedown', (e) => {
          enableDrag = true;
          const x = e.offsetX;
          const y = e.offsetY;
          if (this.eraserEnabled) {
            ctx.clearRect(x - 5, y - 5, 10, 10);
          } else {
            // 在按下时就要更新 lastPoint, 不然下一次点击会连接到上一条线的 lastPoint
            lastPoint = { x, y };
          }
        });
        canvas.addEventListener('mousemove', (e) => {
          if (!enableDrag) { return; }

          const x = e.offsetX;
          const y = e.offsetY;
          if (this.eraserEnabled) {
            ctx.clearRect(x - 5, y - 5, 10, 10);
          } else {
            const newPoint = { x, y };
            this.drawLine(ctx, lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
            lastPoint = newPoint;
          }
        });
        canvas.addEventListener('mouseup', (e) => {
          enableDrag = false;
        });
      } else {
        // 触屏设备
        canvas.addEventListener('touchstart', (e) => {
          enableDrag = true;
          const x = e.touches[0].clientX;
          const y = e.touches[0].clientY;
          if (this.eraserEnabled) {
            ctx.clearRect(x - 5, y - 5, 10, 10);
          } else {
            // 在按下时就要更新 lastPoint, 不然下一次点击会连接到上一条线的 lastPoint
            lastPoint = { x, y };
          }
        });
        canvas.addEventListener('touchmove', (e) => {
          if (!enableDrag) { return; }

          const x = e.touches[0].clientX;
          const y = e.touches[0].clientY;
          if (this.eraserEnabled) {
            ctx.clearRect(x - 5, y - 5, 10, 10);
          } else {
            const newPoint = { x, y };
            this.drawLine(ctx, lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
            lastPoint = newPoint;
          }
        });
        canvas.addEventListener('touchend', (e) => {
          enableDrag = false;
        });
      }
    },

    // Save | Download image
    downloadImage(data: string, filename = 'untitled.jpeg') {
      const a = document.createElement('a');
      a.href = data;
      a.download = filename;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
    },

    eraserHandler() {
      this.eraserEnabled = true;
    },

    brushHandler() {
      this.eraserEnabled = false;
    },

    clearHandler() {
      const { ctx, canvas } = this;
      if (!ctx || !canvas) { return; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },

    downloadHandler() {
      const { ctx, canvas } = this;
      if (!ctx || !canvas) { return; }
      const dataURL = canvas.toDataURL('image/png');
      this.downloadImage(dataURL, '我的画-在线画板.png');
    },

    setColor(color: string) {
      this.strokeStyle = color;
      if (this.ctx) {
        this.changeCtxStrokeStyle(this.ctx, color);
      }
    },

    changeCtxStrokeStyle(ctx: CanvasRenderingContext2D, color: string) {
      ctx.strokeStyle = color;
    },

    initCanvasBackground(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    },

    disableScroll() {
      document.body.addEventListener('touchmove', (e) => {
        e.preventDefault();
      });
    },
  },
});
</script>

<style lang="less" scoped>
.demo-whiteboard {
  position: relative;

  ul,
  li {
    list-style: none;
  }
  .colors {
    position: fixed;
    top: 120px;
    left: 23px;
  }
  .colors > .color {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    margin: 12px 0;
    transition: all 0.3s;
  }

  .action-item.active {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.9);
    transform: scale(1.2);
  }

  .sizes {
    position: fixed;
    right: 40px;
    top: 120px;
  }
  .sizes > .size {
    height: 0;
    width: 20px;
    margin: 15px 0;
  }
  .sizes > .thin {
    border-top: 3px solid black;
  }
  .sizes > .thick {
    border-top: 10px solid black;
  }

  .actions {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .actions .icon {
    width: 3em;
    height: 3em;
    margin: 1em;
    cursor: pointer;

    &.active {
      outline: 4px solid #8000ff;
    }
  }
}
</style>
