import Vue from 'vue';
import CodePreview from '@/components/CodePreview.vue';
import './ArticleLayout.less';

/**
 * 文章布局的高阶函数组件
 * @param components 注册的组件对象
 * @param codeList 源代码列表
 * @param chapterList 章节索引，用于遍历章节和章节的源代码
 */
const factoryArticleLayout = (
  components: Record<string, any>,
  codeList: Record<string, any>,
  chapterList: string[],
) => Vue.extend({
  data() {
    return {
      currentPage: '',
    };
  },

  components: {
    ...components,
    CodePreview,
  },

  render() {
    const {
      onclickPrev,
      onclickNext,
      currentIndex,
      isShow,
      createPromise,
    } = this;
    return (
      <article class="demo-article" ref="article">
        <header class="demo-article__header">
          <q-button-group>
            <q-button
              onclick={onclickPrev}
              disabled={currentIndex === 0}>
              🤛上一页
            </q-button>
            <q-button
              onclick={onclickNext}
              disabled={currentIndex === chapterList.length - 1}>
              下一页🤜
            </q-button>
          </q-button-group>
        </header>
        <slot name="before"></slot>
        <section class="section-wrapper">
          {
            chapterList.map((chapter, index) => (
              isShow(chapter) ? (
                <div key={index}>
                  {/* chapter 是章节组件，是通过 webpack 的 require.context 动态引入的 */}
                  <chapter />
                  <code-preview codePromise={createPromise(chapter)} />
                </div>
              ) : null
            ))
          }
        </section>
      </article >
    );
  },

  mounted() {
    const { page } = this.$route.query;
    if (page) {
      this.currentPage = page.toString();
    }
    this.adjustCurrentPage();
    // this.bindArrowEvent();
    document.addEventListener('keydown', this.onkeydown);
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.onkeydown);
  },

  computed: {
    currentIndex(): number {
      const { currentPage } = this;
      return chapterList.indexOf(currentPage);
    },
  },

  methods: {
    onkeydown(evt: KeyboardEvent) {
      if (evt.key === 'ArrowRight') {
        this.onclickNext();
      } else if (evt.key === 'ArrowLeft') {
        this.onclickPrev();
      }
    },

    createPromise(name: string) {
      return codeList[name];
    },

    onclickPrev() {
      this.currentPage = chapterList[this.currentIndex - 1];
      this.adjustCurrentPage();
    },

    onclickNext() {
      this.currentPage = chapterList[this.currentIndex + 1];
      this.adjustCurrentPage();
    },

    adjustCurrentPage() {
      const { currentPage } = this;
      if (!chapterList.includes(currentPage)) {
        [this.currentPage] = chapterList;
      }
      this.changeRouter();
    },

    isShow(name: string): boolean {
      const { currentPage, $route } = this;
      return name === ($route.query.page || currentPage);
    },

    changeRouter() {
      try {
        // 这里判断 fullPath 是否相等，防止重复跳转
        const { currentPage, $router, $route } = this;
        const resolvedFullPath = $router.resolve({
          ...$route,
          query: {
            page: currentPage,
          },
        }).resolved.fullPath;
        if (!$route.query.page || resolvedFullPath !== $route.fullPath) {
          $router.push({
            query: {
              page: currentPage,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default factoryArticleLayout;
