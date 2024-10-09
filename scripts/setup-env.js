const fs = require('fs');

function setupEnv() {
	// put variables names
	const variables = [];

	const lostVariables = variables.filter((variable) => {
		return process.env[variable] == null;
	});

	if (lostVariables.length > 0) {
		throw new Error(`Required variables are missed: ${lostVariables.join(', ')}.`);
	}

	const config = {};
	variables.forEach((variable) => {
		config[variable] = process.env[variable];
	});

	const directory = './public/scripts';
	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory, {recursive: true});
	}

	const fileContent = `window.env = ${JSON.stringify(config)}`;
	fs.writeFileSync(`${directory}/environment.js`, fileContent, {
		encoding: 'utf8'
	});
}

setupEnv();
