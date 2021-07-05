import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModalLeft } from "../../redux/toggleSlice/toggleSlice";
import styles from "../../styles/componentsStyles/LeftNavigationModal.module.css";
import { VscChromeClose } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { RiArrowRightSLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { selectUser, signOutUser } from "../../redux/userSlice/userSlice";

const digitalContent = [
  {
    id: 1,
    text: "Amazon Music",
  },
  {
    id: 2,
    text: "Kindle E-readers & Books",
  },
  {
    id: 3,
    text: "Appstore for Android",
  },
];

const shopByDepartment = [
  {
    id: 1,
    text: "Electronics",
  },
  {
    id: 2,
    text: "Computer",
  },
  {
    id: 3,
    text: "Smart Home",
  },
  {
    id: 4,
    text: "Arts & Crafts",
  },
];

const programsFeatures = [
  {
    id: 1,
    text: "Gift Cards",
  },
  {
    id: 2,
    text: "#FoundItOnAmazon",
  },
  {
    id: 3,
    text: "Amazon Live",
  },
  {
    id: 4,
    text: "International Shopping",
  },
];

const helpSettings = [
  {
    id: 1,
    text: "Your Account",
    link: "/",
  },
  {
    id: 2,
    text: "English",
    link: "/",
  },
  {
    id: 3,
    text: "United States",
    link: "/",
  },
  {
    id: 4,
    text: "Customer Services",
    link: "/",
  },
];

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
          <div className={styles.close_icon_container}>
            <VscChromeClose
              className={styles.close_icon}
              onClick={() => dispatch(openModalLeft())}
            />
          </div>
          <div className={styles.navigation_container}>
            <HeaderTop />
            <div className={styles.navigation}>
              <NavigationLinks />
            </div>
          </div>
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

const HeaderTop = () => {
  const userAuth = useSelector(selectUser);
  return (
    <div className={styles.profile_header}>
      <CgProfile className={styles.profile_icon} />{" "}
      <h1>
        Hello,{" "}
        {userAuth ? <span>{userAuth.displayName}</span> : <span> Sign in</span>}{" "}
      </h1>
    </div>
  );
};

const NavigationLinks = () => {
  const router = useHistory();
  const dispatch = useDispatch();
  const userAuth = useSelector(selectUser);

  const pushToLink = (link) => {
    if (link === "/signin") {
      dispatch(openModalLeft());
      router.push(`${link}`);
    }
  };
  return (
    <ul className={styles.navigation_ul_container}>
      <div>
        <li className={styles.navigation_link_header}>
          Digital Content & Devices{" "}
        </li>
        {/* digitalContent link */}
        {digitalContent.map(({ text, id }) => (
          <li className={styles.links} key={id}>
            <div>
              {text}
              <RiArrowRightSLine className={styles.arrow_left} />
            </div>
          </li>
        ))}
        <li className={styles.ul_btm_line}></li>
      </div>

      <div>
        {/* shopByDepartment links */}
        <li className={styles.navigation_link_header}>Shop By Department </li>
        {shopByDepartment.map(({ text, id }) => (
          <li className={styles.links} key={id}>
            <div>
              {text}
              <RiArrowRightSLine className={styles.arrow_left} />
            </div>
          </li>
        ))}
        <li className={styles.ul_btm_line}></li>
      </div>

      <div>
        {/* shopByDepartment links */}
        <li className={styles.navigation_link_header}>Programs & Features</li>
        {programsFeatures.map(({ text, id }) => (
          <li className={styles.links} key={id}>
            <div>
              {text}
              <RiArrowRightSLine className={styles.arrow_left} />
            </div>
          </li>
        ))}
        <li className={styles.ul_btm_line}></li>
      </div>

      <div>
        {/* shopByDepartment links */}
        <li className={styles.navigation_link_header}>Programs & Features</li>
        {helpSettings.map(({ text, id, link }) => (
          <li
            className={styles.links}
            key={id}
            onClick={() => pushToLink(link)}
          >
            <div>{text}</div>
          </li>
        ))}
        <li
          className={styles.links}
          onClick={() =>
            !userAuth ? router.push("/signin") : dispatch(signOutUser())
          }
        >
          <div>{userAuth && userAuth ? "Sign Out" : "Sign In"}</div>
        </li>
      </div>
    </ul>
  );
};
