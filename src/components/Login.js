import React, { Component } from "react";
import emailValidator from "email-validator";

class Login extends Component {
  state = {
    email: null,
    password: null,
    errorMessage: null,
    successMessage: null,
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email === null) {
      this.setState({
        errorMessage: "Please insert email value.",
      });
    } else if (this.state.password === null) {
      this.setState({
        errorMessage: "Please insert password value.",
      });
    } else {
      const { email, password } = { ...this.state };
      if (!emailValidator.validate(email)) {
        this.setState({
          errorMessage: "Email is not valid.",
        });
      } else if (password.length <= 5) {
        this.setState({
          errorMessage: "Password length is less than or equal to 5.",
        });
      } else {
        this.setState({
          successMessage: "Thank you for registering.",
        });
      }
    }
  };
  setSuccess = () => {
    this.setState({
      successMessage: null,
    });
  };
  setError = () => {
    this.setState({
      errorMessage: null,
    });
  };
  render() {
    return (
      <div>
        <div
          style={{ width: "100%" }}
          className="d-flex flex-column justify-content-center align-items-center mt-5"
        >
          <h5>Log In Form</h5>
          <hr style={{ width: "40%" }} />
        </div>
        <div
          style={{ width: "40%", backgroundColor: "#ffa34d" }}
          className="container mt-3 d-flex flex-column justify-content-center align-items-center"
        >
          <div className="mt-2 d-flex justify-content-center align-items-center">
            {this.state.errorMessage !== null ? (
              <div className="d-flex flex-row">
                <p>{this.state.errorMessage}</p>
                <span className="popup-cancel" onClick={this.setError}>
                  &#10060;
                </span>
              </div>
            ) : null}
          </div>
          <div className="mt-2 d-flex justify-content-center align-items-center">
            {this.state.successMessage !== null ? (
              <div className="d-flex flex-row">
                <p>{this.state.successMessage}</p>
                <span className="popup-cancel" onClick={this.setSuccess}>
                  &#10060;
                </span>
              </div>
            ) : null}
          </div>
          <form style={{ width: "80%" }} onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                onChange={this.handleChange}
              />
              <div id="emailHelp" className="form-text">
                Please input your email.
              </div>
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                aria-describedby="passowrdHelp"
                onChange={this.handleChange}
              />
              <div id="passowrdHelp" className="form-text">
                Please input your passowrd with minimum 6 characters.
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-center align-items-center p-1">
              <button
                type="submit"
                className="btn"
                style={{
                  width: "100px",
                  backgroundColor: "#994d00",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
