import React from "react";
import {
  productsProfile,
  productsProfileSlider1,
  productsProfileSlider2,
} from "../../../allProducts";
import styles from "../../../styles/componentsStyles/ProductsFeed.module.css";
import ProductsCart from "./ProductsCart";
import ProductsSliderCart from "./ProductsSliderCart";
import signInImg from "../../../assets/images/signIn.jpg";

const ProductsFeed = () => {
  return (
    <div className={styles.ProductsFeed}>
      {productsProfile
        .slice(0, 3)
        .map(
          ({
            id,
            link,
            photo,
            title,
            multipleProducts,
            multipleProductsList,
          }) => (
            <ProductsCart
              key={id}
              link={link}
              title={title}
              photo={photo}
              multipleProducts={multipleProducts}
              multipleProductsList={multipleProductsList}
            />
          )
        )}
      <div className={styles.signInContainer}>
        <div className={styles.signIn_div}>
          <h1>Sign in for the best experience</h1>
          <button>Sign in Securely</button>
        </div>
        <div className={styles.signImg_container}>
          <img src={signInImg} alt="img" />
        </div>
      </div>
      {productsProfile
        .slice(3, 8)
        .map(
          ({
            id,
            link,
            photo,
            title,
            multipleProducts,
            multipleProductsList,
          }) => (
            <ProductsCart
              key={id}
              link={link}
              title={title}
              photo={photo}
              multipleProducts={multipleProducts}
              multipleProductsList={multipleProductsList}
            />
          )
        )}
      <div className={styles.ProductsSliderCart_container}>
        <div className={styles.ProductsSlider_header}>
          <h2>Top Beauty & Personal Care products</h2> <p>Shop Now</p>
        </div>
        <ProductsSliderCart productsProfileSlider={productsProfileSlider1} />
      </div>

      <div className={styles.ProductsSliderCart_container}>
        <div className={styles.ProductsSlider_header}>
          <h2>Our favorite Toys</h2> <p>Shop Now</p>
        </div>
        <ProductsSliderCart productsProfileSlider={productsProfileSlider2} />
      </div>
    </div>
  );
};

export default ProductsFeed;
