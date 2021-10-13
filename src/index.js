import React from "react";
import ReactDOM from "react-dom";
import { MainApp } from "./components/09-useContext/MainApp";
/* import TodoApp from "./components/08-useReducer/TodoApp";
import TodoContext from "./components/08-useReducer/todoContext/TodoState"; */
/* import { Padre } from "./components/07-tareaMemo/Padre"; */
/* import CallBackHook from "./components/06-Memo/CallBackHook"; */
/* import MemoHook from "./components/06-Memo/MemoHook"; */
/* import Memorize from "./components/06-Memo/Memorize"; */
/* import { Layout } from "./components/05-useLayoutEffect/Layout"; */
/* import RealExampleRef from "./components/04-useRef/RealExampleRef"; */
/* import FocusScreen from "./components/04-useRef/FocusScreen"; */
/* import { MultipleCustomHooks } from "./components/03-examples/MultipleCustomHooks"; */
/* import FormWithCustomHook from "./components/02-ouseEfect/FormWithCustomHook"; */
/* import SimpleForm from "./components/02-ouseEfect/SimpleForm"; */
/* import CounterWithHook from "./components/01-useState/CounterWithCustomHook"; */
/* import CounterApp from "./components/01-useState/CounterApp"; */
/* import HookApp from "./HooksApp"; */

ReactDOM.render(
  <React.StrictMode>
    {/* <TodoContext>
      <TodoApp />
    </TodoContext> */}
    <MainApp />
  </React.StrictMode>,
  document.getElementById("root")
);
