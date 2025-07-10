// The config file.
// TODO: move this file into a ./utils/ directory.
import i18n from "i18next";
import { initReactI18next } from "react-i18next"; // Internationalization framework for React & React Native, which is based on i18next.
import Backend from "i18next-http-backend"; // Allows me to serve the translations from the back end. Right now they reside in `./frontend/public/locales/`.
import LanguageDetector from "i18next-browser-languagedetector"; // Used to detect user language in the browser, with support for cookie, sessionStorage, localStorage, navigator, and more.

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .use(Backend)
  .use(LanguageDetector)
  // Regarding init: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true, // Use this while debugging.
    // lng: "en", // Language to use (overrides language detection). If set to 'cimode' the output text will be the key. Make sure you use the 'en-US' format, instead of underscores or similar.

    supportedLngs: ["es", "en"], // array of allowed languages
    // supportedLngs: ["en", "es"], // array of allowed languages

    fallbackLng: "en", // language to use if translations in user language are not available. Setting it explicitly to false will not trigger to load the fallbackLng at all. See the Fallback docs: https://www.i18next.com/principles/fallback#language-fallback
    // fallbackLng: "es",

    // Regarding interpolation: https://www.i18next.com/translation-function/interpolation#all-interpolation-options
    interpolation: {
      escapeValue: false, // escape passed in values to avoid XSS injection. React already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
export default i18n;
