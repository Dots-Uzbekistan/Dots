import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Loader.module.scss";

const Loader = ({ onLoadingComplete }) => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : prev));
      if (count >= 99) {
        setIsCounting(false);
      }
    }, 25);

    const exitTimeout = setTimeout(() => {
      if (!isCounting) {
        setIsExiting(true);
        setTimeout(() => {
          onLoadingComplete();
        }, 1000);
      }
    }, 2000);

    return () => {
      clearInterval(countInterval);
      clearTimeout(exitTimeout);
    };
  }, [count, isCounting, onLoadingComplete]);

  return (
    <div
      className={`${styles.loaderContainer} ${isExiting ? styles.exit : ""}`}
    >
      <motion.h1
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: isCounting ? 1 : 0,
          y: isCounting ? 0 : -100,
        }}
        transition={{ duration: 1 }}
        className={styles.loadingText}
      >
        Dots is loading...
      </motion.h1>
      <motion.h1
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: isCounting ? 1 : 0,
          y: isCounting ? 0 : -100,
        }}
        transition={{ duration: 1 }}
        className={styles.percentage}
      >
        {count}%
      </motion.h1>
      {isExiting && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -100 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={styles.blackOverlay}
        />
      )}
    </div>
  );
};

export default Loader;
