// The i18n.ts config file.
// TODO: move this file into a ./utils/ directory.
import i18n from "i18next";
import { initReactI18next } from "react-i18next"; // Internationalization framework for React & React Native, which is based on i18next.
import Backend from "i18next-http-backend"; // Allows me to serve the translations from the back end. Right now they reside in `./frontend/public/locales/`.
import LanguageDetector from "i18next-browser-languagedetector"; // Used to detect user language in the browser, with support for cookie, sessionStorage, localStorage, navigator, and more.

const fallbackLanguage: string = "en";
// const fallbackLanguage: string = "es";

// Note, the first element of the order array is checked first. If it doesn't return anything, the next element is checked until something is found.
// If nothing is found, "fallbackLng" is used. For the time being, "querystring" is used strictly for testing purposes.
// Complete list of Order Array Options  order: ['querystring', 'hash', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain']
// const orderOptions: string[] = ["querystring"]; // NOTE: "querystring" is not used in the app. It is there strictly for testing purposes.
// cons orderOptions: string[] = ["querystring", "navigator"]; // On every load it always looks at the browser (navigator). NOTE: "querystring" is not used in the app. It is there strictly for testing purposes.
const orderOptions: string[] = ["querystring", "localStorage", "navigator"]; // On first visit → device language (navigator). After toggle, language saved in stored preference (in localStorage). On future visits, checks stored preference (localStorage). NOTE: "querystring" is not used in the app. It is there strictly for testing purposes.
// const orderOptions: string[] = ["querystring", "cookie", "localStorage", "navigator"]; NOTE: "querystring" is not used in the app. It is there strictly for testing purposes.

// const cachesOptions: string[] = ["localStorage"]; // Language is persisted in only "localStorage".
// const cachesOptions: string[] = ["localStorage", "cookie"]; // Language is persisted in "localStorage" and in "cookie".
const cachesOptions: string[] = ["localStorage", "cookie", "sessionStorage"]; // Language is persisted in "localStorage", in "cookie", and in "sessionStorage".
// const cachesOptions: string[] = []; // No language is persisted anywhere. NOTE: this doesn't work for TypeScript. It throw's this "Variable 'caches' implicitly has type 'any[]' in some locations where its type cannot be determined.ts(7034)" error.

// const excludeCacheForOptions: string[] = ["en", "es"];
// const excludeCacheForOptions: string[] =  ["cimode"];
const excludeCacheForOptions: string[] = [];

const detectionOptions = {
  // From https://github.com/i18next/i18next-browser-languageDetector?tab=readme-ov-file#detector-options
  //   // order and from where user language should be detected
  //   // querystring - append ?lng=LANGUAGE to URL
  //   // hash - append #lng=LANGUAGE or #/LANGUAGE to URL
  //   // cookie - set key i18nextLng=LANGUAGE
  //   // localStorage - the querystring in the URL
  //   // sessionStorage - set key i18nextLng=LANGUAGE
  //   // navigator - set browser language
  //   // htmlTag - add html language tag to html file <html lang="LANGUAGE" >
  //   // path - http://my.site.com/LANGUAGE/...
  //   // subdomain - http://LANGUAGE.site.com/...

  order: orderOptions, // The order of how the app detects the language from the device/browser settings.

  lookupQuerystring: "lng", // This tells i18next to look for a language code in the URL query string like: https://yoursite.com/?lng=es. "lng" is the key name, but you could use any name you like (e.g., "lang") If present, this overrides all other detection methods

  // lookupCookie: "i18nextLng", // Tells i18next to check in cookies. Useful if you want persistence even when localStorage is disabled (e.g., private browsing). Required if you're doing SSR with server-side cookie parsing. Optional in most modern CSR apps unless you're doing SSR or want extra persistence.

  // lookupLocalStorage: { myValue01:"i18nextLng", myValue02: true },
  lookupLocalStorage: "i18nextLng", // Tells i18next to check localStorage.getItem("i18nextLng"). If present, this value will override device/browser preferences. Survives page reloads and browser restarts. Great for persisting language across visits if the user manually changes it.

  //   lookupSessionStorage: 'i18nextLng', // Similar to localStorage but only lasts per tab session. Might be useful if you don’t want to persist language across sessions.

  //   lookupFromPathIndex: 0,
  //   lookupFromSubdomainIndex: 0,
  //   lookupHash: 'lng', // #lng=pt or #something&lng=en
  //   lookupFromHashIndex: 0, // #/de

  caches: cachesOptions, // Caches user language. Controls where i18next will store the detected or selected language. For example, if a user switches languages with i18n.changeLanguage("es"), this setting: Saves "es" to each item in the "caches" array. And ensures the language is remembered on future visits. If caches is empty or missing, the language will be forgotten on reload unless re-detected.

  excludeCacheFor: excludeCacheForOptions, // Prevents certain "languages" (like debug or fallback modes) from being stored. Not device-specific, but helpful in dev environments. To use it, you need to pass the excludeCacheFor option within the init function of your i18next configuration, along with an array of language codes you want to exclude from caching.

  //   // optional expiry and domain for set cookie
  //   cookieMinutes: 10,
  //   cookieDomain: 'myDomain',

  //   // optional htmlTag with lang attribute, the default is:
  //   htmlTag: document.documentElement,

  //   // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  // cookieOptions: { path: '/', sameSite: 'strict' }, // Good for security and behavior control across platforms. Can be tweaked if you're supporting cross-subdomain apps or mobile/desktop versions on separate subdomains.

  //   // optional conversion function used to modify the detected language code
  //   convertDetectedLanguage: 'Iso15897',
  //   convertDetectedLanguage: (lng) => lng.replace('-', '_')
};

const interpolation = {
  // escape passed in values to avoid XSS injection. React already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  escapeValue: false,
};

// Regarding the .use() methods, their order matters.
i18n
  .use(Backend) // Load translations (i18next-http-backend)
  .use(LanguageDetector) // Detect language (i18next-browser-languagedetector)
  .use(initReactI18next) // Passes i18n down to react-i18next. Connects everything to React’s context, and MUST come after ALL other setup steps.

  // Regarding init: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true, // Use this while debugging.

    fallbackLng: fallbackLanguage, // language to use if translations in user language are not available. Setting it explicitly to false will not trigger to load the fallbackLng at all. See the Fallback docs: https://www.i18next.com/principles/fallback#language-fallback

    // lng: "en", // Language to use (overrides Language Detection). If set to 'cimode' the output text will be the key. Make sure you use the 'en-US' format, instead of underscores or similar.

    detection: detectionOptions, // Regarding  Language Detection: https://www.i18next.com/overview/plugins-and-utils#language-detector

    supportedLngs: [fallbackLanguage, "es"], // array of allowed languages

    load: "languageOnly", // Strips region codes. "es-MX" → "es", "fr-CA" → "fr" (default)

    // Regarding interpolation: https://www.i18next.com/translation-function/interpolation#all-interpolation-options
    interpolation: interpolation,
  });
export default i18n;
