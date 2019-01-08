import i18n from "i18next"
import Backend from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { reactI18nextModule } from "react-i18next"
import home from "./home-en"
import homeEs from "./home-es"
import about from "./about-en"
import aboutES from "./about-es"
import caseStudies from "./case-studies-en"
import caseStudiesES from "./case-studies-es"
i18n
.use(Backend)
.use(LanguageDetector)
.use(reactI18nextModule)
.init({
  resources: {
    en: {
      translations: {
        home: home,
        aboutUs: about,
        caseStudies: caseStudies,
      },
    },
    es: {
      translations: {
        home: homeEs,
        aboutUs: aboutES,
        caseStudies: caseStudiesES,
      }
    }
  },
  fallbackLng: "en",
  debug: true,
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: '.',
  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },
  react: {
    wait: true
  }
});

export default i18n;
