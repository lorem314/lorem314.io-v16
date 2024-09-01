import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import TemplateBlog from "../components/TemplateBlog"

const Blog = ({ location, data, children }) => {
  const blog = data.blog
  const { title } = blog.frontmatter
  return (
    <>
      <title>{title} | 博客 | Lorem314's Blog</title>
      <Layout location={location}>
        <TemplateBlog location={location} blog={blog} body={children} />
      </Layout>
    </>
  )
}

export default Blog

export const query = graphql`
  query ($id: String) {
    blog: mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        tags
        createdAt
      }
      fields {
        slug
        type
        rawToc
      }
      body
    }
  }
`
