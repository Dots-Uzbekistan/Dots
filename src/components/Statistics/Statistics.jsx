import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import styles from "./Statistics.module.scss";
import { useInView } from "react-intersection-observer";
import { t } from "i18next";

const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className={styles.statisticsContainer}>
      <div className={styles.wrapper_statistics}>
        <div className={styles.descriptionContainer}>
          <motion.p
            className={styles.description}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 0.5 }}
          >
            {t("statistic_info")}
          </motion.p>
        </div>

        <div className={styles.mainText}>
          <motion.p
            className={styles.text}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("statistic_info_2")}
          </motion.p>

          <div className={styles.statistics} ref={ref}>
            {[
              { value: 11, label: t("member") },
              { value: 15, label: t("problem_solved") },
              { value: 7, label: t("awards") },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={styles.statItem}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
              >
                <motion.h1
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {inView ? <CountUp end={stat.value} duration={2} /> : 0}
                </motion.h1>
                <motion.p
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={textVariants}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
