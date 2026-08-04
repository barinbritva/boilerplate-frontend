import {Input as MantineInput, type ElementProps, type InputProps as MantineInputProps} from '@mantine/core';
import {type ComponentType} from 'react';

export interface InputProps extends MantineInputProps, ElementProps<'input', keyof MantineInputProps> {}

export const Input: ComponentType<InputProps> = (props) => {
	return <MantineInput {...props} />;
};
