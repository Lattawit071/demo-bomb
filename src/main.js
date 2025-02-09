import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia"; // เพิ่มการนำเข้า createPinia

import "./assets/main.css";

const app = createApp(App);
app.use(router);
app.use(createPinia()); // ติดตั้ง Pinia ให้กับแอป
app.mount("#app");
