module.exports = {
  siteMetadata: {
    title: `Kylo Robinson Template Website`,
    description: `A template Gatsby JS site built by Kylo Robinsom`,
    author: `@kylorobs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kylo Robinson Template`,
        short_name: `kylo_robinson`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/Typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: 'gatsby-test-kylo',
        previews: true, 
        path: '/preview',
        pages: [{
          type: 'Page',          // Custom type of the document
          match: '/:uid',   // Pages will be generated in this pattern
          path: '/blog-preview', // Placeholder route for previews
          component: require.resolve('./src/templates/page.js') // Template file
        }]
      }
    }   
  ],
}
