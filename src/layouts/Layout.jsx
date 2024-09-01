import React from "react"
import styled from "styled-components"

import { AiFillTags } from "@react-icons/all-files/ai/AiFillTags"
import { VscListTree } from "@react-icons/all-files/vsc/VscListTree"

import Header from "./Header"
import Nav from "./Nav"

import Drawer from "../ui/Drawer"

import useDrawer from "../hooks/useDrawer"

import GlobalStyle, { sizes, bp } from "../styled/GlobalStyle"

const Wrapper = styled.div`
  > .nav-container {
    position: absolute;
    top: 50px;
    left: 0;
    bottom: 0;
    width: ${({ $leftDrawerWidth }) => `${$leftDrawerWidth}px`};
  }

  > main {
    color: var(--content-color-1);
    background-color: var(--bg-0);

    position: absolute;
    top: 50px;
    right: 0;
    bottom: 0;
    left: ${({ $hasLeftDrawer, $leftDrawerWidth }) =>
      $hasLeftDrawer ? "0" : `${$leftDrawerWidth}px`};

    overflow: auto;
    scroll-behavior: smooth;

    > .page-container {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      overflow: auto;
      scroll-behavior: smooth;
      padding: 0 10px;

      &::backdrop {
        background-color: var(--bg-0);
      }

      &:fullscreen {
        > * {
          max-width: 100%;
        }
      }
    }
  }
`

const Layout = ({ children, location }) => {
  const isLeftDrawerAlwaysCollapsed = false
  const isRightDrawerAlwaysCollapsed = false

  const {
    isCollapsed: isLeftDrawerCollapsed,
    isOpen: isLeftDrawerOpen,
    handler: handleLeftDrawer,
  } = useDrawer({
    isAlwaysCollapsed: isLeftDrawerAlwaysCollapsed,
    breakPoint: bp.desktop,
  })

  const [bpRightDrawer, RightDrawerIcon] = getRightDrawerConfig(location)
  const {
    isCollapsed: isRightDrawerCollapsed,
    isOpen: isRightDrawerOpen,
    handler: handleRightDrawer,
  } = useDrawer({
    isAlwaysCollapsed: isRightDrawerAlwaysCollapsed,
    breakPoint: bpRightDrawer,
  })

  const hasLeftDrawer = isLeftDrawerAlwaysCollapsed || isLeftDrawerCollapsed
  const hasRightDrawer =
    (isRightDrawerAlwaysCollapsed || isRightDrawerCollapsed) && RightDrawerIcon

  return (
    <Wrapper
      $hasLeftDrawer={hasLeftDrawer}
      $leftDrawerWidth={sizes.leftDrawerWidth}
    >
      <GlobalStyle />

      <Header
        hasLeftDrawer={hasLeftDrawer}
        openLeftDrawer={handleLeftDrawer.open}
        hasRightDrawer={hasRightDrawer}
        openRightDrawer={handleRightDrawer.open}
      />

      {hasLeftDrawer ? (
        <Drawer
          isOpen={isLeftDrawerOpen}
          size={sizes.leftDrawerWidth}
          onClose={handleLeftDrawer.close}
        >
          <Nav />
        </Drawer>
      ) : (
        <aside className="nav-container">
          <Nav />
        </aside>
      )}

      <main>
        <div id="page-container" className="page-container">
          {React.cloneElement(children, {
            // isRightDrawerAlwaysCollapsed,
            // isRightDrawerCollapsed,
            hasRightDrawer,
            isRightDrawerOpen,
            handleRightDrawer,
          })}
        </div>
      </main>
    </Wrapper>
  )
}

export default Layout

const getRightDrawerConfig = (location) => {
  const pathname = location?.pathname
  if (!pathname) return [0, null]

  if (new RegExp("^/blogs$").test(pathname)) {
    return [bp.laptop, AiFillTags]
  } else if (new RegExp("^/blogs/.*?").test(pathname)) {
    return [bp.laptop, VscListTree]
  } else if (new RegExp("^/books/.*?/.*?").test(pathname)) {
    return [bp.laptop, VscListTree]
  } else {
    return [0, null]
  }
}
