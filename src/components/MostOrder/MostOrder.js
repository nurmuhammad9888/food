import React from 'react'
import "./mostorder.css"
import OrderImage from "../../assets/images/order-Image 1.png"
import { Diwes } from '../Diwes/Diwes'
import { Cricle, Dine, ToGo, Delivery} from "../../assets/images/icons/icons"

export const MostOrder = () => {

    let CardsArray = Array(5).fill(1)

  return (
    <>
    <div className='most'>
        <div className="most-top">
        <div className="today-wrap d-flex justify-content-between align-items-center">
            <h3 className='most-text'>Most Ordered</h3>
            <select className="form-select selectt" aria-label="Default select example">
              <option value="1">Today</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
        </div>
        <ul className="spicy-wrap">
           {
            CardsArray.map(item => <Diwes />)
           }
        </ul>
        <button className='btn-view' type='button'>View All</button>
        </div>
    <div className="most-botm">
         <div className="today-wrap d-flex justify-content-between align-items-center">
            <h3 className='most-text'>Most Ordered</h3>
            <select className="form-select selectt" aria-label="Default select example">
              <option value="1">Today</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
        </div>
        <div className="image-flex d-flex align-items-center">
           <div className="crcle-wrap">
           <Cricle />
           </div>
           <div className="circle-status ">
            <div className="circle-dine d-flex">
           <Dine />
           <div className="circle-texts">
           <p className='dine'>Dine In</p>
           <span className='cust'>200 customers</span>
           </div>
            </div>
            <div className="circle-dine d-flex">
           <ToGo />
           <div className="circle-texts">
           <p className='dine'>To Go</p>
           <span className='cust'>122 customers</span>
           </div>
            </div>
            <div className="circle-dine d-flex">
           <Delivery />
           <div className="circle-texts">
           <p className='dine'>Delivery</p>
           <span className='cust'>264 customers</span>
           </div>
            </div>
           </div>
        </div>
    </div>
    </div>
    </>
  )
}
