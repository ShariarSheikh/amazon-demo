import React from "react";
import styles from "../../styles/pageStyles/Main.module.css";
import TopBanner from "./components/TopBanner";
import ProductsFeed from "./components/ProductsFeed";

const Main = () => {
  return (
    <div className={styles.main}>
      <TopBanner />
      <ProductsFeed />
    </div>
  );
};

export default Main;
