import React, {InputHTMLAttributes} from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
}

export const Input: React.FC<InputProps> = ({error = false, ...props}) => {
	return (
		<input {...props} className={`input input-bordered w-full ${error ? ' input-error' : ''}`} />
	);
};
