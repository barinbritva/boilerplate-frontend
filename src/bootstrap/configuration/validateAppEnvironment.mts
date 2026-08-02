// File must have .mts extension to work in setup-app-env.mts script

export interface AppEnvironment {
	API_URL: string;
}

const appEnvs = ['API_URL'] as const;

function isDictionary(obj: unknown): obj is Record<string, unknown> {
	return typeof obj === 'object' && obj !== null;
}

function isAppEnvironment(obj: unknown): obj is AppEnvironment {
	if (typeof obj !== 'object' || obj === null) {
		return false;
	}

	return appEnvs.every((key) => typeof (obj as Record<string, unknown>)[key] === 'string');
}

export function validateAppEnvironment(environmentVars: unknown): AppEnvironment {
	if (!isDictionary(environmentVars)) {
		throw new Error('Environment variables are not set.');
	}

	const config: Record<string, unknown> = {};
	const errors: string[] = [];

	appEnvs.forEach((key) => {
		if (environmentVars[key] == null) {
			errors.push(`${key} not defined`);
		} else {
			config[key] = environmentVars[key];
		}
	});

	if (errors.length > 0) {
		throw new Error(`App environment errors:\n${errors.join('\n')}`);
	}

	if (!isAppEnvironment(config)) {
		throw new Error('App environment is not valid');
	}

	// custom validations here
	if (!/^https?:\/\//.test(config.API_URL)) {
		errors.push('API_URL must start with http:// or https://');
	}

	if (errors.length > 0) {
		throw new Error(`App environment errors:\n${errors.join('\n')}`);
	}

	return config;
}
