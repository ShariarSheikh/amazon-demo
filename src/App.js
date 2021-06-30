import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
