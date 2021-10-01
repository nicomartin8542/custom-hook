import React, { useEffect } from "react";
import useForm from "../../hooks/useForm";
import "./simpleForm.css";

const FormWithCustomHook = () => {
  const [formValues, handleChange, handleSubmit] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("Se cambio el mail");
  }, [email]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>

      <hr />

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese su nombre"
          name="name"
          value={name}
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="email@gmail.com"
          name="email"
          value={email}
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="*****"
          name="password"
          value={password}
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <br />
      <button type="submit" className="btn btn-success">
        Guardar
      </button>
    </form>
  );
};

export default FormWithCustomHook;
