import Vue from 'vue';
import { PropsDefinition } from 'vue/types/options';
import { VNode } from 'vue/types/index';
import './QSkeleton.less';

export const name = 'QSkeleton';

export const props: PropsDefinition<{
  mode: string
  magicString: string
  animation: boolean
}> = {
  // TODO: 模式
  mode: {
    type: String,
    validator(val) {
      return ['article', 'post', 'code'].includes(val);
    },
  },
  magicString: {
    type: String,
    required: false,
  },
  animation: {
    type: Boolean,
    default: true,
  },
};

export default Vue.extend({
  name,
  props,
  computed: {
    QSkeletonClasses(): object {
      return {
        'q-skeleton': true,
        'q-skeleton--animation': this.animation,
      };
    },
  },
  render(): VNode {
    const { magicString, parseMagicString, QSkeletonClasses } = this;
    return (
      magicString
        ? (
          <div class={QSkeletonClasses}>
            {parseMagicString(magicString)}
          </div>
        )
        : (
          <div class={QSkeletonClasses}></div>
        )
    );
  },
  methods: {
    parseMagicString(magicString: string) {
      return magicString.split(';')
        .map(str => (
          <div class="q-skeleton__row">
            {str.split('').map(this.charToJSX)}
          </div>
        ));
    },
    charToJSX(char: string, _index: number): VNode | null {
      // <small>(「b」：按钮；「p」：块；「oO」：圆；,占位；「-」：行内块；「;」：换行；其它可自定义)</small>
      if (char === null || char === '') {
        return null;
      }
      switch (char) {
        case 'o': // 一个小圈，一般表示小 icon
          return (<div class="q-skeleton__item q-skeleton__item__circle"></div>);
        case 'O': // 一个大圈，一般表示头像
          return (<div class="q-skeleton__item q-skeleton__item__bigc"></div>);
        case 'b': // 按钮
          return (<div class="q-skeleton__item q-skeleton__item__button"></div>);
        case ',': // 占位，右侧的元素会有自适应的 margin-left
          return (<div class="q-skeleton__item q-skeleton__item__space"></div>);
        case 'p': // 段落
          return (<div class="q-skeleton__item q-skeleton__item__paragraph"></div>);
        case '-': // 行内短块
          return (<div class="q-skeleton__item q-skeleton__item__line"></div>);
        default: // 支持自定义
          return (<div class={`q-skeleton__item q-skeleton__item__${char}`}></div>);
      }
    },
  },
});
