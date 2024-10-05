import React, {AnchorHTMLAttributes} from 'react';

export interface AProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
}

export const A: React.FC<AProps> = (props) => {
	return <a {...props} />;
};
