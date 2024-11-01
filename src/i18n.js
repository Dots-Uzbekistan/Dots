import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { footer } from "framer-motion/client";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "ENG",
    resources: {
      ENG: {
        translation: {
          loading: "is loading...",
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
          guiding:
            "SIMPLICITY AND CLARITY ARE OUR GUIDING PRINCIPLES. FROM START TO FINISH – FROM DESIGN TO PRODUCT DEVELOPMENT",
          zentodescription:
            "Where groundbreaking ideas meet the fuel to grow. Zento connects visionaries with investors, sparking innovation and bringing big ideas to life.",
          scidescription:
            " The hub for scientific minds to connect, collaborate, and create. SciSpace bridges researchers worldwide, making sharing knowledge as easy as discovery itself.",
          norddescription:
            "AI-powered security for your financial peace of mind. Nordguard detects fraud swiftly and smartly, protecting your assets with cutting-edge technology.",
          cooking: "Cooking...",
          cookingdesc:
            "We’re in the kitchen, mixing up fresh ideas and bold flavors. Stay tuned for our next creation—it’s almost ready to serve!",
          project_bottom: `CREATIVELY DRIVEN ${"\n"} SOLUTION ORIENTATED`,
          statistic_info:
            "We’ve been fortunate to work with many amazing people on even more amazing projects.",
          statistic_info_2:
            "We’re a seasoned squad of creative maestros, brewing brilliance with every stroke.",
          member: "Members",
          problem_solved: "Problems Solved",
          awards: "Awards",
          footer: "Drop us a line, and we'll get in touch!",
        },
      },
      RU: {
        translation: {
          loading: "загрузка...",
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
          guiding:
            "Простота и ясность – наши основные принципы. От начала до конца – от дизайна до разработки продукта.",
          zentodescription:
            "Где революционные идеи находят поддержку для роста. Zento объединяет новаторов и инвесторов, чтобы вдохновлять на инновации и воплощать амбициозные проекты в жизнь.",
          scidescription:
            "Платформа для ученых, где легко делиться знаниями и сотрудничать. SciSpace объединяет исследователей по всему миру, упрощая доступ к открытиям и общению.",
          cooking: "На огне...",
          cookingdesc:
            "Мы на кухне, смешиваем свежие идеи и смелые вкусы. Следите за нашими новыми проектами — они почти готовы к подаче!",
          project_bottom: `Творчески ориентированные, ${"\n"}  нацеленные на решение.`,
          statistic_info:
            "Нам повезло работать со многими потрясающими людьми над еще более потрясающими проектами.",
          statistic_info_2:
            "Мы опытная команда творческих мастеров, варящих блеск с каждым штрихом.",
          member: "Участники",
          problem_solved: "Решенные проблемы",
          awards: "Награды",
          footer: "Оставьте нам сообщение, и мы свяжемся с вами!",
        },
      },
      UZ: {
        translation: {
          loading: "yuklanmoqda...",
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
          selected: "Tanlangan",
          works: "Ishlar",
          guiding:
            "Sodda va ravshanlik – bizning asosiy tamoyillarimiz. Boshlanishidan oxirigacha – dizayndan mahsulotni ishlab chiqishgacha.",
          zentodescription:
            "Inqilobiy gʻoyalar o'sish uchun mablag‘ oladigan joy. Zento yangilikchilar va investorlarni birlashtiradi, innovatsiyalarni ilhomlantiradi va ulkan gʻoyalarni hayotga tatbiq etadi.",
          scidescription:
            "Olimlar uchun bilim almashish va hamkorlik qilish platformasi. SciSpace dunyo boʻylab tadqiqotchilarni birlashtirib, yangiliklar va muloqotni osonlashtiradi.",
          norddescription:
            "Moliyaviy xavfsizlik uchun sunʼiy intellektga asoslangan ishonchli yordamchingiz. Nordguard firibgarlikni tez va aniq aniqlaydi, aktivlaringizni ilgʻor texnologiyalar yordamida himoya qiladi.",
          cooking: "Olov ustida...",
          cookingdesc:
            "Biz oshxonadamiz, yangi gʻoyalar va jasoratli lazzatlarni aralashtirmoqdamiz. Tez orada yangi loyiha taqdim etamiz — kuzatib boring!",
          project_bottom: `Ijodiy harakatlanadigan, ${"\n"} yechimga yo'naltirilgan.`,
          statistic_info:
            "Biz ko‘plab ajoyib insonlar bilan va yanada ajoyib loyihalarda ishlash baxtiga muyassar bo‘ldik.",
          statistic_info_2:
            "Biz tajribali ijodiy ustalar jamoasimiz, har bir chizgida ajoyib narsalarni yaratayapmiz.",
          member: "Jamoa a'zolari",
          problem_solved: "Hal qilingan muammolar",
          awards: "Mukofotlar",
          footer: "Bizga xat yozing, biz siz bilan bog‘lanamiz!",
        },
      },
    },
  });
