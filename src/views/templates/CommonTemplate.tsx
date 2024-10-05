import React from 'react';
import {NavigationBar} from '../organisms/NavigationBar';
import {MenuItem} from '../molecules/Menu';
import {Account} from '../../entities/Account';

export interface CommonTemplateProps {
	account: Account;
	menuItems: MenuItem[];
	homeItem: MenuItem;
	children?: React.ReactNode;
}

export interface CommonPageProps {
	templateProps: CommonTemplateProps;
}

export const CommonTemplate: React.FC<CommonTemplateProps> = ({
	menuItems,
	account,
	homeItem,
	children
}) => {
	return (
		<div>
			<NavigationBar account={account} menu={menuItems} home={homeItem} />
			<main className="px-5 py-3 md:px-8 md:py-4 lg:px-10 lg:py-6">{children}</main>
		</div>
	);
};
