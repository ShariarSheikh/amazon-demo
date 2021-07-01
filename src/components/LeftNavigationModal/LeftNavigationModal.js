import React from "react";
import { useDispatch } from "react-redux";
import { openModalLeft } from "../../redux/toggleSlice/toggleSlice";
import styles from "../../styles/componentsStyles/LeftNavigationModal.module.css";

const LeftNavigationModal = ({ openModal }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={
        openModal ? styles.LeftNavigationModal : styles.LeftNavigationModalHide
      }
    >
      <div className={styles.LeftNavigationModal_container}>
        <div className={styles.LeftNavigationModal_sidebar_container}>
          <h1>hello world</h1>
        </div>
        <div
          className={styles.modal_mt_space}
          onClick={() => dispatch(openModalLeft())}
        ></div>
      </div>
    </div>
  );
};

export default LeftNavigationModal;
