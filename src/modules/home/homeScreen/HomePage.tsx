import {type ComponentType} from 'react';
import {Heading} from '#/ui/components/Heading.js';
import {Button} from '#/ui/components/Button.js';
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
