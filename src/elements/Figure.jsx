import React from "react"
import styled from "styled-components"

import { wrapSpaceAroundEn } from "../utils/formate"

const Wrapper = styled.figure`
  margin: 1rem 0;
  padding: 0 1rem;

  > .children-container {
    border: 1px solid currentColor;
    padding: 0.5rem;
  }
  > figcaption {
    margin: 0.25rem 0;
  }
`

const Figure = ({ id, title, children }) => {
  return (
    <Wrapper id={id ? `图片${id}` : null}>
      <div className="children-container">{children}</div>
      {title ? (
        <figcaption>
          图片 {id ? id : null} {wrapSpaceAroundEn(title)}
        </figcaption>
      ) : null}
    </Wrapper>
  )
}

export default Figure
