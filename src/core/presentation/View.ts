import {ComponentType} from 'react';
import {ArrayUtils} from '~/core/utils/ArrayUtils';

export interface UnsubscribeView {
	(): void;
}

export interface ViewSubscriber<Data> {
	(view: View<Data>): void;
}

// todo #backlog 🟡 forbid non {}
export class View<Data = {}> {
	private readonly viewSubscribers: ViewSubscriber<Data>[] = [];

	public constructor(
		private _template: ComponentType<Data>,
		private _data: Data,
	) {}

	public get template(): ComponentType<Data> {
		return this._template;
	}

	public get data(): Data {
		return this._data;
	}

	public updateView(template: ComponentType<Data>, data: Data): void {
		this._template = template;
		this._data = data;

		this.notifyViewSubscribers();
	}

	subscribeViewChange(subscriber: ViewSubscriber<Data>): UnsubscribeView {
		this.viewSubscribers.push(subscriber);

		return () => {
			ArrayUtils.remove(this.viewSubscribers, subscriber);
		};
	}

	public static createEmpty(): View {
		return new View(() => {
			return null;
		}, {});
	}

	private notifyViewSubscribers(): void {
		this.viewSubscribers.forEach((subscriber) => {
			subscriber(this);
		});
	}
}
