import {loadEnv} from 'vite';

export function resolveViteEnv(mode: string) {
	const environment = loadEnv(mode, process.cwd(), '');

	return {
		devServerPort: environment['DEV_SERVER_PORT'] ? Number(environment['DEV_SERVER_PORT']) : 5173,
	};
}
