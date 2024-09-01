import React from "react"
import styled from "styled-components"

import { RiMenu2Fill } from "@react-icons/all-files/ri/RiMenu2Fill"

import Logo from "./Logo"
import Search from "./Search"
import Social from "./Social"

const Wrapper = styled.header`
  height: 50px;
  padding: 0 0.625rem;

  color: var(--app-contrast-color);
  background-color: var(--primary-color);

  display: flex;
  align-items: center;
  gap: 10px;

  a {
    color: inherit;
  }
`

const Header = ({
  hasLeftDrawer,
  openLeftDrawer,
  hasRightDrawer,
  openRightDrawer,
}) => {
  return (
    <Wrapper>
      {hasLeftDrawer ? (
        <button
          className="svg-icon"
          onClick={openLeftDrawer}
          aria-label="Open Left Drawer"
        >
          <RiMenu2Fill />
        </button>
      ) : null}

      <Logo />

      <Search />

      <Social />

      {hasRightDrawer ? (
        <button
          className="svg-icon"
          onClick={openRightDrawer}
          aria-label="Open Right Drawer"
        >
          <RiMenu2Fill />
        </button>
      ) : null}
    </Wrapper>
  )
}

export default React.memo(Header)
