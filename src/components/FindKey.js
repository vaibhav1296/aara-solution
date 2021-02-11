import React, { Component } from "react";

class FindKey extends Component {
  state = {
    arrOfObjects: [
      {
        product_id: "1",
        price: "1099",
      },
      {
        product_id: "2",
        price: "200",
      },
      {
        product_id: "3",
        price: "300",
      },
    ],
    currentProductPrice: null,
  };
  clearPrice = () => {
    this.setState({
      currentProductPrice: null,
    });
  };
  showPrice = (product_id) => {
    const arr = [...this.state.arrOfObjects];
    let currentProductPrice = null;
    arr.forEach((obj) => {
      if (obj.product_id === product_id) {
        currentProductPrice = obj.price;
      }
    });
    this.setState({
      currentProductPrice,
    });
  };
  render() {
    return (
      <div>
        <div
          style={{ width: "100%" }}
          className="d-flex flex-column justify-content-center align-items-center mt-3"
        >
          <h5>Click ID on left and see price on right.</h5>
          <div
            className="d-flex justify-content-center align-items-center p-1"
            style={{
              width: "100px",
              backgroundColor: "#994d00",
              color: "white",
              cursor: "pointer",
            }}
            onClick={this.clearPrice}
          >
            Clear price
          </div>
        </div>
        <div
          style={{ width: "70%", backgroundColor: "#ffa34d" }}
          className="container mt-3 d-flex justify-content-center align-items-center"
        >
          <div
            style={{ width: "50%" }}
            className="d-flex flex-column justify-content-center align-items-center border-end"
          >
            {this.state.arrOfObjects.map((obj) => {
              return (
                <div
                  onClick={() => this.showPrice(obj.product_id)}
                  className="d-flex m-4 justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#994d00",
                    width: "70%",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {obj.product_id}
                </div>
              );
            })}
          </div>
          <div
            style={{ width: "50%" }}
            className="d-flex justify-content-center align-items-center"
          >
            {this.state.currentProductPrice !== null ? (
              <span>The price is {this.state.currentProductPrice}</span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default FindKey;
