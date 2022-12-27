import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductsCard } from '../ProductsCard/ProductsCard';
import addicon from "../../../assets/images/plus.svg";

import "./products.css";
import { Modal } from '../../../components/Modal/Modal';

export const Products = () => {
    let fakeCard = Array(5).fill(1)
    const [ modal, setModalState ] = useState({ state: false, });
    const openModal = () => { setModalState({ state: true, title: "Add new product item to list", cancelBtn: "Cancel", addtBtn: "Add", })};

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
                            <NavLink className={({isActive}) => isActive ? "hederstop-link hederstop-link-active hederstop-link-line-active" : "hederstop-link"} to={'hott'} end >Hot Dishes</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? "hederstop-link hederstop-link-active hederstop-link-line-active" : "hederstop-link"} to={'coldt'}>Cold Dishes</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? "hederstop-link hederstop-link-active hederstop-link-line-active" : "hederstop-link"} to={'soupt'}>Soup</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? "hederstop-link hederstop-link-active hederstop-link-line-active" : "hederstop-link"} to={'grillt'}>Grill</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? "hederstop-link hederstop-link-active hederstop-link-line-active" : "hederstop-link"} to={'appetizert'}>Appetizer</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? "hederstop-link hederstop-link-active hederstop-link-line-active" : "hederstop-link"} to={'dessertt'}>Dessert</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className='products-card-list'>
                <li className='products-add-btn-item'>
                    <button className='products-add-btn' onClick={openModal}>
                    <img className='products-card-add-img' src={addicon} width="15" height="15" alt="add icon" />
                        <span className='products-add-btn-text'>Add new dish</span>
                    </button>
                </li>
                {
                    fakeCard.map(item => <ProductsCard setModalState={setModalState} />)
                }
            </ul>
                {modal.state && ( <Modal title={modal.title} cancelBtn={modal.cancelBtn} addtBtn={modal.addtBtn} setModalState={setModalState} /> )}
        </div>
        )
    }
    