import {createSSRApp} from "vue";
import App from "./App.vue";
//@ts-ignore
import uvUI from '@climblee/uv-ui'
import 'uno.css'

export function createApp() {
    const app = createSSRApp(App);
    app.use(uvUI);
    return {
        app,
    };
}
