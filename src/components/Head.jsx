import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title, metaName, metaContent }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name={metaName} content={metaContent} />
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
    </Helmet>
  )
}

export default Head
