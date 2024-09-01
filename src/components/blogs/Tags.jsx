import React from "react"
import styled from "styled-components"

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  gap: 10px;

  > li {
    line-height: 1.25;

    border: 1px solid var(--content-color-3);
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
  }
`

const Tags = ({ tags = [] }) => {
  return (
    <Wrapper>
      {tags.map((tag, index) => {
        return <li key={index}>{tag}</li>
      })}
    </Wrapper>
  )
}

export default Tags
