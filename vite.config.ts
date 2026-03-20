import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// This is the simplest possible config to get your site live
export default defineConfig({
  base: '/cute-class-register/',
  plugins: [react()],
});
