import React, { cloneElement, Children } from "react"
import styled, { css } from "styled-components"

import tipImg from "../images/oreilly/tip.png"
import noteImg from "../images/oreilly/note.png"
import warningImg from "../images/oreilly/warning.png"

const scaleAside = 0.2
const cssAside = css`
  margin: 1rem 0;
  padding: 0 1.5rem;

  display: flex;
  gap: 1rem;

  > .image-container {
  }
  > .children-container {
    > p {
      margin: 0;
    }
  }
`

const TipWrapper = styled.aside`
  ${cssAside}
`
// blue
export const Tip = ({ children }) => {
  return (
    <TipWrapper>
      <div className="image-container">
        <img
          width={`${394 * scaleAside}px`}
          height={`${514 * scaleAside}px`}
          src={tipImg}
          alt="提示"
        />
      </div>
      <div className="children-container">{children}</div>
    </TipWrapper>
  )
}

const NoteWrapper = styled.aside`
  ${cssAside}
`
// green
export const Note = ({ children }) => {
  return (
    <NoteWrapper>
      <div className="image-container">
        <img
          width={`${429 * scaleAside}px`}
          height={`${573 * scaleAside}px`}
          src={noteImg}
          alt="提示"
        />
      </div>
      <div className="children-container">{children}</div>
    </NoteWrapper>
  )
}

const WarningWrapper = styled.aside`
  ${cssAside}
`
// red
export const Warning = ({ children }) => {
  return (
    <WarningWrapper>
      <div className="image-container">
        <img
          width={`${503 * scaleAside}px`}
          height={`${479 * scaleAside}px`}
          src={warningImg}
          alt="提示"
        />
      </div>
      <div className="children-container">{children}</div>
    </WarningWrapper>
  )
}

const BorderBoxWrapper = styled.div`
  padding: 1rem 0.5rem;
  border: 1px solid var(--content-color-3);

  > .border-box-title {
    text-align: center;
    font-weight: bolder;
    font-size: 1.125rem;
  }
`
export const BorderBox = ({ title, children }) => {
  return (
    <BorderBoxWrapper>
      {title ? <div className="border-box-title">{title}</div> : null}
      <div className="children-container">{children}</div>
    </BorderBoxWrapper>
  )
}
