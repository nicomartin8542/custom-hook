import React from "react";
import useCounter from "../../hooks/useCounter";
import "./counterApp.css";

const CounterWithHook = () => {
  const { state, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter With hook: {state}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-success" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-danger" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};

export default CounterWithHook;
