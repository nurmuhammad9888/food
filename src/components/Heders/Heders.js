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
                <li className='heders-item '>
                    <NavLink className={({isActive}) => isActive ? "heders-link actives heders-link-activ-bef" : "heders-link"} to='/home'> <span className='active-header'><Homeimg/></span> </NavLink>
                </li>
                <li className='heders-item'>
                    <NavLink className={({isActive}) => isActive ? "heders-link actives heders-link-activ-bef" : "heders-link"} to='/discount'> <span className='active-header'><Discountimg/></span> </NavLink>
                </li>
                <li className='heders-item'>
                    <NavLink className={({isActive}) => isActive ? "heders-link actives heders-link-activ-bef" : "heders-link"} to='/graph'> <span className='active-header'><Graphimg/></span>  </NavLink>
                </li>
                <li className='heders-item'>
                    <NavLink className={({isActive}) => isActive ? "heders-link actives heders-link-activ-bef" : "heders-link"} to='/message'> <span className='active-header'><Messageimg/></span>  </NavLink>
                </li>
                <li className='heders-item'>
                    <NavLink className={({isActive}) => isActive ? "heders-link actives heders-link-activ-bef" : "heders-link"} to='/notification'> <span className='active-header'><Notificationimg/></span>  </NavLink>
                </li>
                <li className='heders-item'>
                    <NavLink className={({isActive}) => isActive ? "heders-link actives heders-link-activ-bef" : "heders-link"} to='/settings'> <span className='active-header'><Settingsimg/></span> </NavLink>
                </li>
                <li className='heders-item'>
                    <NavLink className={({isActive}) => isActive ? "heders-link actives heders-link-activ-bef" : "heders-link"} to='/logout'> <span className='active-header'><Logoutimg/></span> </NavLink>
                </li>
            </ul>
            
        )
    }
    