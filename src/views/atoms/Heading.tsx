import React, {HTMLAttributes} from 'react';
import {Heading as BaseHeading} from 'grommet';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
}

export const Heading: React.FC<HeadingProps> = ({children, className, ...props}) => {
	return (
		<BaseHeading {...props}>
			{children}
		</BaseHeading>
	);
};
