import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'a421-2409-40f4-215d-7617-1102-13-d141-d2d9.ngrok-free.app'
    ]
  }
})
