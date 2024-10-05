import React from 'react';
import {Link} from '../atoms/Link';
import {Icon, IconProps} from '../atoms/Icon';

export interface MenuItem {
	label: string;
	handler: string;
	icon?: IconProps['icon'];
	isActive?: boolean;
}

export interface MenuProps {
	items: MenuItem[];
	className?: string;
}

export const Menu: React.FC<MenuProps> = ({className, items}) => {
	return (
		<ul className={`menu ${className}`}>
			{items.map((item, index) => (
				<li key={index}>
					<Link href={item.handler} className={item.isActive ? 'active' : ''}>
						{item.icon && <Icon icon={item.icon} />}
						{item.label}
					</Link>
				</li>
			))}
		</ul>
	);
};
