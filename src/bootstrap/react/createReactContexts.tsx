import React, {type ComponentType, type PropsWithChildren} from 'react';
import {MantineProvider} from '@mantine/core';
import {NavigationProvider} from '#/ui/contexts/NavigationContext.js';
import {BrowserNavigation} from '#/core/navigation/BrowserNavigation.js';

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
		const NavigationBridge = (
			<MantineProvider>
				<NavigationProvider navigate={navigate}>{children}</NavigationProvider>
			</MantineProvider>
		);

		if (strictModeEnabled) {
			return <React.StrictMode>{NavigationBridge}</React.StrictMode>;
		}

		return NavigationBridge;
	};
}
