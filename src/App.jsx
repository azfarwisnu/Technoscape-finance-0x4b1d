import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/css/App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={Register} path="/register" />
          <Route component={Profile} path="/profile" />
          <Route component={Home} path="/" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
