import { createApp } from "vue";
import { VueFire, VueFireAuth } from "vuefire";
import { createPinia } from "pinia";

import "@/style.css";

import App from "@/App.vue";
import router from "@/router";
import { firebaseApp } from "@/firebase-config";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});
app.mount("#app");
