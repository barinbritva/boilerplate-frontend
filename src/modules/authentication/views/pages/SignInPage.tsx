import React from 'react';
import {Heading} from '../../../common/views/atoms/Heading';
import {Button} from '../../../common/views/atoms/Button';
import {EmptyPageProps, EmptyTemplate} from '../../../common/views/templates/EmptyTemplate';

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
