/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        publishedDate(formatString: "MMMM Do, YYYY")
      }
      html
    }
  }
`

const Blog = props => {
  if (props.data.markdownRemarks !== null) {
    return (
      <Layout>
        <Head title={props.data.markdownRemark.frontmatter.title} />
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.publishedDate}</p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
      </Layout>
    )
  }
}

export default Blog
