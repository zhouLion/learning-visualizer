<template>
  <div>
    <h2>Canvas学习：绘制虚线</h2>
    <p>
      绘制虚线：
      <br />
      <code>{{ ctxDashLineCode }}</code>
    </p>
    <div class="controllers">
      <label
        class="controller-item"
        :for="`dashLength${index}`"
        v-for="(lineDash, index) in lineDashs"
        :key="index"
      >
        <div>{{ lineDash.value }}</div>
        <input
          type="range"
          :id="`dashLength${index}`"
          min="0"
          max="50"
          @input="draw"
          v-model="lineDash.value"
        />
        <q-button size="mini" round :disabled="index < 2" @click="removeDash(index)">
          <div class="rotate-45">+</div>
        </q-button>
      </label>
    </div>
    <div>
      <q-button size="mini" round @click="addDash">+</q-button>
    </div>
    <canvas ref="canvas" width="300" height="100"></canvas>
    <p>
      在 Canvas 中，虚线可以通过
      <code>setLineDash</code>简单的实现。
    </p>
    <p>偶数位参数表示虚线长度，奇数表示实线。</p>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-param-reassign */
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      lineDashs: [
        {
          value: 10,
        },
        {
          value: 30,
        },
      ],
    };
  },
  computed: {
    ctxDashLineCode(): string {
      const dashsCode = this.lineDashParams.join(', ');
      return `ctx.setLineDash([${dashsCode}]);`;
    },
    lineDashParams(): number[] {
      return this.lineDashs.map(d => d.value);
    },
  },
  mounted() {
    this.draw();
  },
  methods: {
    removeDash(index: number) {
      this.lineDashs.splice(index, 1);
      this.draw();
    },

    addDash() {
      this.lineDashs.push({ value: 0 });
      this.draw();
    },

    draw() {
      const canvas = this.$refs.canvas as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawDashedLine(ctx);
      }
    },
    drawDashedLine(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      // 在这里设置破折号分割格式
      ctx.setLineDash(this.lineDashParams);
      ctx.moveTo(50, 50);
      ctx.lineTo(250, 50);
      ctx.stroke();
    },
  },
});
</script>

<style lang="less" scoped>
.controllers {
  margin: 1em 0;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  user-select: none;
}

.controller-item {
  margin-top: 0.5em;
  flex-basis: 33%;
}

.rotate-45 {
  transform: rotate(45deg);
}
</style>
