import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/pageStyles/Register.module.css";
import { RiArrowDropRightFill } from "react-icons/ri";

const Register = () => {
  const router = useHistory();
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
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" placeholder="At lest 6 characters" />
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
          <input type="password" />
          <button type="submit">Continue</button>
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
