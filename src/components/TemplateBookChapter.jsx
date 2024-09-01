import React from "react"
import styled from "styled-components"

import Actions from "./article/Actions"
import Body from "./article/Body"
import LinkedToc from "./article/LinkedToc"
import Tags from "./blogs/Tags"
import Header from "./article/Header"

import Drawer from "../ui/Drawer"

import { formateDate } from "../utils/date"

const Wrapper = styled.div`
  margin: 2rem auto;
  max-width: 72rem;

  display: grid;
  grid-template-columns: 2rem minmax(0, auto) minmax(0, 20rem);
  gap: 10px;

  > article {
    grid-column-start: 2;
    grid-column-end: ${({ $hasRightDrawer }) => ($hasRightDrawer ? "4" : "3")};
  }

  > .toc-container {
    > .linked-toc {
      border-radius: 0.25rem;
      background-color: var(--content-bg);
      box-shadow: 0 1px 0 1px var(--content-box-shadow);

      position: sticky;
      top: 10px;
      max-height: calc(100vh - 50px - 2rem - 10px);
    }
  }
`

const TemplateBookChapter = ({
  hasRightDrawer,
  isRightDrawerOpen,
  handleRightDrawer,
  location,
  bookCover,
  bookChapter,
  bookChapters,
  body,
}) => {
  return (
    <Wrapper $hasRightDrawer={hasRightDrawer}>
      {/*  */}

      <Actions location={location} />

      <article>
        <Header>
          <div className="text-align-right">
            <div className="font-bolder">
              第 {bookChapter.frontmatter.chapter} 章
            </div>
            <hr />
            <h1>{bookChapter.frontmatter.title}</h1>
          </div>
        </Header>
        <Body body={body} />
      </article>

      {hasRightDrawer ? (
        <Drawer
          title="目录"
          placement="right"
          isOpen={isRightDrawerOpen}
          onClose={handleRightDrawer.close}
        >
          <LinkedToc rawToc={bookChapter.fields.rawToc} />
        </Drawer>
      ) : (
        <div className="toc-container">
          <LinkedToc rawToc={bookChapter.fields.rawToc} />
        </div>
      )}

      {/*  */}
    </Wrapper>
  )
}

export default TemplateBookChapter
