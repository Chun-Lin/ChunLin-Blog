import React from "react"
import "./index.scss"
import Layout from "../components/Layout"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  fab,
  faTwitter,
  faGithub,
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons"
import { Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
// import layoutStyles from "./Layout.module.scss"

let icons = null
icons = [faGithub, faTwitter, faFacebook, faLinkedin]

library.add(fab, ...icons)

const Index = () => {
  const imageData = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "background-image.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      Tag="div"
      className="bg-image"
      fluid={imageData.desktop.childImageSharp.fluid}
      backgroundColor={`#ffffff`}
    >
      <Layout contentStyle="gold">
        <h1>Hello,</h1>
        <h1>I'm Gary, a web front-end developer.</h1>
      </Layout>
    </BackgroundImage>
  )
}

export default Index
