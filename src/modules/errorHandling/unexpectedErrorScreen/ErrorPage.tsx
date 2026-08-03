import {type ComponentType} from 'react';
import {Heading} from '~/ui/atoms/Heading';
import {type PublicPageProps, PublicTemplate} from '~/ui/templates/PublicTemplate';

export interface ErrorPageProps extends PublicPageProps {
	message: string;
}

export const ErrorPage: ComponentType<ErrorPageProps> = ({templateProps, message}) => {
	return (
		<PublicTemplate {...templateProps}>
			<Heading>An error occurred</Heading>
			<div>
				<pre>{message}</pre>
			</div>
		</PublicTemplate>
	);
};
