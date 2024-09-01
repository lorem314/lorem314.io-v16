import React from "react"
import styled from "styled-components"

import BookCoverList from "./books/BookCoverList"

const Wrapper = styled.div`
  max-width: 48rem;
  margin: 2rem auto;
`

const PageBooks = ({ bookCovers, bookChapters }) => {
  // const chaptersByIsbn = Object.groupBy(
  //   bookChapters,
  //   (chapter) => chapter.frontmatter.isbn
  // )

  const chaptersByIsbn = ObjectGroupBy(
    bookChapters,
    (chapter) => chapter.frontmatter.isbn
  )

  return (
    <Wrapper className="page-content">
      <h3 className="content-title">书籍</h3>
      <BookCoverList bookCovers={bookCovers} chaptersByIsbn={chaptersByIsbn} />
    </Wrapper>
  )
}

export default PageBooks

const ObjectGroupBy = (array, category) => {
  return array.reduce((obj, element) => {
    const key =
      Object.prototype.toString.call(category) === "[object Function]"
        ? category(element)
        : category
    if (!obj[key]) obj[key] = []
    obj[key].push(element)
    return obj
  }, {})
}
