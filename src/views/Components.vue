<template>
  <article :style="{'--rotate': bgRotate + 'deg'}" @mousemove.self="onmousemove">
    <section>
      <h2>按钮：</h2>
      <ButtonTest />
      <code-preview :codePromise="CodePreviewPromises.ButtonCode"></code-preview>
    </section>

    <section>
      <h2>按钮组：</h2>
      <div>
        <ButtonGroupTest />
        <code-preview :codePromise="CodePreviewPromises.ButtonGroupCode"></code-preview>
      </div>
    </section>

    <section>
      <h2>骨架框：</h2>
      <div>
        <SkeletonTest />
        <code-preview :codePromise="CodePreviewPromises.SkeletonCode"></code-preview>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import ButtonTest from '~/test/ButtonTest.vue';
import ButtonGroupTest from '~/test/ButtonGroupTest.vue';
import CodePreview from '@/components/CodePreview.vue';
import SkeletonTest from '~/test/SkeletonTest.vue';

const ButtonCode = () => import('!!highlight-loader!~/test/ButtonTest.vue');
const ButtonGroupCode = () => import('!!highlight-loader!~/test/ButtonGroupTest.vue');
const SkeletonCode = () => import('!!highlight-loader!~/test/SkeletonTest.vue');

export default Vue.extend({
  components: {
    CodePreview,
    ButtonTest,
    ButtonGroupTest,
    SkeletonTest,
  },
  data() {
    return {
      bgRotate: 45,
      CodePreviewPromises: {
        ButtonCode,
        ButtonGroupCode,
        SkeletonCode,
      },
    };
  },
  methods: {
    onmousemove() {
      // this.bgRotate += 1;
    },
  },
});
</script>

<style lang="less" scoped>
  article {
    --rotate: 45deg;
    transition: background 0.2s ease;
    background: linear-gradient(var(--rotate), #7e57c244, #5c00fc);
    padding: 1.5rem;
  }
</style>
