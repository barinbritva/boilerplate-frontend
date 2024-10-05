import {type FC} from 'react';
import {View} from './View';
import {remove as arrayRemove} from '../utils/array';

export interface UnsubscribePage {
	(): void;
}

export interface PageSubscriber<D> {
	(update: {meta?: Meta; view?: View<D>}): void;
}

export class Meta {
	constructor(
		public readonly title: string,
		public readonly favicon: string = '/favicon.ico'
	) {}
}

// todo #backlog 🟡 forbid non {}
export class Page<D = any> extends View<D> {
	private _meta: Meta;
	private readonly _metaSubscribers: PageSubscriber<D>[] = [];

	public constructor(template: FC<D>, data: D, meta: Meta) {
		super(template, data);
		this._meta = meta;
	}

	public get meta(): Meta {
		return this._meta;
	}

	public updateMeta(value: Meta) {
		this._meta = value;
		this.notifyMetaSubscribers();
	}

	public updatePage(template: FC<D>, data: D, meta: Meta): void {
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
			arrayRemove(this._metaSubscribers, subscriber);
		};
	}

	public static override createEmpty(): Page {
		return new Page(
			() => {
				return null;
			},
			{},
			new Meta('')
		);
	}

	private notifyMetaSubscribers(): void {
		this._metaSubscribers.forEach((subscriber) => {
			subscriber({meta: this.meta});
		});
	}
}
