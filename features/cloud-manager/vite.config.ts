import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cloud-manager-host',
      remotes: {
        '@remote/volumes': "http://localhost:4001/dist/assets/remoteEntry.js"
      },
      shared: ['react', 'react-dom'],
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});