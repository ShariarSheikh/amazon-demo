import React, { useState } from "react";
import styles from "../../styles/componentsStyles/Nav.module.css";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { openModalLeft } from "../../redux/toggleSlice/toggleSlice";

import { IoLocationOutline, IoSearch } from "react-icons/io5";
import { RiArrowDropDownFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { searchCategoryLink } from "../../productList";
import { selectUser, signOutUser } from "../../redux/userSlice/userSlice";
import { selectProduct } from "../../redux/AddProductSlice/AddProductSlice";

const Nav = () => {
  const location = useLocation();
  return (
    <nav
      id={styles.nav}
      style={{
        display:
          location.pathname === "/signin" || location.pathname === "/register"
            ? "none"
            : "",
      }}
    >
      <Nav1 />
      <Nav2 />
    </nav>
  );
};

export default Nav;

//nav top navigation
const Nav1 = () => {
  const [categoryLink, setCategoryLink] = useState("All");
  const [categoryShow, setCategoryShow] = useState(false);
  const [accountComponent, setAccountComponent] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [searchProductList, setSearchProductList] = useState([]);
  const router = useHistory();
  const userAuth = useSelector(selectUser);
  // length of added product in cart
  const cartItems = useSelector(selectProduct);

  // open and hide category
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (categoryShow === false) {
        setCategoryShow(categoryShow);
      }
    });
    if (categoryLink !== "All") {
      setCategoryShow(!categoryShow);
    }
  }, [categoryLink]);
  //open and hide account components
  const showAccountComponent = () => {
    setAccountComponent(!accountComponent);
  };

  // search category
  const showSearchFeed = searchProduct.length > 0 ? true : false;
  const searchFeedHandler = (inputText) => {
    setSearchProduct(inputText);
    const findCategoryObject = searchCategoryLink.find(
      (category) => category.name === categoryLink
    );
    const findCategory = findCategoryObject.allCategories;
    const productList = findCategory.map((val) => val.productName);
    setSearchProductList(productList);
  };

  return (
    <div id={styles.nav_top}>
      {/* component 1 */}
      <div className={styles.nav_top_first_component}>
        <img
          className={styles.logo}
          src={logo}
          alt="logo"
          onClick={() => router.push("/")}
        />
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
        <div className={styles.category_select_container}>
          <div
            className={styles.nav_top_search_container_all_text}
            onClick={() => setCategoryShow(!categoryShow)}
          >
            {categoryLink}{" "}
            <RiArrowDropDownFill className={styles.arrow_down_icon} />{" "}
          </div>
          {categoryShow && (
            <SelectProjectCategory setCategoryLink={setCategoryLink} />
          )}
        </div>

        <div
          className={styles.input_div}
          onClick={() => setCategoryShow(!categoryShow && !!categoryShow)}
        >
          <input
            type="text"
            value={searchProduct}
            onChange={(e) => searchFeedHandler(e.target.value)}
          />
          {showSearchFeed && (
            <ProductsSearchContainer
              isShow={showSearchFeed}
              setSearchProduct={setSearchProduct}
              searchProduct={searchProduct}
              searchProductList={searchProductList}
            />
          )}
        </div>

        <div
          className={styles.search_icon}
          onClick={() => setCategoryShow(!categoryShow && !!categoryShow)}
        >
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

        <div
          className={styles.account_link_container}
          onMouseEnter={() => showAccountComponent()}
          onMouseLeave={() => showAccountComponent()}
        >
          <div
            className={styles.header_top_right_account_div}
            onClick={() => !userAuth && router.push("/signin")}
          >
            <p>
              Hello,{" "}
              {userAuth ? (
                <span>{userAuth.displayName}</span>
              ) : (
                <span> Sign in</span>
              )}
            </p>
            <h4>
              Account & List{" "}
              <RiArrowDropDownFill
                className={styles.arrow_down_icon}
                id={styles.icon2}
              />{" "}
            </h4>
          </div>

          <div>{accountComponent && <AccountComponent />}</div>
        </div>

        <div className={styles.header_top_right_text_div}>
          <p>Returns</p>
          <h4>& Orders</h4>
        </div>
        <div
          className={styles.header_top_cart_div}
          onClick={() => router.push("/cart")}
        >
          <div className={styles.badge}>{cartItems.length}</div>
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
            <HiOutlineMenu className={styles.nav_bottom_all_menu_icon} /> All
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
            className={styles.nav_bottom_navigation_links_end}
            style={{ marginRight: "20px" }}
          >
            Amazon's response to COVID-19
          </li>
        </ul>
      </div>
    </div>
  );
};

const SelectProjectCategory = ({ setCategoryLink }) => {
  return (
    <div className={styles.category_select_div}>
      <ul>
        {searchCategoryLink.map(({ id, link, name }) => (
          <li onClick={() => setCategoryLink(name)} key={id}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AccountComponent = () => {
  const router = useHistory();
  const userAuth = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={styles.account_component}>
      <div className={styles.makeArrow}></div>
      <div>
        <button
          className={styles.signinBtn}
          onClick={() =>
            !userAuth ? router.push("/signin") : dispatch(signOutUser())
          }
        >
          {userAuth ? "Sign Out" : "Sign In"}
        </button>
        <p className={styles.newCostumerText}>
          New Customer? <small>Start Here</small>{" "}
        </p>
      </div>
    </div>
  );
};

const ProductsSearchContainer = ({
  searchProductList,
  searchProduct,
  setSearchProduct,
  isShow,
}) => {
  const [output, setOutput] = useState();
  const [showSearchFeed, setShowSearchFeed] = useState(isShow);
  useEffect(() => {
    setOutput([]);
    searchProductList.filter((val, i) => {
      if (val.toLowerCase().includes(searchProduct.toLowerCase())) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [searchProduct]);

  const productNameSelectHandler = (val) => {
    setSearchProduct(val);
    setShowSearchFeed(false);
  };

  return (
    <>
      {showSearchFeed && (
        <div className={styles.productsSearch_container}>
          <ul>
            {output &&
              output.map((val, i) => (
                <li key={i} onClick={() => productNameSelectHandler(val)}>
                  {val}
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};
