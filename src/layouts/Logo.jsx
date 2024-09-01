import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.h1`
  margin: 0;
  font-size: 1.125rem;

  display: flex;
  align-items: center;

  > .home-link {
    color: var(--app-contrast-color);
    text-decoration: none;
    /* opacity: 0.875; */

    &:hover {
      /* opacity: 1; */
    }
  }
`

const Logo = () => {
  return (
    <Wrapper>
      <Link className="home-link" to="/">
        lorem314.io
      </Link>
    </Wrapper>
  )
}

export default Logo
