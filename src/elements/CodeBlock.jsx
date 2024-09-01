import React from "react"
import styled from "styled-components"
import { Highlight } from "prism-react-renderer"

import { FaCopy } from "@react-icons/all-files/fa/FaCopy"
import { clsx } from "../utils/css"

const Wrapper = styled.div`
  margin: 1rem 0;
  position: relative;
  border-radius: 0.5rem;

  > .code-block-header {
    padding: 10px;
    border-radius: 0.5rem 0.5rem 0 0;
    font-family: "Fira Code";

    & + .pre-container {
      border-radius: 0 0 0.5rem 0.5rem;
    }
  }

  > .pre-container {
    overflow: auto;
    border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;

    > pre {
      padding: 10px 0;
      margin: 0;
      float: left;
      min-width: 100%;
      font-family: "Fira Code";

      > .line {
        width: 100%;
        position: relative;
        padding-left: ${({ $hasLineNumber }) =>
          $hasLineNumber ? "0" : "1rem"};

        > .line-number {
          display: inline-block;
          width: 3rem;
          padding-right: 1rem;
          text-align: right;
          user-select: none;
        }
      }
    }
  }
`

const CodeBlock = (props) => {
  const { id, title, hasLineNumber = true } = props
  const className = props.children.props.children.props.className || "text"
  const code = props.children.props.children.props.children.trim()
  const language = className.replace(/language-/, "")

  return (
    <Wrapper
      id={id ? `代码${id}` : null}
      className="mdx-code-block"
      $hasLineNumber={hasLineNumber}
    >
      {title ? (
        <header className="code-block-header">
          <div className="code-block-title">
            代码 {id ? id : null} {title}
          </div>
        </header>
      ) : null}
      <div className="pre-container">
        <Highlight code={code} language={language}>
          {({ className, tokens, getTokenProps }) => {
            return (
              <Pre
                className={className}
                tokens={tokens}
                getTokenProps={getTokenProps}
                hasLineNumber={hasLineNumber}
              />
            )
          }}
        </Highlight>
      </div>
    </Wrapper>
  )
}

export default CodeBlock

const Pre = ({ className, tokens, getTokenProps, hasLineNumber }) => {
  return (
    <pre className={`${className} code-block-pre`}>
      <Tokens
        tokens={tokens}
        getTokenProps={getTokenProps}
        hasLineNumber={hasLineNumber}
      />
    </pre>
  )
}

const Tokens = ({ tokens, getTokenProps, hasLineNumber }) => {
  const highlight = { nextLine: false, started: false }
  let lineNumber = 0

  return tokens.map((line, i) => {
    if (isHighlightNextLine(line)) {
      highlight.nextLine = true
      return null
    } else if (isHighlightStart(line)) {
      highlight.started = true
      return null
    } else if (isHighlightEnd(line)) {
      highlight.started = false
      return null
    }
    lineNumber++
    const isHighlight = highlight.started || highlight.nextLine

    if (highlight.nextLine) highlight.nextLine = false

    return (
      <div className={clsx({ line: true, highlight: isHighlight })} key={i}>
        {hasLineNumber ? (
          <span className="line-number">{lineNumber}</span>
        ) : null}
        {line.map((token, key) => {
          // not use the default style color
          return <span {...getTokenProps({ token, key })} style={{}} />
        })}
      </div>
    )
  })
}

// helper functions

const isHighlightNextLine = (line) =>
  (Object.prototype.toString.call(line) === "[object Array]" &&
    line.length === 3 &&
    line[1].types.includes("comment") &&
    line[1].content === "// highlight-next-line") ||
  (Object.prototype.toString.call(line) === "[object Array]" &&
    line.length === 5 &&
    line[2].types.includes("comment") &&
    line[2].content === "/* highlight-next-line */")

const isHighlightStart = (line) =>
  (Object.prototype.toString.call(line) === "[object Array]" &&
    line.length === 3 &&
    line[1].types.includes("comment") &&
    line[1].content === "// highlight-start") ||
  (Object.prototype.toString.call(line) === "[object Array]" &&
    line.length === 5 &&
    line[2].types.includes("comment") &&
    line[2].content === "/* highlight-start */")

const isHighlightEnd = (line) =>
  (Object.prototype.toString.call(line) === "[object Array]" &&
    line.length === 3 &&
    line[1].types.includes("comment") &&
    line[1].content === "// highlight-end") ||
  (Object.prototype.toString.call(line) === "[object Array]" &&
    line.length === 5 &&
    line[2].types.includes("comment") &&
    line[2].content === "/* highlight-end */")
