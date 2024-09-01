import React, { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"

import { RiCloseFill } from "@react-icons/all-files/ri/RiCloseFill"

import Logo from "../layouts/Logo"
import Overlay from "../styled/Overlay"
import { getCssVar } from "../utils/dom"
import { cssSvgIcon } from "../styled/GlobalStyle"

const Drawer = ({
  isOpen = false,
  placement = "left",
  title = "",
  size = 360,
  onClose,
  children,
}) => {
  return isOpen ? (
    <Portal placement={placement} size={size} onClose={onClose} title={title}>
      {children}
    </Portal>
  ) : null
}

export default Drawer

const Wrapper = styled.aside`
  overflow: auto;
  position: absolute;
  transition: transform 150ms ease-in-out;

  background-color: var(--content-bg);

  display: flex;
  flex-direction: column;

  > header {
    flex: 0 0 50px;
    padding: 0 10px;

    display: flex;
    flex-direction: ${({ $placement }) =>
      $placement === "right" ? "row-reverse" : "row"};
    justify-content: ${({ $placement }) =>
      $placement === "right" ? "space-between" : "flex-start"};
    align-items: center;
    gap: 10px;

    color: var(--app-contrast-color);
    background-color: var(--primary-color);

    > button.drawer-closer {
      ${cssSvgIcon}
    }

    > .drawer-title {
      font-size: 1.125rem;
      margin: 0;
    }
  }
`

const Portal = ({ placement, size, onClose, children, title }) => {
  const ref = useRef(null)
  const [styles, setStyles] = useState({
    opacity: 0,
    transform: getTransformStartProp(placement),
  })

  useEffect(() => {
    const transform = "translate(0, 0)"
    setStyles((prevStyles) => ({ ...prevStyles, opacity: 1, transform }))
  }, [])

  const handleCloseDrawer = () => {
    Promise.resolve()
      .then(() => {
        return new Promise((resolve) => {
          const transform = getTransformStartProp(placement)
          setStyles({ opacity: 0, transform })
          const duration = parseInt(
            getCssVar("transition-animation-duration") || 0
          )
          setTimeout(() => resolve(), duration)
        })
      })
      .then(() => onClose())
  }

  const { transform } = styles
  const positionProps = getPositionProps(placement, size)

  return createPortal(
    <>
      <Overlay opacity={styles.opacity} onClose={handleCloseDrawer} />
      <Wrapper
        ref={ref}
        style={{ ...positionProps, transform }}
        $placement={placement}
      >
        <header>
          <button className="drawer-closer" onClick={handleCloseDrawer}>
            <RiCloseFill />
          </button>
          {title ? <h1 className="drawer-title">{title}</h1> : <Logo />}
        </header>
        {children}
      </Wrapper>
    </>,
    document.body
  )
}

function getPositionProps(placement, size) {
  // console.log("[getPositionProps] placement", placement)
  // console.log("[getPositionProps] size", size)
  switch (placement) {
    case "top":
    case "bottom":
      return { left: 0, right: 0, [placement]: 0, height: size }
    case "left":
    case "right":
      return { top: 0, bottom: 0, [placement]: 0, width: size }
    default:
      return { top: 0, bottom: 0, left: 0, width: size }
  }
}

function getTransformStartProp(placement) {
  console.log("[getTransformStartProp] placement", placement)
  switch (placement) {
    case "top":
      return "translate(0, -100%)"
    case "right":
      return "translate(100%, 0)"
    case "bottom":
      return "translate(0, 100%)"
    case "left":
      return "translate(-100%, 0)"
    default:
      return "translate(-100%, 0)"
  }
}
