import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

const ContactPage = () => {
  return (
    <Layout contentStyle="gold">
      <Head
        title="Contact"
        metaName="contact"
        metaContent="This is the Chunlin's contact page"
      />
      <h1>Contact</h1>
      <h2>
        You can follow me on{" "}
        <a href="https://twitter.com/wulin40063">Twitter</a>
      </h2>
    </Layout>
  )
}

export default ContactPage
