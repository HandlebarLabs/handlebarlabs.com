import React from "react"
import { graphql } from "gatsby"

const ProductTemplate = ({ data }) => {
  const product  = data.markdownRemark;

  return (
    <div>
      <h1>{product.frontmatter.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: product.html }} />
    </div>
  )
}

export default ProductTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
