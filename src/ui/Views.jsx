import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import styled from "styled-components"

import { isArray } from "../utils/dom"

const resizerSize = 10 // in pixel

const Wrapper = styled.div.attrs({
  className: "views",
})`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: ${({ $direction }) => $direction};
`

const Views = ({
  direction = "row", // column
  views = null,
  children = null,
}) => {
  const childArray = views || React.Children.toArray(children)
  const childArrayLength = childArray.length

  const ref = useRef(null)
  const [sizes, setSizes] = useState(
    childArray.map((child) => {
      return child.props.size
    })
  )
  const [currentResizer, setCurrentResizer] = useState({
    index: null,
    rect: null,
  })

  useLayoutEffect(() => {
    const node = ref.current
    const clientSize = getClientSize(node, direction)
    const countUndefined = sizes.filter(
      (size) => typeof size === "undefined"
    ).length
    const avgSize = clientSize / countUndefined
    setSizes(
      sizes.map((size, index) => {
        const props = childArray[index].props
        const nextSize = clamp(
          typeof size === "undefined" ? avgSize : size,
          props.minSize || 0,
          props.maxSize || Number.POSITIVE_INFINITY
        )
        return nextSize
      })
    )
  }, [childArray, direction, sizes])

  // useEffect(() => {
  //   return () => {}
  // }, [views, children])

  const handleMouseMove = (event) => {
    console.log("currentReiszer", currentResizer)
    // const node = ref.current
    // const lastView = childArray[currentResizer.index]
    // const lastViewSize = sizes[currentResizer.index]
    // console.log("lastViewSize", lastViewSize)
  }
  const handleMouseUp = () => {
    setCurrentResizer({ index: null, rect: null })
    document.body.style.userSelect = "auto"
    window.removeEventListener("mousemove", handleMouseMove)
    window.removeEventListener("mouseup", handleMouseUp)
  }
  const handleMouseDown = (index) => (event) => {
    // console.log("mouse down on", event.target.getBoundingClientRect())
    const rect = event.target.getBoundingClientRect()
    console.log("index", index)
    setCurrentResizer({ index, rect })
    document.body.style.userSelect = "none"
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  }

  return (
    <Wrapper ref={ref} $direction={direction}>
      {childArray.map((child, index) => {
        // console.log("[views] map child", child)
        const sizeProp = getSizeProp(direction) // width or height
        const minSizeProp = `min${capitalize(sizeProp)}`
        const maxSizeProp = `max${capitalize(sizeProp)}`

        return (
          <React.Fragment key={child.key}>
            <div
              className="view"
              style={{
                [sizeProp]: `${sizes[index]}px`,
                [minSizeProp]: `${child.props.minSize}px`,
                [maxSizeProp]: `${child.props.maxSize}px`,
              }}
            >
              {child}
            </div>
            {index === childArrayLength - 1 ? null : (
              <Resizer
                index={index}
                direction={direction}
                onMouseDown={handleMouseDown(index)}
              />
            )}
          </React.Fragment>
        )
      })}
    </Wrapper>
  )
}

export default Views

export const View = ({
  minSize = 0,
  maxSize = Number.POSITIVE_INFINITY,
  element = null,
  children = null,
}) => {
  const child = element || (isArray(children) ? children[0] : children)
  return child
}

const Resizer = ({ index, direction, onMouseDown }) => {
  // const sizeProp = `min${capitalize(getSizeProp(direction))}`
  return (
    <div
      className={`resizer-${index}`}
      style={{
        backgroundColor: "lightyellow",
        flex: "0 0 10px",
        cursor: direction === "column" ? "row-resize" : "col-resize",
      }}
      onMouseDown={onMouseDown}
    >
      <div></div>
    </div>
  )
}

const getSizeProp = (direction) => {
  return direction === "column" ? "height" : "width"
}
// row -> width, column -> height

const capitalize = (str) => {
  const [first, ...rest] = str.split("")
  return [first.toUpperCase(), ...rest].join("")
}

const getClientSize = (node, direction) => {
  const sizeProp = getSizeProp(direction)
  return node[`client${capitalize(sizeProp)}`]
}

const clamp = (value, min, max) => {
  return value < min ? min : value > max ? max : value
}
