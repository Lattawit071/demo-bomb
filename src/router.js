import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/login.vue";
import Menu from "./components/menu.vue";
import Sale from "./components/sale.vue"; // เพิ่มหน้า Sale
import Service from "./components/service.vue"; // เพิ่มหน้า Service
import Retention from "./components/retention.vue"; // เพิ่มหน้า Retention

const routes = [
  { path: "/", component: Login },
  { path: "/menu", component: Menu },
  { path: "/sale", component: Sale }, // กำหนดเส้นทางสำหรับหน้า Sale
  { path: "/service", component: Service }, // กำหนดเส้นทางสำหรับหน้า Service
  { path: "/retention", component: Retention }, // กำหนดเส้นทางสำหรับหน้า Retention
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
