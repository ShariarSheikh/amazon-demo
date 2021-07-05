import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { amazonbasics, artsCrafts, computer, oculus } from "../../allProducts";
import styles from "../../styles/pageStyles/ProductsList.module.css";

import { MdStar } from "react-icons/md";

const MAX_RATING = 5;
const MIN_RATING = 1;

const ProductsList = () => {
  const [products, setProducts] = useState();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const { device } = useParams();

  useEffect(() => {
    if (device === "Oculus") {
      setProducts(oculus);
    }
    if (device === "Computers & Accessories") {
      setProducts(computer);
    }
    if (device === "AmazonBasics") {
      setProducts(amazonbasics);
    }
    if (device === "Arts & Crafts") {
      setProducts(artsCrafts);
    }
  }, [device]);

  return (
    <div className={styles.ProductsList}>
      <div className={styles.ProductsList_container}>
        <div className={styles.header}>
          <h1>{device}</h1>
          <p>
            {products && products.length}{" "}
            <span>
              results for Arts & Crafts: International Shipping Available
            </span>{" "}
          </p>
        </div>
        {/* products feed start */}
        <div className={styles.products_feed}>
          {products &&
            products.map(({ id, title, photo, price }) => (
              <div className={styles.products} key={id}>
                <div className={styles.img_container}>
                  <img src={photo} alt="products" />
                </div>
                <div className={styles.info_container}>
                  <h2 className={styles.title}>{title}</h2>
                  <div className={styles.stars_icon_div}>
                    {Array(rating)
                      .fill()
                      .map((_, i) => (
                        <MdStar key={i} className={styles.stars_icon} />
                      ))}
                  </div>
                  <p className={styles.price}>
                    {" "}
                    <span className={styles.dollar}>$</span>:{price}
                  </p>
                </div>
              </div>
            ))}
        </div>
        {/* products feed end */}
      </div>
    </div>
  );
};

export default ProductsList;
