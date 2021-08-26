<template>
  <q-button-group>
    <q-button @click="onclickBtn" :text="count"></q-button>
    <q-button disabled @click="onclickBtn">常规禁用按钮</q-button>
    <q-button type="secondary" text="次要按钮"></q-button>
    <button>😯我不属于这里</button>
    <q-button disabled type="secondary">次要禁用按钮</q-button>
  </q-button-group>
</template>

<script>
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
