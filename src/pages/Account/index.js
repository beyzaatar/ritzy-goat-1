import React, { Component } from "react";
import {InputGroup,Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
//import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};


class Account extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
      show:false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });
    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/home");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  
  
  render(){
    return (
      <div className="container">
        <div className="row justify-content-md-center mt-5 ">
          <div className="col-12 col-md-12 col-lg-5 bg-light mt-5 me-4 p-5 border">
            <h3 className="border-bottom">LOGIN</h3>
            <Form  onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}>
              <div className="mb-3  mt-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <Input
                  focusBorderColor="black"
                  placeholder="Email"
                  name="UserName"
                  onChange={this.onChangeUsername}
                validations={[required]}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Password
                </label>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={this.state.show ? "text" : "password"}
                    placeholder="Password"
                    focusBorderColor="black"
                    name="password"
                    onChange={this.onChangePassword}
                    validations={[required]}
                  />
                
                </InputGroup>
              </div>
              <div className="mb-3 form-check">
                <input
                
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
  
              <button type="submit" className="btn btn-dark w-full w-100" disabled={this.state.loading}>
              {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                LOGIN
              </button>
              {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
            </Form>
          </div>
  
          <div className="col-12 col-md-12 col-lg-5 bg-light mt-5  p-5 border ">
            <h3 className="border-bottom">SIGN UP</h3>
            <div>
              <div className="mb-3  mt-4">
                <p className="lh-sm">
                  As a member of RitzyGoat, you can benefit from many advantages.
                  Prominent advantages;{" "}
                </p>
              </div>
              <div className="mb-3">
                <ul className="list-unstyled">
                  <li>You can be informed about the campaigns first.</li>
                  <li>
                    Give the gift of luxury and style with a RealReal gift card.
                  </li>
                  <li>Email one of our experts at: example@gmail.com</li>
                  <li>It pays. Receive up to 85% of each item’s sale price.</li>
                </ul>
              </div>
            </div>
            <Link to="/register">
              <button type="submit" className="btn btn-outline-dark w-100">
                SIGN UP
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
