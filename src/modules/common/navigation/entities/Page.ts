import {type FC} from 'react';
import {View} from './View';
import {ArrayUtils} from '../../services/ArrayUtils';

export interface UnsubscribePage {
	(): void;
}

export interface PageSubscriber<D> {
	(update: {meta?: PageMeta; view?: View<D>}): void;
}

export class PageMeta {
	constructor(
		public readonly title: string,
		public readonly favicon: string = '/favicon.ico',
	) {}
}

// todo #backlog 🟡 forbid non {}
export class Page<D = any> extends View<D> {
	private _meta: PageMeta;
	private readonly _metaSubscribers: PageSubscriber<D>[] = [];

	public constructor(template: FC<D>, data: D, meta: PageMeta) {
		super(template, data);
		this._meta = meta;
	}

	public get meta(): PageMeta {
		return this._meta;
	}

	public updateMeta(value: PageMeta) {
		this._meta = value;
		this.notifyMetaSubscribers();
	}

	public updatePage(template: FC<D>, data: D, meta: PageMeta): void {
		this.updateView(template, data);
		this.updateMeta(meta);
	}

	public subscribePageChange(subscriber: PageSubscriber<D>): UnsubscribePage {
		const unsubscribeView = this.subscribeViewChange((view) => {
			subscriber({view: view});
		});
		this._metaSubscribers.push(subscriber);

		return () => {
			unsubscribeView();
			ArrayUtils.remove(this._metaSubscribers, subscriber);
		};
	}

	public static override createEmpty(): Page {
		return new Page(
			() => {
				return null;
			},
			{},
			new PageMeta(''),
		);
	}

	private notifyMetaSubscribers(): void {
		this._metaSubscribers.forEach((subscriber) => {
			subscriber({meta: this.meta});
		});
	}
}
