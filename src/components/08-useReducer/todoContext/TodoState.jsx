import React, { useReducer } from "react";
import {
  AGREGAR_STORAGE,
  AGREGAR_TODO,
  BORRAR_TODO,
  GUARDAR_STORAGE,
  MARCAR_TODO,
} from "../types";
import TodoContext from "./TodoContext";
import { TodoReducer } from "./TodoReducer";

const TodoState = (props) => {
  const initialState = {
    todos: [],
    todosStorage: [],
  };

  //Inicializo reducer
  const [state, dispatch] = useReducer(TodoReducer, initialState);

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

    guardarStorage();
    agregarStorage();
  };

  const eliminarTodo = (id) => {
    dispatch({ type: BORRAR_TODO, payload: id });
    guardarStorage();
    agregarStorage();
  };

  const marcarTodo = (todo) => {
    todo.done = !todo.done;
    dispatch({ type: MARCAR_TODO, payload: todo });
    guardarStorage();
    agregarStorage();
  };

  const agregarStorage = () => {
    dispatch({
      type: AGREGAR_STORAGE,
    });
  };

  const guardarStorage = () => {
    dispatch({ type: GUARDAR_STORAGE });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        todosStorage: state.todosStorage,
        agregarTodo,
        eliminarTodo,
        marcarTodo,
        agregarStorage,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
