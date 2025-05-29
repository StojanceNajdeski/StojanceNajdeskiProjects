import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import mk from "../src/i18n/mk.json";
import en from "../src/i18n/en.json";
import de from "../src/i18n/de.json";

i18n.use(initReactI18next).init({
  resources: {
    mk: { translation: mk },
    en: { translation: en },
    de: { translation: de },
  },
  lng: "mk",
  fallbackLng: "mk",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
