<template>
  <button :class="QButtonClasses" v-bind="$attrs" v-on="$listeners">
    <slot>
      <span v-if="text">{{ text }}</span>
    </slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line
import { PropsDefinition } from 'vue/types/options';

export const props: PropsDefinition<{
  size: 'mini' | 'default' | 'large'
  type: string
  text: string | number
  round: boolean
  block: boolean
}> = {
  size: {
    default: 'default',
    validator(value: string) {
      return ['mini', 'default', 'large'].includes(value);
    },
  },
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
        'q-button--mini': this.size === 'mini',
        'q-button--default': this.size === 'default',
        'q-button--large': this.size === 'large',
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
  // line-height: 1em;
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

  &--mini {
    padding: 0.3em 0.5em;
    font-size: 0.8em;
    // line-height: ;
  }

  &--default {
    padding: 0.6em 0.9em;
    font-size: 0.9em;
  }

  &--large {
    padding: 0.8em 1.2em;
    font-size: 1.1em;
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
