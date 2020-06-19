module.exports = {
  siteMetadata: {
    title: `Need a Bouncer`,
    description: `Security services, training, careers and more.`,
    author: `@kylorobs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
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
        name: `Need A Bouncer`,
        short_name: `Need A Bouncer`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicons/android-chrome-512x512.png`, // This path is relative to the root of the site.
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
        repositoryName: 'needabouncer',
        previews: true, 
        path: '/preview',
        pages: [{
          type: 'Page',          // Custom type of the document
          match: '/:uid',   // Pages will be generated in this pattern
          path: '/page-preview', // Placeholder route for previews
          component: require.resolve('./src/templates/page.js') // Template file
        }]
      }
    }   
  ],
}
