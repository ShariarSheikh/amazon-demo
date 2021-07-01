import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineAmazon, AiOutlineGlobal } from "react-icons/ai";
import styles from "../../styles/componentsStyles/Footer.module.css";

const getKnowUsLinks = [
  { id: 1, title: "Career", link: "/" },
  { id: 2, title: "About", link: "/" },
  { id: 3, title: "About Amazon", link: "/" },
  { id: 4, title: "Investor Relations", link: "/" },
  { id: 5, title: "Amazon Devices", link: "/" },
  { id: 6, title: "Amazon Tours", link: "/" },
];
const makeMoneyWithUs = [
  { id: 1, title: "Sell products on Amazon", link: "/" },
  { id: 2, title: "Sell on Amazon Business", link: "/" },
  { id: 3, title: "Sell apps on Amazon", link: "/" },
  { id: 4, title: "Investor Relations", link: "/" },
  { id: 5, title: "Become an Affiliate", link: "/" },
  { id: 6, title: "Advertise Your Products", link: "/" },
  { id: 7, title: "Self-Publish with Us", link: "/" },
  { id: 8, title: "Host an Amazon Hub", link: "/" },
  { id: 9, title: "›See More Make Money with Us", link: "/" },
];
const amazonPaymentProducts = [
  { id: 1, title: "Career", link: "/" },
  { id: 2, title: "About", link: "/" },
  { id: 3, title: "About Amazon", link: "/" },
  { id: 4, title: "Investor Relations", link: "/" },
  { id: 5, title: "Amazon Devices", link: "/" },
  { id: 6, title: "Amazon Tours", link: "/" },
  { id: 7, title: "Amazon Tours", link: "/" },
  { id: 8, title: "Amazon Tours", link: "/" },
  { id: 9, title: "Amazon Tours", link: "/" },
];

const Footer = () => {
  const location = useLocation();
  return (
    <footer
      className={styles.footer}
      style={{
        display:
          location.pathname === "/signin" || location.pathname === "/register"
            ? "none"
            : "",
      }}
    >
      <div className={styles.footer_container}>
        <div className={styles.footer_top}>
          <a href="#top">
            <h3>Back to Top</h3>
          </a>
        </div>

        <div className={styles.footer_center}>
          {/* first links container */}
          <div>
            <h4>Get To Know Us</h4>
            <ul>
              {getKnowUsLinks.map(({ id, link, title }) => (
                <FooterLinks key={id} id={id} link={link} title={title} />
              ))}
            </ul>
          </div>
          <div className={styles.space_between}></div>
          {/* second links container */}
          <div>
            <h4>Make Money With Us</h4>
            <ul>
              {makeMoneyWithUs.map(({ id, link, title }) => (
                <FooterLinks key={id} id={id} link={link} title={title} />
              ))}
            </ul>
          </div>
          <div className={styles.space_between}></div>
          {/* third links container */}
          <div>
            <h4>Amazon Payment Products</h4>
            <ul>
              {amazonPaymentProducts.map(({ id, link, title }) => (
                <FooterLinks key={id} id={id} link={link} title={title} />
              ))}
            </ul>
          </div>

          <div className={styles.space_between}></div>
          {/* third links container */}
          <div>
            <h4>Let Us Help You</h4>
            <ul>
              {amazonPaymentProducts.map(({ id, link, title }) => (
                <FooterLinks key={id} id={id} link={link} title={title} />
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.hr_and_margin_top}></div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;

const FooterBottom = () => {
  return (
    <div className={styles.footer_bottom}>
      <div className={styles.logo_container}>
        <Link to="/">
          <AiOutlineAmazon className={styles.icon} />
        </Link>
      </div>
      <div className={styles.btn_container}>
        <div>
          <AiOutlineGlobal className={styles.icon_global} />
          English
        </div>

        <div>$ USD .us-Dollar</div>
        <div>
          <img
            className={styles.flag_svg}
            src="https://img.icons8.com/color/48/000000/bangladesh.png"
          />
          United States
        </div>
      </div>
    </div>
  );
};

const FooterLinks = ({ id, link, title }) => {
  return (
    <li key={id}>
      <Link to={link}>{title}</Link>
    </li>
  );
};
