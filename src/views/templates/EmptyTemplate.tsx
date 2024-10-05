import React from 'react';

export interface EmptyTemplateProps {
	children: React.ReactNode;
}

export interface EmptyPageProps {
	templateProps: EmptyTemplateProps;
}

export const EmptyTemplate: React.FC<EmptyTemplateProps> = ({children}) => {
	return children;
};
