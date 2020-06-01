module.exports = {
  siteMetadata: {
    title: `Awake Site`,
    description: `Let's correctly detect sleep disorders.`,
    author: `@michele_leo`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/awake-icon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `ubuntu mono`,
          ],
          display: 'swap'
        }
    },
    {
        resolve: `gatsby-plugin-mailchimp`,
        options: {
            endpoint: "https://gmail.us18.list-manage.com/subscribe/post?u=6bf15e3b21a88c01bf8b05379&amp;id=d6ba68f9fe",
            timeout: 3500
        }
    }
  ],
}
