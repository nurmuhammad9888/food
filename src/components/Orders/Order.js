import React from 'react'
import "./order.css"
import { Cruts } from '../Cruts/Cruts'

export const Order = () => {
  return (
    <div className='order-wrap'>
        <div className="order-text-wrap">
            <h3 className='order-title'>Orders #34562</h3>
            <button className='btn btn-danger bg-btns text-white fw-bold fs-6 me-2'>Dine In</button>
            <button className='btn btns btn-light texts-bg fw-bold fs-6 me-2'>To Go</button>
            <button className='btn btns btn-light texts-bg fw-bold fs-6 me-2'>Delivery</button>
        </div>
        <div className="order-item d-flex justify-content-between align-items-center py-4 text-white">
            <h3 className='order-item-text'>Item</h3>
            <div className="order-text-wrap d-flex">
                <h3 className='me-5 order-item-text'>Qty</h3>
                <h3 className='order-item-text'>Price</h3>
            </div>
        </div>
        <Cruts />
    </div>
  )
}
