import React from "react"
import styled from "styled-components"

import BookCoverItem from "./BookCoverItem"

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 1rem 0 0;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
`

const BookCoverList = ({ bookCovers, chaptersByIsbn }) => {
  return (
    <Wrapper>
      {bookCovers.map((bookCover) => {
        const chapters = chaptersByIsbn[bookCover.frontmatter.isbn]
        const sortedChapters = chapters.sort(
          (prev, next) =>
            parseInt(prev.frontmatter.chapter) -
            parseInt(next.frontmatter.chapter)
        )
        console.log("sortedChapters", sortedChapters)
        return (
          <BookCoverItem
            key={bookCover.id}
            bookCover={bookCover}
            chapters={sortedChapters}
          />
        )
      })}
    </Wrapper>
  )
}

export default BookCoverList
