import React from 'react'
import "./diwes.css"
import OrderImage from "../../assets/images/order-Image 1.png"


export const Diwes = () => {
  return (
    <>
     <li className="diwes-wrap text-white d-flex align-items-center">
                <img src={OrderImage} width="61" height="55" alt="OrderImage" />
               <div className="diwes-texts ms-3">
               <p>Spicy seasoned seafood noodles</p>
                <span>200 dishes ordered</span>
               </div>
            </li>
    </>
  )
}
