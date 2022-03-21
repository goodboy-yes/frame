import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@/assets/styles/main.scss";',
			},
		},
	},
	// 代理配置
	server: {
		host: '0.0.0.0',
		port: 3000,
		open: true,
		https: false,
		proxy: {},
	},
})
