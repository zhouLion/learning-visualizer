<template>
  <div>
    <h1></h1>
    <p>
      为何要使用Lenna图像？
      David C. Munson. 在“A Note on Lena” 中给出了两条理由：
    </p>
    <ul>
      <li>首先，Lenna图像包含了各种细节、平滑区域、阴影和纹理，这些对测试各种图像处理算法很有用。它是一副很好的测试图像！</li>
      <li>第二，Lena图像里是一个很迷人的女子。</li>
      <li>所以不必奇怪图像处理领域里的人（大部分为男性）被一副迷人的图像吸引。</li>
    </ul>
    <p>标准的数字Lena图像只是原始图像的脸和露肩特写。</p>
    <img :src="require('./assets/lena.jpeg')" alt />
    <p>
      原图地址：
      <a href="http://www.lenna.org/full/l_hires.jpg" target="_blank">Lena 完整图片</a>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>

<style scoped lang="less">
</style>
