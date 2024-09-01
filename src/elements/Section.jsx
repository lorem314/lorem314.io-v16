import React from "react"
import styled from "styled-components"

import { H2, H3, H4, H5, H6 } from "./headings"
import { wrapSpaceAroundEn } from "../utils/formate"

const h = { H2, H3, H4, H5, H6 }

const Wrapper = styled.section``

const Section = (props) => {
  const { children, title, level = 2 } = props

  const H = h[`H${level < 6 ? level : 6}`]
  const hashtagLink = encodeURIComponent(title)

  return (
    <Wrapper>
      <H className="heading" id={title}>
        <a className="hash-link" href={`#${hashtagLink}`}>
          {wrapSpaceAroundEn(title)}
        </a>
      </H>
      {React.Children.toArray(children).map((child, index) => {
        if (typeof child.type === "function" && child.type.name === "Section") {
          const { props } = child
          const key = `Section-${level}-${index}`
          return <Section {...props} key={key} level={level + 1} />
        } else {
          return child
        }
      })}
    </Wrapper>
  )
}

export default Section
