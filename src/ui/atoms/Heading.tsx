import {Title, type TitleProps} from '@mantine/core';
import {type ComponentType} from 'react';

export interface HeadingProps extends TitleProps {}

export const Heading: ComponentType<HeadingProps> = (props) => {
	return <Title {...props} />;
};
