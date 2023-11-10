import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import uiComponents from "./ui"
const app = createApp(App)
app.use(store)
app.use(router)


uiComponents.map((item) => app.component(item.name, item))


app.mount("#app")