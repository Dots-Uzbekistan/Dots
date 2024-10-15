import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Main.module.scss";
const Main = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.main}>
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
              stroke-width="2.5"
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
          <p> {t("info_right_2")}</p>
        </article>
      </section>
    </section>
  );
};

export default Main;
