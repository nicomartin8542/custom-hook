import { useEffect, useState } from "react";

const useForm = (initialState = {}, validate, fn) => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (!submit) return;
    const errorVerify = Object.keys(error).length === 0;
    errorVerify && fn(values);
    setSubmit(false);
    setValues({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errores = validate(values);
    setError(errores);
    setSubmit(true);
    e.target.reset();
  };

  return [values, error, handleInputChange, handleFormSubmit];
};

export default useForm;
