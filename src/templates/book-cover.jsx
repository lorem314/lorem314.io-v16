import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import TemplateBookCover from "../components/TemplateBookCover"

const BookCover = ({ data, location }) => {
  const bookCover = data.bookCover
  const bookChapters = data.bookChapters.nodes

  // console.log("bookCover", bookCover)
  // console.log("bookChapters", bookChapters)
  return (
    <Layout>
      <TemplateBookCover bookCover={bookCover} bookChapters={bookChapters} />
    </Layout>
  )
}

export default BookCover

export const query = graphql`
  query ($id: String, $isbn: String) {
    bookCover: mdx(id: { eq: $id }) {
      id
      frontmatter {
        isbn
        title
        subtitle
        cover {
          childImageSharp {
            gatsbyImageData(width: 250, placeholder: BLURRED)
          }
        }
      }
    }

    bookChapters: allMdx(
      filter: {
        frontmatter: { isbn: { eq: $isbn } }
        fields: { type: { eq: "TYPE_BOOK_CHAPTER" } }
      }
      sort: { frontmatter: { chapter: ASC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          chapter
          isbn
        }
        fields {
          slug
          rawToc
        }
      }
    }
  }
`
