import {View} from './View.js';
import {ArrayUtils} from '#/core/utils/ArrayUtils.js';
import {PageMeta} from './PageMeta.js';

export interface UnsubscribePage {
	(): void;
}

export interface PageSubscriber<Data = {}> {
	(update: {meta?: PageMeta; view?: Data}): void;
}

// todo #backlog 🟡 forbid non {}
export class Page<Data = {}> {
	private _view: View<Data>;
	private _meta: PageMeta;
	private readonly _metaSubscribers: PageSubscriber<View<Data>>[] = [];

	public constructor(view: View<Data>, meta: PageMeta) {
		this._view = view;
		this._meta = meta;
	}

	public get view(): View<Data> {
		return this._view;
	}

	public get meta(): PageMeta {
		return this._meta;
	}

	public updateMeta(value: PageMeta) {
		this._meta = value;
		this.notifyMetaSubscribers();
	}

	public updatePage(view: View<Data>, meta: PageMeta): void {
		this._view.updateView(view.template, view.data);
		this.updateMeta(meta);
	}

	public subscribePageChange(subscriber: PageSubscriber<View<Data>>): UnsubscribePage {
		const unsubscribeView = this._view.subscribeViewChange(() => {
			subscriber({view: this._view});
		});
		this._metaSubscribers.push(subscriber);

		return () => {
			unsubscribeView();
			ArrayUtils.remove(this._metaSubscribers, subscriber);
		};
	}

	public static createEmpty(): Page {
		return new Page(View.createEmpty(), new PageMeta(''));
	}

	private notifyMetaSubscribers(): void {
		this._metaSubscribers.forEach((subscriber) => {
			subscriber({meta: this.meta});
		});
	}
}
