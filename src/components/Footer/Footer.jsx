import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
const Footer = () => {
  const emailAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.5 },
    },
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p>DROP US A LINE, AND WE'LL GET IN TOUCH!</p>
      </div>
      <div className={styles.right}>
        <div className={styles.social}>
          <p>INSTAGRAM</p>
          <p>TELEGRAM</p>
          <p>+998 99 999 99 99</p>
        </div>

        <div className={styles.email}>
          <Link
            href="mailto:dots.community.uzbekistan@gmail.com"
            className={styles.email_link}
          >
            DOTS.COMMUNITY.UZBEKISTAN@GMAIL.COM
            <MdOutlineArrowOutward className={styles.icon} />
          </Link>
        </div>
        <div className={styles.bottom}>
          <p>© ALL RIGHTS RESERVED, DOTS 2024</p>
          <p>LET'S MAKE YOUR IDEAS TO LIFE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
