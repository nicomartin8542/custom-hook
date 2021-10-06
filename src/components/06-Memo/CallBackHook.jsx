import React, { useCallback, useState } from "react";
import { ShowCounter } from "./ShowCounter";
import "../01-useState/counterApp.css";

const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>Use Call back: {counter}</h1>
      <ShowCounter increment={increment} />
    </div>
  );
};

export default CallBackHook;
