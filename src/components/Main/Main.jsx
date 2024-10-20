import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Main.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../Footer/Footer";
import Statistics from "../Statistics/Statistics";
import { FaArrowRight } from "react-icons/fa";

const Main = () => {
  const { t } = useTranslation();
  const introductionRef = useRef(null);
  const sectionRef = useRef(null);
  const { ref: sectionInViewRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const scrollToIntroduction = () => {
    if (introductionRef.current) {
      introductionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const projects = [
    { id: 1, title: "PROJECT 1", description: "Short project description" },
    { id: 2, title: "PROJECT 2", description: "Short project description" },
    { id: 3, title: "PROJECT 3", description: "Short project description" },
    { id: 4, title: "PROJECT 4", description: "Short project description" },
    { id: 5, title: "PROJECT 5", description: "Short project description" },
  ];

  return (
    <section className={styles.main}>
      <div className={styles.wrapper_middle_main}>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className={styles.header_text}
        >
          {t("header_text")}
        </motion.h1>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.2 }}
          className={styles.header_text_2}
        >
          {t("header_text_2")}
        </motion.h1>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.4 }}
          className={styles.header_text_3}
        >
          {t("header_text_3")}
        </motion.h1>

        <div className={styles.scrollDownContainer}>
          <p>{t("scroll_down")}</p>
          <div
            className={styles.scrollDownArrow}
            onClick={scrollToIntroduction}
          >
            <svg
              width="24"
              height="14"
              viewBox="0 0 31 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.3047 12.7594C28.4904 9.72048 26.6962 7.0352 24.2002 5.11998C21.7043 3.20477 18.6461 2.16666 15.5 2.16666C12.3539 2.16666 9.29574 3.20477 6.79978 5.11998C4.30382 7.0352 2.50957 9.72048 1.6953 12.7594"
                stroke="white"
                strokeWidth="2.5"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16L12 8"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12L12 16L16 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <section className={styles.introduction} ref={introductionRef}>
          <motion.article
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className={styles.introduction_text_left}
          >
            <p>{t("info_left")}</p>
          </motion.article>
          <motion.article
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.6 }}
            className={styles.introduction_text_right}
          >
            <p>{t("info_right_1")}</p>
            <p className={styles.info_right_2}>{t("info_right_2")}</p>
          </motion.article>
        </section>

        <section className={styles.section_selected} ref={sectionInViewRef}>
          <motion.h1
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            className={styles.section_selected_text}
          >
            {t("selected")}
          </motion.h1>
          <motion.h1
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ delay: 0.2 }}
            className={styles.section_selected_text_2}
          >
            {t("works")}
          </motion.h1>
        </section>

        <section className={styles.projectsContainer}>
          <div className={styles.guidingPrinciples}>
            <p>{t("guiding")}</p>
          </div>
          <div>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={styles.projectItem}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <div className={styles.projectNumber}>0{index + 1}</div>
                <div className={styles.projectContent}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
                <div className={styles.arrow}>
                  <svg
                    width="74"
                    height="57"
                    viewBox="0 0 74 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M68.375 28.75L70.8499 31.2249L73.3247 28.75L70.8499 26.2751L68.375 28.75ZM4 25.25C2.067 25.25 0.5 26.817 0.5 28.75C0.5 30.683 2.067 32.25 4 32.25V25.25ZM40.1501 5.47487L65.9001 31.2249L70.8499 26.2751L45.0999 0.525126L40.1501 5.47487ZM65.9001 26.2751L40.1501 52.0251L45.0999 56.9749L70.8499 31.2249L65.9001 26.2751ZM68.375 25.25H4V32.25H68.375V25.25Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
            <div className={styles.footerText}>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ delay: 0.8 }}
              >
                CREATIVELY DRIVEN
              </motion.p>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ delay: 1 }}
              >
                SOLUTION ORIENTATED
              </motion.p>
            </div>
          </div>
        </section>
      </div>

      <Statistics />

      <div className={styles.wrapper_middle_main}>
        <Footer />
      </div>
    </section>
  );
};

export default Main;
