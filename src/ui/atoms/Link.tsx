import {type ComponentType, type MouseEvent} from 'react';
import {A, type AProps} from '#/ui/atoms/A.js';
import {useNavigate} from '#/ui/contexts/NavigationContext.js';

function isExternalLink(link: string): boolean {
	return link.includes('://');
}

function isModifiedClick(event: MouseEvent<HTMLAnchorElement>): boolean {
	return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

export const Link: ComponentType<AProps> = (props) => {
	const navigate = useNavigate();

	function handleNav(event: MouseEvent<HTMLAnchorElement>): void {
		props.onClick?.(event);

		if (
			event.defaultPrevented ||
			event.button !== 0 ||
			isModifiedClick(event) ||
			props.download != null ||
			(props.target != null && props.target !== '_self') ||
			isExternalLink(props.href)
		) {
			return;
		}

		event.preventDefault();
		void navigate(props.href);
	}

	return <A {...props} onClick={handleNav} />;
};
