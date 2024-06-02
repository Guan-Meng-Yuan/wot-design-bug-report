import {defineConfig} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from 'unplugin-auto-import/vite'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import Components from '@uni-helper/vite-plugin-uni-components'
import {WotResolver} from '@uni-helper/vite-plugin-uni-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(async () => {
    const UnoCSS = (await import("unocss/vite")).default;
    return {
        plugins: [AutoImport({
            imports: [
                'vue',
                'uni-app',

            ]
        }), Components({
            resolvers: [WotResolver()]
        }), UniLayouts(), uni(), UnoCSS()],
    }
});
