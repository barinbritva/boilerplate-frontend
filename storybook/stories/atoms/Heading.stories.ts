import type {Meta, StoryObj} from '@storybook/react-vite';
import {Heading} from '#/ui/atoms/Heading.js';

const meta = {
	title: 'Atom/Heading',
	component: Heading,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LevelOne: Story = {
	args: {
		children: 'Heading 1',
		order: 1,
	},
};

export const LevelTwo: Story = {
	args: {
		children: 'Heading 2',
		order: 2,
	},
};

export const LevelThree: Story = {
	args: {
		children: 'Heading 3',
		order: 3,
	},
};

export const LevelFour: Story = {
	args: {
		children: 'Heading 4',
		order: 4,
	},
};

export const LevelFive: Story = {
	args: {
		children: 'Heading 5',
		order: 5,
	},
};

export const LevelSix: Story = {
	args: {
		children: 'Heading 6',
		order: 6,
	},
};
