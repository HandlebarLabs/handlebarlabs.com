const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    // basePath removes products/ from the slug
    const slug = createFilePath({ node, getNode, basePath: `products/` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { createPage } = actions

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
