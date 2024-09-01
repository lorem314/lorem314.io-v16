import React from "react"
import styled from "styled-components"

import Views, { View } from "../ui/Views"

const Wrapper = styled.div`
  max-width: 32rem;
  margin: 2rem auto;
`

const PageIndex = () => {
  return (
    <Wrapper className="page-content">
      <div>page index</div>

      {/* <div style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
        <Views>
          <View minSize="100" size="200" maxSize="300" element={<Text />} />
          <View>
            <Text />
          </View>
        </Views>
      </div>
      <br />
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", height: "300px" }}>
        <Views direction="column">
          <View element={<Text />} />
          <View>
            <Text />
          </View>
        </Views>
      </div> */}
    </Wrapper>
  )
}

export default PageIndex

const Text = () => {
  console.log("Text")
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
      }}
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
      exercitationem libero blanditiis voluptate in praesentium hic perspiciatis
      tempora ipsa, neque inventore quaerat porro quasi illum deserunt sequi
      optio distinctio id est eos!
    </div>
  )
}
