<template>
  <div :class="QButtonGroupClasses">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'q-button-group',

  computed: {
    QButtonGroupClasses() {
      return {
        'q-button-group': true,
      };
    },
  },
});

</script>

<style lang="less">
  .q-button-group {
    .q-button {
      & + .q-button {
        margin-left: 0.1em;
      }

      &:first-child {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }

      &:last-child {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }

      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
    }
  }
</style>
