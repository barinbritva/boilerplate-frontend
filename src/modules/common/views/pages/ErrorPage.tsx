import React from 'react';
import {EmptyPageProps, EmptyTemplate} from '../templates/EmptyTemplate';
import {Heading} from '../atoms/Heading';

export interface ErrorPageProps extends EmptyPageProps {
	message: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({templateProps, message}) => {
	return (
		<EmptyTemplate {...templateProps}>
			<Heading>An error occurred</Heading>
			<div>
				<pre>{message}</pre>
			</div>
		</EmptyTemplate>
	);
};
