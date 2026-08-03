import React, {type ComponentType} from 'react';
import {Link} from '~/ui/atoms/Link';

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
			<aside>
				user <Link href="/profile">#{account.id}</Link>
			</aside>
			<main>{children}</main>
		</div>
	);
};
