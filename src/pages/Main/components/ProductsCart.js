import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../../styles/componentsStyles/ProductsCart.module.css";

const ProductsCart = ({
  id,
  link,
  title,
  photo,
  multipleProducts,
  multipleProductsList,
}) => {
  const router = useHistory();
  return (
    <div
      className={styles.ProductsCart}
      onClick={() => router.push(`/products/${title}`)}
    >
      <div className={styles.productsCart_header}>
        <h1>{title}</h1>
      </div>
      {multipleProducts ? (
        <div className={styles.img_container_multiple_img}>
          {multipleProductsList.map(({ mId, mTitle, mPhoto, mLink }) => (
            <div className={styles.img_container_multiple} key={mId}>
              <img src={mPhoto} alt="products" />
              <p>{mTitle}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.img_container}>
          <img src={photo} alt="products" />
        </div>
      )}

      <div className={styles.bottom_link_container}>
        <p>Show Now</p>
      </div>
    </div>
  );
};

export default ProductsCart;
