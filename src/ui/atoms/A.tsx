import {type AnchorHTMLAttributes, type ComponentType} from 'react';

export interface AProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
}

export const A: ComponentType<AProps> = (props) => {
	return <a {...props} />;
};
