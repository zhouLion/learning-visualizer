<template>
  <div class="hello">
    <h1>数据可视化 Demo</h1>
    <small>{{ msg }}</small>
    <ul>
      <li v-for="menu in menuList" :key="menu.name">
        <router-link :to="{ name: menu.name }" rel="noopener">{{ getMetaTitle(menu) }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { RouteConfig } from 'vue-router';
import { ARTICLES_ROUTERS } from '@/router/index';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      menuList: ARTICLES_ROUTERS,
    };
  },
  methods: {
    getMetaTitle(menu: RouteConfig) {
      return menu.meta ? menu.meta.title : menu.name;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #b39ddb;
}
</style>
