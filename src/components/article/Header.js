import styled from "styled-components"

const Header = styled.header.attrs({
  className: "page-content",
})`
  padding: 1rem 2rem;

  h1 {
    margin: 0.5rem 0 1rem;
  }

  .article-created-at {
    color: var(--content-color-2);
  }

  .text-align-right {
    text-align: right;
  }
  .font-bolder {
    font-weight: bolder;
  }
`

export default Header
