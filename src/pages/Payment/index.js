import React from "react";
import {
  Grid,
  FormControl,
  Box,
  Input,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import validationSchema from "./validations";
import { addNewPayment } from "../../services/PaymentService.js";
import CartSummary from "../../components/CartSummary/index"

function Payment() {
  const formik = useFormik({
    initialValues: {
      cardHolderName: "",
      cardNumber: "",
      expireMonth: "",
      expireYear: "",
      cvc: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        addNewPayment({
          cardHolderName: values.cardHolderName,
          cardNumber: values.cardNumber,
          expireMonth: values.expireMonth,
          expireYear: values.expireYear,
          cvc: values.cvc,
        });
      } catch (e) {}
    },
  });

  return (
    <div className="container">
      <div className="row justify-content-md-center mt-3 ">
        <div className="col-20 col-md-20 col-lg-20 bg-light mt-3 me-4 p-3 border">
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <Box margin="20">
              <div className="container w-75 h-100 p-2">
                <form onSubmit={formik.handleSubmit}>
                  <p className="h5 row justify-content-md-left ">
                    Bank Account Information
                  </p>

                  <div className="mb-3">
                    <FormControl id="first-name ">
                      <label
                        className="uk-form-label mt-3"
                        htmlFor="first-name"
                      >
                        CARD HOLDER NAME *
                      </label>
                      <Input
                        focusBorderColor="black"
                        name="cardHolderName"
                        placeholder="Name - Surname"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardHolderName}
                        isInvalid={
                          formik.touched.cardHolderName &&
                          formik.errors.cardHolderName
                        }
                      />
                    </FormControl>
                  </div>
                  <div className="mb-3">
                    <FormControl id="cardNumber">
                      <label
                        className="uk-form-label mt-3"
                        htmlFor="cardNumber"
                      >
                        CARD NUMBER *
                      </label>
                      <Input
                        type="number"
                        focusBorderColor="black"
                        name="cardNumber"
                        placeholder="_ _ _ _   _ _ _ _   _ _ _ _   _ _ _ _"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardNumber}
                        isInvalid={
                          formik.touched.cardNumber && formik.errors.cardNumber
                        }
                      />
                    </FormControl>
                  </div>

                  <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                    <FormControl id="expireMonth">
                      <label
                        className="uk-form-label mt-3"
                        htmlFor="expireMonth"
                      >
                        MONTH *
                      </label>
                      <Input
                        type="number"
                        focusBorderColor="black"
                        name="expireMonth"
                        placeholder="MM"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.expireMonth}
                        isInvalid={
                          formik.touched.expireMonth &&
                          formik.errors.expireMonth
                        }
                      />
                    </FormControl>
                    <FormControl id="expireYear">
                      <label
                        className="uk-form-label mt-3"
                        htmlFor="expireYear"
                      >
                        YEAR *
                      </label>
                      <Input
                        type="number"
                        focusBorderColor="black"
                        name="expireYear"
                        placeholder="YY"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.expireYear}
                        isInvalid={
                          formik.touched.expireYear && formik.errors.expireYear
                        }
                      />
                    </FormControl>

                    <FormControl id="cvc">
                      <label className="uk-form-label mt-3" htmlFor="cvc">
                        CVV *
                      </label>
                      <Input
                        type="number"
                        focusBorderColor="black"
                        name="cvc"
                        placeholder="_ _ _"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cvc}
                        isInvalid={formik.touched.cvc && formik.errors.cvc}
                      />
                    </FormControl>
                  </Grid>

                  <Box margin="5">
                    <button type="submit" className="btn btn-dark w-100">
                      PAY
                    </button>
                  </Box>
                </form>
              </div>
            </Box>
            
            <CartSummary />
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Payment;
