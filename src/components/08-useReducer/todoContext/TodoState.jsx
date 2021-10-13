import React, { useReducer } from "react";
import { AGREGAR_TODO, BORRAR_TODO, MARCAR_TODO } from "../types";
import TodoContext from "./TodoContext";
import { TodoReducer } from "./TodoReducer";

const TodoState = (props) => {
  //Inicializo reducer
  const init = () => {
    return { todos: JSON.parse(localStorage.getItem("todos")) || [] };
  };

  //Inicializo reducer
  const [state, dispatch] = useReducer(TodoReducer, [], init);

  //Funciones
  const agregarTodo = (values) => {
    const newTodo = {
      id: new Date().getTime(),
      desc: values.desc,
      done: false,
    };

    dispatch({
      type: AGREGAR_TODO,
      payload: newTodo,
    });
  };

  const eliminarTodo = (id) => {
    dispatch({ type: BORRAR_TODO, payload: id });
  };

  const marcarTodo = (todo) => {
    todo.done = !todo.done;
    dispatch({ type: MARCAR_TODO, payload: todo });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        agregarTodo,
        eliminarTodo,
        marcarTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
