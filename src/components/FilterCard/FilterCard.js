import React from 'react'
import "./fitercard.css"
import Eren from "../../assets/images/Eren-Jaegar.png"


export const FilterCard = () => {
  return (
    <>
     <li className='d-flex align-items-center item-follow'>
          <div className="img-text d-flex align-items-center">
            <img src={Eren} width="32" height="32" alt="Eren" />
            <p className='ms-3 textsin'>Eren Jaegar</p>
          </div>
          <div className="parag-wraps">
          <p className='textsin'>Spicy seasoned seafood noodles </p>
          </div>
          <div className="total-wraps">
            <p className='textsin'>$125</p>
          </div>
          <button className='comp-btn'type='button'>Completed</button>
        </li>
    </>
  )
}
