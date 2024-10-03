import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Loader.module.scss";

const Loader = () => {
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
      }
    }, 2000);

    return () => {
      clearInterval(countInterval);
      clearTimeout(exitTimeout);
    };
  }, [count, isCounting]);

  return (
    <div
      className={`${styles.loaderContainer} ${isExiting ? styles.exit : ""}`}
    >
      <motion.h1
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: isCounting ? 1 : 0,
          y: isCounting ? 0 : -10, // Move up 10px
        }}
        transition={{ duration: 1 }}
        className={styles.loadingText}
      >
        DOTS is loading...
      </motion.h1>
      <motion.h1
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: isCounting ? 1 : 0,
          y: isCounting ? 0 : -10, // Move up 10px
        }}
        transition={{ duration: 1 }}
        className={styles.percentage}
      >
        {count}%
      </motion.h1>
      {isExiting && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -100 }} // Animate background upward
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={styles.blackOverlay}
        />
      )}
    </div>
  );
};

export default Loader;
