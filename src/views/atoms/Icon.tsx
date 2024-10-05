import React from 'react';
import {AppWindow, LogOut, Cable, Menu, CalendarRange, Megaphone} from 'lucide-react';

const icons = {
	AppWindow: AppWindow,
	LogOut: LogOut,
	Cable: Cable,
	Menu: Menu,
	CalendarRange: CalendarRange,
	Megaphone: Megaphone
};

export interface IconProps {
	icon: keyof typeof icons;
}

export const Icon: React.FC<IconProps> = ({icon}) => {
	const IconComponent = icons[icon];
	return IconComponent && <IconComponent />;
};
