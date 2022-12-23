import React from 'react'
import "./heders.css"
import { NavLink, Link } from 'react-router-dom';
import { Discountimg, Graphimg, Homeimg, Logo, Logoutimg, Messageimg, Notificationimg, Settingsimg } from '../../assets/images/icons/icons';

export const Heders = () => {
    return (
            <ul className='heders-list list-unstyled'>
                <li className='heders-item-logo'>
                    <Link className="heders-logo" to='/home'> <Logo/> </Link>
                </li>
                <li className='heders-item activ-item'>
                    <NavLink className={({isActive}) => isActive ? "heders-link actives heders-link-activ-bef" : "heders-link"} to='/home'> <Homeimg/> </NavLink>
                </li>
                <li className='heders-item'>
                    <NavLink className={({isActive}) => isActive ? "heders-link actives heders-link-activ-bef" : "heders-link"} to='/discount'> <Discountimg/> </NavLink>
                </li>
                <li className='heders-item'>
                    <NavLink className={({isActive}) => isActive ? "heders-link actives heders-link-activ-bef" : "heders-link"} to='/graph'> <Graphimg/> </NavLink>
                </li>
                <li className='heders-item'>
                    <NavLink className={({isActive}) => isActive ? "heders-link actives heders-link-activ-bef" : "heders-link"} to='/message'> <Messageimg/> </NavLink>
                </li>
                <li className='heders-item'>
                    <NavLink className={({isActive}) => isActive ? "heders-link actives heders-link-activ-bef" : "heders-link"} to='/notification'> <Notificationimg/> </NavLink>
                </li>
                <li className='heders-item'>
                    <NavLink className={({isActive}) => isActive ? "heders-link actives heders-link-activ-bef" : "heders-link"} to='/settings'> <Settingsimg/></NavLink>
                </li>
                <li className='heders-item'>
                    <NavLink className={({isActive}) => isActive ? "heders-link actives heders-link-activ-bef" : "heders-link"} to='/logout'> <Logoutimg/> </NavLink>
                </li>
            </ul>
            
        )
    }
    