import translationEN from "@/locales/en/translation.json";
import translationVI from "@/locales/vi/translation.json";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
const resources = {
    en: {
        translation: translationEN,
    },
    vi: {
        translation: translationVI,
    },
};

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        lng: "vi",
        fallbackLng: "vi",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
