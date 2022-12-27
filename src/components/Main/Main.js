import React from 'react'
import "./main.css"
import { Cards } from "../Cards/Cards"
import { Order } from '../Orders/Order'

export const Main = () => {
    let fakeCard = Array(12).fill(1)

  return (
    <div className='wrapper-main'>
        <div className="choose d-flex justify-content-between">
            <h2 className='choose-text'>Choose Dishes</h2>
            <form className='form'>
                <select class="form-select select" aria-label="Default select example">
                  <option className='option' selected hidden>Dine In</option>
                  <option className='option' value="1">One</option>
                  <option className='option' value="2">Two</option>
                  <option className='option' value="3">Three</option>
                </select>
            </form>
        </div>
        <ul className='list-unstyled d-flex justify-content-between flex-wrap item-list'>
            {
                fakeCard.map(item => <Cards />)
            }
        </ul>
        <Order/>
    </div>
  )
}
