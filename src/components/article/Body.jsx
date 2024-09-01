import React from "react"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"

import P from "../../elements/P"

const components = {
  p: (props) => <P {...props} />,
}

const Wrapper = styled.section.attrs({
  className: "page-content",
})`
  margin-top: 10px;
  padding: 1rem 2rem;

  > section:first-child {
    > h2 {
      margin-top: 1rem;
    }
  }

  a:not([class]) {
    /* color: var(--oreilly-link-color); */
    font-family: "Fira Code";
  }
  blockquote {
    > p {
      padding: 0;
    }
  }
  code {
    font-family: "Fira Code";
    border-radius: 0.25rem;
    padding: 0.125rem 0.25rem;
    color: var(--inline-code-color);
    background-color: var(--inline-code-bg);
  }
  em {
    /* italic */
    margin: 0 0.25rem 0 0.125rem;
  }
  u {
    text-underline-offset: 0.25rem;
  }
  ol,
  ul {
    > li {
      line-height: 1.75;
    }
  }
`

const Body = ({ body }) => {
  return (
    <Wrapper>
      <MDXProvider components={components}>{body}</MDXProvider>
    </Wrapper>
  )
}

export default Body
