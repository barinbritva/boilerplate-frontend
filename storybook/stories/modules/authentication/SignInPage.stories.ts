import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';
import {SignInPage} from '#/modules/authentication/signInScreen/SignInPage.js';

const meta = {
	title: 'Modules/Authentication/SignInPage',
	component: SignInPage,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SignInPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		templateProps: {},
		onSignIn: fn(),
	},
};
