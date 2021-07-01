import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/componentsStyles/ProductsSliderCart.module.css";

// Import Swiper styles
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
// import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
// SwiperCore.use([Pagination, Navigation]);

const ProductsSliderCart = ({ productsProfileSlider }) => {
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        slidesPerGroup={3}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className={styles.mySwiper}
      >
        <>
          {productsProfileSlider.map(({ id, photo }) => (
            <SwiperSlide className={styles.swiperSlide} key={id}>
              <img src={photo} alt="products" />
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </>
  );
};

export default ProductsSliderCart;
