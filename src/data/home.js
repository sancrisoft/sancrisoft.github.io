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
    en: {
      translations: {
        title: 'Sancrisoft',
        slogan: 'Web development',
        testimonialsTitle: 'Trusted By Our Customers',
        mapTitle: 'Or stop by our offices',
        nav: {
          about: "About Us",
          cases: "Case Studies",
          careers: "Careers",
          quote: "Get a Quote"
        },
        "weLove": {
          title: "App Meattogo",
          description: "kjasg kaushjd akdsg asldk asdja bkasg dbasd jasd"
        },
        testimonials: {
          1: {
            id: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, aliqua.Ut enim ad minimo cborum.',
            title: 'Founder, Google'
          },
          2: {
            id: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisiciminimo cborum.',
            title: 'Head of sales'
          },
          3: {
            id: 3,
            description: 'Lorem ipsum dolor sit ar adipisicing elit, aliqua.Ut enim ad minimo cborum.',
            title: 'Designer'
          },
          4: {
            id: 4,
            description: 'Lorem ipsum dolor sit amet, iaukgs bdsd.',
            title: 'Co-founder'
          },
          5: {
            id: 5,
            description: 'asdasdasdasd asdkag dasd gaskdasd ciminimo cborum.',
            title: 'Founder'
          },
          6: {
            id: 6,
            description: 'Lorem ipsum doweeua.Ut enim ad minimo cborum.',
            name: 'cristian puerto',
            image: '../../images/small-logo.png',
            title: 'Co-founder'
          }
        },
        carousel: {
          1: {
            id: 1,
            title: 'Awesome title 1',
            description: 'Automate inefficient processes and solve advanced problems with Machine Learning.',
            linkText: 'Awesome link!'
          },
          2: {
            id: 2,
            title: 'Awesome title 2',
            description: 'From a small software shop to a global agency in 10 years. Here\'s a story of Netguru as told by our Head of Growth.',
            linkText: 'Awesome link!'
          },
          3: {
            id: 3,
            title: 'Awesome title 3',
            description: 'Automate inefficient processes and solve advanced problems with Machine Learning.',
            linkText: 'Awesome link!'
          },
          4: {
            id: 4,
            title: 'Awesome title 4',
            description: 'From a small software shop to a global agency in 10 years. Here\'s a story of Netguru as told by our Head of Growth.',
            linkText: 'Awesome link!'
          },
          5: {
            id: 5,
            title: 'Awesome title 5',
            description: 'Automate inefficient processes and solve advanced problems with Machine Learning.',
            linkText: 'Awesome link!'
          },
          6: {
            id: 6,
            title: 'Awesome title 6',
            description: 'From a small software shop to a global agency in 10 years. Here\'s a story of Netguru as told by our Head of Growth.',
            linkText: 'Awesome link!'
          }
        },
        offices: [
          {
            id: 'venezuela/tachira/san-cristobal',
            title: 'Venezuela',
            address1: 'Santa Teresa',
            address2: 'Casa al fondo',
            state: 'San Cristóbal. Táchira',
            postalCode: '5001',
            latitude: '7.798563',
            longitude: '-72.222281'
          },
          {
            id: 'colombia/antioquia/envigado',
            title: 'Colombia',
            address1: 'Calle. 49 Sur',
            address2: '#45 A 300 Oficina 1813',
            state: 'Envigado. Antioquia',
            postalCode: '055422',
            latitude: '6.1629538',
            longitude: '-75.6042868'
          }
        ],
        processes: {
          title: "What we do",
          items: {
            web: {
              id: 'web',
              title: 'Web Development',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
              technologies: [
                {
                  id: 'react',
                  tooltip: 'React',
                  color: '#65DAF9'
                },
                {
                  id: 'webpack',
                  tooltip: 'Webpack',
                  color: '#2177BE'
                },
                {
                  id: 'redux',
                  tooltip: 'Redux',
                  color: '#7649BA'
                },
                {
                  id: 'styled',
                  tooltip: 'Styled components',
                  color: '#F0B4EB'
                },
                {
                  id: 'material',
                  tooltip: 'Material UI',
                  color: '#8B8B8B'
                }
              ]
            },
            mobile: {
              id: 'mobile',
              title: 'Mobile Development',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
              technologies: [
                {
                  id: 'react',
                  tooltip: 'React Native',
                  color: '#65DAF9'
                },
                {
                  id: 'webpack',
                  tooltip: 'Webpack',
                  color: '#2177BE'
                },
                {
                  id: 'android',
                  tooltip: 'Android',
                  color: '#8FC321'
                },
                {
                  id: 'styled',
                  tooltip: 'Styled components',
                  color: '#F0B4EB'
                },
                {
                  id: 'ios',
                  tooltip: 'iOs',
                  color: '#F3B338'
                }
              ]
            }
          }
        }
      }
    },
    es: {
      translations: {
        title: 'Sancrisoft',
        slogan: 'Desarrollamos sitios web',
        testimonialsTitle: 'Confiado por nuestros clientes',
        mapTitle: 'O pasa por nuestras oficinas',
        nav: {
          about: "Nosotros",
          cases: "Casos de Estudio",
          careers: "Carreras",
          quote: "Cotizaciones"
        },
        "weLove": {
          title: "App Meattogo",
          description: "Lorem spanish ipsum dolor sit amet, consectetur adipisicing elit, aliqua.Ut enim ad minimo cborum kjasg kaushjd akdsg asldk asdja bkasg dbasd jasd"
        },
        testimonials: {
          1: {
            id: 1,
            description: 'Lorem spanish ipsum dolor sit amet, consectetur adipisicing elit, aliqua.Ut enim ad minimo cborum.',
            title: 'Fundador, Google'
          },
          2: {
            id: 2,
            description: 'Lorem spanish ipsum dolor sit amet, consectetur adipisiciminimo cborum.',
            title: 'Encargado de Ventas'
          },
          3: {
            id: 3,
            description: 'Lorem spanish ipsum dolor sit ar adipisicing elit, aliqua.Ut enim ad minimo cborum.',
            title: 'Diseñador'
          },
          4: {
            id: 4,
            description: 'Lorem spanish ipsum dolor sit amet, iaukgs bdsd.',
            title: 'Co-fundador'
          },
          5: {
            id: 5,
            description: 'Spanish asdhasjdhasdjashasjas asdhdasjhdasas ashdadsjhdas asdjadshashd',
            title: 'Fundador'
          },
          6: {
            id: 6,
            description: 'Lorem spanish ipsum doweeua.Ut enim ad minimo cborum.',
            name: 'cristian puerto',
            image: '../../images/small-logo.png',
            title: 'Co-founder'
          }
        },
        carousel: {
          1: {
            id: 1,
            title: 'Titulo genial 1',
            description: 'Automatice procesos ineficientes y resuelva problemas avanzados con Aprendizaje Automático.',
            linkText: 'Link arrechisimo!'
          },
          2: {
            id: 2,
            title: 'Titulo genial 2',
            description: 'Desde una pequeña tienda de software a una agencia global en 10 años. Aquí hay una historia de Netguru contada por nuestro Jefe de Crecimiento.',
            linkText: 'Link arrechisimo!'
          },
          3: {
            id: 3,
            title: 'Titulo genial 3',
            description: 'Automatice procesos ineficientes y resuelva problemas avanzados con Aprendizaje Automático.',
            linkText: 'Link arrechisimo!'
          },
          4: {
            id: 4,
            title: 'Titulo genial 4',
            description: 'Desde una pequeña tienda de software a una agencia global en 10 años. Aquí hay una historia de Netguru contada por nuestro Jefe de Crecimiento.',
            linkText: 'Link arrechisimo!'
          },
          5: {
            id: 5,
            title: 'Titulo genial 5',
            description: 'Automatice procesos ineficientes y resuelva problemas avanzados con Aprendizaje Automático.',
            linkText: 'Link arrechisimo!'
          },
          6: {
            id: 6,
            title: 'Titulo genial 6',
            description: 'Desde una pequeña tienda de software a una agencia global en 10 años. Aquí hay una historia de Netguru contada por nuestro Jefe de Crecimiento.',
            linkText: 'Link arrechisimo!'
          }
        },
        offices: [
          {
            id: 'venezuela/tachira/san-cristobal',
            title: 'Venezuela',
            address1: 'Santa Teresa',
            address2: 'Casa al fondo',
            state: 'San Cristóbal. Táchira',
            postalCode: '5001',
            latitude: '7.798563',
            longitude: '-72.222281'
          },
          {
            id: 'colombia/antioquia/envigado',
            title: 'Colombia',
            address1: 'Calle. 49 Sur',
            address2: '#45 A 300 Oficina 1813',
            state: 'Envigado. Antioquia',
            postalCode: '055422',
            latitude: '6.1629538',
            longitude: '-75.6042868'
          }
        ],
        processes: {
          title: "Qué hacemos",
          items: {
            web: {
              id: 'web',
              title: 'Desarrollo web',
              description: 'Lorem spanish ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
              technologies: [
                {
                  id: 'react',
                  tooltip: 'React',
                  color: '#65DAF9'
                },
                {
                  id: 'webpack',
                  tooltip: 'Webpack',
                  color: '#2177BE'
                },
                {
                  id: 'redux',
                  tooltip: 'Redux',
                  color: '#7649BA'
                },
                {
                  id: 'styled',
                  tooltip: 'Styled components',
                  color: '#F0B4EB'
                },
                {
                  id: 'material',
                  tooltip: 'Material UI',
                  color: '#8B8B8B'
                }
              ]
            },
            mobile: {
              id: 'mobile',
              title: 'Desarrollo movil',
              description: 'Lorem spanish ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
              technologies: [
                {
                  id: 'react',
                  tooltip: 'React Native',
                  color: '#65DAF9'
                },
                {
                  id: 'webpack',
                  tooltip: 'Webpack',
                  color: '#2177BE'
                },
                {
                  id: 'android',
                  tooltip: 'Android',
                  color: '#8FC321'
                },
                {
                  id: 'styled',
                  tooltip: 'Styled components',
                  color: '#F0B4EB'
                },
                {
                  id: 'ios',
                  tooltip: 'iOs',
                  color: '#F3B338'
                }
              ]
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
