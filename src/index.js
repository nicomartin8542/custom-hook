import React from "react";
import ReactDOM from "react-dom";
import CounterWithHook from "./components/01-useState/CounterWithCustomHook";
/* import CounterApp from "./components/01-useState/CounterApp"; */
/* import HookApp from "./HooksApp"; */

ReactDOM.render(
  <React.StrictMode>
    <CounterWithHook />
  </React.StrictMode>,
  document.getElementById("root")
);
