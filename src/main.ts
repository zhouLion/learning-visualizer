import Vue from 'vue';
import '@/utils/register-hljs';
import QUI from '~/index';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './styles/main.less';

Vue.config.productionTip = false;
Vue.use(QUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
