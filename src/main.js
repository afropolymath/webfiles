import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppContainer from "./pages/App";
import FolderViewer from "./pages/FolderViewer";

import store from "./store";

const routes = [
  {
    name: "login",
    path: "/",
    component: Login,
  },
  {
    name: "register",
    path: "/register",
    component: Register,
  },
  {
    name: "app",
    path: "/app",
    component: AppContainer,
    children: [
      {
        name: "folder",
        path: "/folder/:folderId",
        component: FolderViewer,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
