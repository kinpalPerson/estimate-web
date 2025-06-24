import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: './', // ✅ 이 줄 추가해줘야 상대 경로 처리 가능
})
