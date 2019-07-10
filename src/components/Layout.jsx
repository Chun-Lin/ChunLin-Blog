import React from "react"
import BackgroundImage from "gatsby-background-image"

import Header from "./Header"
import layoutStyles from "./Layout.module.scss"
import Footer from "./Footer"

import { Link, graphql, useStaticQuery } from "gatsby"

const Layout = ({ pageStyle, children }) => {
  const imageData = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "background-image.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      Tag="div"
      className={layoutStyles.bgImage}
      fluid={imageData.desktop.childImageSharp.fluid}
      backgroundColor={`#ffffff`}
    >
      <div className={layoutStyles.container}>
        <Header />
        <div
          className={
            pageStyle === "center"
              ? layoutStyles.centerContent
              : layoutStyles.content
          }
        >
          {children}
        </div>
        <Footer />
      </div>
    </BackgroundImage>
  )
}

export default Layout
