import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true, // Use this while debugging.
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    resources: {
      en: { translation: { bioTitle: "Full Stack Developer" }, welcomeMessage: "Welcome to React and react-i18next" },
      es: { translation: { bioTitle: "spanish" }, welcomeMessage: "Bienvenido" },
    },
  });
export default i18n;
