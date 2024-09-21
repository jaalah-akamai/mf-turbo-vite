import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'

export default defineConfig({
  plugins: [
    // react(),
    react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
    federation({
      name: 'volumes',
      filename: 'remoteEntry.js',
      exposes: {
        "./Volumes": "./src/App.tsx",
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