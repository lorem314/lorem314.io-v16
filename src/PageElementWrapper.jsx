import React, { cloneElement } from "react"

const PageElementWrapper = ({ element, props }) => {
  return (
    <>
      {/* <div className="page-element-wrapper"> */}
      {cloneElement(element, { ...props })}
      {/* </div> */}
    </>
  )
}

export default PageElementWrapper
