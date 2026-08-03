import React, {type ComponentType, type PropsWithChildren} from 'react';
import {NavigationProvider} from '~/ui/contexts/NavigationContext';
import {BrowserNavigation} from '~/core/navigation/BrowserNavigation';

interface CreateReactContextsParams {
	navigation: BrowserNavigation;
	strictModeEnabled?: boolean;
}

export function createReactContexts({
	navigation,
	strictModeEnabled = false,
}: CreateReactContextsParams): ComponentType<PropsWithChildren> {
	const navigate = (href: string) => navigation.go(href);

	return function ReactContexts({children}: PropsWithChildren) {
		const NavigationBridge = <NavigationProvider navigate={navigate}>{children}</NavigationProvider>;

		if (strictModeEnabled) {
			return <React.StrictMode>{NavigationBridge}</React.StrictMode>;
		}

		return NavigationBridge;
	};
}
