import React from 'react';
// import Image from "../../../assets/images/Image 1.png";
import Editicon from "../../../assets/images/edit-icon.svg";
import "./productsCard.css";
export const ProductsCard = ({ setModalState, name, id , image, price, bowls }) => {

    return (
            <li className='products-cards-item'>
                    <img className='products-card-image' src={`http://localhost:5000/${image}`} width="149" height="135" alt="Palov" />
                    <div className="products-text-wrapper">
                        <h3 className='products-card-title'>{name}</h3>
                        <div className='d-flex justify-content-center'>
                            <p className='products-card-text'>$ {price}</p>
                            <p className='products-card-texttwo'>{bowls} Bowls</p>
                        </div>
                        <button className='products-edit-wrap' onClick={() => { setModalState({ state: true, title: "Edit or delete product item ", cancelBtn: "Delete", addtBtn: "Edit", id:{id} }) }} >
                            <img className='products-edit-image' src={Editicon} width="15" height="14" alt="edit icon" />
                            <p className='products-edit-text' >Edit dish</p>
                        </button>
                    </div>
            </li>
        )
    }
    