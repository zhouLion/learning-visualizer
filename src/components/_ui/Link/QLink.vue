<template>
  <router-link v-if="isRouterLink" v-bind="$props">
    <slot></slot>
  </router-link>
  <a href v-else>
    <slot></slot>
  </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    to: {
      type: [String, Object],
    },
  },
  computed: {
    isRouterLink(): boolean {
      return this.to && this.to.path;
    },
  },
});
</script>

<style scoped>
</style>
