import React, {type MouseEvent} from 'react';
import {go} from '../../services/navigation';
import {A, AProps} from './A';

function isExternalLink(link: string): boolean {
	return link.includes('://');
}

export const Link: React.FC<AProps> = (props) => {
	function handleNav(event: MouseEvent<HTMLAnchorElement>): void {
		const href = props.href ?? '';
		const onClick = props.onClick;

		if (isExternalLink(href) || (props.target && props.target !== '_self')) {
			return;
		}

		event.preventDefault();
		onClick ? onClick(event) : go(href);
	}

	return <A {...props} onClick={handleNav} />;
};
