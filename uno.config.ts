import {defineConfig, presetIcons, presetMini, presetTypography} from "unocss";
import {presetUni} from '@uni-helper/unocss-preset-uni'

export default defineConfig({
    presets: [
        presetUni(),
        presetIcons({
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle',
            }
        }),
        //@ts-ignore
        presetTypography(),
    ],
    shortcuts:[
        {'c-primary':'c-#4D80F0'}
    ]
})