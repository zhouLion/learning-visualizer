<template>
  <article :style="{ '--rotate': bgRotate + 'deg' }" @mousemove.self="onmousemove">
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

    <section>
      <h2>滑块：</h2>
      <div>
        <SwitchTestVue />
        <code-preview :codePromise="CodePreviewPromises.SwitchCode"></code-preview>
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
import SwitchTestVue from '@/components/_ui/test/SwitchTest.vue';

const ButtonCode = () => import('!!@snoopylion/highlight-loader!~/test/ButtonTest.vue');
const ButtonGroupCode = () => import('!!@snoopylion/highlight-loader!~/test/ButtonGroupTest.vue');
const SkeletonCode = () => import('!!@snoopylion/highlight-loader!~/test/SkeletonTest.vue');
const SwitchCode = () => import('!!@snoopylion/highlight-loader!~/test/SwitchTest.vue');

export default Vue.extend({
  components: {
    CodePreview,
    ButtonTest,
    ButtonGroupTest,
    SkeletonTest,
    SwitchTestVue,
  },
  data() {
    return {
      bgRotate: 90,
      CodePreviewPromises: {
        ButtonCode,
        ButtonGroupCode,
        SkeletonCode,
        SwitchCode,
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

<style lang="less">
.demo {
  max-width: 375px;
  margin: 0 auto;
  border-radius: 7px;
  padding: 1em;
  transition: box-shadow 0.2s ease;
  box-shadow: -7px -7px 14px -7px hsl(0deg 0% 100%),
    7px 7px 14px -7px rgb(128 50 255);
  .wrap {
    padding: 0.5em;
    border-bottom: 1px solid #8000ff26;
  }

  &:hover,
  &:focus-within {
    box-shadow: none;
  }
}
</style>
