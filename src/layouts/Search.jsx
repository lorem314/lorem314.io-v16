import React from "react"
import styled from "styled-components"

import { IoMdSearch } from "@react-icons/all-files/io/IoMdSearch"

import { cssSvgIcon } from "../styled/GlobalStyle"

const Wrapper = styled.div`
  flex: 1 0 auto;

  display: flex;
  justify-content: center;

  > .search-button {
    ${cssSvgIcon}
    --svg-icon-size: 16px;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;

    flex: 0 1 32rem;
    font-size: smaller;

    display: flex;
    align-items: center;

    > .search-text {
      padding: 0 0.25rem;
      flex-grow: 1;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media screen and (max-width: 640px) {
    justify-content: flex-end;
    > .search-button {
      ${cssSvgIcon}

      flex: 0 0 auto;

      > .search-text {
        display: none;
      }
    }
  }
`

const Search = () => {
  return (
    <Wrapper>
      <button className="search-button">
        <IoMdSearch />
        <span className="search-text">
          <span className="search-label">搜索</span>
          <span className="search-kbds">
            <kbd>Ctrl</kbd>
            <kbd>K</kbd>
          </span>
        </span>
      </button>
    </Wrapper>
  )
}

export default Search
