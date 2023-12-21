import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			'/v1/paygen': 'http://localhost:4000',
			'/server': 'http://localhost:4000',
		},
	},
	plugins: [react(), tsconfigPaths()],
})
