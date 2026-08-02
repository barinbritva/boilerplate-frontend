import React, {ComponentType} from 'react';
import {Heading} from '~/ui/atoms/Heading';
import {Button} from '~/ui/atoms/Button';
import {AppPageProps, AppTemplate} from '~/ui/templates/AppTemplate';

export interface HomePageProps extends AppPageProps {
	onSignOut: () => void;
}

export const HomePage: ComponentType<HomePageProps> = ({templateProps, onSignOut}) => {
	return (
		<AppTemplate {...templateProps}>
			<Heading>Home</Heading>
			<Button onClick={onSignOut}>Sign Out</Button>
		</AppTemplate>
	);
};
