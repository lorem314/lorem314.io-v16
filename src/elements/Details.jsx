import React, { forwardRef, useImperativeHandle, useState } from "react"
import styled from "styled-components"

import { VscChevronDown } from "@react-icons/all-files/vsc/VscChevronDown"
import { VscChevronRight } from "@react-icons/all-files/vsc/VscChevronRight"

const Wrapper = styled.details.attrs({
  className: "details",
})`
  > summary {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    user-select: none;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }

    &:hover {
      /* background-color: rgba(0, 0, 0, 0.1); */
      background-color: var(--ba-50);
    }

    > .details-button {
      flex: 0 0 auto;
      --svg-icon-size: 1.125rem;
      width: 24px;
      height: 24px;
      padding: 0;
      border: none;
      background-color: transparent;
      align-items: center;
      color: var(--content-color-1);
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }
  }
`

const Details = forwardRef((props, ref) => {
  const { children, isOpen: _isOpen } = props
  const [isOpen, setIsOpen] = useState(_isOpen === undefined ? true : _isOpen)

  const open = (event) => {
    event?.preventDefault()
    setIsOpen(true)
  }
  const close = (event) => {
    event?.preventDefault()
    setIsOpen(false)
  }

  useImperativeHandle(ref, () => ({ open, close }), [])

  return (
    <Wrapper open={isOpen}>
      <summary onClick={isOpen ? close : open}>
        <button
          className="details-button"
          tabIndex={-1}
          onClick={isOpen ? close : open}
        >
          {isOpen ? <VscChevronDown /> : <VscChevronRight />}
        </button>
        {React.cloneElement(children[0], {})}
      </summary>
      {children[1]}
    </Wrapper>
  )
})

export default Details

export const DetailsHead = styled.div`
  flex-grow: 1;
  position: relative;
  line-height: 1.5;

  display: flex;
  align-items: flex-start;

  &::before {
    content: " ";
    height: calc(100% - 24px);
    position: absolute;
    top: 24px;
    left: calc(-0.75em - 1px);
    border-left: 1px var(--border-style) var(--border-color);
  }

  > .title-container {
    flex-grow: 1;
  }

  > button {
    flex: 0 0 auto;
    --svg-icon-size: 1.125rem;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    background-color: transparent;
    align-items: center;
    color: var(--content-color-1);
    opacity: 0;
  }
  &:hover {
    > button {
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
  }
`
