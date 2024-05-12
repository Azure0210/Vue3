// vite.config.js
import { fileURLToPath, URL } from "node:url";
import AutoImport from "file:///D:/vs%20code/Vue3-program/vue-rabbit/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.9.0_vue@3.4.26__rollup@4.17.2/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/vs%20code/Vue3-program/vue-rabbit/node_modules/.pnpm/unplugin-vue-components@0.27.0_@babel+parser@7.24.5_rollup@4.17.2_vue@3.4.26/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/vs%20code/Vue3-program/vue-rabbit/node_modules/.pnpm/unplugin-vue-components@0.27.0_@babel+parser@7.24.5_rollup@4.17.2_vue@3.4.26/node_modules/unplugin-vue-components/dist/resolvers.js";
import { defineConfig } from "file:///D:/vs%20code/Vue3-program/vue-rabbit/node_modules/.pnpm/vite@5.2.11_sass@1.76.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/vs%20code/Vue3-program/vue-rabbit/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.11_sass@1.76.0__vue@3.4.26/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/vs%20code/Vue3-program/vue-rabbit/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: "sass" })]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入scss文件
        additionalData: `
          @use "@/styles/element/index.scss" as *;
          @use "@/styles/var.scss" as *;
        `
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx2cyBjb2RlXFxcXFZ1ZTMtcHJvZ3JhbVxcXFx2dWUtcmFiYml0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx2cyBjb2RlXFxcXFZ1ZTMtcHJvZ3JhbVxcXFx2dWUtcmFiYml0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi92cyUyMGNvZGUvVnVlMy1wcm9ncmFtL3Z1ZS1yYWJiaXQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoIHsgaW1wb3J0U3R5bGU6ICdzYXNzJyB9ICldLFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9LFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzY3NzOiB7XG4gICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NXNjc3NcdTY1ODdcdTRFRjZcbiAgICAgICAgYWRkaXRpb25hbERhdGE6IGBcbiAgICAgICAgICBAdXNlIFwiQC9zdHlsZXMvZWxlbWVudC9pbmRleC5zY3NzXCIgYXMgKjtcbiAgICAgICAgICBAdXNlIFwiQC9zdHlsZXMvdmFyLnNjc3NcIiBhcyAqO1xuICAgICAgICBgLFxuICAgICAgfVxuICAgIH1cbn1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtTLFNBQVMsZUFBZSxXQUFXO0FBRXJVLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBQ3BDLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQU5tSyxJQUFNLDJDQUEyQztBQVNwTyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxJQUNuQyxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQXFCLEVBQUUsYUFBYSxPQUFPLENBQUUsQ0FBQztBQUFBLElBQzVELENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBO0FBQUEsUUFFSixnQkFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlsQjtBQUFBLElBQ0Y7QUFBQSxFQUNKO0FBQ0EsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
