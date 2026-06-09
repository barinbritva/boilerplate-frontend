import type {CapacitorConfig} from '@capacitor/cli';
import {env} from './env';

const isDev = env.nodeEnv === 'development';
// In dev we use protocol from provided dev server URL, in prod we default to https
const scheme = isDev ? new URL(env.devServerUrl).protocol.replace(':', '') : 'https';

const config: CapacitorConfig = {
	appId: 'com.example.app',
	appName: 'frontend',
	webDir: 'dist',
	server: {
		androidScheme: scheme,
		// In dev we use provided dev server URL instead of using physical built files from dist folder
		// enabling live reload and other dev features
		...(isDev && {
			url: env.devServerUrl,
			cleartext: true,
		}),
	},
};

export default config;
