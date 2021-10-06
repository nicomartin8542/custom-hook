import React, {useEffect, useState} from "react";
import {Message} from "./Message";
import "./simpleForm.css";
const SimpleForm = () => {
	const [state, setState] = useState({
		name: "",
		email: "",
	});

	const {name, email} = state;

	useEffect(() => {
		//console.log("Hey!");
	}, []);

	useEffect(() => {
		//console.log("Cambio state!");
	}, [state]);

	useEffect(() => {
		//console.log("Cambio email!");
	}, [email]);

	const handleChange = ({target: {name, value}}) => {
		setState({
			...state,
			[name]: value,
		});
	};

	return (
		<>
			<h1>UseSEfect</h1>

			<hr />

			<div className="form-group">
				<input
					type="text"
					className="form-control"
					placeholder="Ingrese su nombre"
					name="name"
					value={name}
					autoComplete="off"
					onChange={handleChange}
				/>
			</div>
			<br />
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					placeholder="email@gmail.com"
					name="email"
					value={email}
					autoComplete="off"
					onChange={handleChange}
				/>
			</div>

			{name === "123" && <Message />}
		</>
	);
};

export default SimpleForm;
