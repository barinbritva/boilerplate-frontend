import {Anchor, type AnchorProps, type ElementProps} from '@mantine/core';
import {type ComponentType} from 'react';

export interface AProps extends AnchorProps, ElementProps<'a', keyof AnchorProps> {
	href: string;
}

export const A: ComponentType<AProps> = (props) => {
	return <Anchor {...props} />;
};
