import React, {ComponentType} from 'react';
import {AccountModel} from '../../modules/authentication/session/AccountModel';

export interface AppTemplateProps {
	account: AccountModel;
	children?: React.ReactNode;
}

export interface AppPageProps {
	templateProps: AppTemplateProps;
}

export const AppTemplate: ComponentType<AppTemplateProps> = ({account, children}) => {
	return (
		<div>
			<aside>user #{account.id}</aside>
			<main>{children}</main>
		</div>
	);
};
