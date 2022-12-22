import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./hederstop.css";
import { Search } from '../../assets/images/icons/icons';

export const Hederstop = () => {
	return (
		<div className='hederstop-wrap'>
			<ul className="hederstop-list list-unstyled">
				<li className="hederstop-item d-flex">
					<div>
						<h1 className='hederstop-title'>Jaegar Resto</h1>
						<time className='hederstop-data'>Tuesday, 2 Feb 2021</time>
					</div>
					<div className='hederstop-input-wrap'>
						<input className='hederstop-search' type="Search" placeholder="Search for food, coffe, etc.." />
						<span className='serach-icon'> <Search/> </span>
					</div>
				</li>
			</ul>
			<ul className="hederstop-bottom-list list-unstyled d-flex">
				<li>
					<NavLink className={({isActive}) => isActive ? "hederstop-link hederstop-link-active hederstop-link-line-active" : "hederstop-link"} to={'/home'}  >Hot Dishes</NavLink>
				</li>
				<li>
					<NavLink className={({isActive}) => isActive ? "hederstop-link hederstop-link-active hederstop-link-line-active" : "hederstop-link"} to={'cold'}>Cold Dishes</NavLink>
				</li>
				<li>
					<NavLink className={({isActive}) => isActive ? "hederstop-link hederstop-link-active hederstop-link-line-active" : "hederstop-link"} to={'soup'}>Soup</NavLink>
				</li>
				<li>
					<NavLink className={({isActive}) => isActive ? "hederstop-link hederstop-link-active hederstop-link-line-active" : "hederstop-link"} to={'grill'}>Grill</NavLink>
				</li>
				<li>
					<NavLink className={({isActive}) => isActive ? "hederstop-link hederstop-link-active hederstop-link-line-active" : "hederstop-link"} to={'appetizer'}>Appetizer</NavLink>
				</li>
				<li>
					<NavLink className={({isActive}) => isActive ? "hederstop-link hederstop-link-active hederstop-link-line-active" : "hederstop-link"} to={'dessert'}>Dessert</NavLink>
				</li>
				{/* <NavLink className={({isActive}) => isActive ? "text-decoration-none text-info" : "text-decoration-none"} to="/">Home</NavLink> */}
			</ul>
			<Outlet/>
		</div>
	);
};
