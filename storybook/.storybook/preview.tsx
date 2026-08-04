import type {Preview} from '@storybook/react-vite';
import {NavigationProvider} from '#/ui/contexts/NavigationContext.js';

const preview: Preview = {
	decorators: [
		(Story) => (
			<NavigationProvider navigate={async () => undefined}>
				<Story />
			</NavigationProvider>
		),
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
