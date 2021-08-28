<template>
  <div class="demo">
    <div class="wrap">
      <q-switch :disabled="disabled" v-model="checked">默认</q-switch>
    </div>
    <div class="wrap">
      <q-switch :disabled="disabled" flex-direction="row-reverse" v-model="checked">反向</q-switch>
    </div>
    <div class="wrap">
      <q-switch :disabled="disabled" flex-direction="column" v-model="checked">上下</q-switch>
    </div>
    <div class="wrap">
      <q-switch :disabled="disabled" label="特小" size="mini" v-model="checked"></q-switch>
    </div>
    <div class="wrap">
      <q-switch :disabled="disabled" label="小" size="small" v-model="checked"></q-switch>
    </div>
    <div class="wrap">
      <q-switch :disabled="disabled" label="正常" v-model="checked"></q-switch>
    </div>
    <div class="wrap">
      <q-switch :disabled="disabled" label="大" size="large" v-model="checked"></q-switch>
    </div>
    <div class="wrap">
      <q-switch label="禁用它们" v-model="disabled" @change="onEvent($event, 'change')"></q-switch>
      <textarea v-model="events" rows="3" style="width: 100%; margin-top: 1em;"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      checked: true,
      disabled: false,
      events: '',
    };
  },
  methods: {
    onEvent(evt: any, type: string) {
      this.events = `${type}: ${evt}\n${this.events}\n`;
    },
  },
});
</script>
