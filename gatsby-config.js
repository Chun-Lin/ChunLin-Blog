/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config()

console.log("LOG: process.env.CONTENTFUL_SPACE_ID", process.env.GATSBY_CONTENTFUL_SPACE_ID)
console.log("LOG: process.env.CONTENTFUL_ACCESS_TOKEN", process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN)

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
    "gatsby-plugin-sass",
  ],
}
