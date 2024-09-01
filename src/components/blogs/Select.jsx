import React, { useId, useRef, useEffect, useState, useCallback } from "react"
import styled from "styled-components"

import { RiCloseFill } from "@react-icons/all-files/ri/RiCloseFill"
import { FaCaretDown } from "@react-icons/all-files/fa/FaCaretDown"
import { GiLogicGateAnd } from "@react-icons/all-files/gi/GiLogicGateAnd"
import { GiLogicGateOr } from "@react-icons/all-files/gi/GiLogicGateOr"

import { clsx } from "../../utils/css"

const Wrapper = styled.div`
  position: relative;

  > label {
    &:hover {
      & + * {
        border-color: var(--content-color-2);
      }
    }
  }

  > .select-input-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    border: 1px solid var(--content-color-3);
    border-radius: 0.25rem;

    &:focus-within {
      border: 1px solid var(--ui-input-focus-border-color);
      box-shadow: var(--ui-input-focus-border-color) 0 0 0 1px;
    }

    > .selected-tags {
      list-style-type: none;
      margin: 0;
      padding: 0;

      flex: 0 0 auto;
      max-width: 180px;
      overflow: hidden;

      padding-left: 4px;

      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    > input.select-input {
      height: calc(2.5rem - 2px);
      border: none;

      &:focus {
        border: none;
        outline: none;
        box-shadow: none;
      }
    }

    > .actions {
      padding-right: 0.25rem;
      display: flex;

      > button {
        --svg-icon-size: 18px;
        border: none;
        padding: 0.25rem;
        background-color: transparent;
        color: var(--content-color-3);

        &:hover {
          color: var(--content-color-2);
        }
        &:active {
          color: var(--content-color-1);
        }
      }
    }
  }

  ul.options {
    list-style: none;
    box-sizing: content-box;
    overflow: auto;
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};

    width: 100%;
    max-height: calc(4 * 2rem);
    margin: 0;
    border: 1px solid var(--content-color-3);
    border-radius: 0.25rem;
    padding: 0;
    background-color: var(--content-bg);

    position: absolute;
    top: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);

    > li {
      cursor: pointer;
      padding: 0 10px;
      height: 2rem;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    > li.hovered {
      background-color: var(--ui-tag-bg-active);
    }
    > li.selected {
      color: var(--ui-selected-tag-color);
      background-color: var(--ui-selected-tag-bg);
    }
  }
`

const Select = ({
  selectedTags,
  onSelectTag,
  clearSelectedTags,
  options,
  toggleFilterLogic,
  isOrLogic,
}) => {
  const id = useId()
  const refSelectedTags = useRef(null)
  const refTagInput = useRef(null)
  const refOptions = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  const toggleIsOpen = useCallback((event) => {
    event.stopPropagation()
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }, [])

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false)
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const handleSelectTag = useCallback(
    (tag) => (event) => {
      event.stopPropagation()
      if (!event.shiftKey) setIsOpen(false)
      // setTerm("")
      onSelectTag(tag)(event)
    },
    [onSelectTag]
  )

  // tag input listens to key press
  useEffect(() => {
    const nodeTagInput = refTagInput.current
    const handleKeyDown = (event) => {
      if (event.target !== nodeTagInput) return
      switch (event.code) {
        case "Escape":
          // clearSelectedTags()
          setIsOpen(false)
          break
        case "Enter":
        case "NumpadEnter":
        case "Space":
          event.preventDefault()
          console.log("Enter")
          if (!isOpen) {
            setIsOpen(true)
          } else {
            if (hoveredIndex !== -1) {
              handleSelectTag(options[hoveredIndex])(event)
              // handleSelectTag(filteredOptions[hoveredIndex])(event)
            }
            setIsOpen(false)
          }
          // if (!event.shiftKey) setIsOpen(false)
          break
        case "ArrowUp":
        case "ArrowDown":
          event.preventDefault()
          if (!isOpen) {
            setIsOpen(true)
            break
          }
          if (hoveredIndex === -1) {
            setHoveredIndex(() => 0)
          }
          const indexOffset = event.code === "ArrowDown" ? 1 : -1
          const newHoveredIndex = hoveredIndex + indexOffset
          if (newHoveredIndex >= 0 && newHoveredIndex < options.length) {
            setHoveredIndex(newHoveredIndex)
            const nodeOptions = refOptions.current
            event.target.parentNode.parentNode.querySelector("ul.options")
            const nodeNextHoveredLi = nodeOptions.querySelector(
              `li:nth-of-type(${newHoveredIndex + 1})`
            )
            switch (event.code) {
              case "ArrowUp":
                if (nodeNextHoveredLi.offsetTop < nodeOptions.scrollTop) {
                  nodeOptions.scrollTop = nodeNextHoveredLi.offsetTop
                }
                break
              case "ArrowDown":
                if (
                  nodeNextHoveredLi.offsetTop + nodeNextHoveredLi.offsetHeight >
                  nodeOptions.scrollTop + nodeOptions.clientHeight
                ) {
                  nodeOptions.scrollTop =
                    (newHoveredIndex - 3) * nodeNextHoveredLi.offsetHeight
                }
                break
              default:
                return
            }
          }
          return
        default:
          return
      }
    }
    nodeTagInput?.addEventListener("keydown", handleKeyDown)
    return () => {
      nodeTagInput?.removeEventListener("keydown", handleKeyDown)
    }
  }, [
    isOpen,
    hoveredIndex,
    options,
    selectedTags,
    onSelectTag,
    clearSelectedTags,
    handleSelectTag,
  ])

  // option, options event
  const handleMouseEnterOption = useCallback(
    (index) => () => setHoveredIndex(index),
    []
  )
  const handleMouseLeaveOptions = useCallback(() => setHoveredIndex(-1), [])

  return (
    <Wrapper $isOpen={isOpen}>
      <label className="content-title" htmlFor={id}>
        标签
      </label>

      <div className="select-input-group">
        {selectedTags.length !== 0 ? (
          <ul className="selected-tags" ref={refSelectedTags}>
            {selectedTags.map((selectedTag) => {
              return (
                <li key={selectedTag.name}>
                  <button onClick={handleSelectTag(selectedTag)}>
                    {selectedTag.name}
                  </button>
                </li>
              )
            })}
          </ul>
        ) : null}

        <input
          id={id}
          className="select-input"
          type="text"
          autoComplete="off"
          ref={refTagInput}
          placeholder="搜索标签..."
        />

        <div className="actions">
          <button aria-label="Clear Selected Tags" onClick={clearSelectedTags}>
            <RiCloseFill />
          </button>

          <button
            title={isOrLogic ? "或筛选" : "与筛选"}
            aria-label="Toggle Filter Logic"
            onClick={toggleFilterLogic}
          >
            {isOrLogic ? <GiLogicGateOr /> : <GiLogicGateAnd />}
          </button>

          <button
            aria-label={isOpen ? "Close Tag Options" : "Open Tag Options"}
            onClick={toggleIsOpen}
          >
            <FaCaretDown />
          </button>
        </div>
      </div>

      <ul
        className="options"
        ref={refOptions}
        onMouseLeave={handleMouseLeaveOptions}
      >
        {options.map((tag, index) => {
          const hovered = index === hoveredIndex
          const selected = selectedTags.includes(tag)
          return (
            <li
              className={clsx({ hovered, selected })}
              key={index}
              onMouseEnter={handleMouseEnterOption(index)}
              onClick={handleSelectTag(tag)}
            >
              <span>{tag.name}</span>
              <span>{tag.count}</span>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

export default React.memo(Select)
