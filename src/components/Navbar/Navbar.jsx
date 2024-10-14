import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Navbar = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    i18n.changeLanguage("ENG");
  }, [i18n]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={styles.navbar}>
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
            <div className={styles.dropdown}>
              <p onClick={() => handleLanguageChange("ENG")}>ENG</p>
              <p onClick={() => handleLanguageChange("UZB")}>UZB</p>
              <p onClick={() => handleLanguageChange("RUS")}>RU</p>
            </div>
          )}
        </div>

        <motion.div
          className={styles.menuIcon}
          onClick={toggleMenu}
          whileTap={{ scale: 0.85 }}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          whileHover={{ scale: 1.1 }} // Slightly enlarges on hover
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
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ type: "tween", duration: 0.6 }}
          >
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
