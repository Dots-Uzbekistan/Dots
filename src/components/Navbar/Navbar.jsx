import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    i18n.changeLanguage("ENG");

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [i18n]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 30, damping: 10 },
    },
    closed: {
      opacity: 1,
      y: "-100vh",
      transition: { type: "spring", stiffness: 30, damping: 10 },
    },
  };

  return (
    <motion.section
      className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}
      ref={ref}
    >
      <div className={styles.wrapper_middle}>
        <Link to={"/"}>
          <div className={styles.logo}>
            <svg
              width="106"
              height="24"
              viewBox="0 0 106 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9567 11.9783C23.9567 5.36288 18.5938 0 11.9783 0C5.36288 0 0 5.36288 0 11.9783C0 18.5938 5.36288 23.9567 11.9783 23.9567C18.5938 23.9567 23.9567 18.5938 23.9567 11.9783Z"
                fill="white"
              />
              <path
                d="M48.7155 11.9783C48.7155 5.3629 43.3526 1.52588e-05 36.7371 1.52588e-05C30.1217 1.52588e-05 24.7588 5.3629 24.7588 11.9783C24.7588 18.5938 30.1217 23.9567 36.7371 23.9567C43.3526 23.9567 48.7155 18.5938 48.7155 11.9783Z"
                fill="white"
              />
              <path
                d="M73.4743 11.9783C73.4743 5.3629 68.1114 1.52588e-05 61.496 1.52588e-05C54.8805 1.52588e-05 49.5176 5.3629 49.5176 11.9783C49.5176 18.5938 54.8805 23.9567 61.496 23.9567C68.1114 23.9567 73.4743 18.5938 73.4743 11.9783Z"
                fill="white"
              />
              <path
                d="M106 11.9783C106 5.3629 100.637 1.52588e-05 94.0217 1.52588e-05C87.4062 1.52588e-05 82.0434 5.3629 82.0434 11.9783C82.0434 18.5938 87.4062 23.9567 94.0217 23.9567C100.637 23.9567 106 18.5938 106 11.9783Z"
                fill="white"
              />
            </svg>
          </div>
        </Link>

        <div className={styles.navLinks}>
          <div className={styles.lang}>
            <motion.div
              className={styles.languageSelector}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <span>{i18n.language}</span>
              <motion.div
                className={styles.dropdownIcon}
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.div>
            </motion.div>
            {isDropdownOpen && (
              <motion.div
                className={styles.dropdown}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p onClick={() => handleLanguageChange("ENG")}>ENG</p>
                <p onClick={() => handleLanguageChange("UZ")}>UZ</p>
                <p onClick={() => handleLanguageChange("RU")}>RU</p>
              </motion.div>
            )}
          </div>

          <motion.div
            className={styles.menuIcon}
            onClick={toggleMenu}
            whileTap={{ scale: 0.85 }}
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className={styles.bar}
              variants={{
                closed: { rotate: 0, y: 0, opacity: 1 },
                open: { rotate: 45, y: 6, opacity: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.div
              className={styles.bar}
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.div
              className={styles.bar}
              variants={{
                closed: { rotate: 0, y: 0, opacity: 1 },
                open: { rotate: -45, y: -14, opacity: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.div>

          {isMenuOpen && (
            <motion.div
              className={styles.menu}
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.p whileHover={{ scale: 1.1 }}>{t("home")}</motion.p>
              <motion.p whileHover={{ scale: 1.1 }}>{t("about")}</motion.p>
              <motion.p whileHover={{ scale: 1.1 }}>{t("projects")}</motion.p>
              <motion.p whileHover={{ scale: 1.1 }}>{t("contact")}</motion.p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Navbar;
