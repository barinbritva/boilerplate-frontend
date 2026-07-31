import React from 'react';
import {createRoot, Root} from 'react-dom/client';
import {View} from './View';

export class ReactRenderer {
	private readonly root: Root;

	constructor(container: HTMLElement) {
		this.root = createRoot(container);
	}

	public render(view: View): void {
		this.root.render(
			<React.StrictMode>
				<view.template {...view.data} />
			</React.StrictMode>,
		);
	}

	public unmount(): void {
		this.root.unmount();
	}
}
