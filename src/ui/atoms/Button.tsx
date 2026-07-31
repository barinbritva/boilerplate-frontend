import React, {ComponentType} from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: ComponentType<ButtonProps> = ({children, ...props}) => {
	return <button {...props}>{children}</button>;
};
