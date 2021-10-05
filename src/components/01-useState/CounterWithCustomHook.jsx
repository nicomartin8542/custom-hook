import React from "react";
import useCounter from "../../hooks/useCounter";
import "./counterApp.css";

const CounterWithHook = () => {
	const {counter, increment, decrement, reset} = useCounter();

	return (
		<>
			<h1>Counter With hook: {counter}</h1>
			<hr />

			<button className="btn btn-primary" onClick={() => increment()}>
				+1
			</button>
			<button className="btn btn-success" onClick={reset}>
				Reset
			</button>
			<button className="btn btn-danger" onClick={() => decrement()}>
				-1
			</button>
		</>
	);
};

export default CounterWithHook;
