import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Cart from "./pages/Cart/Cart";
import LeftNavigationModal from "./components/LeftNavigationModal/LeftNavigationModal";
import { useSelector } from "react-redux";

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
