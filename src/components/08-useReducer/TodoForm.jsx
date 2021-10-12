import React, { useContext } from "react";
import useForm from "../../hooks/useForm";
import TodoContext from "./todoContext/TodoContext";
import todoValidacion from "./validaciones/todoValidation";

const TodoForm = () => {
  //Importo context en el compnonente
  const todoContext = useContext(TodoContext);
  const { agregarTodo } = todoContext;

  //Hook personalizado para validar un formulario
  const [values, error, handleChange, handleSubmit] = useForm(
    {},
    todoValidacion,
    agregarTodo
  );

  return (
    <div className="col-lg-5 col-sm-12">
      <h4>Agregar Todo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="desc"
          placeholder="Aprender..."
          autoComplete="false"
          className="form-control"
          onChange={handleChange}
          values={values.desc}
        />

        {error.desc && (
          <div className="alert alert-danger mt-3" role="alert">
            {error.desc}
          </div>
        )}
        <div className="d-grid gap-2">
          <button
            className="btn btn-outline-primary btn-block mt-3 "
            type="submit"
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
