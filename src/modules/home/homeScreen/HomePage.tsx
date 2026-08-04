import {type ComponentType} from 'react';
import {Heading} from '#/ui/atoms/Heading.js';
import {Button} from '#/ui/atoms/Button.js';
import {type AppPageProps, AppTemplate} from '#/ui/templates/AppTemplate.js';

export interface HomePageProps extends AppPageProps {
	onSignOut: () => void;
}

export const HomePage: ComponentType<HomePageProps> = ({templateProps, onSignOut}) => {
	return (
		<AppTemplate {...templateProps}>
			<Heading level={1}>Home</Heading>
			<Button onClick={onSignOut}>Sign Out</Button>
		</AppTemplate>
	);
};
