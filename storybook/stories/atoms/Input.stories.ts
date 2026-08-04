import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';
import {Input} from '#/ui/atoms/Input.js';

const meta = {
	title: 'Atom/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		onChange: fn(),
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
	args: {
		placeholder: 'Enter text',
		type: 'text',
	},
};

export const Email: Story = {
	args: {
		placeholder: 'name@example.com',
		type: 'email',
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: 'Disabled input',
	},
};
