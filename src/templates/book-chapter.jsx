import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import TemplateBookChapter from "../components/TemplateBookChapter"

const BookChapter = ({ data, location, children }) => {
  const bookCover = data.bookCover
  const bookChapter = data.bookChapter
  const bookChapters = data.bookChapters.nodes
  const { title, chapter } = bookChapter.frontmatter

  console.log("data", data)
  return (
    <Layout location={location}>
      <TemplateBookChapter
        location={location}
        bookCover={bookCover}
        bookChapter={bookChapter}
        bookChapters={bookChapters}
        body={children}
      />
    </Layout>
  )
}

export default BookChapter

export const query = graphql`
  query ($id: String, $isbn: String) {
    bookCover: mdx(
      frontmatter: { isbn: { eq: $isbn } }
      fields: { type: { eq: "TYPE_BOOK_COVER" } }
    ) {
      frontmatter {
        title
      }
    }

    bookChapter: mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        isbn
        chapter
      }
      tableOfContents
      fields {
        rawToc
      }
    }

    bookChapters: allMdx(
      filter: {
        fields: { type: { eq: "TYPE_BOOK_CHAPTER" } }
        frontmatter: { isbn: { eq: $isbn } }
      }
      sort: { frontmatter: { chapter: ASC } }
    ) {
      nodes {
        frontmatter {
          title
          chapter
          isbn
        }
        fields {
          slug
        }
      }
    }
  }
`
