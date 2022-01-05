import * as yup from "yup";

const validations = yup.object().shape({

  cardHolderName: yup
    .string()
    .min(6, "invalid card holder name!")
    .required(),
  cardNumber: yup
    .string()
    .min(16, "invalid card number!")
    .max(16, "invalid card number!")
    .required(),
  expireMonth: yup
    .string()
    .required("invalid month!"),
  expireYear: yup
    .string()
    .required("invalid year"),
  cvc: yup
    .string()
    .required("invalid cvv"),
});

export default validations;
