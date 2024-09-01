import React from "react"
import styled from "styled-components"

import BlogItem from "./BlogItem"

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const BlogList = ({ blogs = [] }) => {
  return (
    <Wrapper>
      {blogs.map((blog) => {
        return (
          <li key={blog.id}>
            <BlogItem blog={blog} />
          </li>
        )
      })}
    </Wrapper>
  )
}

export default React.memo(BlogList)
