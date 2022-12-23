import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { ProductsCard } from '../ProductsCard/ProductsCard';
import addicon from "../../../assets/images/plus.svg";

import "./products.css";

export const Products = () => {
    let fakeCard = Array(5).fill(1)

    return (
        <div className='products-big-wrap'>
            <div className='products-wrap'>
                <div className='products-wrapper'>
                    <ul className="products-list list-unstyled">
                        <li className="products-item d-flex">
                            <div>
                                <h1 className='products-title'>Products Management</h1>
                            </div>
                            <div className='products-input-wrap'>
                                <select className='products-select'>
                                    <option hidden >Manage Categories</option>
                                    <option value="Cold Dishes">Cold Dishes</option>
                                    <option value="Soup">Soup</option>
                                    <option value="Grill">Grill</option>
                                    <option value="Appetizer">Appetizer</option>
                                    <option value="Dessert">Dessert</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                    <ul className="products-bottom-list list-unstyled d-flex">
                        <li>
                            <NavLink className={({isActive}) => isActive ? "hederstop-link hederstop-link-active hederstop-link-line-active" : "hederstop-link"} to={'hot'} end>Hot Dishes</NavLink>
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
                    </ul>
                </div>
            </div>
            <ul className='products-card-list'>
                <li className='products-add-btn-item'>
                    <button className='products-add-btn'>
                    <img className='products-card-add-img' src={addicon} width="15" height="15" alt="add icon" />
                        <span className='products-add-btn-text'>Add new dish</span>
                    </button>
                </li>
                {
                    fakeCard.map(item => <ProductsCard />)
                }
            </ul>
        </div>
        )
    }
    