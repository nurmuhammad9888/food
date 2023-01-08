import React from 'react';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import './settings.css';
import {
	Heart,
	Restourant,
	DiscountSettings,
	Notifications,
	Security,
	About,
} from '../../assets/images/icons/icons';
import { Products } from './Products/Products';

export const Settings = () => {
	return (
		<div className="settings-big-wrap">
			<div className="d-flex settings-blok-wrapper">
				<div>
					<h2 className="text-white">Settings</h2>
					<ul className="settings-left-list list-unstyled">
						<li className="settings-left-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? 'settings-left-link active' : 'settings-left-link'
								}
								to={'appereance'}
							>
								<Heart />
								<h3 className="settings-left-title">Appereance</h3>
								<p className="settings-left-text">
									Dark and Light mode, Font size
								</p>
							</NavLink>
						</li>
						<li className="settings-left-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? 'settings-left-link active' : 'settings-left-link'
								}
								to={'restourant'}
							>
								<Restourant />
								<h3 className="settings-left-title">Your Restaurant</h3>
								<p className="settings-left-text">
									Dark and Light mode, Font size
								</p>
							</NavLink>
						</li>
						<li className="settings-left-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? 'settings-left-link active' : 'settings-left-link'
								}
								to={'products'}
							>
								<DiscountSettings />
								<h3 className="settings-left-title">Products Management</h3>
								<p className="settings-left-text">
									Manage your product, pricing, etc
								</p>
							</NavLink>
						</li>
						<li className="settings-left-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? 'settings-left-link active' : 'settings-left-link'
								}
								to={'notifications'}
							>
								<Notifications />
								<h3 className="settings-left-title">Notifications</h3>
								<p className="settings-left-text">
									Customize your notifications
								</p>
							</NavLink>
						</li>
						<li className="settings-left-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? 'settings-left-link active' : 'settings-left-link'
								}
								to={'securityy'}
							>
								<Security />
								<h3 className="settings-left-title">Security</h3>
								<p className="settings-left-text">
									Configure Password, PIN, etc
								</p>
							</NavLink>
						</li>
						<li className="settings-left-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? 'settings-left-link active' : 'settings-left-link'
								}
								to={'security'}
							>
								<Security />
								<h3 className="settings-left-title">Security</h3>
								<p className="settings-left-text">
									Configure Password, PIN, etc
								</p>
							</NavLink>
						</li>
						<li className="settings-left-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? 'settings-left-link active' : 'settings-left-link'
								}
								to={'about'}
							>
								<About />
								<h3 className="settings-left-title">About Us</h3>
								<p className="settings-left-text">Find out more about Posly</p>
							</NavLink>
						</li>
					</ul>
				</div>
				<div>
					<Outlet />
				</div>
				<Routes>
					<Route path="products/*" element={<Products />} />
				</Routes>
			</div>
		</div>
	);
};
