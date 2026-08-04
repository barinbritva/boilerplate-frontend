import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';
import {HomePage} from '#/modules/home/homeScreen/HomePage.js';

const meta = {
	title: 'Modules/Home/HomePage',
	component: HomePage,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		templateProps: {
			account: {
				id: 'example-user',
			},
		},
		onSignOut: fn(),
	},
};
