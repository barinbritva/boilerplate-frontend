import React from 'react';
import {Link} from '../atoms/Link';

import {Account} from '../../entities/Account';
import {Icon} from '../atoms/Icon';
import {Menu, MenuItem} from '../molecules/Menu';

export interface NavigationBarProps {
	account: Account;
	menu: MenuItem[];
	home: MenuItem;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({account, menu, home}) => {
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
						<Icon icon="Menu" />
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{menu.map((item, index) => (
							<li key={index}>
								<Link href={item.handler} className={item.isActive ? 'active' : ''}>
									{item.icon && <Icon icon={item.icon} />}
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<Link className="btn btn-ghost text-xl" href={home.handler}>
					{home.icon && <Icon icon={home.icon} />}
					{home.label}
				</Link>
			</div>
			<div className="navbar-center hidden sm:flex">
				<Menu items={menu} className="sm:menu-horizontal rounded-box" />
			</div>
			<div className="navbar-end">
				<div className="dropdown dropdown-end">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img alt="user picture" src={account.photoUrl} />
						</div>
					</div>
					<ul
						tabIndex={0}
						className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
					>
						<li>
							<span>@{account.username}</span>
						</li>
						<li>
							<a href="/api/auth/sign-out">
								<Icon icon="LogOut" />
								Sign out
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
