<template>
  <div class="code-previewer">
    <q-button
      v-if="!immediate"
      @click="onclickShowCode"
      :disabled="!codePromise"
      block
    >{{ isShowCode ? '👀收起源码' : '👓展示源码' }}</q-button>
    <q-skeleton class="hljs vue" magic-string="--;--;-;--;-;" v-if="isLoading"></q-skeleton>
    <pre
      class="hljs vue"
      v-else
      v-html="innerCode"
      ref="pre"
      :style="{
        height: isShowCode ? '40em' : 0,
        opacity: isShowCode ? 1 : 0,
      }"
    ></pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line
import { PropValidator, RecordPropsDefinition } from 'vue/types/options';

interface IReturnPromise {
  (): Promise<any>
}

export const props: RecordPropsDefinition<{
  immediate: boolean,
  codePromise: IReturnPromise | null,
}> = {
  immediate: {
    type: Boolean,
  },
  codePromise: {
    type: Function,
  },
};

export default Vue.extend({
  props,
  data() {
    return {
      isLoading: false,
      isShowCode: false,
      loading: false,
      innerCode: '',
      codePreviewHeight: 0,
    };
  },

  mounted() {
    if (this.immediate) this.renderCode();
  },

  methods: {
    onclickShowCode() {
      this.isShowCode = !this.isShowCode;
      this.renderCode();
    },

    async renderCode() {
      if (!this.codePromise || typeof this.codePromise !== 'function') {
        return;
      }
      if (this.innerCode) {
        return;
      }
      try {
        this.isShowCode = true;
        this.isLoading = true;
        const codeModule = await this.codePromise();
        this.innerCode = codeModule.default || codeModule;
        this.isLoading = false;
      } catch (error) {
        this.innerCode = '暂无代码';
        // throw new Error(error);
      }
    },
  },
});
</script>

<style lang="less">
  .code-previewer {
    margin-top: 1.2rem;
    position: relative;
  }
  pre.hljs.vue {
    font-size: 12px;
    padding: 1em;
    max-height: 40em;
    overflow: auto;
    border-radius: 0.5em;
    border-top: 2em solid hsl(54deg 100% 50%);
    will-change: box-shadow, height, opacity;
    // margin: 2em;
    transition: all 0.2s ease;
    font-family: "SF Mono", Monaco, Menlo, Courier, monospace;

    background: linear-gradient(90deg, hsl(251deg 69% 20%), hsl(264deg 100% 50%));
    color: hsl(54deg 100% 70%);

    &:hover {
      box-shadow: 0px 0px 0px 4px hsl(231deg 100% 60%);
    }
  }
</style>
