import type {ComponentType} from 'react';
import {View} from '../../View';

export class ReactView<Props = {}> extends View<ComponentType<Props>, Props> {
	constructor(component: ComponentType<Props>, props: Props) {
		super(component, props);
	}
}
