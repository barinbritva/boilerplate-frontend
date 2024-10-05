import React, {ButtonHTMLAttributes} from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
	error?: boolean;
}

export const Button: React.FC<ButtonProps> = ({children, className, ...props}) => {
	return (
		<button {...props} className={`btn w-full ${className}`}>
			{children}
		</button>
	);
};
