import React from 'react';
import {TextInput as BaseInput, TextInputProps as BaseInputProps} from 'grommet';

export interface TextInputProps extends BaseInputProps {
}

export const TextInput: React.FC<TextInputProps> = ({...props}) => {
	return (
		<BaseInput {...props} />
	);
};
