import React from 'react';
import {createRoot} from 'react-dom/client';
import {View} from '../entities/View';

export class DomManager {
	private readonly appElement: HTMLDivElement;

	constructor() {
		this.appElement = this.addContainerToBody();
	}

	public renderPage(view: View): void {
		const content = (
			<>
				<view.template {...view.data} />
			</>
		);

		const root = createRoot(this.appElement);
		root.unmount();
		this.render(content, this.appElement);
	}

	public render(children: ReturnType<React.FC>, domElement: Element): void {
		const root = createRoot(domElement);
		root.render(<React.StrictMode>{children}</React.StrictMode>);
	}

	private addContainerToBody(): HTMLDivElement {
		return document.body.appendChild(document.createElement('div'));
	}
}
