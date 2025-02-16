import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/login.vue";
import demoTop from "./components/Header.vue";
import demoContent from "./components/Content.vue";
import phoneDetails from "./components/phoneDetails.vue";
import demo from "./components/demo.vue";
import iotDetails from "./components/iotDetails.vue";
import routerDevice from "./components/routerDevice.vue";
import cctvDevice from "./components/cctvDevice.vue";
import trueIDBoxDevice from "./components/trueIDBoxDevice.vue";
import irRemoteDevice from "./components/irRemoteDevice.vue";
import meshDevice from "./components/meshDevice.vue";
import CustomerFooter from "./components/CustomerFooter.vue";
import CustomerPage from "./components/CustomerPage.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/demoTop", component: demoTop },
  { path: "/demoContent", component: demoContent },
  {
    path: "/customerPage",
    name: "CustomerPage",
    component: CustomerPage,
  },
  {
    path: "/phone-detail/:phoneId",
    name: "phoneDetail",
    component: phoneDetails,
    props: true,
  },
  {
    path: "/phone-detail/:phoneId/iot-devices",
    component: iotDetails,
    props: true,
  },
  {
    path: "/phone-detail/:phoneId/iot-devices/router-wifi",
    name: "routerDevice",
    component: routerDevice,
    props: true,
  },
  {
    path: "/phone-detail/:phoneId/iot-devices/กล้อง-cctv",
    name: "cctvDevice",
    component: cctvDevice,
    props: true,
  },
  {
    path: "/phone-detail/:phoneId/iot-devices/mesh-wifi",
    name: "meshDevice",
    component: meshDevice,
    props: true,
  },
  {
    path: "/phone-detail/:phoneId/iot-devices/ir-remote-control",
    name: "irDevice",
    component: irRemoteDevice,
    props: true,
  },
  {
    path: "/phone-detail/:phoneId/iot-devices/trueIDBox",
    name: "trueoxDevice",
    component: trueIDBoxDevice,
    props: true,
  },

  {
    path: "/demo",
    name: "demo",
    component: demo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
