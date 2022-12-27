import React from 'react';
import './modal.css';

export const Modal = ({ title, cancelBtn, addtBtn, setModalState }) => {
	const closeModal = () => {
		setModalState({ state: false });
	};

	const closeModalWithCencel = () => {
		if (cancelBtn === 'Cancel') {
			setModalState({ state: false });
		}
	};

	return (
		<div className="modal-content">
			<div className="modal-wrap">
				<h3 className="modal-title">{title}</h3>
				<button className="modal-cencel-btn" onClick={closeModal}></button>
				<form className="modal-form">
					<input
						className="modal-input"
						type="text"
						name="product_name"
						aria-label="product name"
						placeholder="Product name"
					/>
					<input
						className="modal-input"
						type="text"
						name="product_bowls"
						aria-label="Product bowls"
						placeholder="Product bowls"
					/>
					<input
						className="modal-input"
						type="text"
						name="product_price"
						aria-label="Product price"
						placeholder="Product price"
					/>
					<select className="modal-select">
						<option hidden >Product category</option>
						<option value="Cold Dishes">Cold Dishes</option>
						<option value="Soup">Soup</option>
						<option value="Grill">Grill</option>
						<option value="Appetizer">Appetizer</option>
						<option value="Dessert">Dessert</option>
					</select>
					<label className="modal-label">
						<input className="modal-input-file" type="file" />
						<p className="modal-label-text">
							Click or drag file to this area to upload
						</p>
						<span className="modal-label-span">
							Support for a single or bulk upload.
						</span>
					</label>
					<div className="btn-wrapper">
						<button className="btn-cencel" type="button" onClick={closeModalWithCencel}>
							{cancelBtn}
						</button>
						<button className="btn-add" type="submit">{addtBtn}</button>
					</div>
				</form>
			</div>
		</div>
	);
};
