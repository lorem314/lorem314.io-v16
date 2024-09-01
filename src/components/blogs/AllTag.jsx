import React from "react"
import styled from "styled-components"

import { clsx } from "../../utils/css"

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;

  > li {
    line-height: 1.25;
    display: flex;

    > button.tag {
      cursor: pointer;
      user-select: none;
      gap: 0.25rem;

      border: 1px solid currentColor;
      border-radius: 0.25rem;
      padding: 0.25rem 0.5rem;
      font-size: 87.5%;
      font-family: "Fira Code";

      color: var(--ui-tag-color);
      background-color: transparent;
      &:hover {
        background-color: var(--ui-tag-bg-hover);
      }
      &:active {
        background-color: var(--ui-tag-bg-active);
      }

      &.selected {
        color: var(--ui-selected-tag-color);
        background-color: var(--ui-selected-tag-bg);
        &:hover {
          background-color: var(--ui-selected-tag-bg-hover);
        }
        &:active {
          background-color: var(--ui-selected-tag-bg-active);
        }
      }

      > .tag-name {
      }
      > .tag-count {
        font-weight: bolder;
      }
    }
  }
`

const AllTag = ({ allTag = [], selectedTags, onSelectTag }) => {
  return (
    <Wrapper>
      {allTag.map((tag, index) => {
        const id = `tag-${tag.name}`
        const checked = selectedTags.includes(tag)
        return (
          <li key={index}>
            <button
              className={clsx({ selected: checked, tag: true })}
              onClick={onSelectTag(tag)}
            >
              <span className="tag-name">{tag.name}</span>
              <span className="tag-count"> ({tag.count})</span>
            </button>
          </li>
        )
      })}
    </Wrapper>
  )
}

export default AllTag
