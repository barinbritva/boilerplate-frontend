import {createContext, type PropsWithChildren, useContext} from 'react';

export type Navigate = (href: string) => Promise<void>;

const NavigationContext = createContext<Navigate | null>(null);

interface NavigationProviderProps extends PropsWithChildren {
	navigate: Navigate;
}

export function NavigationProvider({navigate, children}: NavigationProviderProps) {
	return <NavigationContext.Provider value={navigate}>{children}</NavigationContext.Provider>;
}

export function useNavigate(): Navigate {
	const navigate = useContext(NavigationContext);

	if (navigate == null) {
		throw new Error('useNavigate must be used within NavigationProvider.');
	}

	return navigate;
}
