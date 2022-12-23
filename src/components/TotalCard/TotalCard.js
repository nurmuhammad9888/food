import React from 'react'
import "./total.css"
import { Coin, Toparow, Bookmark, Bottomarow, Contact } from "../../assets/images/icons/icons"

export const TotalCard = () => {
  return (
    <>
    <li className='item-total'>
        <div className="item-in">
        <span className='coin-img'><Coin /></span>
        <span className='caunt'>+32.40%</span>
        <Toparow />
        </div>
        <h3 className='ful-num'>$10,243.00</h3>
        <p className='reven'>Total Revenue</p>
    </li>

     <li className='item-total'>
     <div className="item-in">
     <span className='coin-img'><Bookmark /></span>
     <span className='caunt reds'>-12.40%</span>
     <Bottomarow />
     </div>
     <h3 className='ful-num'>23,456</h3>
     <p className='reven'>Total Dish Ordered</p>
 </li>

 <li className='item-total'>
     <div className="item-in">
     <span className='coin-img'><Contact /></span>
     <span className='caunt'>+2.40%</span>
     <Toparow />
     </div>
     <h3 className='ful-num'>1,234</h3>
     <p className='reven'>Total Customer</p>
 </li>

 </>
  )
}
