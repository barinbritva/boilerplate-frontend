import React from 'react';
import {CommonPageProps, CommonTemplate} from '../../../common/views/templates/CommonTemplate';
import {Heading} from '../../../common/views/atoms/Heading';
import {Button} from '../../../common/views/atoms/Button';

export interface HomePageProps extends CommonPageProps {
	onSignOut: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({templateProps, onSignOut}) => {
	return (
		<CommonTemplate {...templateProps}>
			<Heading>Home</Heading>
			<Button onClick={onSignOut}>Sign Out</Button>
		</CommonTemplate>
	);
};
