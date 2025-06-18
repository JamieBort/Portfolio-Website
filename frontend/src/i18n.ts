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
      en: {
        translation: {
          about: {
            title: "Full Stack Developer",
            description:
              "I create elegant solutions to complex problems, specializing in modern web development with a focus on user experience and clean code. I write code and teach at Code the Dream, a software boot camp for underrepresented people. Below you will find some of my Projects. When I am not coding I am working on my next presentation or mentoring; both of which push me to learn and grow.",
          },
          projects: {
            first: {
              title: "Portfolio Website",
              description:
                "This is where I share a bit about myself, showcase what I've been working on, and share where you can find me online. It is build with a React, Vite and TypeScript front end. I am re-writing the Node Express backend.",
            },
            second: {
              title: "Personal Dashboard",
              description:
                "A website for displaying and analyzing important daily data. Such as blood glucose numbers and upcoming events. Using Svelt TypeScript front end and Java backend. Which database is yet to be seen. It will use authentication.",
            },
          },
          skills: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
          contact: "",
        },
      },
      es: {
        translation: {
          about: {
            title: "SPANISH",
            description:
              "I create elegant solutions to complex problems, specializing in modern web development with a focus on user experience and clean code. I write code and teach at Code the Dream, a software boot camp for underrepresented people. Below you will find some of my Projects. When I am not coding I am working on my next presentation or mentoring; both of which push me to learn and grow.",
          },
        },
      },
    },
  });
export default i18n;
