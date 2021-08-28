<template>
  <div class="demo">
    <details open>
      <summary>自由用法：</summary>
      <div class="input-item">
        <label for>魔法字符：</label>
        <small>(「b」：按钮；「p」：块；「oO」：圆；「,」占位；「-」：行内块；「;」：换行；其它可自定义)</small>
        <input type="text" v-model="magicString" />
      </div>
      <q-switch class="input-item" v-model="animation">开启动画：</q-switch>
      <q-skeleton :magic-string="magicString" :animation="animation"></q-skeleton>
    </details>

    <details>
      <summary>列表用法：</summary>
      <q-skeleton magic-string="o-,b" v-for="i in 3" :key="i"></q-skeleton>
    </details>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      animation: true,
      magicString: 'p;,-,-,;,oO,Oo,;,b,;,p,;,p,',
    };
  },
});
</script>

<style lang="less" scoped>
details {
  margin-bottom: 1em;

  summary {
    cursor: pointer;
    padding: 1em;
  }
}
.input-item {
  margin-bottom: 1em;
}
</style>

<style lang="less">
// 自定义骨架单元样式
.q-skeleton__item.q-skeleton__item__k {
  height: 6em;
  width: 40%;
}
</style>
