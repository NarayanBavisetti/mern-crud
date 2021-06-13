import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import login from "./login"
import signup from "./signup"
import list from "./list"
import create from "./create"
import edit from "./edit"

function Main() {
  return (
    <Router>
        <Header />
      <Route exact path="/" component={login} />
      <Route exact path="/signup" component={signup} />
      <Route exact path="/create" component={create} />
      <Route exact path="/edit/:id" component={edit} />
      <Route exact path="/list" component={list} />
    </Router>
  );
}
export default Main;
