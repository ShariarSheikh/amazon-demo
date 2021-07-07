import React, { useState } from "react";
import styles from "../../styles/pageStyles/Cart.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeFromCart,
  selectProduct,
} from "../../redux/AddProductSlice/AddProductSlice";
import c1 from "../../assets/images/computer/c1.jpg";
import c2 from "../../assets/images/computer/c2.jpg";
import c3 from "../../assets/images/computer/c3.jpg";
import c4 from "../../assets/images/computer/c4.jpg";
import c5 from "../../assets/images/computer/c5.jpg";
import mtCart from "../../assets/images/mtcart.svg";
import { useEffect } from "react";
import { MdStar } from "react-icons/md";

const recentItems = [
  {
    id: 1,
    photo: c1,
    title: `
    Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range
     Wireless and Voice Remote with TV Controls
     `,
    price: 10.99,
    device: "Computers & Accessories",
  },
  {
    id: 2,
    photo: c2,
    title: `
    Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac,
     PS4, & Xbox - 1-Year Rescue Service (STGX2000400)
     `,
    price: 15.99,
    device: "Computers & Accessories",
  },
  {
    id: 3,
    photo: c3,
    title: `
    Roku Express | HD Streaming Media Player with High Speed HDMI Cable and Simple Remote
     `,
    price: 20.99,
    device: "Computers & Accessories",
  },
  {
    id: 4,
    photo: c4,
    title: `
    LG 27GL83A-B 27 Inch Ultragear QHD IPS 1ms NVIDIA G-SYNC Compatible Gaming Monitor, Black
     `,
    price: 9.99,
    device: "Computers & Accessories",
  },
  {
    id: 5,
    photo: c5,
    title: `
    SAMSUNG ELECTRONICS EVO Select 256GB MicroSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card
     with Adapter (MB-ME256HA)
     `,
    price: 32.99,
    device: "Computers & Accessories",
  },
];

const MAX_RATING = 5;
const MIN_RATING = 1;

const Cart = () => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [quantityy, setQuantityy] = useState(1);
  const cartItems = useSelector(selectProduct);
  const dispatch = useDispatch();

  return (
    <div className={styles.Cart}>
      <div className={styles.cart_container}>
        <div className={styles.shoppingCart_container}>
          <div className={styles.header}>
            <h1>Shopping Cart</h1>
          </div>
          <div className={styles.items_container}>
            {!cartItems.length > 0 && (
              <div className={styles.mt_img_container}>
                <img src={mtCart} alt="cart" />
                <h1>Your Amazon Cart is empty</h1>
              </div>
            )}
            {cartItems &&
              cartItems.map(({ id, price, title, photo, quantity, device }) => {
                return (
                  <div className={styles.items} key={id}>
                    <img
                      className={styles.imgStyles}
                      src={photo}
                      alt="product"
                    />
                    <div className={styles.info}>
                      <h1 className={styles.title}>{title}</h1>
                      <h2 className={styles.price}>$:{price}</h2>
                      <div className={styles.quantity_div}>
                        <button className={styles.quantity_btn}>
                          Qty:
                          <AiOutlineMinus className={styles.minus_icon} />{" "}
                          {quantityy}{" "}
                          <AiOutlinePlus className={styles.plus_icon} />
                        </button>
                      </div>
                      <div
                        className={styles.delete_btn}
                        onClick={() => dispatch(removeFromCart({ id: id }))}
                      >
                        Delete
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className={styles.bottom}>
            <h2>
              Subtotal (1 item): <span>$399.00 </span>{" "}
            </h2>
          </div>
        </div>
        <div className={styles.cart_subtotal_container}>
          {cartItems.length > 0 && (
            <div className={styles.cart_top}>
              <h1>
                Subtotal (1 item): <span> $22.23</span>
              </h1>
              <button className={styles.proceed_to_checkout_btn}>
                Proceed To Checkout
              </button>
            </div>
          )}

          {/* show some recent items */}
          <div className={styles.cart_bottom}>
            <div className={styles.your_recent_text}>Your recent items</div>
            {recentItems.map(({ id, title, photo, price, device }) => (
              <div className={styles.recent_items} key={id}>
                <div className={styles.recent_img}>
                  <img src={photo} alt="" />
                </div>
                <div className={styles.recent_info}>
                  <h1 className={styles.recent_title}>{title}</h1>
                  <div className={styles.stars_icon_div}>
                    {Array(rating)
                      .fill()
                      .map((_, i) => (
                        <MdStar key={i} className={styles.stars_icon} />
                      ))}
                  </div>
                  <p className={styles.price_recent}>$:{price}</p>
                  <button
                    className={styles.add_to_btn}
                    onClick={() =>
                      dispatch(
                        addProduct({
                          id: id,
                          title: title,
                          photo: photo,
                          price: price,
                          device: device,
                        })
                      )
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
