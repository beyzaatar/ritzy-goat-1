import React from "react";
import { FormControl, Input } from "@chakra-ui/react";
import { useFormik } from "formik";
import validationSchema from "./validations";
import { addNewUser } from "../../services/SignupService";
import { useAuth } from "../../contexts/AuthContext";

function Signup() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const registerResponse = await addNewUser({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        });

        login(registerResponse);
      } catch (e) {}
    },
  });

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 mt-5  col-md-12 col-lg-5 bg-light ">
          <form onSubmit={formik.handleSubmit} className="p-5">
            <fieldset className="uk-fieldset">
              <legend className="uk-legend border-bottom p-3">Sign Up</legend>
              <FormControl id="first-name ">
                <label className="uk-form-label mt-3" htmlFor="first-name">
                  FIRST NAME *
                </label>
                <Input
                  focusBorderColor="black"
                  name="firstName"
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  isInvalid={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </FormControl>

              <FormControl className="mt-3" id="last-name">
                <label className="uk-form-label" htmlFor="last-name">
                  LAST NAME *
                </label>
                <Input
                  focusBorderColor="black"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  isInvalid={formik.touched.lastName && formik.errors.lastName}
                />
              </FormControl>

              <FormControl className="mt-3" id="email">
                <label className="uk-form-label" htmlFor="email">
                  E MAIL *
                </label>
                <Input
                  focusBorderColor="black"
                  name="email"
                  type="email"
                  placeholder="E Mail"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>

              <FormControl className="mt-3" id="password">
                <label className="uk-form-label" htmlFor="password">
                  PASSWORD *
                </label>
                <Input
                  focusBorderColor="black"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
              </FormControl>

              <FormControl className="mt-3" id="confirm-password">
                <label className="uk-form-label" htmlFor="confirm-password">
                  CONFIRM PASSWORD *
                </label>
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  onInvalidCapture={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
              </FormControl>

              <button type="submit" className="btn mt-5 btn-dark  w-100">
                Sign Up
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
