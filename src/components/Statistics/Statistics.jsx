import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import styles from "./Statistics.module.scss";

const Statistics = () => {
  return (
    <section className={styles.statisticsContainer}>
      <div className={styles.container_middle}>
        <div>
          <p className={styles.description}>
            WE'VE BEEN FORTUNATE TO WORK WITH A LOT OF AWESOME PEOPLE ON EVEN
            MORE AWESOME PROJECTS.
          </p>
        </div>

        <div className={styles.mainText}>
          <p className={styles.text}>
            – WE'RE A SEASONED SQUAD OF CREATIVE MAESTROS, BREWING BRILLIANCE
            WITH EVERY STROKE.
          </p>

          <div className={styles.statistics}>
            {[
              { value: 11, label: "MEMBERS" },
              { value: 15, label: "PROBLEMS SOLVED" },
              { value: 7, label: "AWARDS" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={styles.statItem}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h1>
                  <CountUp end={stat.value} duration={2} />
                </h1>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
