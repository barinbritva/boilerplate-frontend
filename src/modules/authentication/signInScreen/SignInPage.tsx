import {type ComponentType} from 'react';
import {type PublicPageProps, PublicTemplate} from '#/ui/templates/PublicTemplate.js';
import {Heading} from '#/ui/atoms/Heading.js';
import {Button} from '#/ui/atoms/Button.js';

export interface SignInPageProps extends PublicPageProps {
	onSignIn: () => void;
}

export const SignInPage: ComponentType<SignInPageProps> = ({templateProps, onSignIn}) => {
	return (
		<PublicTemplate {...templateProps}>
			<Heading level={1}>Welcome</Heading>
			<Button onClick={onSignIn}>Sign In</Button>
		</PublicTemplate>
	);
};
