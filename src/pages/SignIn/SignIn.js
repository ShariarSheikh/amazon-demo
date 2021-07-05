import React, { useState } from "react";
import styles from "../../styles/pageStyles/SignIn.module.css";
import { RiArrowDropRightFill } from "react-icons/ri";
import { useHistory, useLocation } from "react-router-dom";
import { signInUser } from "../../redux/userSlice/userSlice";
import { useDispatch } from "react-redux";
import { fireAuth } from "../../firebase.config";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const router = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const loginHandler = async (e) => {
    e.preventDefault();
    await login();
  };
  const login = () => {
    fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential;
        dispatch(
          signInUser({
            email: user.user.email,
            uid: user.user.uid,
            displayName: user.user.displayName,
            photoURL: user.user.photoURL,
          })
        );
        router.replace(from);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className={styles.SignIn}>
      <div>
        <img
          className={styles.logo}
          src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg"
          alt="logo"
        />
      </div>
      <div className={styles.form_container}>
        <form className={styles.form}>
          <h1>Sign-In</h1>
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p
              style={{
                fontSize: "12px",
                marginTop: "-7px",
                marginBottom: "15px",
                color: "red",
              }}
            >
              {error}
            </p>
          )}
          <button type="submit" onClick={loginHandler}>
            Continue
          </button>
          <div>
            <p>
              By continuing, you agree to Amazon's
              <span>Conditions of Use</span> and
              <span> Privacy Notice.</span>
            </p>
          </div>
          <p className={styles.needHelp}>
            {" "}
            <RiArrowDropRightFill className={styles.icon} /> Need help?
          </p>
        </form>
        <div className={styles.newToAmazon}>
          <h5>New to Amazon?</h5>
        </div>
        <button
          className={styles.create_account_btn}
          onClick={() => router.push("/register")}
        >
          Create Your Amazon Account
        </button>
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.hr} />
        <div className={styles.btm_text_top}>
          <span> Conditions of</span>
          <span> Privacy Notice Help </span>
          <span> Help </span>
        </div>
        <p className={styles.btm_text}>
          © 1996-2021, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default SignIn;
