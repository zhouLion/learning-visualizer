import { camelCase, upperFirst } from 'lodash';

export function registerGlobalComponent() {
  throw new Error('not implements');
}

/**
 * 注册局部组件
 * @param requireComponent webpack 模块上下文
 */
export function findScopeComponents(requireComponent: __WebpackModuleApi.RequireContext) {
  const components: Record<string, any> = {};
  const componentNameList: string[] = [];

  requireComponent.keys().forEach((fileName) => {
    if (!fileName) {
      return;
    }
    const componentConfig = requireComponent(fileName).default;
    // 获取和目录深度无关的文件名
    const fileNameWithoutPath = fileName.split('/').pop();
    if (!fileNameWithoutPath) {
      return;
    }
    const componentName = upperFirst(
      camelCase(fileNameWithoutPath.replace(/\.\w+$/, '')),
    );
    if (componentConfig) {
      components[componentName] = componentConfig;
      componentNameList.push(componentName);
    }
  });
  return {
    components,
    componentNameList,
  };
}

export function findAsyncComponents(requireComponent: __WebpackModuleApi.RequireContext) {
  const components: Record<string, () => Promise<any>> = {};
  const componentNameList: string[] = [];

  requireComponent.keys().forEach((fileName) => {
    if (!fileName) {
      return;
    }
    const asyncComponent = () => Promise.resolve(requireComponent(fileName));
    // 获取和目录深度无关的文件名
    const fileNameWithoutPath = fileName.split('/').pop();
    if (!fileNameWithoutPath) {
      return;
    }
    const componentName = upperFirst(
      camelCase(fileNameWithoutPath.replace(/\.\w+$/, '')),
    );
    components[componentName] = asyncComponent;
    componentNameList.push(componentName);
  });
  return {
    components,
    componentNameList,
  };
}

export function joinPath(...args: Array<string>) {
  return args
    .join('/')
    .replace(/[/]+/g, '/')
    .replace(/\?/g, '&')
    .replace('&', '?');
}

export function getRelativePath(libPath: string) {
  return joinPath(process.env.BASE_URL, libPath);
}
