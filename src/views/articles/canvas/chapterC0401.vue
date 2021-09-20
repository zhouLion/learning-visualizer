<template>
  <div>
    <h2>Canvas 基础交互：</h2>
    <h3>1. 如何获取 canvas 上鼠标位置</h3>
    <p>
      <code>getBoundingClientRect</code>在获取视口大小方面，是非常重要的，因为它可以适配标准盒子模型（content-box）与怪异盒子模型（border-box）之间的差异
    </p>
    <p>
      如果是标准盒子模型，也就是
      <code>box-sizing: content-box;</code>
      元素的尺寸等于
      <code>width/height + padding + border-width</code>
      的总和。如果
      <code>box-sizing: border-box;</code>
      ，元素的的尺寸等于
      <code>width/height</code>。
    </p>
    <div>
      <label>border-box</label>
      <canvas class="demo--border-box" width="300" height="300" @mousemove="mousemoveHandler"></canvas>
    </div>
    <div>
      <label>content-box</label>
      <canvas class="demo--content-box" width="300" height="300" @mousemove="mousemoveHandler"></canvas>
    </div>

    <hr />

    <h3>2. 关于 Canvas 的 width 和 height</h3>
    <p>Canvas 的宽高存在三种控制方式：</p>
    <ul>
      <li>
        <details>
          <summary>CSS 样式：</summary>
          <pre>
canvas {
  width: 100px;
  height: 100px;
}
          </pre>
        </details>
      </li>
      <li>
        <details>
          <summary>通过 width 和 height 属性表示：</summary>
          <pre>&lt;canvas width="100" height="100"&gt;&lt;/canvas&gt;</pre>
          <p>单位默认为 px，不接受百分比单位。</p>
          <p>
            额外的，css 的
            <code>box-sizing</code> 属性不会影响画布可用于绘制区域的大小。
          </p>
        </details>
      </li>
      <li>
        <details>
          <summary>默认宽高：</summary>
          <p>canvas 如果既不通过 css 样式，又不通过自身元素 width、height 属性指定其宽和高的话，那么它的默认宽和高分别为：300 和 150</p>
        </details>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import throttle from 'lodash/throttle';

export default Vue.extend({
  name: 'chapterC0401',
  methods: {
    mousemoveHandler: throttle((e: MouseEvent) => {
      const canvas = e.target as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const cRect = canvas.getBoundingClientRect();
        const mouseX = Math.round(e.clientX - cRect.left);
        const mouseY = Math.round(e.clientY - cRect.top);
        ctx.fillStyle = '#ff0000';
        ctx.font = '20px Arial';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText(`x: ${mouseX}, y: ${mouseY}`, 10, 20);
        ctx.fillRect(mouseX, mouseY, 5, 5);
      }
    }, 50),
  },
});
</script>

<style scoped less>
.demo--border-box {
  box-sizing: border-box;
  border: 4px solid #ccc;
  padding: 4px;
}

.demo--content-box {
  box-sizing: content-box;
  border: 4px solid #ccc;
  padding: 4px;
}
</style>
