<template>
  <div>
    <h2>Canvas学习：Canvas 里的坐标系统</h2>
    <p>在 Web 页面中，或者说浏览器中有一个坐标系统。只是他和我们数学中的坐标系统不一样。Web的坐标系统的原点是在屏幕（浏览器屏幕）的左上角。</p>
    <p>它有两个坐标轴，x轴（水平轴）和y轴（垂直轴）。两轴的交汇点（左上角）为坐标原点(0,0)。原点沿x轴向右是正值，原点沿y轴向下是正值。</p>
    <div class="wrap">
      <label for="padding">
        边距：
        <input
          type="range"
          :min="20"
          :max="100"
          id="padding"
          v-model.number="canvasSize.padding"
          @input="drawWebCartesian"
        />
      </label>
    </div>
    <div class="wrap">
      <label for="grid">
        网格：
        <input
          type="range"
          :min="10"
          :max="50"
          v-model.number="canvasSize.grid"
          @input="drawWebCartesian"
        />
      </label>
    </div>
    <canvas
      style="border: 2px solid #8000ff; border-radius: .5em; margin: 1em 0;"
      ref="WebCartesian"
      :width="canvasSize.width"
      :height="canvasSize.height"
    >你的设备太差了，不支持 canvas</canvas>
    <small>Web 笛卡尔坐标系</small>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

function sleep(ms: number) {
  return {
    isSleep: false,
    stop() {
      this.isSleep = false;
    },
    delay() {
      this.isSleep = true;
      setTimeout(() => {
        this.isSleep = false;
      }, ms);
    },
  };
}

export default Vue.extend({
  name: '',
  data() {
    return {
      canvasSize: {
        width: 375,
        height: 400,
        padding: 40,
        grid: 50,
      },
      delayFn: sleep(60),
    };
  },
  mounted() {
    this.drawWebCartesian();
  },
  methods: {
    async drawWebCartesian() {
      if (this.delayFn.isSleep) {
        return;
      }
      this.delayFn.delay();
      await this.$nextTick();
      const canvas = this.$refs.WebCartesian as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      const {
        padding, width, height, grid,
      } = this.canvasSize;
      const point = {
        x: 0 + padding,
        y: 0 + padding,
      };
      if (ctx) {
        ctx.clearRect(0, 0, width, height);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000';
        // draw x axis
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(width - padding, point.y);
        ctx.stroke();
        // draw y axis
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(point.x, height - padding);
        ctx.stroke();
        // draw grid
        ctx.beginPath();
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = '#ccc';
        for (let i = padding; i < (width - padding); i += grid) {
          ctx.moveTo(i, point.y);
          ctx.lineTo(i, height - padding);
          ctx.font = '12px Arial';
          ctx.fillStyle = '#000';
          ctx.fillText(`${i - padding}`, i, padding);
        }
        ctx.stroke();

        ctx.beginPath();
        for (let i = padding; i < (height - padding); i += grid) {
          ctx.moveTo(point.x, i);
          ctx.lineTo(width - padding, i);
          ctx.font = '12px Arial';
          ctx.fillStyle = '#0cc';
          ctx.fillText(`${i - padding}`, padding - 20, i);
        }
        ctx.stroke();
      }
    },
  },
});
</script>
