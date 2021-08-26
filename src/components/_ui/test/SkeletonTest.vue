<template>
  <div>
    <details open>
      <summary>自由用法：</summary>
      <div class="input-item">
        <label for>魔法字符：</label>
        <small>(「b」：按钮；「p」：块；「oO」：圆；「,」占位；「-」：行内块；「;」：换行；其它可自定义)</small>
        <input type="text" v-model="magicString" />
      </div>
      <div class="input-item">
        <label for>开启动画：</label>
        <input type="checkbox" v-model="animation" />
      </div>
      <q-skeleton :magic-string="magicString" :animation="animation"></q-skeleton>
    </details>

    <details>
      <summary>列表用法：</summary>
      <q-skeleton magic-string="o-,b" v-for="i in 3" :key="i"></q-skeleton>
    </details>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animation: true,
      magicString: 'p;,-,-,;,oO,Oo,;,b,;,pp',
    };
  },
};
</script>

<style lang="less" scoped>
  details {
    summary {
      cursor: pointer;
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
