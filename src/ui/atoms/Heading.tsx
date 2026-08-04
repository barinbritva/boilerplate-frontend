import {type ComponentType, type HTMLAttributes} from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

export const Heading: ComponentType<HeadingProps> = ({children, ...props}) => {
	return (
		// todo allow different heading levels
		<h1 {...props}>{children}</h1>
	);
};
