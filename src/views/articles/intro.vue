<template>
  <div class="layout">
    <header class="repositive-header">
      <router-link to="/" class="home-link">DV</router-link>

      <nav class="q-nav">
        <ul class="q-menu">
          <li class="q-memu__item" v-for="menu in menuList" :key="menu.name">
            <router-link :to="{ name: menu.name }">{{ menu.meta.title }}</router-link>
          </li>
          <li class="q-memu__item"></li>
          <li class="q-memu__item">
            <router-link :to="{ name: 'ui' }">QUI</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ARTICLES_ROUTERS } from '@/router/index';

export default Vue.extend({
  name: 'examplesIntro',
  data() {
    return {
      menuList: ARTICLES_ROUTERS,
    };
  },
});
</script>

<style lang="less" scoped>
header.repositive-header {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1em;
  background: #ede7f6;
  position: sticky;
  top: 0;
  width: 100%;
  box-shadow: 0 3px 10px -5px #b39ddb;
  z-index: 2;
}

li.q-memu__item {
  float: left;
  /* width: 60px; */
  list-style: none;
  margin-right: 4px;
  padding: 4px 8px;
}

ul.q-menu {
  margin: 0;

  a {
    text-decoration: none;
  }
}
</style>
