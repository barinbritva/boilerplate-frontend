import type {StorybookConfig} from '@storybook/react-vite';
import {resolve} from 'node:path';
import {mergeConfig} from 'vite';

const repositoryRoot = resolve(import.meta.dirname, '../..');
const sourceRoot = resolve(repositoryRoot, 'src');

const config: StorybookConfig = {
	stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [],
	framework: '@storybook/react-vite',
	async viteFinal(viteConfig) {
		return mergeConfig(viteConfig, {
			resolve: {
				alias: {
					'#': sourceRoot,
				},
				dedupe: ['react', 'react-dom'],
			},
			server: {
				fs: {
					allow: [repositoryRoot],
				},
			},
		});
	},
};
export default config;
