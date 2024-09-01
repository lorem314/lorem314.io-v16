import React from "react"
import styled from "styled-components"

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  inset: 0 0 0 0;
  opacity: ${({ $opacity }) => $opacity};
  transition: opacity 200ms ease-in-out;
  backdrop-filter: blur(2px);
`

const Overlay = ({ onClose, opacity }) => {
  return <Backdrop $opacity={opacity} onClick={onClose} />
}

export default Overlay
