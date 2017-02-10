import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import store from './store';
import Login from './pages/Login';
import App from './pages/App';
import FolderViewer from './pages/FolderViewer';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {
    name: 'login',
    path: '/',
    component: Login,
  },
  {
    name: 'app',
    path: '/app',
    component: App,
    children: [
      {
        name: 'folder',
        path: '/folder/:folderId',
        component: FolderViewer,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

(new Vue({
  router,
  store,
})).$mount('#app');
