import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debugger: true,
    language: "en",
    returnObjects: true,
    // resources: {
    //   en: {
    //     translation: {
    //       greeting: "Hello, Welcome!",
    //       description: {
    //         line1: "This is a sample text <1>{{Bamboo}}</1>.",
    //         line2: "This is another sample gtext.",
    //       },
    //     },
    //   },
    //   fr: {
    //     translation: {
    //       greeting: "Bonjour, Bienvenue!",
    //       description: {
    //         line1: "Ceci est un exemple de texte. <1>{{Bamboo}}</1>",
    //         line2: "Ceci est un autre exemple de texte.",
    //       },
    //     },
    //   },
    //   hi: {
    //     translation: {
    //       greeting: "नमस्ते, आपका स्वागत है!",
    //       description: {
    //         line1: "यह एक नमूना {{Bamboo}} पाठ है",
    //         line2: "यह एक और नमूना पाठ है.",
    //       },
    //     },
    //   },
    //   ar: {
    //     translation: {
    //       greeting: "مرحباً، مرحباً!",
    //       description: {
    //         line1: "هذا نص {{Bamboo}}  عينة.",
    //         line2: "وهذا نص عينة آخر.",
    //       },
    //     },
    //   },
    // },
  });
