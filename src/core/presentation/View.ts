import {ArrayUtils} from '../utils/ArrayUtils';

export interface UnsubscribeView {
	(): void;
}

export interface ViewSubscriber<Template, Data> {
	(view: View<Template, Data>): void;
}

export class View<Template = unknown, Data = unknown> {
	private readonly viewSubscribers: ViewSubscriber<Template, Data>[] = [];

	public constructor(
		private _template: Template,
		private _data: Data,
	) {}

	public get template(): Template {
		return this._template;
	}

	public get data(): Data {
		return this._data;
	}

	public updateView(template: Template, data: Data): void {
		this._template = template;
		this._data = data;

		this.notifyViewSubscribers();
	}

	subscribeViewChange(subscriber: ViewSubscriber<Template, Data>): UnsubscribeView {
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
