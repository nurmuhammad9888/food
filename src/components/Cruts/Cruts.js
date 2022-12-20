import React from 'react'
import OrderImage from "../../assets/images/order-Image 1.png";
import { Trash} from "../../assets/images/icons/icons"
import "./cruts.css"

export const Cruts = () => {
  return (
    <>
    <div className='cruts-wrapper'>
        <div className="crut-wrapper">
            <div className="crut-in-wrapper crut-wrapp d-flex justify-content-between align-items-center">
                <div className="spicy-wrap d-flex align-items-center">
                    <img src={OrderImage} width="44" height="41" alt="Order Image" />
                    <p className='ps-2 spicy-text'>Spicy seasoned sea... <br />
                    <span className='spicy-span'>$ 2.29</span>
                    </p>
                           </div>
                           <div className="crut of-wrap d-flex align-items-center">
                       <p className='me-4 num'>2</p>
                       <span className=''>$ 4,58</span>
                </div>
            </div>
                <div className="input-warp d-flex justify-content-between">
                  <form>
                  <input type="text" className='form-control inputs' placeholder='Please, just a little bit spicy only.'/>
                  </form>
                  <button className='btn bg-btn'><Trash /></button>
                </div>
        </div>
         <div className="crut-wrapper">
            <div className="crut-in-wrapper d-flex justify-content-between align-items-center">
                <div className="spicy-wrap d-flex align-items-center">
                    <img src={OrderImage} width="44" height="41" alt="Order Image" />
                    <p className='ps-2 spicy-text'>Salted pasta with mu...<br />
                    <span className='spicy-span'>$ 2,69</span>
                    </p>
                           </div>
                           <div className="crut of-wrap d-flex align-items-center">
                       <p className='me-4 num'>1</p>
                       <span className=''>$ 2,69</span>
                </div>
            </div>
                <div className="input-warp d-flex justify-content-between">
                  <form>
                  <input type="text" className='form-control inputs' placeholder='Order Note...'/>
                  </form>
                  <button className='btn bg-btn'><Trash /></button>
                </div>
        </div>
        <div className="crut-wrapper">
            <div className="crut-in-wrapper d-flex justify-content-between align-items-center">
                <div className="spicy-wrap d-flex align-items-center">
                    <img src={OrderImage} width="44" height="41" alt="Order Image" />
                    <p className='ps-2 spicy-text'>Spicy instant noodle...<br />
                    <span className='spicy-span'>$ 3,49</span>
                    </p>
                           </div>
                           <div className="crut of-wrap d-flex align-items-center">
                       <p className='me-4 num'>3</p>
                       <span className=''>$ 10,49</span>
                </div>
            </div>
                <div className="input-warp d-flex justify-content-between">
                  <form>
                  <input type="text" className='form-control inputs' placeholder='Order Note...'/>
                  </form>
                  <button className='btn bg-btn'><Trash /></button>
                </div>
        </div>
        <div className="crut-wrapper">
            <div className="crut-in-wrapper d-flex justify-content-between align-items-center">
                <div className="spicy-wrap d-flex align-items-center">
                    <img src={OrderImage} width="44" height="41" alt="Order Image" />
                    <p className='ps-2 spicy-text'>Healthy noodle with ...<br />
                    <span className='spicy-span'>$ 3,29</span>
                    </p>
                           </div>
                           <div className="crut of-wrap d-flex align-items-center">
                       <p className='me-4 num'>1</p>
                       <span className=''>$ 3,29</span>
                </div>
            </div>
                <div className="input-warp d-flex justify-content-between">
                  <form>
                  <input type="text" className='form-control inputs' placeholder='Order Note...'/>
                  </form>
                  <button className='btn bg-btn'><Trash /></button>
                </div>
        </div>
    </div>
    <div className="texts-crut-wrap">
      <div className="disc-wrap d-flex justify-content-between align-items-center">
        <p className='dics'>Discount</p>
        <p className='usd'>$0</p>
      </div>
      <div className="disc-wrap d-flex justify-content-between align-items-center">
        <p className='dics'>Sub total</p>
        <p className='usd'>$ 21,03</p>
      </div>
    </div>
      <div className="btn-wrap">
      <button className='btn btn-danger w-100' type='submit'>Continue to Payment</button>
      </div>
    </>
  )
}
