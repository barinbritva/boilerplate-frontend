import React from 'react';
import {Heading} from '../atoms/Heading';
import {Button} from '../atoms/Button';
import {EmptyPageProps, EmptyTemplate} from '../templates/EmptyTemplate';

export interface SignInPageProps extends EmptyPageProps {
	onSignIn: () => void;
}

export const SignInPage: React.FC<SignInPageProps> = ({templateProps, onSignIn}) => {
	return (
		<EmptyTemplate {...templateProps}>
			<Heading>Welcome</Heading>
			<Button onClick={onSignIn}>Sign In</Button>
		</EmptyTemplate>
	);
};
