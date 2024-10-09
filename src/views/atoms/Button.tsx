import React from 'react';
import {Button as BaseButton, ButtonExtendedProps as BaseButtonProps} from 'grommet';

export interface ButtonProps extends BaseButtonProps {
}

export const Button: React.FC<ButtonProps> = ({children, ...props}) => {
	return (
		<BaseButton {...props}>
			{children}
		</BaseButton>
	);
};
