import {defineConfig} from 'vite';
import checker from 'vite-plugin-checker';
import {fileURLToPath, URL} from 'node:url';
import {resolveViteEnv} from './build.env';

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
	const buildEntry = 'index';
	const input = './index.html';
	const isDev = mode === 'development';
	const tsconfigPath = isDev ? './tsconfig.dev.json' : './tsconfig.json';

	return {
		base: './',
		resolve: {
			alias: {
				'~': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		build: {
			watch: mode === 'development' ? {} : null,
			outDir: './dist',
			emptyOutDir: true,
			assetsDir: 'scripts',
			cssCodeSplit: false,
			rollupOptions: {
				input,
				output: {
					// todo allow code splitting when esmodules are implemented
					codeSplitting: false,
					entryFileNames: `scripts/${buildEntry}.js`,
					chunkFileNames: 'scripts/[name].js',
					assetFileNames: 'scripts/[name].[ext]',
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
