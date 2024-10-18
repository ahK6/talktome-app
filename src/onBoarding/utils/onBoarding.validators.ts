import * as yup from "yup";

export const loginValidation = yup.object().shape({
  phoneNumber: yup.string().required("El campo es requerido"),
  password: yup.string().required("El campo es requerido"),
});
