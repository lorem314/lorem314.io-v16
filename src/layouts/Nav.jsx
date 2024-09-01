import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { FaHome } from "@react-icons/all-files/fa/FaHome"
import { RiArticleFill } from "@react-icons/all-files/ri/RiArticleFill"
import { FaBook } from "@react-icons/all-files/fa/FaBook"
import { RiSettings3Fill } from "@react-icons/all-files/ri/RiSettings3Fill"

import { cssSvgIcon } from "../styled/GlobalStyle"

const Wrapper = styled.div`
  flex: 1 1 auto;
  height: 100%;
  overflow: auto;

  display: flex;
  color: var(--content-color-1);
  background-color: var(--bg-1);

  > nav {
    flex: 0 0 50px;
    background-color: var(--bg-0);

    > ul.route-list {
      list-style-type: none;
      margin: 0;
      padding: 10px 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      > li {
        display: flex;
        justify-content: center;
        align-items: center;

        > a.route-link {
          ${cssSvgIcon}
          padding: 0.5rem;
          --svg-icon-size: 18px;
          color: var(--content-color-2);
        }
      }
    }
  }

  > section {
    flex: 1 1 auto;
    margin: 10px 10px 0;
    overflow: auto;
    padding: 10px 10px 0;
    border-radius: 0.25rem;
    box-shadow: 0 1px 0 1px var(--content-box-shadow);
    background-color: var(--content-bg);
  }
`

const Nav = () => {
  return (
    <Wrapper>
      <nav>
        <ul className="route-list">
          {routes.map((route, index) => {
            const { Icon, title, path, partiallyActive } = route
            return (
              <li key={index}>
                <Link
                  className="route-link"
                  activeClassName="current"
                  to={path}
                  partiallyActive={partiallyActive}
                >
                  <Icon />
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <section>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </section>
    </Wrapper>
  )
}

export default Nav

const routes = [
  {
    Icon: FaHome,
    title: "主页",
    path: "/",
    partiallyActive: false,
  },
  {
    Icon: RiArticleFill,
    title: "博客",
    path: "/blogs",
    partiallyActive: true,
  },
  {
    Icon: FaBook,
    title: "书籍",
    path: "/books",
    partiallyActive: true,
  },
  // {
  //   Icon: (props) => <CodeIcon {...props} />,
  //   title: "代码",
  //   path: "/code",
  //   partiallyActive: true,
  // },
  // {
  //   Icon: FaToolbox,
  //   title: "工具",
  //   path: "/tool",
  //   partiallyActive: true,
  // },
  {
    Icon: RiSettings3Fill,
    title: "设置",
    path: "/setting",
    partiallyActive: true,
  },
]
