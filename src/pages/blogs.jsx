import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import PageBlogs from "../components/PageBlogs"

const Blogs = ({ data, location }) => {
  const allBlog = data?.allBlogPost?.nodes || []

  return (
    <>
      <title>博客 | Lorem314's Blog</title>
      <Layout location={location}>
        <PageBlogs allBlog={allBlog} />
      </Layout>
    </>
  )
}

export default Blogs

export const query = graphql`
  query {
    allBlogPost: allMdx(
      filter: { fields: { type: { eq: "TYPE_BLOG_POST" } } }
      sort: { frontmatter: { createdAt: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          tags
          createdAt
        }
        fields {
          slug
        }
      }
    }
  }
`
