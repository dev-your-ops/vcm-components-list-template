import Vue from 'vue';
import App from './App.vue';

// import tailwaindcss
import './assets/styles/index.css';

import '../../index.js';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
