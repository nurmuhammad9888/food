import React from 'react';
import OrderImage from '../../assets/images/order-Image 1.png';
import {
	Trash,
	Creditcard,
	Paypal,
	Crash,
} from '../../assets/images/icons/icons';
import './cruts.css';

export const Cruts = () => {
	return (
		<>
			<div className="cruts-wrapper">
				<div className="crut-wrapper">
					<div className="crut-in-wrapper crut-wrapp d-flex justify-content-between align-items-center">
						<div className="spicy-wrap d-flex align-items-center">
							<img src={OrderImage} width="44" height="41" alt="Order Image" />
							<p className="ps-2 spicy-text">
								Spicy seasoned sea... <br />
								<span className="spicy-span">$ 2.29</span>
							</p>
						</div>
						<div className="crut of-wrap d-flex align-items-center">
							<p className="me-4 num">2</p>
							<span className="">$ 4,58</span>
						</div>
					</div>
					<div className="input-warp d-flex justify-content-between">
						<form>
							<input
								type="text"
								className="form-control inputs"
								placeholder="Please, just a little bit spicy only."
							/>
						</form>
						<button className="btn bg-btn">
							<Trash />
						</button>
					</div>
				</div>
				<div className="crut-wrapper">
					<div className="crut-in-wrapper d-flex justify-content-between align-items-center">
						<div className="spicy-wrap d-flex align-items-center">
							<img src={OrderImage} width="44" height="41" alt="Order Image" />
							<p className="ps-2 spicy-text">
								Salted pasta with mu...
								<br />
								<span className="spicy-span">$ 2,69</span>
							</p>
						</div>
						<div className="crut of-wrap d-flex align-items-center">
							<p className="me-4 num">1</p>
							<span className="">$ 2,69</span>
						</div>
					</div>
					<div className="input-warp d-flex justify-content-between">
						<form>
							<input
								type="text"
								className="form-control inputs"
								placeholder="Order Note..."
							/>
						</form>
						<button className="btn bg-btn">
							<Trash />
						</button>
					</div>
				</div>
				<div className="crut-wrapper">
					<div className="crut-in-wrapper d-flex justify-content-between align-items-center">
						<div className="spicy-wrap d-flex align-items-center">
							<img src={OrderImage} width="44" height="41" alt="Order Image" />
							<p className="ps-2 spicy-text">
								Spicy instant noodle...
								<br />
								<span className="spicy-span">$ 3,49</span>
							</p>
						</div>
						<div className="crut of-wrap d-flex align-items-center">
							<p className="me-4 num">3</p>
							<span className="">$ 10,49</span>
						</div>
					</div>
					<div className="input-warp d-flex justify-content-between">
						<form>
							<input
								type="text"
								className="form-control inputs"
								placeholder="Order Note..."
							/>
						</form>
						<button className="btn bg-btn">
							<Trash />
						</button>
					</div>
				</div>
				<div className="crut-wrapper">
					<div className="crut-in-wrapper d-flex justify-content-between align-items-center">
						<div className="spicy-wrap d-flex align-items-center">
							<img src={OrderImage} width="44" height="41" alt="Order Image" />
							<p className="ps-2 spicy-text">
								Healthy noodle with ...
								<br />
								<span className="spicy-span">$ 3,29</span>
							</p>
						</div>
						<div className="crut of-wrap d-flex align-items-center">
							<p className="me-4 num">1</p>
							<span className="">$ 3,29</span>
						</div>
					</div>
					<div className="input-warp d-flex justify-content-between">
						<form>
							<input
								type="text"
								className="form-control inputs"
								placeholder="Order Note..."
							/>
						</form>
						<button className="btn bg-btn">
							<Trash />
						</button>
					</div>
				</div>
			</div>
			<div className="texts-crut-wrap">
				<div className="disc-wrap d-flex justify-content-between align-items-center">
					<p className="dics">Discount</p>
					<p className="usd">$0</p>
				</div>
				<div className="disc-wrap d-flex justify-content-between align-items-center">
					<p className="dics">Sub total</p>
					<p className="usd">$ 21,03</p>
				</div>
			</div>
			<div className="btn-wrap">
				<button
					className="btn btn-foot w-100"
					type="submit"
					data-bs-toggle="offcanvas"
					data-bs-target="#staticBackdrop"
					aria-controls="staticBackdrop"
				>
					Continue to Payment
				</button>
			</div>
			<div
				class="offcanvas offcanvas-end offcanbody"
				data-bs-backdrop="static"
				tabindex="-1"
				id="staticBackdrop"
				aria-labelledby="staticBackdropLabel"
			>
				<div class="offcanvas-header">
					<div className="texts-wrapper">
						<h3 class="offcanvas-title text-canvas" id="staticBackdropLabel">
							Payment
						</h3>
						<p>3 payment method available</p>
					</div>
				</div>
				<div class="offcanvas-body">
					<div>
						<h3 className=" text-canvas">Payment Method</h3>
						<div className="card-wrap d-flex gap-2 my-3">
							<div className="card-one">
								<Creditcard />
								<p>Credit card</p>
							</div>
							<div className="card-two">
								<Paypal />
								<p>Paypal</p>
							</div>
							<div className="card-two">
								<Crash />
								<p>Cash</p>
							</div>
						</div>
						<form>
							<label htmlFor="">
								<p className="label">Cardholder Name </p>
								<input
									className="form-control card-input mb-3"
									type="text"
									name="cardholderName"
									placeholder="Levi Ackerman"
								/>
							</label>
							<label htmlFor="">
								<p className="label">Card Number</p>
								<input
									className="form-control card-input mb-4"
									type="number"
									name="Card Number"
									placeholder="2564 1421 0897 1244"
								/>
							</label>
							<div className="inputs-wrap me-2 d-flex justify-content-between align-items-center">
								<label htmlFor="">
									<p className="label">Expiration Date</p>
									<input
										className="form-control card-inputs me-1 mb-3"
										type="number"
										name="Expiration Date"
										placeholder="02/2022"
									/>
								</label>
								<label htmlFor="">
									<p className="label">CVV</p>
									<input
										className="form-control card-inputs ms-2 me-1 mb-3"
										type="number"
										name="CVV"
										placeholder=". . ."
									/>
								</label>
							</div>
							<div className="inputs-wrap me-2 d-flex justify-content-between">
								<label htmlFor="">
									<p className="label">Order Type</p>
									<select
										class="form-select card-selec text-white pe-5"
										aria-label="Default select example"
									>
										<option selected hidden>
											Dine In
										</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</label>
								<label htmlFor="">
									<p className="label">Table no.</p>
									<input
										className="form-control card-inputs ms-2 me-1 mb-3"
										type="number"
										name="Table no."
										placeholder="140"
									/>
								</label>
							</div>
							<div className="btn-wrap d-flex justify-content-between mt-4">
								<button
									type="button"
									className="cancel me-3 w-50"
									data-bs-dismiss="offcanvas"
									aria-label="Close"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="confirm w-50"
									aria-label="Confirm Payment"
								>
									Confirm Payment
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
