import React, {ComponentType, type MouseEvent} from 'react';
import {A, AProps} from './A';

function isExternalLink(link: string): boolean {
	return link.includes('://');
}

// todo refactor: use navigation service instead of this function
function go(link: string): void {
	console.log(`Navigating to ${link}`);
}

export const Link: ComponentType<AProps> = (props) => {
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
