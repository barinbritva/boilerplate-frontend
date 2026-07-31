import {View} from './View';
import {ArrayUtils} from '../../modules/common/services/ArrayUtils';
import {PageMeta} from './PageMeta';

export interface UnsubscribePage {
	(): void;
}

export interface PageSubscriber<ViewType extends View = View> {
	(update: {meta?: PageMeta; view?: ViewType}): void;
}

// todo #backlog 🟡 forbid non {}
export class Page<ViewType extends View = View> {
	private _view: ViewType;
	private _meta: PageMeta;
	private readonly _metaSubscribers: PageSubscriber<ViewType>[] = [];

	public constructor(view: ViewType, meta: PageMeta) {
		this._view = view;
		this._meta = meta;
	}

	public get view(): ViewType {
		return this._view;
	}

	public get meta(): PageMeta {
		return this._meta;
	}

	public updateMeta(value: PageMeta) {
		this._meta = value;
		this.notifyMetaSubscribers();
	}

	public updatePage(view: ViewType, meta: PageMeta): void {
		this._view.updateView(view.template, view.data);
		this.updateMeta(meta);
	}

	public subscribePageChange(subscriber: PageSubscriber<ViewType>): UnsubscribePage {
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
