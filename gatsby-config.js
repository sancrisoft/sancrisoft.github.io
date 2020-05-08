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
        background_color: '#f28724',
        theme_color: '#f28724',
        display: 'minimal-ui',
        icon: 'src/images/small-logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '2607943319424233',
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-THWPGQ7",
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "sancrisoft site" },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
