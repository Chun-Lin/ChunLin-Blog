const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.jsx")
  const res = await graphql(`
    query {
      allContentfulChunLinBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulChunLinBlog.edges.forEach(edge => {
    const { slug } = edge.node
    createPage({
      component: blogTemplate,
      path: `blog/${slug}`,
      context: {
        slug: slug,
      },
    })
  })
}
