<template>
  <div class="demo-restore">
    <h2>学习 Canvas: Save 与 Restore</h2>
    <p>Canvas中状态和非状态</p>
    <p>在Canvas环境中绘图时，可以利用所谓的绘图堆栈状态。每个状态随时存储 Canvas 上下文数据。下面是存储在状态堆栈的数据列表。</p>
    <ol>
      <li>
        当前的坐标变换（变换矩阵）信息，比如旋转或平移时使用的
        <code>rotate()</code> 和
        <code>setTransform()</code> 方法
      </li>
      <li>当前剪贴区域</li>
      <li>图形上下文对象（CanvasRenderingContext2D）的当前属性值</li>
    </ol>

    <caption>
      <code>CanvasRenderingContext2D</code> 的当前属性值主要包括
    </caption>

    <table>
      <colgroup>
        <col width="35%" />
        <col width="55%" />
      </colgroup>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td>
            <code>{{ row[0] }}</code>
          </td>
          <td>{{ row[1] }}</td>
        </tr>
      </tbody>
    </table>
    <p>
      其中
      <code>save()</code>
      方法会将Canvas的状态推到Canvas绘图的堆栈中，然后通过
      <code>restore()</code>
      方法从Canvas绘图的堆栈中取出
      <code>save()</code>
      保存的状态。
    </p>
    <canvas width="400" height="200" ref="canvas"></canvas>
  </div>
</template>
<script lang="ts">
/* eslint-disable no-param-reassign */
import Vue from 'vue';
import { RESTORABLE_ATTRIBUTES } from './consts';

const [columns, ...rows] = RESTORABLE_ATTRIBUTES;

export default Vue.extend({
  data() {
    return {
      canvas: null as HTMLCanvasElement | null,
      ctx: null as CanvasRenderingContext2D | null,
      columns,
      rows,
    };
  },
  mounted() {
    const { ctx, canvas } = this.getCanvasAndContext();
    this.drawScreen(ctx);
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

    sleep(ms: number = 1000) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    async drawScreen(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = '#FA6900';
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 5;
      ctx.shadowBlur = 4;
      ctx.shadowColor = 'rgba(204, 204, 204, 0.5)';
      ctx.fillRect(10, 10, 15, 150);
      ctx.save(); // 将第一个状态推到堆栈中

      await this.sleep();

      ctx.fillStyle = '#f36';
      ctx.shadowOffsetX = 10;
      ctx.shadowOffsetY = 10;
      ctx.shadowBlur = 4;
      ctx.shadowColor = 'rgba(204, 204, 204, 0.5)';
      ctx.fillRect(50, 10, 30, 150);
      ctx.save(); // 将第二个状态推到堆栈中

      await this.sleep();

      ctx.fillStyle = '#A7DBD7';
      ctx.shadowOffsetX = 15;
      ctx.shadowOffsetY = 15;
      ctx.shadowBlur = 4;
      ctx.shadowColor = 'rgba(204, 204, 204, 0.5)';
      ctx.fillRect(110, 10, 45, 150);
      ctx.save(); // 将第三个状态推到堆栈中

      await this.sleep();

      ctx.restore(); // 取出堆栈3（第三个状态）
      ctx.beginPath();
      ctx.arc(225, 75, 22, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();

      await this.sleep();

      ctx.restore(); // 取出堆栈2（第二个状态）
      ctx.beginPath();
      ctx.arc(300, 75, 15, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();

      await this.sleep();

      ctx.restore(); // 取出堆栈1（第一个状态）
      ctx.beginPath();
      ctx.arc(380, 75, 8, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    },
  },
});
</script>

<style lang="less" scoped>
.demo-restore {
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2em;
  }
  th,
  td {
    line-height: 2em;
    border: 1px solid gray;
    border-collapse: collapse;
    padding: 0 1em;
  }
}
</style>
