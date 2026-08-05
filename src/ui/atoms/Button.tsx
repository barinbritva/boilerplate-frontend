import {Button as MantineButton, type ButtonProps as MantineButtonProps, type ElementProps} from '@mantine/core';
import {type ComponentType} from 'react';

export interface ButtonProps extends MantineButtonProps, ElementProps<'button', keyof MantineButtonProps> {}

export const Button: ComponentType<ButtonProps> = (props) => {
	return <MantineButton {...props} />;
};
