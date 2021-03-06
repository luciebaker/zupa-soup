module.exports = {
  siteMetadata: {
    title: `Alex Calaway`,
    description: `Thinker. Writer. Author.`,
    author: `@lucieb`,
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://alexcalaway.us17.list-manage.com/subscribe/post?u=7cae720d642b36b14e1b3d0ad&amp;id=3d5b666657',
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Anton`,
          },
          {
            family: `Cookie`,
          },
          {
            family: `Cabin`,
            variants: [`400`, `500`]
          },
        ]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/alex-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
