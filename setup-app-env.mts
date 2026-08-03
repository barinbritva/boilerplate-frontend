import fs from 'node:fs';
import path from 'node:path';
import {validateAppEnvironment} from './src/bootstrap/configuration/validateAppEnvironment.mts';

function setupEnv() {
	const environmentVars = validateAppEnvironment(process.env);

	// Container startup must redeclare the end dist directory (./dist/scripts)
	const directory = process.argv[2] ?? './public/scripts';
	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory, {recursive: true});
	}

	const fileContent = `window.APP_ENV = Object.freeze(${JSON.stringify(environmentVars)});\n`;
	fs.writeFileSync(path.join(directory, 'environment.js'), fileContent, {
		encoding: 'utf8',
	});
}

setupEnv();
