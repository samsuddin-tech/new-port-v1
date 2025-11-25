import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Ensures process.env.API_KEY is available in the client code if defined at build time
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  },
  preview: {
    allowedHosts: ["new-port-v1-npwl.onrender.com"]
  }
});