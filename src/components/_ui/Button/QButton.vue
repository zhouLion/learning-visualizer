<template>
  <button :class="QButtonClasses" v-bind="$attrs" v-on="$listeners">
    <slot>
      <span v-if="text">{{text}}</span>
    </slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line
import { PropsDefinition } from 'vue/types/options';

export const props: PropsDefinition<{
  type: string
  text: string | number
  round: boolean
  block: boolean
}> = {
  type: {
    type: String,
  },
  text: {
    type: [String, Number],
  },
  round: {
    type: Boolean,
  },
  block: {
    type: Boolean,
  },
};

export default Vue.extend({
  name: 'q-button',
  props,
  computed: {
    QButtonClasses(): Record<string, boolean> {
      return {
        'q-button': true,
        'q-button--secondary': this.type === 'secondary',
        'q-button--round': this.round,
        'q-button--block': this.block,
      };
    },
  },
});
</script>

<style lang="less">
  .q-button {
    --hue: 270;
    --saturation: 100%;
    --lightness: 50%;
    --radius: 4px;

    display: inline-block;
    padding: 0.6em 0.9em;

    color: #ffffff;
    background-color: hsl(var(--hue), var(--saturation), var(--lightness));

    font-size: 0.9em;
    line-height: 1em;
    outline: none;
    border: none;
    border-radius: var(--radius);
    transition: background-color 0.2s ease;
    appearance: none;
    cursor: pointer;

    &:focus:not(:disabled),
    &:active:not(:disabled),
    &:hover:not(:disabled) {
      --lightness: 30%;
    }

    & + .q-button {
      margin-left: 0.3em;
    }

    &--secondary {
      --hue: 200;
    }

    &--block {
      width: 100%;
    }

    &--round {
      --radius: 8px;
    }

    &:disabled {
      --saturation: 10%;
      cursor: not-allowed;
    }
  }
</style>
