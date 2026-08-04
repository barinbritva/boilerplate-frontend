import type {Preview} from '@storybook/react-vite';
import {MantineProvider} from '@mantine/core';
import {NavigationProvider} from '#/ui/contexts/NavigationContext.js';

const preview: Preview = {
	decorators: [
		(Story) => (
			<MantineProvider>
				<NavigationProvider navigate={async () => undefined}>
					<Story />
				</NavigationProvider>
			</MantineProvider>
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
