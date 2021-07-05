import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Cart from "./pages/Cart/Cart";
import LeftNavigationModal from "./components/LeftNavigationModal/LeftNavigationModal";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import { fireAuth } from "./firebase.config";
import { selectUser, signInUser } from "./redux/userSlice/userSlice";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProductsList from "./pages/ProductsList/ProductsList";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const openModal = useSelector((state) => state.openModal);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  useEffect(() => {
    fireAuth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          signInUser({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        fireAuth
          .signOut()
          .then(() => {
            // Sign-out successful.
          })
          .catch((error) => {
            // An error happened.
          });
      }
    });
  }, []);

  return (
    <Router>
      {openModal && <LeftNavigationModal openModal={openModal} />}
      <Nav />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <PrivateRoute path="/cart">
            <Cart />
          </PrivateRoute>
          <Route path="/products/:device">
            <ProductsList />
          </Route>
          {!user && (
            <>
              <Route path="/signin">
                <SignIn />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </>
          )}
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
