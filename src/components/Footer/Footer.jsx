import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import styles from "./Footer.module.scss";
import footer_png from "../../assets/footer.png";

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
        <p>DROP US A LINE, AND WE'LL GET IN TOUCH!</p>
      </motion.div>
      <motion.div
        className={styles.right}
        initial="hidden"
        animate="visible"
        variants={socialAnimation}
      >
        <div className={styles.social}>
          <p>INSTAGRAM</p>
          <p>TELEGRAM</p>
          <p>+998 99 999 99 99</p>
        </div>

        <motion.div
          className={styles.email}
          initial="hidden"
          animate="visible"
          variants={emailAnimation}
        >
          <Link
            href="mailto:dots.community.uzbekistan@gmail.com"
            className={styles.email_link}
          >
            DOTS.COMMUNITY.UZBEKISTAN@GMAIL.COM
            <MdOutlineArrowOutward className={styles.icon} />
          </Link>
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
