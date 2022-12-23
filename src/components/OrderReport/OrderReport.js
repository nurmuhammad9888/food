import React from 'react'
import "./orderreport.css"
import Eren from "../../assets/images/Eren-Jaegar.png"
import { FilterCard } from '../FilterCard/FilterCard'
import { MostOrder } from '../MostOrder/MostOrder'

export const OrderReport = () => {

  let CardFake = Array(9).fill(1)


  return (
    <div className='orderreport-wrap'>
        <div className="pages-wrap">
       <div className="filter-wrap d-flex justify-content-between align-items-center">
        <h3 className='report-title'>Order Report</h3>
        <select className="form-select selects" aria-label="Default select example">
         <option value="1" selected hidden>Filter</option>
         <option className='two' value="2">Two</option>
         <option className='two' value="3">Three</option>
        </select>
       </div>
       <ul className='list-unstyled cust-list d-flex justify-content-start'>
        <li className='item-cus cus-one'>Customer</li>
        <li className='item-cus cus-menu'>Menu</li>
        <li className='item-cus cus-pay'>Total Payment</li>
        <li className='item-cus'>Status</li>
       </ul>
       <ul className='list-unstyled list-itemsjs'>
          {
            CardFake.map(item => <FilterCard />)
          }
       </ul>
       </div>
       <MostOrder />
    </div>
  )
}
