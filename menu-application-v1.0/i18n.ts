import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./public/locales/en/common";
import mk from "./public/locales/mk/common";
import al from "./public/locales/al/common";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    mk: { translation: mk },
    al: { translation: al },
  },
  lng: "mk",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
