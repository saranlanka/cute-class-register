import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: '/cute-class-register/',
  plugins: [react()],
});
