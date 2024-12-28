import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import navbarEn from "../../public/locales/en/navbar.json";
import navbarPl from "../../public/locales/pl/navbar.json";
import headerEn from "../../public/locales/en/header.json";
import headerPl from "../../public/locales/pl/header.json";
import infoEn from "../../public/locales/en/info.json";
import infoPl from "../../public/locales/pl/info.json";
import gamesEn from "../../public/locales/en/games.json";
import gamesPl from "../../public/locales/pl/games.json";
import footerEn from "../../public/locales/en/footer.json";
import footerPl from "../../public/locales/pl/footer.json";

const resources = {
    en: {
        navbar: navbarEn,
        header: headerEn,
        info: infoEn,
        games: gamesEn,
        footer: footerEn,
    },
    pl: {
        navbar: navbarPl,
        header: headerPl,
        info: infoPl,
        games: gamesPl,
        footer: footerPl,
    },
};

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        supportedLngs: ["en", "pl"],
        resources,
        debug: false,
        fallbackLng: "en",
        saveMissing: true,
    });

export default i18next;
