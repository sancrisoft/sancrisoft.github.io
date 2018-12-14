const home = require('./src/data/home.json');
const aboutUs = require('./src/data/about-us.json');
const careers = require('./src/data/careers.json');
const caseStudies = require('./src/data/case-studies.json');
const getQuote = require('./src/data/get-quote.json');

module.exports = {
  siteMetadata: {
    title: 'Sancrisoft',
    description: 'Crafting digital solutions for your businesses',
    author: '@sancrisoft',
    home: home,
    aboutUs: aboutUs,
    careers: careers,
    caseStudies: caseStudies,
    getQuote: getQuote,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
