import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Products from '@/components/Products';

Vue.use(Router);

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    { path: '*', redirect: '/' }, // catch all use case
  ],
});
