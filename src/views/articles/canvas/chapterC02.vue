<template>
  <div>
    <h2>Canvas学习：Canvas里的坐标系统</h2>

    <p>在数学里，我们学过一种坐标系统，叫作笛卡坐标系（Cartesian Coordinate system），这个坐标系统也称为直角坐标系，是一种正交坐标系。</p>

    <p>但在 Web 页面中，或者说我们的浏览器中也有一个坐标系统。只是他和我们数学中的坐标系统不一样。Web的坐标系统的原点是在屏幕（浏览器屏幕）的左上角。</p>
    <canvas ref="WebCartesian" width="400" height="300"></canvas>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: '',
  mounted() {
    this.drawWebCartesian();
  },
  methods: {
    drawWebCartesian() {
      const canvas = this.$refs.WebCartesian as HTMLCanvasElement;

      // 横线与竖线的是距
      const dx = 50;
      const dy = 50;

      // 初始坐标原点
      let x = 0;
      let y = 0;
      const w = canvas.width;
      const h = canvas.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // 单个步长所表示的长度

      let xy = 0;

      ctx.strokeStyle = '#eee';

      ctx.lineWidth = 1;

      // 画横线
      while (y <= h) {
        ctx.moveTo(x, y);
        ctx.lineTo(w, y);
        ctx.stroke();

        // 横坐标的数字
        // ctx.font = '1px Calibri';
        ctx.fillText(xy.toString(), x, y);
        y += dy;
        xy += dx;
      }

      // 画竖线
      y = 0;
      xy = 0;
      while (x <= w) {
        ctx.moveTo(x, y);
        ctx.lineTo(x, h);
        ctx.stroke();
        // 纵坐标的数字
        // ctx.font = '1px Calibri';
        ctx.fillText(xy.toString(), x, 10);
        x += dx;
        xy += dy;
      }
    },
  },
});
</script>
