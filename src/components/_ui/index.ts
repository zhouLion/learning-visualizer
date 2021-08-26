import { VueConstructor } from 'vue';
import { findScopeComponents } from '@/utils/register-components';

const requireComponent = require.context(
  // 其组件目录的相对路径
  './',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /Q.*\.(vue|ts|tsx)$/,
);

export const { components } = findScopeComponents(requireComponent);

export function install(Vue: VueConstructor) {
  Object.entries(components).forEach(([componentId, component]) => {
    Vue.component(componentId, component);
  });
}

export default {
  install,
};
