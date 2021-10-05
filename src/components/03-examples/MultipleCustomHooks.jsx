import React from "react";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import "../02-ouseEfect/simpleForm.css";

export const MultipleCustomHooks = () => {
	const {counter, increment} = useCounter();
	const {loading, data} = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`,
	);
	//Condicional para obtener el valor de la data cuando venga con datos para evitar errores
	const {author, quote} = !!data && data[0];

	return (
		<div>
			<h1>BreakingBad Qoutes</h1>
			<hr />

			{loading ? (
				<div className="alert alert-info text-center">loading....</div>
			) : (
				<>
					<figure className="text-end">
						<blockquote className="blockquote">
							<p className="mb-0">{quote}</p>
							<br />
							<footer className="blockquote-footer">{author}</footer>
						</blockquote>
					</figure>

					<button className="btn btn-primary" onClick={increment}>
						Siguiente Quote
					</button>
				</>
			)}
		</div>
	);
};
