import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Wrapper = styled.li`
  display: flex;
  justify-content: center;

  > article {
    > header {
      > .book-cover-title {
        font-size: 1.25rem;
        margin: 0.5rem 0;
      }
    }

    > .book-cover-subtitle {
      text-align: right;
      font-size: 1.125rem;
      margin: 0.5rem 0;
      color: var(--content-color-2);
    }

    > footer {
      margin: 1rem 0;

      > .book-chapter-list {
        padding-left: 1.25rem;

        > li {
          > .chapter-title {
            font-size: 92.5%;
            margin: 0;
          }
        }
      }
    }
  }
`

const BookCoverItem = ({ bookCover, chapters }) => {
  const coverImage = getImage(bookCover.frontmatter.cover)

  return (
    <Wrapper>
      <article>
        <header>
          <GatsbyImage image={coverImage} alt="书籍封面" />
          <h3 className="book-cover-title">
            <Link to={bookCover.fields.slug}>
              {bookCover.frontmatter.title}
            </Link>
          </h3>
        </header>
        <h4 className="book-cover-subtitle">
          {bookCover.frontmatter.subtitle}
        </h4>
        <footer>
          <ul className="book-chapter-list">
            {chapters.map((chapter, index) => {
              return (
                <li key={index}>
                  <h5 className="chapter-title">
                    <Link to={chapter.fields.slug}>
                      第 {chapter.frontmatter.chapter} 章{" "}
                      {chapter.frontmatter.title}
                    </Link>
                  </h5>
                </li>
              )
            })}
          </ul>
        </footer>
      </article>
    </Wrapper>
  )
}

export default BookCoverItem
