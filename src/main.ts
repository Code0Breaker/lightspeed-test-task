import App from "./App.vue";
import { createApp } from "vue";
import { router } from "./router/router";

import "./assets/styles/globals.scss";

createApp(App).use(router).mount("#app");
