<template>
  <div>
    <q-button @click="onclickBtn">常规按钮 {{count}}</q-button>
    <q-button disabled @click="onclickBtn">常规禁用按钮</q-button>
    <q-button type="secondary" text="次要按钮"></q-button>
    <q-button disabled type="secondary">次要禁用按钮</q-button>
  </div>
</template>

<script>
import { props } from '~/Button/QButton.vue';

export default {
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    onclickBtn() {
      this.count += 1;
    },
  },
};
</script>
