import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "./locales/pt/translation.json";
import en from "./locales/en/translation.json";

const browserLanguage = navigator.language.toLowerCase();

const language =
  browserLanguage === "pt-br"
    ? "pt"
    : "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: pt,
      },
      en: {
        translation: en,
      },
    },

    lng: language,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;