// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Meta from 'vue-meta'
import VueAnalytics from 'vue-analytics'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(Meta);

Vue.use(VueAnalytics, {
  id: 'UA-125048472-1',
  router,
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  }
})

Vue.component('font-awesome-icon', FontAwesomeIcon)
import {
  faPhone,
  faSearchPlus
  }
  from '@fortawesome/free-solid-svg-icons';

library.add(faPhone, faSearchPlus); // eslint-disable-line
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
