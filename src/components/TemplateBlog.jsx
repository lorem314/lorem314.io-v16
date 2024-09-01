import React from "react"
import styled from "styled-components"

import Actions from "./article/Actions"
import Body from "./article/Body"
import LinkedToc from "./article/LinkedToc"
import Tags from "./blogs/Tags"
import Header from "./article/Header"

import Drawer from "../ui/Drawer"

import { bp } from "../styled/GlobalStyle"
import { formateDate } from "../utils/date"
import { wrapSpaceAroundEn } from "../utils/formate"

const Wrapper = styled.div`
  max-width: 72rem;
  margin: 2rem auto;

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

const TemplateBlog = ({
  hasRightDrawer,
  isRightDrawerOpen,
  handleRightDrawer,
  location,
  blog,
  body,
}) => {
  return (
    <Wrapper $hasRightDrawer={hasRightDrawer}>
      {/*  */}

      <Actions location={location} />

      <article>
        <Header>
          <h1>{wrapSpaceAroundEn(blog.frontmatter.title)}</h1>
          <Tags tags={blog.frontmatter.tags} />
          <p className="article-created-at">
            发布于{" "}
            <time dateTime={blog.frontmatter.createdAt}>
              {formateDate(blog.frontmatter.createdAt)}
            </time>
          </p>
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
          <LinkedToc rawToc={blog.fields.rawToc} />
        </Drawer>
      ) : (
        <div className="toc-container">
          <LinkedToc rawToc={blog.fields.rawToc} />
        </div>
      )}

      {/*  */}
    </Wrapper>
  )
}

export default TemplateBlog
