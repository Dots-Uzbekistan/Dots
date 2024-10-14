import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { head } from "framer-motion/client";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "ENG",
    resources: {
      ENG: {
        translation: {
          loading: "Loading...",
          header_text: "Solving Today's Problems",
          header_text_2: "and Creating Tomorrow's",
          header_text_3: "Solutions",
          scroll_down: "Scroll Down",
        },
      },
      RU: {
        translation: {
          loading: "Загрузка...",
          header_text: "Решение современных проблем ",
          header_text_2: "и создание будущих",
          header_text_3: "решений",
          scroll_down: "Прокрутите вниз",
        },
      },
      UZ: {
        translation: {
          loading: "Yuklanmoqda...",
          header_text: "Bugungi muammolarni hal qilamiz",
          header_text_2: "va Bugungi",
          header_text_3: "muammolarni yaratamiz",
          scroll_down: "Pastga o'tish",
        },
      },
    },
  });
