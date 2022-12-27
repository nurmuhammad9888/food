import React from 'react';
import Image from "../../../assets/images/Image 1.png";
import Editicon from "../../../assets/images/edit-icon.svg";
import "./productsCard.css";
export const ProductsCard = ({ setModalState }) => {

    return (
            <li className='products-cards-item'>
                    <img className='products-card-image' src={Image} width="149" height="135" alt="Palov" />
                    <div className="products-text-wrapper">
                        <h3 className='products-card-title'>Spicy seasoned <br /> seafood noodles</h3>
                        <div className='d-flex justify-content-center'>
                            <p className='products-card-text'>$ 2.29</p>
                            <p className='products-card-texttwo'>20 Bowls</p>
                        </div>
                        <button className='products-edit-wrap' onClick={() => { setModalState({ state: true, title: "Edit or delete product item ", cancelBtn: "Delete", addtBtn: "Edit", }) }} >
                            <img className='products-edit-image' src={Editicon} width="15" height="14" alt="edit icon" />
                            <p className='products-edit-text' >Edit dish</p>
                        </button>
                    </div>
            </li>
        )
    }
    