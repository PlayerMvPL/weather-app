import reactPlugin from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    base: isProd ? "/weather-app/" : "/",
    plugins: [reactPlugin()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // Подключаем хелперы и переменные автоматически во ВСЕ файлы проекта
          additionalData: `@use "@/shared/assets/styles/helpers" as *;`,
        },
      },
    },
  };
});
