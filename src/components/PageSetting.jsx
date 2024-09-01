import React from "react"
import styled from "styled-components"

import useTheme from "../hooks/useTheme"

const Wrapper = styled.div`
  max-width: 32rem;
  margin: 2rem auto;
`

const PageSetting = () => {
  const { theme, changeTheme } = useTheme()

  return (
    <Wrapper className="page-content">
      <h2 className="content-title">设置</h2>

      <label htmlFor="preferred-theme">主题</label>
      <select
        id="preferred-theme"
        value={theme}
        onChange={(event) => changeTheme(event.target.value)}
      >
        <option value="system">系统</option>
        <option value="light">浅色</option>
        <option value="dark">深色</option>
      </select>
    </Wrapper>
  )
}

export default PageSetting
