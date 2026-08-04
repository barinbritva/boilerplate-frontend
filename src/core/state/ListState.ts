import {observable, type IObservableArray} from 'mobx';

export class ListState<T> {
	public readonly observableItems: IObservableArray<T>;

	constructor() {
		this.observableItems = observable([]);
	}

	public get items(): readonly T[] {
		return this.observableItems;
	}

	public setItems(items: T[]): void {
		this.observableItems.replace(items);
	}
}
