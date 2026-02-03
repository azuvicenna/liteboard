import { createApp } from "vue";
import "./assets/css/style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

if (import.meta.env.PROD) {
  document.addEventListener(
    "contextmenu",
    (e) => {
      e.preventDefault();
      return false;
    },
    { capture: true },
  );
}

app.use(pinia);
app.use(router);
app.mount("#app");
