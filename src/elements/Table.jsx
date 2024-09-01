import React from "react"
import styled from "styled-components"

const Wrapper = styled.table`
  margin: 1.25rem 0;
  border-collapse: collapse;
  font-family: "Fira Code";

  > caption {
    caption-side: top;
    text-align: left;
    margin: 0.25rem 0;
    font-weight: bolder;
    letter-spacing: 1px;
    color: var(--text-color-0);
  }

  > thead {
    color: var(--ui-oreilly-table-thead-color);
    background-color: var(--ui-oreilly-table-thead-bg);
  }

  th,
  td {
    padding: 0.4rem 0.6rem;
  }
`

const Table = ({ id, title, children }) => {
  return (
    <Wrapper id={id ? `表格${id}` : null}>
      {title ? (
        <caption>
          表格 {id ? id : null} {title}
        </caption>
      ) : null}
      {children}
    </Wrapper>
  )
}

export default Table

export const Thead = ({ ths = [], children }) => {
  return ths.length === 0 ? (
    children
  ) : (
    <thead>
      <tr>
        {ths.map((th, index) => {
          return th.$$typeof === Symbol.for("react.element") ? (
            React.cloneElement(th, { key: index })
          ) : (
            <th key={index}>{th}</th>
          )
        })}
      </tr>
    </thead>
  )
}

export const Tbody = ({ children }) => {
  return <tbody>{children}</tbody>
}

export const Tr = ({ tds = [], children }) => {
  return tds.length === 0 ? (
    children
  ) : (
    <tr>
      {tds.map((td, index) => {
        return td.$$typeof === Symbol.for("react.element") ? (
          React.cloneElement(td, { key: index })
        ) : (
          <td key={index}>{td}</td>
        )
      })}
    </tr>
  )
}
