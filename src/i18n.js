import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { select } from "framer-motion/client";

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
          home: "Home",
          about: "About",
          contact: "Contact",
          projects: "Projects",
          info_left:
            "We believe that every problem has a smart solution, and through collaboration and innovation, we make the complex simple.",
          info_right_1:
            "— Our commitment to excellence drives us to explore uncharted territories in technology, allowing us to deliver solutions that address real-world challenges. we bring together diverse perspectives and skills, allowing us to create holistic solutions tailored to our clients’ needs.",
          info_right_2:
            "Our mission is to transform challenges into opportunities, empowering businesses and individuals to achieve their goals through intuitive and effective technology.",
          selected: "Selected",
          works: "Works",
        },
      },
      RU: {
        translation: {
          loading: "Загрузка...",
          header_text: "Решение современных проблем ",
          header_text_2: "и создание будущих",
          header_text_3: "решений",
          scroll_down: "Прокрутите вниз",
          home: "Главная",
          about: "О нас",
          contact: "Контакты",
          projects: "Проекты",
          info_left:
            "Мы верим, что у каждой проблемы есть разумное решение, и благодаря сотрудничеству и инновациям мы делаем сложное простым.",
          info_right_1:
            "— Наше стремление к совершенству побуждает нас исследовать неизведанные территории в области технологий, что позволяет нам предлагать решения, которые решают реальные проблемы. мы объединяем различные точки зрения и навыки, что позволяет нам создавать целостные решения, адаптированные к потребностям наших клиентов.",
          info_right_2:
            "Наша миссия — превратить проблемы в возможности, давая возможность предприятиям и частным лицам достигать своих целей с помощью интуитивно понятных и эффективных технологий.",
          selected: "Выбранные",
          works: "Работы",
        },
      },
      UZ: {
        translation: {
          loading: "Yuklanmoqda...",
          header_text: "Bugungi muammolarni hal qilamiz",
          header_text_2: "va Bugungi",
          header_text_3: "muammolarni yaratamiz",
          scroll_down: "Pastga o'tish",
          home: "Bosh sahifa",
          about: "Biz haqimizda",
          contact: "Aloqa",
          projects: "Xizmatlar",
          info_left:
            "Biz har bir muammoning aqlli yechimi borligiga ishonamiz va hamkorlik va innovatsiyalar orqali biz murakkablikni soddalashtiramiz.",
          info_right_1:
            "— Bizning mukammallikka bo'lgan sodiqligimiz bizni texnologiyada aniqlanmagan hududlarni o'rganishga undaydi, bu bizga real muammolarga javob beradigan yechimlarni taqdim etish imkonini beradi. biz turli istiqbollar va ko'nikmalarni birlashtiramiz, bu bizga mijozlarimizning ehtiyojlariga moslashtirilgan yaxlit echimlarni yaratishga imkon beradi.",
          info_right_2:
            "Bizning vazifamiz qiyinchiliklarni imkoniyatlarga aylantirish, biznes va jismoniy shaxslarga intuitiv va samarali texnologiyalar orqali o‘z maqsadlariga erishish imkonini berishdir.",
          selected: "Tanlanganlar",
          works: "Ishlar",
        },
      },
    },
  });
