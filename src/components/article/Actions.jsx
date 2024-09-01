import React, { useState, useEffect, useCallback } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import { BiArrowToTop } from "@react-icons/all-files/bi/BiArrowToTop"
import { BiLeftArrowAlt } from "@react-icons/all-files/bi/BiLeftArrowAlt"
import { BiFullscreen } from "@react-icons/all-files/bi/BiFullscreen"
import { BiExitFullscreen } from "@react-icons/all-files/bi/BiExitFullscreen"

import { cssSvgIcon } from "../../styled/GlobalStyle"

const Wrapper = styled.aside`
  > ul {
    position: sticky;
    top: 10px;

    list-style-type: none;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;

    > li {
      border-radius: 0.25rem;

      > button {
        ${cssSvgIcon}
        --svg-icon-size: 1.25rem;
        padding: 0.375rem;
        background-color: var(--content-bg);
        box-shadow: 0 1px 0 1px var(--content-box-shadow);
      }
    }
  }
`

const Actions = ({ location }) => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement) setIsFullscreen(true)
      else setIsFullscreen(false)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  const openFullscreen = useCallback(() => {
    const nodePageContent = document.getElementById("page-container")
    if (nodePageContent.requestFullscreen) nodePageContent.requestFullscreen()
    else alert("浏览器不支持全屏")
  }, [])

  const exitFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }, [])

  const toTop = useCallback(() => {
    console.log(document.getElementById("page-container"))
    document.getElementById("page-container")?.scrollTo(0, 0)
  }, [])

  const goBack = useCallback(() => {
    const to = location.pathname.split("/").slice(0, -1).join("/")
    navigate(to)
  }, [location.pathname])

  return (
    <Wrapper>
      <ul>
        <li>
          <button onClick={toTop}>
            <BiArrowToTop />
          </button>
        </li>
        <li>
          <button onClick={goBack}>
            <BiLeftArrowAlt />
          </button>
        </li>
        <li>
          {isFullscreen ? (
            <button onClick={exitFullscreen}>
              <BiExitFullscreen />
            </button>
          ) : (
            <button onClick={openFullscreen}>
              <BiFullscreen />
            </button>
          )}
        </li>
      </ul>
    </Wrapper>
  )
}

export default Actions
