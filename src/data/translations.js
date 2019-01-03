import i18n from "i18next"
import Backend from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { reactI18nextModule } from "react-i18next"
import home from "./home-en"
import homeEs from "./home-es"
i18n
.use(Backend)
.use(LanguageDetector)
.use(reactI18nextModule)
.init({
  resources: {
    en: {
      translations: {
        home: home,
        aboutUs: {
          title: "About Us",
          bigImage: {
            title: 'Our team is our greatest strength',
            description: 'A group of talented people who enjoy and have fun doing their work'
          },
          team: {
            title: 'Meet the Team',
            members: {
              jhony: {
                position: "Manager",
                message1: "The best",
                message2: "Of the fucking bests"
              },
              juan: {
                position: "Manager",
                message1: "The best",
                message2: "Of the fucking bests"
              },
              samuel: {
                position: "Manager",
                message1: "The best",
                message2: "Of the fucking bests"
              },
              carlos: {
                position: "Manager",
                message1: "The best",
                message2: "Of the fucking bests"
              },
              alejo: {
                position: "Manager",
                message1: "The best",
                message2: "Of the fucking bests"
              },
              johan: {
                position: "Manager",
                message1: "The best",
                message2: "Of the fucking bests"
              },
              bryan: {
                position: "Manager",
                message1: "The best",
                message2: "Of the fucking bests"
              },
              miguel: {
                position: "Manager",
                message1: "The best",
                message2: "Of the fucking bests"
              },
            }
          },
        },
      },
    },
    es: {
      translations: {
        home: homeEs,
        aboutUs: {
          title: "Sobre nosotros",
          bigImage: {
            title: 'Nuestro equipo es nuestra mayor fortaleza.',
            description: 'Un grupo de personas con talento que disfrutan y se divierten haciendo su trabajo'
          },
          team: {
            title: 'Conoce al Equipo',
            members: {
              jhony: {
                position: "Jefe encargado",
                message1: "El mejor",
                message2: "De todos forever ever after"
              },
              juan: {
                position: "Jefe encargado",
                message1: "El mejor",
                message2: "De todos forever ever after"
              },
              samuel: {
                position: "Jefe encargado",
                message1: "El mejor",
                message2: "De todos forever ever after"
              },
              carlos: {
                position: "Jefe encargado",
                message1: "El mejor",
                message2: "De todos forever ever after"
              },
              alejo: {
                position: "Jefe encargado",
                message1: "El mejor",
                message2: "De todos forever ever after"
              },
              johan: {
                position: "Jefe encargado",
                message1: "El mejor",
                message2: "De todos forever ever after"
              },
              bryan: {
                position: "Jefe encargado",
                message1: "El mejor",
                message2: "De todos forever ever after"
              },
              miguel: {
                position: "Jefe encargado",
                message1: "El mejor",
                message2: "De todos forever ever after"
              },
            }
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