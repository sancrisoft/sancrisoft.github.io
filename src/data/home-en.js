const home = {
  title: 'Sancrisoft',
  slogan: 'Web development',
  testimonialsTitle: 'Trusted By Our Customers',
  mapTitle: '',
  weLove: {
    titleSection: "We Love to See Our Clients Success",
    title: "Meattogo",
    description: "Meat To Go is an online butchery located in panama specialized in meat, poultry and seafood.",
    textLink: "View Case Study"
  },
  nav: {
    about: "About Us",
    cases: "Case Studies",
    careers: "Careers",
    quote: "Get a Quote"
  },
  testimonials: {
    1: {
      id: 1,
      description: 'I really like the changes made and once again, congratulations for the quick turn around and care about feedback. I think we are achieving something very positive. I\'m very happy with this work!',
      title: 'Founder of ArenaBursatil.com'
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
      title: 'Crafting Digital Solutions For Your Businesses',
      description: 'We build top notch apps to take your business to the next level',
      linkText: 'See Our Work'
    },
    2: {
      id: 2,
      title: 'Custom Development',
      description: 'Custom made solutions designed for your business. We have technical expertise in multiple programming languages and frameworks to build great products',
      linkText: 'Get a Proposal'
    },
    3: {
      id: 3,
      title: 'Mobile Apps',
      description: 'Getting your dream app on the market will not be hard. We create mobile apps for iOS and Android, also responsive websites for all mobile devices',
      linkText: 'Get a Quote'
    },
    4: {
      id: 4,
      title: "Contact Us, It's Easy!",
      description: "Share with us what you have in mind and we'll get back to you with a proposal or with a few questions to make things clear",
      linkText: 'Contact Us'
    }
  },
  getAQuote: {
    description: "Drop us a line to discuss what you have in mind, no strings attached."
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
    title: "What We Do",
    items: {
      web: {
        id: 'web',
        title: 'Web Development',
        description: 'Beautiful, fast and secure web applications tailored exclusively for your business goals. We\'ll take care of your application from the backend to the frontend using javascript trends techonlogies such as ReactJS. Depending on the scope of the project, features, time and budget, we individually choose the optimal options for your project.',
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
        description: 'Isn\'t your business not in the world of mobile applications yet? We can take your concept to reality covering all the development process, we build apps on React Native a powerfull library to create Android and iOS native applications. Also, we build web responsive solutions for the mobile world.',
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
export default home;
