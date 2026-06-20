import {defineConfig} from 'vite';
import checker from 'vite-plugin-checker';
import {env} from './env';

// Required env variables
const APP_ENV_KEYS: string[] = [];

// Entries for multiple apps
// todo implement
const indexEntry = 'index';
const appsEntries: {
	index: string;
	[key: string]: string;
} = {
	[indexEntry]: './index.html',
};

function resolveAppEnvValue(key: (typeof APP_ENV_KEYS)[number]): string | never {
	if (process.env[key] === undefined) {
		throw new Error(`Missing required app env var: ${key}`);
	}

	return process.env[key];
}

function transformHtmlPlugin() {
	return {
		name: 'html-transform',
		transformIndexHtml(html: string) {
			return html;
		},
	};
}

export default defineConfig(({mode}) => {
	const isDev = mode === 'development';
	const buildEntry = indexEntry;
	const tsconfigPath = isDev ? './tsconfig.dev.json' : './tsconfig.json';
	const appEnv = APP_ENV_KEYS.reduce<Record<string, string>>((accumulator, key) => {
		accumulator[key] = resolveAppEnvValue(key);
		return accumulator;
	}, {});

	const input = appsEntries[buildEntry] ?? appsEntries.index;

	return {
		base: './',
		define: {
			__APP_ENV__: JSON.stringify(appEnv),
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
