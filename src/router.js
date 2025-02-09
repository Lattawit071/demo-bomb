import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/login.vue";
import demoTop from "./components/Header.vue";
import demoContent from "./components/Content.vue";
import phoneDetails from "./components/phoneDetails.vue";
import test from "./components/demo.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/demoTop", component: demoTop },
  { path: "/demoContent", component: demoContent },
  {
    path: "/phone-detail/:phoneId", // ใช้ :phoneId เพื่อรับข้อมูลจาก URL
    name: "phoneDetail",
    component: phoneDetails,
    props: true, // จะส่ง phoneId ให้กับ component ใน prop
  },
  {
    path: "/test", // เพิ่ม route สำหรับ test.vue
    name: "test",
    component: test,
    props: true, // ส่ง phoneId ไปที่ component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
