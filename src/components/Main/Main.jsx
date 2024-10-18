import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Main.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../Footer/Footer";
import Statistics from "../Statistics/Statistics";

const Main = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const textVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  const projects = [
    { id: 1, title: "PROJECT 1", description: "Short project description" },
    { id: 2, title: "PROJECT 2", description: "Short project description" },
    { id: 3, title: "PROJECT 3", description: "Short project description" },
    { id: 4, title: "PROJECT 4", description: "Short project description" },
    { id: 5, title: "PROJECT 5", description: "Short project description" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className={styles.main}>
      <div className={styles.wrapper_middle_main}>
        <h1 className={styles.header_text}>{t("header_text")}</h1>
        <h1 className={styles.header_text_2}>{t("header_text_2")}</h1>
        <h1 className={styles.header_text_3}>{t("header_text_3")}</h1>
        <div className={styles.scrollDownContainer}>
          <p>{t("scroll_down")}</p>
          <div className={styles.scrollDownArrow}>
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
        <section className={styles.introduction}>
          <article className={styles.introduction_text_left}>
            <p>{t("info_left")}</p>
          </article>
          <article className={styles.introduction_text_right}>
            <p>{t("info_right_1")}</p>
            <p className={styles.info_right_2}>{t("info_right_2")}</p>
          </article>
        </section>
        <section className={styles.section_selected} ref={sectionRef}>
          <motion.h1
            initial="hiddenLeft"
            animate={isInView ? "visible" : "hiddenLeft"}
            variants={textVariants}
            className={styles.section_selected_text}
          >
            {t("selected")}
          </motion.h1>
          <motion.h1
            initial="hiddenRight"
            animate={isInView ? "visible" : "hiddenRight"}
            variants={textVariants}
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
                  <div className={styles.arrow}>→</div>
                </motion.div>
              ))}
            </div>
            <div className={styles.footerText}>
              <p>CREATIVELY DRIVEN</p>
              <p>SOLUTION ORIENTATED</p>
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
