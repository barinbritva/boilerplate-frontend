import type {Meta, StoryObj} from '@storybook/react-vite';
import {A} from '#/ui/atoms/A.js';

const meta = {
	title: 'Atom/A',
	component: A,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof A>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		href: '#example',
		children: 'Anchor',
	},
};
