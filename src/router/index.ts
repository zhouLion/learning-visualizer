import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import RouterTypes from './RouterTypes';

Vue.use(VueRouter);

export const ARTICLES_ROUTERS: RouteConfig[] = [
  {
    path: 'three',
    name: RouterTypes.THREE_ARTICLE,
    component: () => import(/* webpackChunkName: "three-demo" */ '../views/articles/three/index.vue'),
    meta: {
      title: 'ThreeJS',
    },
  },
  {
    path: 'd3',
    name: RouterTypes.D3_ARTICLE,
    component: () => import(/* webpackChunkName: "d3-demo" */ '../views/articles/d3/index.vue'),
    meta: {
      title: 'D3.js',
    },
  },
  {
    path: 'ol',
    name: RouterTypes.OL_ARTICLE,
    component: () => import(/* webpackChunkName: "ol-demo" */ '../views/articles/ol/index.vue'),
    meta: {
      title: 'Openlayers',
    },
  },
  {
    path: 'canvas',
    name: RouterTypes.CANVAS_ARTICLE,
    component: () => import(/* webpackChunkName: "canvas-demo" */ '../views/articles/canvas/index.vue'),
    meta: {
      title: 'canvas',
    },
  },
  {
    path: 'svg',
    name: RouterTypes.SVG_ARTICLE,
    component: () => import(/* webpackChunkName: "svg-demo" */ '../views/articles/svg/index.vue'),
    meta: {
      title: 'svg',
    },
  },
];

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/ui',
    name: 'ui',
    component: () => import(/* webpackChunkNameL "ui" */ '../views/Components.vue'),
  },
  {
    path: '/articles',
    name: RouterTypes.EXAMPLE_INDEX,
    component: () => import(/* webpackChunkName: "articles" */ '../views/articles/intro.vue'),
    children: ARTICLES_ROUTERS,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
