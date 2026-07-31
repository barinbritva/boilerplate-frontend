import React, {ComponentType} from 'react';

export interface PublicTemplateProps {
	children?: React.ReactNode;
}

export interface PublicPageProps {
	templateProps: PublicTemplateProps;
}

export const PublicTemplate: ComponentType<PublicTemplateProps> = ({children}) => {
	return children;
};
