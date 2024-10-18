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
            <motion.div
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1>
                <CountUp end={11} duration={2} />
              </h1>
              <p>MEMBERS</p>
            </motion.div>

            <motion.div
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h1>
                <CountUp end={15} duration={2} />
              </h1>
              <p>PROBLEMS SOLVED</p>
            </motion.div>

            <motion.div
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h1>
                <CountUp end={7} duration={2} />
              </h1>
              <p>AWARDS</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
