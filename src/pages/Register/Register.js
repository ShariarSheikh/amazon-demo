import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styles from "../../styles/pageStyles/Register.module.css";
import { RiArrowDropRightFill } from "react-icons/ri";
import { signInUser } from "../../redux/userSlice/userSlice";
import { useDispatch } from "react-redux";
import { fireAuth } from "../../firebase.config";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [wrongPass, setWrongPass] = useState(true);
  const dispatch = useDispatch();
  const router = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const createAccount = () => {
    if (password === rePassword) {
      setWrongPass(false);
    }
    password === rePassword &&
      password.length > 5 &&
      fireAuth
        .createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
          userAuth.user
            .updateProfile({
              displayName: name,
              photoURL: "",
            })
            .then(() => {
              dispatch(
                signInUser({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                  photoURL: "",
                })
              );
              router.replace(from);
              setName("");
              setEmail("");
              setPassword("");
              setRePassword("");
            });
        })
        .catch((err) => {
          alert(err.message);
        });
  };
  const registerHandler = () => {
    createAccount();
  };
  return (
    <div className={styles.Register}>
      <div className={styles.logo_container}>
        <img
          className={styles.logo}
          src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg"
          alt="logo"
        />
      </div>
      <div className={styles.form_container}>
        <form className={styles.form}>
          <h1>Create Account</h1>
          <label>Your Name</label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="At lest 6 characters"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <p
            style={{
              fontSize: "12px",
              marginTop: "-7px",
              marginBottom: "15px",
            }}
          >
            Passwords must be at least 6 characters.
          </p>
          <label>Re Enter Password</label>
          <input
            type="password"
            value={rePassword}
            required
            onChange={(e) => setRePassword(e.target.value)}
          />
          {!wrongPass && (
            <p
              style={{
                fontSize: "12px",
                marginTop: "-7px",
                marginBottom: "15px",
                color: "red",
              }}
            >
              Password don't match
            </p>
          )}

          <button type="button" onClick={registerHandler}>
            Continue
          </button>
          <div>
            <p>
              By creating an account, you agree to Amazon's
              <span>Conditions of Use</span> and
              <span> Privacy Notice.</span>
            </p>
          </div>
          <div className={styles.hr1} />
          <div className={styles.haveAccount}>
            <p>
              Already have an account?
              <span onClick={() => router.push("/signin")}>
                {" "}
                Sign-In <RiArrowDropRightFill className={styles.icon} />
              </span>
            </p>
            <p>
              Buying for work?
              <span>
                {" "}
                Create a free business account
                <RiArrowDropRightFill className={styles.icon} />
              </span>
            </p>
          </div>
        </form>
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

export default Register;
