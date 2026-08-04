import {runApp} from './bootstrap/runApp.js';

runApp().catch((error) => {
	console.error('Failed to run the app.', error);
});
