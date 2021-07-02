import React from "react";
import styles from "../../styles/pageStyles/SignIn.module.css";
import { RiArrowDropRightFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const router = useHistory();
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
          <input type="text" />
          <label>Password</label>
          <input type="password" />
          <button type="submit">Continue</button>
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
