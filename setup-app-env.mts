import fs from 'node:fs';
import path from 'node:path';

const APP_ENV_VARIABLES = ['API_URL'] as const;

function setupEnv() {
	const variables = APP_ENV_VARIABLES;

	const missingVariables = variables.filter((variable) => {
		return process.env[variable] == null;
	});

	if (missingVariables.length > 0) {
		throw new Error(`Required variables are missing: ${missingVariables.join(', ')}.`);
	}

	const config: Record<string, string> = {};
	variables.forEach((variable) => {
		config[variable] = process.env[variable] as string;
	});

	// Container startup must redeclare the end dist directory (./dist/scripts)
	const directory = process.argv[2] ?? './public/scripts';
	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory, {recursive: true});
	}

	const fileContent = `window.APP_ENV = Object.freeze(${JSON.stringify(config)});\n`;
	fs.writeFileSync(path.join(directory, 'environment.js'), fileContent, {
		encoding: 'utf8',
	});
}

setupEnv();
