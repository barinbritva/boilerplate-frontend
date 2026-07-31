import React, {ComponentType} from 'react';

export interface AppTemplateProps {
	account: {
		id: string;
	};
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
