import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import PageBooks from "../components/PageBooks"

const Books = ({ data }) => {
  const bookCovers = data.bookCovers.nodes
  const bookChapters = data.bookChapters.nodes

  return (
    <Layout>
      <PageBooks bookCovers={bookCovers} bookChapters={bookChapters} />
    </Layout>
  )
}

export default Books

export const query = graphql`
  query {
    bookCovers: allMdx(
      filter: { fields: { type: { eq: "TYPE_BOOK_COVER" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          subtitle
          isbn
          cover {
            childImageSharp {
              gatsbyImageData(width: 250)
            }
          }
        }
        body
        fields {
          type
          slug
        }
      }
    }

    bookChapters: allMdx(
      filter: { fields: { type: { eq: "TYPE_BOOK_CHAPTER" } } }
    ) {
      nodes {
        frontmatter {
          title
          isbn
          chapter
        }
        fields {
          type
          slug
        }
      }
    }
  }
`
