import type { App } from "vue";
import { plugin, defaultConfig } from '@formkit/vue'
import formKitConfig from '../formkit.config'

export const initializeFormKit = (app: App) => {
    app.use(plugin, defaultConfig(formKitConfig));
}

export { default as Sandbox } from './components/Sandbox.vue';
