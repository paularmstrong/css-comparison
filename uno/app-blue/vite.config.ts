import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import UnoCSS from 'unocss/vite';
import { theme } from '@uno/theme-blue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [UnoCSS({ theme }), react()],
	build: {
		minify: false,
	},
});
