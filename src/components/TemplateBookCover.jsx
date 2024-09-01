import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Details, { DetailsHead } from "../elements/Details"

const Wrapper = styled.div`
  max-width: 24rem;
  margin: 2rem auto;

  > article {
    > header {
      > .cover-container {
        margin: 1rem auto 0;
        width: fit-content;
      }
    }

    > .body {
      padding: 0 10px;

      > .book-cover-title {
        font-size: 1.25rem;
        margin: 1rem 0 0.5rem;
      }
      > .book-cover-subtitle {
        /* text-align: right; */
        margin: 0.5rem 0;
        font-size: 1.125rem;
        color: var(--content-color-2);
      }
      > .book-isbn {
        margin: 0.5rem 0;
      }
    }

    > footer {
      padding: 0 10px;
      > ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        > li {
          margin: 0.5rem 0;
          .chapter-title {
            margin: 0;
            font-size: 1rem;
          }
          ul {
            padding-left: 1.625rem;
          }
        }
      }
    }
  }
`

const TemplateBookCover = ({ bookCover, bookChapters }) => {
  const coverImage = getImage(bookCover.frontmatter.cover)

  console.log("bookChapters", bookChapters)
  return (
    <Wrapper className="page-content">
      <h2 className="content-title">{bookCover.frontmatter.title}</h2>

      <article>
        {/*  */}

        <header>
          <div className="cover-container">
            <GatsbyImage image={coverImage} alt="书籍封面" />
          </div>
        </header>

        <section className="body">
          <h3 className="book-cover-title">{bookCover.frontmatter.title}</h3>
          <h4 className="book-cover-subtitle">
            {bookCover.frontmatter.subtitle}
          </h4>
          <p className="book-isbn">ISBN:{bookCover.frontmatter.isbn}</p>
        </section>

        <footer>
          <ul className="chapter-list">
            {bookChapters.map((bookChapter, index) => {
              const parsedToc = JSON.parse(bookChapter.fields.rawToc)
              const { title, chapter } = bookChapter.frontmatter
              return (
                <li className="chapter-item" key={index}>
                  <Details isOpen={false}>
                    <DetailsHead>
                      <h5 className="chapter-title">
                        <Link
                          to={bookChapter.fields.slug}
                          onClick={(event) => event.stopPropagation()}
                        >
                          第 {bookChapter.frontmatter.chapter} 章{" "}
                          {bookChapter.frontmatter.title}
                        </Link>
                      </h5>
                    </DetailsHead>
                    <Items
                      items={parsedToc.items}
                      hrefPrefix={`/books/${bookCover.frontmatter.title}/第${chapter}章`}
                      chapter={chapter}
                    />
                  </Details>
                </li>
              )
            })}
          </ul>
        </footer>

        {/*  */}
      </article>
    </Wrapper>
  )
}

export default TemplateBookCover

const Items = ({ items = [], hrefPrefix = "", chapter }) => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <Item item={item} hrefPrefix={hrefPrefix} chapter={chapter} />
          </li>
        )
      })}
    </ul>
  )
}

const Item = ({ item, hrefPrefix = "", chapter }) => {
  const link = hrefPrefix + "#" + encodeURIComponent(item.title)

  if (!item.items) {
    return <Link to={link}>{item.title}</Link>
  } else {
    return (
      <>
        <Link to={link}>{item.title}</Link>
        <Items items={item.items} hrefPrefix={hrefPrefix} chapter={chapter} />
      </>
    )
  }
}
