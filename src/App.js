import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <div className="App">
          <h1>hello</h1>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
