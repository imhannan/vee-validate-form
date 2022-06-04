import { createApp } from "vue";
import App from "./App.vue";
import veeValidate from "./plugins/vee-validate";

const app = createApp(App);
app.use(veeValidate);
app.mount("#app");
