import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import login from "./login"
import signup from "./signup"
import List from "./list"
import Create from "./create"
import Edit from "./edit";

function Main() {
  return (
    <Router>
        <Header />
      <Route exact path="/" component={login} />
      <Route exact path="/signup" component={signup} />
      <Route exact path="/add" component={Create} />
      <Route exact path="/edit/:id" component={Edit} />
      <Route exact path="/list" component={List} />
    </Router>
  );
}
export default Main;
