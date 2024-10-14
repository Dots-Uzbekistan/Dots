import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Main.module.scss";
const Main = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.main}>
      <h1 className={styles.header_text}>{t("header_text")}</h1>
    </section>
  );
};

export default Main;
