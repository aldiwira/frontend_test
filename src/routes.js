import Home from './views/Home.vue';
import Detail from './views/Detail.vue';
import Cart from './views/Cart.vue';
import NotFound from './views/NotFound.vue';

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/detail/:id',
    component: Detail,
    meta: { title: 'Detail' },
    props: true,
  },
  { path: '/cart', component: Cart, meta: { title: 'Cart' }, props: true },
  { path: '/:path(.*)', component: NotFound },
];
