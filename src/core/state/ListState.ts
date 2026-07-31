import {observable, makeObservable, IObservableArray} from 'mobx';

export class ListModel<T> {
	public readonly observableItems: IObservableArray<T>;

	constructor() {
		this.observableItems = observable([]);
		makeObservable(this);
	}

	public get items(): readonly T[] {
		return this.observableItems;
	}

	public setItems(items: T[]): void {
		this.observableItems.replace(items);
	}
}
