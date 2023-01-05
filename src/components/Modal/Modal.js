import React, { useRef } from 'react';
import './modal.css';
import axios from 'axios';

export const Modal = ({ title, cancelBtn, addtBtn, setModalState, id }) => {
	const name = useRef();
	const price = useRef();
	const bowls = useRef();
	const category_id = useRef();
	const food_img = useRef();

	const closeModal = () => {
		setModalState({ state: false });
	};

	const closeModalWithCencel = () => {
		if (cancelBtn === 'Cancel') {
			setModalState({ state: false });
		}else{
			axios
				.delete(`http://localhost:5000/food/${id.id}`)
				.then((res) => {
					if(res.status === 200){
						setModalState({ state: false });
					}
				})
				.catch((err) => console.log(err));
		}
	};

	function handlerSubmitForm(evt) {
		evt.preventDefault();
		const newFormData = new FormData();
	
		newFormData.append('name', name.current.value);
		newFormData.append('bowls', bowls.current.value);
		newFormData.append('price', Number(price.current.value));
		newFormData.append('category_id', category_id.current.value);
		newFormData.append('food_img', food_img.current.files[0]);
	
		axios
			.post('http://localhost:5000/food',newFormData)
			.then((res) => {
				if(res.status === 200){
					setModalState({ state: false });
				}
			})
			.catch((err) => console.log(err));
	}


	function handlerSubmitFormPut(evt) {
		evt.preventDefault();
		const newFormData = new FormData();
	
		newFormData.append('name', name.current.value);
		newFormData.append('bowls', bowls.current.value);
		newFormData.append('price', Number(price.current.value));
		newFormData.append('category_id', category_id.current.value);
		newFormData.append('food_img', food_img.current.files[0]);
		
		axios
			.put(`http://localhost:5000/food/${id.id}`,newFormData)
			.then((res) => {
				if(res.status === 200){
					setModalState({ state: false });
				}
			})
			.catch((err) => console.log(err));
	}


	return (
		<div className="modal-content">
			<div className="modal-wrap">
				<h3 className="modal-title">{title}</h3>
				<button className="modal-cencel-btn" onClick={closeModal}></button>
				<form className="modal-form"  onSubmit={addtBtn === "Add" ? handlerSubmitForm : handlerSubmitFormPut} >
					<input
						ref={name}
						className="modal-input"
						type="text"
						name="name"
						aria-label="product name"
						placeholder="Product name"
						required
					/>
					<input
						ref={bowls}
						className="modal-input"
						type="text"
						name="bowls"
						aria-label="Product bowls"
						placeholder="Product bowls"
						required
					/>
					<input
						ref={price}
						className="modal-input"
						type="number"
						name="price"
						aria-label="Product price"
						placeholder="Product price"
						required
					/>
					<select ref={category_id} className="modal-select" name="category_id">
						<option hidden>Product category</option>
						<option value="1">Hot dishes</option>
						<option value="2">Cold Dishes</option>
						<option value="3">Soup</option>
						<option value="4">Grill</option>
						<option value="5">Appetizer</option>
						<option value="6">Dessert</option>
					</select>
					<label className="modal-label">
						<input
							ref={food_img}
							name="food_img"
							className="modal-input-file"
							type="file"
						/>
						<p className="modal-label-text">
							Click or drag file to this area to upload
						</p>
						<span className="modal-label-span">
							Support for a single or bulk upload.
						</span>
					</label>
					<div className="btn-wrapper">
						<button
							className="btn-cencel"
							type="button"
							onClick={closeModalWithCencel}
						>
							{cancelBtn}
						</button>
						<button className="btn-add" type="submit">
							{addtBtn}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
