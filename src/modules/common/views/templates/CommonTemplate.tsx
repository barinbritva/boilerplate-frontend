import React from 'react';
import {AccountModel} from '../../../authentication/AccountModel';

export interface CommonTemplateProps {
	account: AccountModel;
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
