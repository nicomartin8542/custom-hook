import React, { useMemo, useState } from "react";
import { ProcesoPesado } from "../../helpers/ProcesoPesado";
import useCounter from "../../hooks/useCounter";
import "../01-useState/counterApp.css";

const MemoHook = () => {
  const { counter, increment } = useCounter(500);
  const [show, setShow] = useState(false);

  const procesoPesadoMemo = useMemo(() => ProcesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <p>{procesoPesadoMemo}</p>
      <hr />

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

export default MemoHook;
