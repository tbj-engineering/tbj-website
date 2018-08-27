import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta'

import Contact from '@/components/Contact';
import Homepage from '@/components/Homepage';
import Services from '@/components/Services';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/products',
      name: 'products',
      component: Services,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
