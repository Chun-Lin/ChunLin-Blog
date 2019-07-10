import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"

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
            src
            srcSet
            sizes
          }
        }
      }
    }
  }
`

const Blog = props => {
  const { title, publishedDate, body } = props.data.contentfulChunLinBlog
  return (
    <Layout>
      {props.data.allContentfulAsset.edges[0] ? (
        <img src={props.data.allContentfulAsset.edges[0].node.fluid.src} />
      ) : null}
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json)}
      {/* <Img fixed={props.data.allContentfulAsset.edges[0].node.fixed} /> */}
    </Layout>
  )
}

export default Blog
