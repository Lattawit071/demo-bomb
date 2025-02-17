import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/login.vue";
import demoTop from "./components/Header.vue";
import demoContent from "./components/Content.vue";
import phoneDetails from "./components/phoneDetails.vue";
import demo from "./components/demo.vue";
import iotDetails from "./components/iotDetails.vue";
import CustomerPage from "./components/CustomerPage.vue";
import IotDevicesForCustomer from "./components/IotDevicesForCustomer.vue";
import irRemoteDevice from "./components/devices/irRemoteDevice.vue";
import meshDevice from "./components/devices/meshDevice.vue";
import routerDevice from "./components/devices/routerDevice.vue";
import cctvDevice from "./components/devices/cctvDevice.vue";
import trueIDBoxDevice from "./components/devices/trueIDBoxDevice.vue";
import doorWindowSensorDevice from "./components/devices/doorWindowSensorDevice.vue";
import smartSOSDevice from "./components/devices/smartSOSDevice.vue";
import smartSirenDevice from "./components/devices/smartSirenDevice.vue";
import motionSensorDevice from "./components/devices/motionSensorDevice.vue";
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
    path: "/phone-detail/:phoneId/iot-devices/smart-siren",
    name: "smartSirenDevice",
    component: smartSirenDevice,
    props: true,
  },
  {
    path: "/phone-detail/:phoneId/iot-devices/door-windows-sensor",
    name: "doorWindowSensorDevice",
    component: doorWindowSensorDevice,
    props: true,
  },
  {
    path: "/phone-detail/:phoneId/iot-devices/smart-motion-sensor",
    name: "motionSensorDevice",
    component: motionSensorDevice,
    props: true,
  },
  {
    path: "/phone-detail/:phoneId/iot-devices/smart-sos-button",
    name: "trueoxDevice",
    component: smartSOSDevice,
    props: true,
  },

  {
    path: "/demo",
    name: "demo",
    component: demo,
    props: true,
  },
  {
    path: "/customer/0912345678",
    name: "CustomerPage",
    component: CustomerPage,
  },
  {
    path: "/customer/:phone/iot-devices",
    name: "IotDevicesForCustomer",
    component: IotDevicesForCustomer,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
