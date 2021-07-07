import React, { useEffect, useState } from "react";
import styles from "../../styles/pageStyles/ProductsDetails.module.css";
import { useHistory, useParams } from "react-router-dom";
import { MdStar } from "react-icons/md";
import { amazonbasics, artsCrafts, computer, oculus } from "../../allProducts";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/AddProductSlice/AddProductSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

const ProductsDetails = () => {
  const [findProduct, setFindProduct] = useState();
  const { device, id } = useParams();
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const router = useHistory();

  useEffect(() => {
    if (device === "Oculus") {
      setFindProduct(oculus);
    }
    if (device === "Computers & Accessories") {
      setFindProduct(computer);
    }
    if (device === "AmazonBasics") {
      setFindProduct(amazonbasics);
    }
    if (device === "Arts & Crafts") {
      setFindProduct(artsCrafts);
    }
    if (device === "Find your ideal TV") {
      setFindProduct(oculus);
    }
  }, [device, id]);

  const product =
    findProduct && findProduct.filter((pd) => pd.id === parseInt(id));

  // cart
  const addCartHandler = () => {
    product &&
      product.map(({ id, title, photo, price }) =>
        dispatch(
          addProduct({
            id: id,
            title: title,
            photo: photo,
            price: price,
            device: device,
          })
        )
      );
    router.push("/cart");
  };

  return (
    <div className={styles.ProductsDetails}>
      <div className={styles.header}>
        <p>Back to Result</p>
      </div>

      {/* container start */}
      <div className={styles.container}>
        {/* item container */}
        {product &&
          product.map(({ id, title, photo, price, aboutThisItem }) => {
            return (
              <div className={styles.items_container} key={id}>
                <div className={styles.img_container}>
                  <img src={photo} alt="product" />
                </div>
                <div className={styles.info_container}>
                  <h1 className={styles.title}>{title}</h1>
                  <div className={styles.stars_icon_div}>
                    {Array(rating)
                      .fill()
                      .map((_, i) => (
                        <MdStar key={i} className={styles.stars_icon} />
                      ))}
                  </div>
                  <p className={styles.price}>
                    Price: <span>${price}</span>{" "}
                  </p>
                  <div className={styles.about_this_item}>
                    <h3>About this item</h3>
                    <ul>
                      <li>{device}</li>
                      {aboutThisItem.map(({ id, text }) => (
                        <li key={id}>{text}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}

        {/* cart container */}
        <div className={styles.cart_container}>
          <div className={styles.cart}>
            <button className={styles.add_to_cart_btn} onClick={addCartHandler}>
              Add To Cart
            </button>
            <button className={styles.by_now_btn}>By Now</button>
          </div>
        </div>
      </div>
      {/* container end */}
    </div>
  );
};

export default ProductsDetails;
