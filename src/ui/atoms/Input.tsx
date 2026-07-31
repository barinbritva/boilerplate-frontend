import React, {ComponentType} from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: ComponentType<InputProps> = ({...props}) => {
	return <input {...props} />;
};
