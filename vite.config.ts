import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const ENV_PREFIX = ['VITE_']

export default defineConfig(() => ({
  envPrefix: ENV_PREFIX,
  server: { port: 4001, host: false },
  define: { 'process.env.ANCHOR_BROWSER': true },
  plugins: [
    react({ jsxRuntime: 'classic' }),
  ],
}))
