import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // 判斷是否為開發中、產品路徑
  base: process.env.NODE_ENV === "production" ? "/react-gh-pages-sample" : "/",
  plugins: [react()],
});
