import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Cart from "./pages/Cart/Cart";
import LeftNavigationModal from "./components/LeftNavigationModal/LeftNavigationModal";
import { useSelector } from "react-redux";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";

function App() {
  const openModal = useSelector((state) => state.openModal);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  return (
    <Router>
      {openModal && <LeftNavigationModal openModal={openModal} />}
      <Nav />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Router path="/signin">
            <SignIn />
          </Router>
          <Router path="/register">
            <Register />
          </Router>
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
