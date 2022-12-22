import React from 'react'
import ImageOne from "../../assets/images/Image 1.png"
import "./card.css"

export const Cards = () => {
  return (
    <>
        <li className='cards'>
            <img className='card-image' src={ImageOne} width="149" height="135" alt="Palov" />
            <div className="text-wrapper">
            <h3 className='card-title'>Spicy seasoned <br /> seafood noodles</h3>
            <p className='card-text'>$ 2.29</p>
            <p className='card-texttwo'>20 Bowls available</p>
            </div>
        </li>
    </>
  )
}
