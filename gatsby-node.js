const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    let slug;
    // Creates slug for products
    if (node.fileAbsolutePath.includes('content/products')) {
      // basePath removes products/ from the slug
      slug = createFilePath({ node, getNode, basePath: `products/` });
    }

    if (node.fileAbsolutePath.includes('content/blog')) {
      // basePath removes products/ from the slug
      slug = createFilePath({ node, getNode, basePath: `blog/` });
    }

    if (slug) {
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      });
    }
  }
};

const createProductPages = async ({ graphql, actions }) => {
  const products = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "content/products/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  products.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { createPage } = actions;

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};

const createBlogPosts = async ({ graphql, actions }) => {
  const posts = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "content/blog/" }
          frontmatter: { published: { eq: true } }
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  posts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { createPage } = actions;

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  await createProductPages({ graphql, actions });
  await createBlogPosts({ graphql, actions });
};
