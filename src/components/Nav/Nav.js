import React from "react";
import styles from "../../styles/componentsStyles/Nav.module.css";
import logo from "../../assets/images/logo.png";
import { useDispatch } from "react-redux";
import { openModalLeft } from "../../redux/toggleSlice/toggleSlice";

import { IoLocationOutline, IoSearch, IoMenuOutline } from "react-icons/io5";
import { RiArrowDropDownFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Nav = () => {
  return (
    <nav id={styles.nav}>
      <Nav1 />
      <Nav2 />
    </nav>
  );
};

export default Nav;

//nav top navigation
const Nav1 = () => {
  return (
    <div id={styles.nav_top}>
      {/* component 1 */}
      <div className={styles.nav_top_first_component}>
        <img className={styles.logo} src={logo} alt="logo" />
        <div className={styles.nav_top_show_location}>
          <div>
            <IoLocationOutline className={styles.location_icon} />
          </div>
          <div>
            <p>Deliver to</p>
            <h5>Bangladesh</h5>
          </div>
        </div>
      </div>
      {/* component 2 */}
      <div className={styles.search_container}>
        <div>
          <div className={styles.nav_top_search_container_all_text}>
            All <RiArrowDropDownFill className={styles.arrow_down_icon} />{" "}
          </div>
        </div>
        <div className={styles.input_div}>
          <input type="text" />
        </div>
        <div className={styles.search_icon}>
          <IoSearch />
        </div>
      </div>
      {/* component 3 */}

      <div className={styles.header_top_right_end_components}>
        <div className={styles.header_top_right_flag_div}>
          <img src="https://img.icons8.com/color/48/000000/bangladesh.png" />
          <RiArrowDropDownFill
            className={styles.arrow_down_icon}
            id={styles.icon}
          />
        </div>
        <div className={styles.header_top_right_text_div}>
          <p>Hello,Sign in</p>
          <h4>
            Account & List{" "}
            <RiArrowDropDownFill
              className={styles.arrow_down_icon}
              id={styles.icon2}
            />{" "}
          </h4>
        </div>
        <div className={styles.header_top_right_text_div}>
          <p>Returns</p>
          <h4>& Orders</h4>
        </div>
        <div className={styles.header_top_cart_div}>
          <AiOutlineShoppingCart className={styles.header_top_cart_icon} />
          <h4>Cart</h4>
        </div>
      </div>
    </div>
  );
};

//nav bottom navigation
const Nav2 = () => {
  const dispatch = useDispatch();

  return (
    <div id={styles.nav_bottom}>
      <div className={styles.nav_bottom_left}>
        <ul>
          <li
            className={styles.nav_bottom_navigation_links}
            onClick={() => dispatch(openModalLeft())}
          >
            <IoMenuOutline className={styles.nav_bottom_all_menu_icon} /> All
          </li>
          <li className={styles.nav_bottom_navigation_links}>Today's Deals</li>
          <li className={styles.nav_bottom_navigation_links}>
            Customer Services
          </li>
          <li className={styles.nav_bottom_navigation_links}>Gift Cards</li>
          <li className={styles.nav_bottom_navigation_links}>Registry</li>
          <li className={styles.nav_bottom_navigation_links}>Sell</li>
        </ul>
      </div>
      <div className={styles.nav_bottom_right}>
        <ul>
          <li
            className={styles.nav_bottom_navigation_links}
            style={{ marginRight: "20px" }}
          >
            Amazon's response to COVID-19
          </li>
        </ul>
      </div>
    </div>
  );
};
