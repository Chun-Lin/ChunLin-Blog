import React from "react"
import "./index.scss"
import Layout from "../components/Layout"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab, faTwitter, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons"

let icons = null
icons = [faGithub, faTwitter, faFacebook]

library.add(fab, ...icons)

const Index = () => {
  return (
    <Layout pageStyle="center">
      <h1>Hello,</h1>
      <h1>I'm Gary, a web front-end developer.</h1>
    </Layout>
  )
}

export default Index
