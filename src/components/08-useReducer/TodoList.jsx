import React, { useContext } from "react";
import TodoContext from "./todoContext/TodoContext";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  //Importo context en el compnonente
  const todoContext = useContext(TodoContext);
  const { todos } = todoContext;

  return (
    <div className="col-lg-7 col-sm-12 me-lg-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Desc</th>
            <th>Done</th>
            <th>Accion</th>
          </tr>
        </thead>

        <tbody>
          {todos?.map((todo, i) => (
            <TodoListItem key={i} todo={todo} i={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
