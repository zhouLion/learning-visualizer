<template>
  <div>
    <h2>Canvas 基础交互：</h2>
    <h3>3. 旋转 rotate</h3>
    <p>
      <code>ctx.rotate(rad: number)</code>会控制 Canvas 元素以指定的角度旋转，旋转时需要通过
      <code>ctx.translate(x: number, y: number)</code> 指定旋转原点。
    </p>
    <p>
      其中
      <code>ctx.translate(x: number, y: number)</code> 需要特别注意，如果不设置，默认值将会是
      <code>0， 0</code>
    </p>
    <q-button @click="rotateHandler">旋转</q-button>
    <canvas width="300" height="300" ref="canvasToRotate"></canvas>

    <hr />

    <h3>4. 将 canvas 保存为图片文件</h3>
    <p>
      利用
      <code>canvas.toDataURL(type: string, quality?: number)</code> 方法，可以将画布转换为图片文件链接。
    </p>
    <p>试着改变一下表单中的参数，触发「生成图片」</p>
    <div>
      <form>
        <label for>
          <span>文件类型：</span>
          <select name="type" v-model="type" @change="saveHandler">
            <option value="image/png">image/png</option>
            <option value="image/jpeg">image/jpeg</option>
          </select>
        </label>
        <label for>
          <span>文件质量：</span>
          <input
            type="range"
            name="quality"
            step="0.1"
            v-model.number="quality"
            min="0.1"
            max="1"
            @input="saveHandler"
          />
          <span>{{ quality }}</span>
        </label>
        <img :src="imageURL" alt="img" />
        <a :href="imageURL" v-if="imageURL" download>下载 {{ imageFileSize }}</a>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      imageURL: '',
      type: 'image/png',
      quality: 1,
    };
  },
  mounted() {
    this.draw();
  },
  computed: {
    // return human readable file size
    imageFileSize(): string {
      return `${(this.imageURL.length / 1024).toFixed(2)}KB`;
    },
  },
  methods: {
    draw() {
      const canvas = this.$refs.canvasToRotate as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const ox = canvas.width / 2;
        const oy = canvas.height / 2;
        ctx.font = '40px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#f00';
        ctx.fillText('祝大家中秋快乐', ox, oy);
      }
    },

    rotateHandler() {
      const canvas = this.$refs.canvasToRotate as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const ox = canvas.width / 2;
        const oy = canvas.height / 2;
        ctx.translate(ox, oy);
        // 在 canvas 中，与圆弧、旋转相关的，都是用弧度来表示的。
        ctx.rotate((Math.PI / 180) * 15);
        ctx.fillText('祝大家中秋快乐', 0, 0);
        // 将 translate 重置回来
        ctx.translate(-ox, -oy);
      }
    },

    saveHandler() {
      const canvas = this.$refs.canvasToRotate as HTMLCanvasElement;
      const { type, quality } = this;
      const imageURL = canvas.toDataURL(type, quality);
      this.imageURL = imageURL;
    },
  },
});
</script>
