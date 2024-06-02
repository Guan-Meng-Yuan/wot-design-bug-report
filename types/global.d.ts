/// <reference types="vite/client" />
import { VNode } from "vue";
declare global {
  interface ImportMetaEnv {
    readonly VITE_TARGET_DOMAIN: string;
    readonly VITE_API_PREFIX: string;
    // 更多环境变量...
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  interface Res<T> {
    result?: T;
    success: boolean;
    tips: string;
  }
}
