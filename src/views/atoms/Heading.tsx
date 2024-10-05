import React, {HTMLAttributes} from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	level: '1' | '2' | '3' | '4' | '5' | '6';
}

const styles = {
	'1': 'text-3xl font-medium',
	'2': 'text-2xl font-medium',
	'3': 'text-xl font-medium',
	'4': 'text-lg font-medium',
	'5': 'text-base font-medium',
	'6': 'text-sm font-medium'
} as const;

const H: React.FC<HeadingProps> = ({children, level, ...props}) => {
	return React.createElement(`h${level}`, props, children);
};

export const Heading: React.FC<HeadingProps> = ({children, className, ...props}) => {
	return (
		<H className={`${styles[props.level]} ${className}`} {...props}>
			{children}
		</H>
	);
};
