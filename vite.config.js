import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Listen on all network interfaces
    port: 3000, // Specify the port number
  },
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx"], // Ensure .jsx is recognized
  },
});
