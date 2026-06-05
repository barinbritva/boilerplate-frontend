import React, {HTMLAttributes} from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
}

export const Heading: React.FC<HeadingProps> = ({children, ...props}) => {
	return (
		// todo allow different heading levels
		<h1 {...props}>
			{children}
		</h1>
	);
};
