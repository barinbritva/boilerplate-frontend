import {observable, makeObservable, IObservableArray} from 'mobx';

export class ListModel<T> {
	public readonly items: IObservableArray<T>;

	constructor() {
		this.items = observable([]);
		makeObservable(this);
	}

	public setItems(items: T[]): void {
		this.items.replace(items);
	}
}
