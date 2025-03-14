import { defineConfig } from "vite";

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use '/src/styles/global/mixins.scss' as *;`
            }
        }
    }
});