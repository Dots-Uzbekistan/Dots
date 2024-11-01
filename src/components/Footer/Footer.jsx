import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import styles from "./Footer.module.scss";
import footer_png from "../../assets/footer.png";
import { t } from "i18next";

const Footer = () => {
  const emailAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.5 },
    },
  };

  const socialAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.3 },
    },
  };

  const bottomAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.7 },
    },
  };

  return (
    <motion.footer className={styles.footer} initial="hidden" animate="visible">
      <motion.div
        className={styles.left}
        initial="hidden"
        animate="visible"
        variants={emailAnimation}
      >
        <p>{t("footer")}</p>
      </motion.div>
      <motion.div
        className={styles.right}
        initial="hidden"
        animate="visible"
        variants={socialAnimation}
      >
        <div className={styles.social}>
          <a
            href="https://www.instagram.com/dots_uz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>INSTAGRAM</p>
          </a>
          <a target="_blank" rel="noopener noreferrer">
            <p>TELEGRAM</p>
          </a>
          <a href="tel:+998914012512">+998 91 401 25 12</a>
        </div>

        <motion.div
          className={styles.email}
          initial="hidden"
          animate="visible"
          variants={emailAnimation}
        >
          <a
            href="mailto:dots.community.uzbekistan@gmail.com"
            className={styles.email_link}
          >
            DOTS.COMMUNITY.UZBEKISTAN@GMAIL.COM
            <MdOutlineArrowOutward className={styles.icon} />
          </a>
        </motion.div>
        <motion.div
          className={styles.bottom}
          initial="hidden"
          animate="visible"
          variants={bottomAnimation}
        >
          <p>© ALL RIGHTS RESERVED, DOTS 2024</p>
          <p className={styles.text}>
            <img src={footer_png} alt="" className={styles.img} />
            LET'S MAKE YOUR IDEAS TO LIFE{" "}
          </p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
