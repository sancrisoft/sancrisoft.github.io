import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: {
        title: 'Sancrisoft',
        slogan: 'Developing Websites',
        nav: {
          about: "About Us",
          cases: "Case Studies",
          careers: "Careers",
          quote: "Get a Quote"
        },
        testimonials: [
          {
            id: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, aliqua.Ut enim ad minimo cborum.',
            name: 'juan perez',
            image: '/images/small-logo.png',
            title: 'Founder, Google'
          },
          {
            id: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisiciminimo cborum.',
            name: 'pedro pablo',
            image: '../../images/small-logo.png',
            title: 'Head of sales'
          },
          {
            id: 3,
            description: 'Lorem ipsum dolor sit ar adipisicing elit, aliqua.Ut enim ad minimo cborum.',
            name: 'camilo ortiz',
            image: '../../images/small-logo.png',
            title: 'Designer'
          },
          {
            id: 4,
            description: 'Lorem ipsum dolor sit amet, iaukgs bdsd.',
            name: 'gonza gonza',
            image: '../../images/small-logo.png',
            title: 'Co-founder'
          },
          {
            id: 5,
            description: 'asdasdasdasd asdkag dasd gaskdasd ciminimo cborum.',
            name: 'alfonso jaramillo',
            image: '../../images/small-logo.png',
            title: 'Founder'
          },
          {
            id: 6,
            description: 'Lorem ipsum doweeua.Ut enim ad minimo cborum.',
            name: 'cristian puerto',
            image: '../../images/small-logo.png',
            title: 'Co-founder'
          }
        ],
        carousel: [
          {
            id: 1,
            title: 'Titulo genial 1',
            description: 'Automate inefficient processes and solve advanced problems with Machine Learning.',
            type: 'image',
            link: '/careers',
            linkText: 'Link arrechisimo!'
          },
          {
            id: 2,
            title: 'Titulo genial 2',
            description: 'From a small software shop to a global agency in 10 years. Here\'s a story of Netguru as told by our Head of Growth.',
            type: 'video',
            videoSrc: 'http://techslides.com/demos/sample-videos/small.mp4',
            link: '/careers',
            linkText: 'Link arrechisimo!'
          },
          {
            id: 3,
            title: 'Titulo genial 3',
            description: 'Automate inefficient processes and solve advanced problems with Machine Learning.',
            type: 'image',
            link: '/careers',
            linkText: 'Link arrechisimo!'
          },
          {
            id: 4,
            title: 'Titulo genial 4',
            description: 'From a small software shop to a global agency in 10 years. Here\'s a story of Netguru as told by our Head of Growth.',
            type: 'image',
            link: '/careers',
            linkText: 'Link arrechisimo!'
          },
          {
            id: 5,
            title: 'Titulo genial 5',
            description: 'Automate inefficient processes and solve advanced problems with Machine Learning.',
            type: 'image',
            link: '/careers',
            linkText: 'Link arrechisimo!'
          },
          {
            id: 6,
            title: 'Titulo genial 6',
            description: 'From a small software shop to a global agency in 10 years. Here\'s a story of Netguru as told by our Head of Growth.',
            type: 'image',
            link: '/careers',
            linkText: 'Link arrechisimo!'
          }
        ],
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
        processes: [
          {
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
          {
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
        ]
      }
    },
    es: {
      translations: {
        title: 'Sancrisoft',
        slogan: 'Desarrollamos sitios web',
        nav: {
          about: "Nosotros",
          cases: "Casos de Estudio",
          careers: "Carreras",
          quote: "Cotizaciones"
        },
        testimonials: [
          {
            id: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, aliqua.Ut enim ad minimo cborum.',
            name: 'juan perez',
            image: '/images/small-logo.png',
            title: 'Founder, Google'
          },
          {
            id: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisiciminimo cborum.',
            name: 'pedro pablo',
            image: '../../images/small-logo.png',
            title: 'Head of sales'
          },
          {
            id: 3,
            description: 'Lorem ipsum dolor sit ar adipisicing elit, aliqua.Ut enim ad minimo cborum.',
            name: 'camilo ortiz',
            image: '../../images/small-logo.png',
            title: 'Designer'
          },
          {
            id: 4,
            description: 'Lorem ipsum dolor sit amet, iaukgs bdsd.',
            name: 'gonza gonza',
            image: '../../images/small-logo.png',
            title: 'Co-founder'
          },
          {
            id: 5,
            description: 'asdasdasdasd asdkag dasd gaskdasd ciminimo cborum.',
            name: 'alfonso jaramillo',
            image: '../../images/small-logo.png',
            title: 'Founder'
          },
          {
            id: 6,
            description: 'Lorem ipsum doweeua.Ut enim ad minimo cborum.',
            name: 'cristian puerto',
            image: '../../images/small-logo.png',
            title: 'Co-founder'
          }
        ],
        carousel: [
          {
            id: 1,
            title: 'Titulo genial 1',
            description: 'Automate inefficient processes and solve advanced problems with Machine Learning.',
            type: 'image',
            link: '/careers',
            linkText: 'Link arrechisimo!'
          },
          {
            id: 2,
            title: 'Titulo genial 2',
            description: 'From a small software shop to a global agency in 10 years. Here\'s a story of Netguru as told by our Head of Growth.',
            type: 'video',
            videoSrc: 'http://techslides.com/demos/sample-videos/small.mp4',
            link: '/careers',
            linkText: 'Link arrechisimo!'
          },
          {
            id: 3,
            title: 'Titulo genial 3',
            description: 'Automate inefficient processes and solve advanced problems with Machine Learning.',
            type: 'image',
            link: '/careers',
            linkText: 'Link arrechisimo!'
          },
          {
            id: 4,
            title: 'Titulo genial 4',
            description: 'From a small software shop to a global agency in 10 years. Here\'s a story of Netguru as told by our Head of Growth.',
            type: 'image',
            link: '/careers',
            linkText: 'Link arrechisimo!'
          },
          {
            id: 5,
            title: 'Titulo genial 5',
            description: 'Automate inefficient processes and solve advanced problems with Machine Learning.',
            type: 'image',
            link: '/careers',
            linkText: 'Link arrechisimo!'
          },
          {
            id: 6,
            title: 'Titulo genial 6',
            description: 'From a small software shop to a global agency in 10 years. Here\'s a story of Netguru as told by our Head of Growth.',
            type: 'image',
            link: '/careers',
            linkText: 'Link arrechisimo!'
          }
        ],
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
        processes: [
          {
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
          {
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
        ]
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