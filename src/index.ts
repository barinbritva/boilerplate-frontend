import './styles.css';
import {runApp} from './bootstrap/runApp';

runApp().catch((error) => {
	console.error('Failed to run the app.', error);
});
