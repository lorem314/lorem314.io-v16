import React from "react"
import styled from "styled-components"

import { RiBilibiliFill } from "@react-icons/all-files/ri/RiBilibiliFill"
import { RiCodepenFill } from "@react-icons/all-files/ri/RiCodepenFill"
import { RiGithubFill } from "@react-icons/all-files/ri/RiGithubFill"
import { FiCodesandbox } from "@react-icons/all-files/fi/FiCodesandbox"

import { cssSvgIcon } from "../styled/GlobalStyle"

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  align-items: center;
  gap: 10px;

  > li {
    > a.link {
      display: flex;
      gap: 2px;
    }
  }

  @media screen and (max-width: 845px) {
    > li {
      > a.link {
        ${cssSvgIcon}

        >.link-title {
          display: none;
        }
      }
    }
  }
`

const Social = () => {
  return (
    <Wrapper>
      {links.map((link, index) => {
        const { title, href, Icon } = link
        return (
          <li key={index}>
            <a
              className="link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
              <span className="link-title">{title}</span>
            </a>
          </li>
        )
      })}
    </Wrapper>
  )
}

export default Social

export const links = [
  {
    title: "Bilibili",
    href: "/",
    Icon: RiBilibiliFill,
  },
  {
    title: "CodeSandbox",
    href: "/",
    Icon: FiCodesandbox,
  },
  {
    title: "Codepen",
    href: "/",
    Icon: RiCodepenFill,
  },
  {
    title: "Github",
    href: "/",
    Icon: RiGithubFill,
  },
]
