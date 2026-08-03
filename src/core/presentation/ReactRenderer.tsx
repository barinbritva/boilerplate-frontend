import {type ComponentType, type PropsWithChildren} from 'react';
import {createRoot, type Root} from 'react-dom/client';
import {View} from './View';

export class ReactRenderer {
	private readonly root: Root;
	private readonly bridge: ComponentType<PropsWithChildren>;

	constructor(container: HTMLElement, bridge: ComponentType<PropsWithChildren>) {
		this.root = createRoot(container);
		this.bridge = bridge;
	}

	public render(view: View): void {
		const Bridge = this.bridge;

		this.root.render(
			<Bridge>
				<view.template {...view.data} />
			</Bridge>,
		);
	}

	public unmount(): void {
		this.root.unmount();
	}
}
