import React, { Component } from "react";
import "./App.css";
import FindKey from "./components/FindKey";
import PrimeNumber from "./components/PrimeNumber";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/" component={PrimeNumber} />
              <Route path="/findkey" component={FindKey} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
