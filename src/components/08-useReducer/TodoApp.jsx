import React, { useContext, useEffect } from "react";
import "./todoApp.css";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoContext from "./todoContext/TodoContext";

const TodoApp = () => {
  //Importo context en el compnonente
  const todoContext = useContext(TodoContext);

  const { todos } = todoContext;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  return (
    <div>
      <h1>Todo App ({todos?.length})</h1>
      <hr />
      <div className="d-flex flex-column flex-lg-row">
        <TodoList />
        <TodoForm />
      </div>
    </div>
  );
};

export default TodoApp;
