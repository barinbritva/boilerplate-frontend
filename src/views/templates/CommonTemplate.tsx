import React from 'react';
import {Account} from '../../entities/Account';

export interface CommonTemplateProps {
	account: Account;
	children?: React.ReactNode;
}

export interface CommonPageProps {
	templateProps: CommonTemplateProps;
}

export const CommonTemplate: React.FC<CommonTemplateProps> = ({account, children}) => {
	return (
		<div>
			<aside>user #{account.id}</aside>
			<main>{children}</main>
		</div>
	);
};
