const homeES = {
  title: 'Sancrisoft',
  slogan: 'Desarrollamos sitios web',
  testimonialsTitle: 'Nuestros Clientes Confían En Nosotros',
  mapTitle: '',
  weLove: {
    titleSection: "Nos Encanta Ver el Éxito de Nuestros Clientes",
    title: "Meattogo",
    description: "Meat To Go es una carnicería en línea ubicada en Panamá especializada en carnes, aves y mariscos.",
    textLink: "Ver Caso de Estudio"
  },
  nav: {
    about: "Nosotros",
    cases: "Casos de Estudio",
    careers: "Carreras",
    quote: "Quiero una Cotización"
  },
  testimonials: {
    1: {
      id: 1,
      description: 'Me gustan mucho los cambios realizados y nuevamente les agradezco y felicito por la diligencia y buena disposición frente a las observaciones. ¡Creo que estamos logrando algo muy positivo aquí y estoy muy contento con este trabajo!',
      title: 'Fundador de ArenaBursatil.com'
    }
  },
  carousel: {
    1: {
      id: 1,
      title: 'Elaboramos Soluciones Digitales Para Sus Negocios',
      description: 'Creamos aplicaciones de alta calidad para llevar su negocio al siguiente nivel',
      linkText: 'Ver Nuestro Trabajo'
    },
    2: {
      id: 2,
      title: 'Desarrollo a la Medida',
      description: 'Soluciones a la medida diseñadas para tu negocio. Tenemos experiencia técnica en múltiples lenguajes de programación y frameworks para construir grandes productos',
      linkText: 'Quiero una Propuesta'
    },
    3: {
      id: 3,
      title: 'Aplicaciones Móviles',
      description: 'Tener la aplicación de tus sueños en el mercado no será difícil. Creamos aplicaciones móviles para iOS y Android, también sitios web responsivos para todos los dispositivos móviles',
      linkText: 'Quiero una Cotización'
    },
    4: {
      id: 4,
      title: 'Contáctanos, ¡Es Fácil!',
      description: 'Comparte con nosotros lo que tienes en mente y te contestaremos con una propuesta o con algunas preguntas para aclarar las dudas',
      linkText: 'Escríbenos'
    }
  },
  getAQuote: {
    titleButton: "Quiero una Cotización",
    description: "Escríbenos sin ningún compromiso y hablemos de lo que tienes en mente para hacer crecer tu negocio."
  },
  offices: [
    {
      id: 'colombia/antioquia/envigado',
      title: 'Colombia',
      address1: 'Calle. 49 Sur',
      address2: '#45 A 300 Oficina 1813',
      state: 'Envigado. Antioquia',
      postalCode: '055422',
      latitude: '6.1629538',
      longitude: '-75.6042868'
    },
    {
      id: 'venezuela/tachira/san-cristobal',
      title: 'Venezuela',
      address1: 'Santa Teresa',
      address2: 'Casa al fondo',
      state: 'San Cristóbal. Táchira',
      postalCode: '5001',
      latitude: '7.798563',
      longitude: '-72.222281'
    }
  ],
  processes: {
    title: "¿Qué Hacemos?",
    items: {
      web: {
        id: 'web',
        title: 'Desarrollo Web',
        description: 'Apliaciones web elegantes, rápidas y seguras exclusivamente diseñadas de acuerdo a sus objetivos de negocio. Nos encargamos de tu aplicación desde el backend hasta el frontend usando las últimas tecnologías javascript como ReactJS. Dependiendo del alcance del proyecto, funcionalidades, tiempo y presupuesto escogemos individualmente la solución óptima para su proyecto.',
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
        title: 'Desarrollo Móvil',
        description: '¿Tu negocio aún no esta en el mundo de las aplcaciones móviles? Llevamos tu idea a la realidad y cubrimos todo el proceso de desarrollo, construimos aplicaciones en React Native una librería robusta para crear aplications android y iOS nativas. También construimos soluciones web responsivas para el mundo móvil.',
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
};
export default homeES;
