import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "eng",
    resources: {
      eng: {
        translation: {
          loading: "Loading...",
          header_text:
            "Solving Today's Problems and Shaping Tomorrow's Solutions!",
        },
      },
      rus: {
        translation: {
          loading: "Загрузка...",
          header_text:
            "Решение современных проблем и формирование решений завтрашнего дня!",
        },
      },
      uzb: {
        translation: {
          loading: "Yuklanmoqda...",
          header_text:
            "Bugungi muammolarni hal qilamiz va ertangi yechimlarni shakllantiramiz!",
        },
      },
    },
  });
