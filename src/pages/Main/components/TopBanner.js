import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../../styles/componentsStyles/TopBanner.module.css";

import banner1 from "../../../assets/images/banner1.jpg";
import banner3 from "../../../assets/images/banner3.jpg";
import banner4 from "../../../assets/images/banner4.jpg";
import banner5 from "../../../assets/images/banner5.jpg";
import banner6 from "../../../assets/images/banner6.jpg";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const imgSlider = [
  { id: 1, photo: banner1, link: "/" },
  { id: 2, photo: banner3, link: "/" },
  { id: 3, photo: banner4, link: "/" },
  { id: 4, photo: banner5, link: "/" },
  { id: 5, photo: banner6, link: "/" },
];

const TopBanner = () => {
  return (
    <div className={styles.banner_container}>
      <Swiper
        allowTouchMove={false}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className={styles.mySwiper}
      >
        {imgSlider.map(({ photo, id, link }) => (
          <SwiperSlide key={id}>
            <img className={styles.banner_img} src={photo} alt="banner" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopBanner;
