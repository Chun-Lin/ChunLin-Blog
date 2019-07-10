/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path')

require("dotenv").config()

console.log(
  "LOG: process.env.CONTENTFUL_SPACE_ID",
  process.env.GATSBY_CONTENTFUL_SPACE_ID
)
console.log(
  "LOG: process.env.CONTENTFUL_ACCESS_TOKEN",
  process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "ChunLin's Portfolio",
    author: "ChunLin Wu",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sass",
  ],
}
