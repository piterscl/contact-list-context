import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState({});
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form
					onSubmit={e => {
						e.preventDefault();
						actions.contactosNuevos();
						e.target.reset();
					}}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							name="full_name"
							placeholder="Full Name"
							required
							onChange={actions.handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							name="email"
							placeholder="Enter email"
							required
							onChange={actions.handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							name="phone"
							placeholder="Enter phone"
							required
							onChange={actions.handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							name="adress"
							placeholder="Enter address"
							required
							onChange={actions.handleChange}
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
