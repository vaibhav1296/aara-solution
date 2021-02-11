import React, { Component } from "react";

class PrimeNumber extends Component {
  state = {
    number: null,
    isError: false,
    message: null,
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  checkPrime = (number) => {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
  handleSubmit = () => {
    const { number } = { ...this.state };
    if (number === null) {
      this.setState({
        isError: true,
      });
    } else {
      this.checkPrime(number)
        ? this.setState({
            message: "The number is a prime number.",
          })
        : this.setState({
            message: "The number is not a prime number.",
          });
    }
  };
  setError = () => {
    this.setState({
      isError: false,
    });
  };
  setmessage = () => {
    this.setState({
      message: null,
    });
  };
  render() {
    return (
      <div
        className="container d-flex flex-column justify-content-center align-items-center mt-5"
        id="prime-container"
      >
        {this.state.isError ? (
          <div className="d-flex flex-row">
            <p>Please select a value.</p>
            <span className="popup-cancel" onClick={this.setError}>
              &#10060;
            </span>
          </div>
        ) : null}
        {this.state.message !== null ? (
          <div className="d-flex flex-row">
            <p>{this.state.message}</p>
            <span className="popup-cancel" onClick={this.setmessage}>
              &#10060;
            </span>
          </div>
        ) : null}
        <input
          style={{ width: "70%" }}
          type="number"
          className="form-control"
          id="number"
          min="1"
          onChange={this.handleChange}
        ></input>
        <div id="number-help" className="form-text">
          Enter a number to check if prime.
        </div>
        <button
          style={{ backgroundColor: "#994d00", color: "white" }}
          className="btn btn-md"
          onClick={this.handleSubmit}
        >
          Check
        </button>
      </div>
    );
  }
}

export default PrimeNumber;
