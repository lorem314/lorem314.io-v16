import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Tags from "./Tags"
import { getTimeAgo } from "../../utils/date"
import { wrapSpaceAroundEn } from "../../utils/formate"

const Wrapper = styled.article`
  > header {
    > .blog-title {
      font-size: 1.125rem;
      margin: 0;
    }
    > .blog-created-at {
      font-size: smaller;
      color: var(--content-color-2);
      margin: 0.25rem 0 0.5rem;
    }
  }
`

const BlogItem = ({ blog }) => {
  return (
    <Wrapper>
      <header>
        <h4 className="blog-title">
          <Link to={blog.fields.slug}>
            {wrapSpaceAroundEn(blog.frontmatter.title)}
          </Link>
        </h4>
        <div className="blog-created-at">
          发布于 {getTimeAgo(blog.frontmatter.createdAt)} 前
        </div>
      </header>
      <Tags tags={blog.frontmatter.tags} />
    </Wrapper>
  )
}

export default BlogItem
