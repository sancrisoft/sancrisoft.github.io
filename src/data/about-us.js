import i18n from "i18next"
import Backend from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { reactI18nextModule } from "react-i18next"

i18n
.use(Backend)
.use(LanguageDetector)
.use(reactI18nextModule)
.init({
  resources: {
    resources: {
      en: {
        translations: {
          title: "About Us",
          bigImage: {
            title: 'Our team is our greatest strength',
            description: 'A group of talented people who enjoy and have fun doing their work'
          },
          team: {
            jhony: {
              position: "Manager",
            },
          }
        }
      },
      es: {
        translations: {
          title: "Sobre nosotros",
          bigImage: {
            title: 'Nuestro equipo es nuestra mayor fortaleza.',
            description: 'Un grupo de personas con talento que disfrutan y se divierten haciendo su trabajo'
          },
          team: {
            jhony: {
              position: "Manager",
            },
          }
        }
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