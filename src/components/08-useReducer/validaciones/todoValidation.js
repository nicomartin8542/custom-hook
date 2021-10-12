const todoValidacion = (values = {}) => {
  let error = {};

  !values.desc && (error.desc = "La descripcion es obligatoria");

  return error;
};

export default todoValidacion;
