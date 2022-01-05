import * as yup from "yup";

const validations = yup.object().shape({

  firstName: yup
    .string()
    .min(3, "your first name must be at least 3 characters!")
    .required(),
  lastName: yup
    .string()
    .min(3, "your last name must be at least 3 characters!")
    .required(),
  email: yup
    .string()
    .email("enter a valid email!")
    .required("email is required!"),
  password: yup
    .string()
    .min(5, "your password must be at least 5 characters!")
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), "passwords do not match"])
    .required(),
});

export default validations;
