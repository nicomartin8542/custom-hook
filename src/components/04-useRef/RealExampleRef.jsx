import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import "../01-useState/counterApp.css";
const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real Example Ref</h1>

      {show && <MultipleCustomHooks />}

      <button className="btn btn-primary mt-5" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
    </div>
  );
};

export default RealExampleRef;
