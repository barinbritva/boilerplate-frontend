import React, {ComponentType} from 'react';
import {Heading} from '../../../../ui/atoms/Heading';
import {Button} from '../../../../ui/atoms/Button';
import {PublicPageProps, PublicTemplate} from '../../../../ui/templates/PublicTemplate';

export interface SignInPageProps extends PublicPageProps {
	onSignIn: () => void;
}

export const SignInPage: ComponentType<SignInPageProps> = ({templateProps, onSignIn}) => {
	return (
		<PublicTemplate {...templateProps}>
			<Heading>Welcome</Heading>
			<Button onClick={onSignIn}>Sign In</Button>
		</PublicTemplate>
	);
};
