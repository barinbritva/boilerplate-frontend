import {type ComponentType, type HTMLAttributes} from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	level: 1 | 2 | 3 | 4 | 5 | 6;
}

const tags = {1: 'h1', 2: 'h2', 3: 'h3', 4: 'h4', 5: 'h5', 6: 'h6'} as const;

export const Heading: ComponentType<HeadingProps> = ({children, level, ...props}) => {
	const Tag = tags[level];
	return <Tag {...props}>{children}</Tag>;
};
