import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; // Allows me to serve the translations from the back end. Right now they reside in `./frontend/public/locales/`.
// TODO: move this file into a ./utils/ directory.

// The config file.
i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .use(Backend)
  .init({
    debug: true, // Use this while debugging.
    lng: "en", // If you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
export default i18n;
