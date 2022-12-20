import React from 'react'
import "./main.css"
import Image from "../../assets/images/Image 1.png"
import { Cards } from "../Cards/Cards"

export const Main = () => {
    let fakeCard = Array(12).fill(1)
    console.log(fakeCard);
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
    </div>
  )
}
