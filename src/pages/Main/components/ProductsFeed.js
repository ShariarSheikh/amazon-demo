import React from "react";
import styles from "../../../styles/componentsStyles/ProductsFeed.module.css";
import ProductsCart from "./ProductsCart";
import pd1 from "../../../assets/images/productsProfile/pd1.jpg";
import pd2 from "../../../assets/images/productsProfile/pd2.jpg";
import pd3 from "../../../assets/images/productsProfile/pd3.jpg";
import pd4 from "../../../assets/images/productsProfile/pd4.jpg";

const productsProfile = [
  {
    id: 1,
    photo: pd1,
    title: "Oculus",
    link: "/",
    multipleProducts: true,
    multipleProductsList: [
      {
        mId: 1,
        mPhoto: pd1,
        mTitle: "Computer",
        mLink: "/"
      },
      {
        mId: 2,
        mPhoto: pd2,
        mTitle: "Video Games",
        mLink: "/"
      },
      {
        mId: 3,
        mPhoto: pd3,
        mTitle: "Tody Games",
        mLink: "/"
      },
      {
        mId: 4,
        mPhoto: pd4,
        mTitle: "Baby",
        mLink: "/"
      },
    ],
  },
  {
    id: 2,
    photo: pd2,
    title: "Computers & Accessories",
    link: "/",
    multipleProducts: false,
  },
  {
    id: 3,
    photo: pd3,
    title: "AmazonBasics",
    link: "/",
    multipleProducts: false,
  },
  {
    id: 4,
    photo: pd4,
    title: "Find your ideal TV",
    link: "/",
    multipleProducts: false,
  },
];

const ProductsFeed = () => {
  return (
    <div className={styles.ProductsFeed}>
      {productsProfile.map(
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
    </div>
  );
};

export default ProductsFeed;
