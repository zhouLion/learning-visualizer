<template>
  <article-layout />
</template>
<script lang="ts">
import Vue from 'vue';
import factoryArticleLayout from '@/components/Layout/ArticleLayout';
import { findAsyncComponents } from '@/utils/register-components';

const requireComponents = require.context(
  './',
  false,
  /chapter.*\.(vue)$/,
  'lazy',
);

const requireCodes = require.context(
  '!!highlight-loader!./',
  false,
  /chapter.*\.(vue)$/,
  'lazy',
);

const {
  components,
  componentNameList,
} = findAsyncComponents(requireComponents);

const codeList = findAsyncComponents(requireCodes).components;

const searchedChapters = {
  components,
  componentNameList,
  codeList,
};

export default Vue.extend({
  components: {
    ArticleLayout: factoryArticleLayout(
      searchedChapters.components,
      searchedChapters.codeList,
      searchedChapters.componentNameList,
    ),
  },
});
</script>
