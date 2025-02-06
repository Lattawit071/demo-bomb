import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/login.vue";
import demoTop from "./components/demoTop.vue";
import demoContent from "./components/demoContent.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/demoTop", component: demoTop },
  { path: "/demoContent", component: demoContent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
