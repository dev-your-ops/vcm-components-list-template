import Vue from 'vue';
import App from './App.vue';

// import tailwaindcss
import './assets/styles/index.css';

Vue.config.productionTip = false;

import registerComponents from '../../index.js';

if (registerComponents) {
  registerComponents(Vue);
}

new Vue({
  render: (h) => h(App),
}).$mount('#app');
