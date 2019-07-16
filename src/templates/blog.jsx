import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import Head from "../components/Head"

export const query = graphql`
  query($slug: String!) {
    contentfulChunLinBlog(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
    allContentfulAsset(filter: { title: { eq: $slug } }) {
      edges {
        node {
          title
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Blog = props => {
  const { title, publishedDate, body } = props.data.contentfulChunLinBlog
  return (
    <Layout contentStyle="grey">
      <Head title={title} metaName={title} metaContent={title} />
      {props.data.allContentfulAsset.edges[0] ? (
        <Img
          fluid={props.data.allContentfulAsset.edges[0].node.fluid}
          alt={title}
        />
      ) : null}
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json)}
    </Layout>
  )
}

export default Blog
