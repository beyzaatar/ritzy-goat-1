import * as yup from "yup";

const validations = yup.object().shape({
  userName: yup
    .string()
    .min(3, "your user name must be at least 3 characters!")
    .required(),
 
  password: yup
    .string()
    .min(5, "your password must be at least 5 characters!")
    .required(),

});

export default validations;
