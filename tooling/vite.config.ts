import {defineConfig} from 'vite';
import checker from 'vite-plugin-checker';
import {resolveViteEnv} from './build.env.js';

function transformHtmlPlugin() {
	return {
		name: 'html-transform',
		transformIndexHtml(html: string) {
			return html;
		},
	};
}

export default defineConfig(({mode}) => {
	const env = resolveViteEnv(mode);
	const isDev = mode === 'development';
	const tsconfigPath = isDev ? './src/tsconfig.dev.json' : './src/tsconfig.json';

	return {
		base: './',
		build: {
			watch: mode === 'development' ? {} : null,
			outDir: './dist',
			emptyOutDir: true,
			assetsDir: 'scripts',
			cssCodeSplit: false,
			rollupOptions: {
				input: './index.html',
				output: {
					entryFileNames: 'scripts/[name]-[hash].js',
					chunkFileNames: 'scripts/[name]-[hash].js',
					assetFileNames: 'scripts/[name]-[hash].[ext]',
				},
			},
		},
		plugins: [
			checker({
				typescript: {
					tsconfigPath,
				},
				biome: {
					command: 'lint',
					watchPath: 'src',
				},
			}),
			transformHtmlPlugin(),
		],
		server: {
			// host 0.0.0.0 runs server on local IP address along with localhost, f.e. http://192.168.1.43:5173/
			// it allows to test app on different devices in the same network
			host: '0.0.0.0',
			port: env.devServerPort,
			strictPort: true,
		},
	};
});
