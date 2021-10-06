import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";
import "../01-useState/counterApp.css";
import { Small } from "./Small";

const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>
        Use Memo <Small value={counter} />{" "}
      </h1>

      <button className="btn btn-primary mt-5" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-primary mt-5"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
