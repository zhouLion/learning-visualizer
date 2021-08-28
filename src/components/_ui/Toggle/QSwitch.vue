<template>
  <label :for="inputID" :class="QSwitchClasses" :style="{
    'flex-direction': flexDirection,
  }">
    <slot>{{ label }}</slot>
    <input
      type="checkbox"
      :id="inputID"
      role="switch"
      class="q-switch__input"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
      v-bind="$attrs"
    />
  </label>
</template>

<script lang="ts">
import Vue from 'vue';
// eslint-disable-next-line import/no-unresolved
import { PropValidator } from 'vue/types/options';

const QSwitch = {
  count: 0,
};

export const name = 'QSwitch';

export default Vue.extend({
  name,
  data() {
    return {
      // eslint-disable-next-line no-plusplus
      inputID: `${name}-${++QSwitch.count}`,
    };
  },

  model: {
    prop: 'checked',
    event: 'change',
  },

  inheritAttrs: false,

  computed: {
    QSwitchClasses(): object {
      const { size, flexDirection } = this;
      const classes = {
        'q-switch': true,
        [`q-switch--${size}`]: size,
        [`q-switch--${flexDirection}`]: flexDirection,
      };
      return classes;
    },
  },

  props: {
    checked: Boolean,
    label: String,
    flexDirection: {
      type: String,
      default: 'row',
    } as PropValidator<'' | 'row' | 'column' | 'row-reverse' | 'column-reverse'>,
    size: {
      type: String,
      default: '',
    } as PropValidator<'' | 'small' | 'large' | 'mini'>,
  },
});
</script>

<style lang="less">
.q-switch {
  --thumb-size: 1.5rem;
  --thumb-color: hsl(270 50% 50%);
  --thumb-color-highlight: hsl(100 20% 100%);

  --track-size: calc(var(--thumb-size) * 2);
  --track-padding: 0.1em;
  --track-inactive: hsl(100 20% 100%);
  --track-active: hsl(270 60% 45%);

  --highlight-size: calc(var(--thumb-size) * 0.1);

  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  display: flex;
  align-items: center;
  gap: 2ch;
  justify-content: space-between;

  &--small {
    --thumb-size: 1.2rem;
  }

  &--large {
    --thumb-size: 2rem;
  }

  &--mini {
    --thumb-size: 1rem;
  }

  &--row-reverse {
    display: flex;
    flex-direction: row-reverse;
  }

  &--column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &--column-reverse {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  .q-switch__input {
    --thumb-position: 0%;

    appearance: none;
    border: none;
    outline-offset: 5px;
    box-sizing: content-box;

    padding: var(--track-padding);
    background: var(--track-inactive);
    inline-size: var(--track-size);
    block-size: var(--thumb-size);
    border-radius: var(--track-size);

    inline-size: var(--track-size);
    block-size: var(--thumb-size);
    padding: var(--track-padding);

    flex-shrink: 0;
    display: grid;
    align-items: center;
    grid: [track] 1fr / [track] 1fr;

    transition: background 0.2s ease-out;

    &::before {
      content: "";
      grid-area: track;
      inline-size: var(--thumb-size);
      block-size: var(--thumb-size);
      background: var(--thumb-color);
      border-radius: 50%;
      transform: translateX(var(--thumb-position));

      transition: all 0.2s ease-out;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:indeterminate {
      --thumb-position: calc((var(--track-size) / 2) - (var(--thumb-size) / 2));
    }

    &:hover {
      &::before {
        box-shadow: 0 0 0 var(--highlight-size) var(--thumb-color-highlight);
      }
    }

    // 状态改变时，改变滑块的位置
    &:checked {
      --thumb-position: calc(var(--track-size) - 100%);
      background: var(--track-active);

      &::before {
        background: var(--thumb-color-highlight);
      }
    }
  }
}
</style>
