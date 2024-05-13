import { createApp } from 'vue'
import App from './App.vue'
import {initializeFormKit} from "./lib.ts";

const app = createApp(App)
initializeFormKit(app);
app.mount('#app')
