import {type FC} from 'react';
import {remove as arrayRemove} from '../utils/array';

export interface UnsubscribeView {
	(): void;
}

export interface ViewSubscriber<D> {
	(view: View<D>): void;
}

// todo #backlog 🟡 forbid non {}
export class View<D = any> {
	private readonly _viewSubscribers: ViewSubscriber<D>[] = [];
	public constructor(
		private _template: FC<D>,
		private _data: D
	) {}

	public get template(): FC<D> {
		return this._template;
	}

	public get data(): D {
		return this._data;
	}

	public updateView(template: FC<D>, data: D): void {
		this._template = template;
		this._data = data;

		this.notifyViewSubscribers();
	}

	subscribeViewChange(subscriber: ViewSubscriber<D>): UnsubscribeView {
		this._viewSubscribers.push(subscriber);

		return () => {
			arrayRemove(this._viewSubscribers, subscriber);
		};
	}

	public static createEmpty(): View {
		return new View(() => {
			return null;
		}, {});
	}

	private notifyViewSubscribers(): void {
		this._viewSubscribers.forEach((subscriber) => {
			subscriber(this);
		});
	}
}
