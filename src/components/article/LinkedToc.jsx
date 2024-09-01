import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  cloneElement,
  useRef,
  createRef,
  useEffect,
} from "react"
import styled from "styled-components"

import { VscCollapseAll } from "@react-icons/all-files/vsc/VscCollapseAll"
import { VscExpandAll } from "@react-icons/all-files/vsc/VscExpandAll"

import Details, { DetailsHead } from "../../elements/Details"
import { wrapSpaceAroundEn } from "../../utils/formate"

const Wrapper = styled.aside.attrs({
  id: "linked-toc",
  className: "linked-toc",
})`
  --border-style: dashed;
  --border-color: lightgray;

  overflow: auto;
  padding: 10px;

  .toc-title {
    margin: 0;
    font-size: 1rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    > li {
      line-height: 1.5;
      position: relative;
      margin-left: calc(0.75em - 1px);
      border-left: 1px var(--border-style) var(--border-color);
      padding-left: 0.75em;

      &::before {
        position: absolute;
        top: 1px;
        left: 0;
        content: " ";
        width: 0.5em;
        height: 0.75em;
        border-bottom: 1px var(--border-style) var(--border-color);
      }
    }

    > li:last-child {
      border-left: none;
      border-left: 1px solid transparent;
      &::before {
        position: absolute;
        top: 1px;
        left: 0;
        content: " ";
        height: calc(0.75em - 1px);
        border-left: 1px var(--border-style) var(--border-color);
        transform: translateX(-1px);
      }
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: " ";
        width: 0.5em;
        height: 0.75em;
        border-bottom: 1px var(--border-style) var(--border-color);
      }
    }
  }

  a {
    opacity: 0.875;
    &.is-visible {
      opacity: 1;
    }
    &.is-active {
      font-weight: bold;
    }
  }
`

const LinkedToc = ({ rawToc }) => {
  const refDetails = useRef(null)
  const refItems = useRef(null)

  useEffect(() => {
    const linkedToc = document.getElementById("linked-toc")
    const links = [...linkedToc.querySelectorAll("a")]
    const headings = links.map((link) => {
      const title = link.getAttribute("data-title")
      return document.getElementById(title)
    })
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          const target = entry.target
          // target is heading element that is showing in viewport
          const headingId = target.getAttribute("id")
          const targetLink = links.find(
            (link) => link.getAttribute("data-title") === headingId
          )
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            targetLink.classList.add("is-visible")
          } else {
            targetLink.classList.remove("is-visible")
          }
          const firstVisibleLink = linkedToc.querySelector(".is-visible")
          links.forEach((link) => link.classList.remove("is-active"))
          if (firstVisibleLink) {
            firstVisibleLink.classList.add("is-active")
          }
        })
      },
      { threshold: 1 }
    )
    headings.forEach((heading) => heading && observer.observe(heading))
  }, [rawToc])

  const openAll = (event) => {
    event?.stopPropagation()
    refDetails.current?.open()
    refItems.current?.openAll()
  }
  const closeAll = (event) => {
    event?.stopPropagation()
    refDetails.current?.close()
    refItems.current?.closeAll()
  }

  const parsedToc = JSON.parse(rawToc)
  return (
    <Wrapper>
      <Details ref={refDetails}>
        <DetailsHead>
          <h1 style={{ flex: "1 1 auto" }} className="toc-title">
            目录
          </h1>
          <button aria-label="Collapse All" onClick={closeAll}>
            <VscCollapseAll />
          </button>
          <button aria-label="Expand All" onClick={openAll}>
            <VscExpandAll />
          </button>
        </DetailsHead>
        <Items ref={refItems} items={parsedToc.items} />
      </Details>
    </Wrapper>
  )
}

export default LinkedToc

const Items = forwardRef(({ items, level = 0 }, ref) => {
  const refs = useRef(items.map(() => createRef()))

  useImperativeHandle(
    ref,
    () => ({
      openAll: () => refs.current.forEach((ref) => ref.current.openAll()),
      closeAll: () => refs.current.forEach((ref) => ref.current.closeAll()),
    }),
    []
  )

  if (items?.length === 0) return null
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <Item ref={refs.current[index]} item={item} level={level} />
          </li>
        )
      })}
    </ul>
  )
})

const Item = forwardRef(({ item, level }, ref) => {
  const hashtagLink = encodeURIComponent(item.title)

  const refDetails = useRef(null)
  const refItems = useRef(null)

  const openAll = (event) => {
    event?.stopPropagation()
    refDetails.current?.open()
    refItems.current?.openAll()
  }
  const closeAll = (event) => {
    event?.stopPropagation()
    refDetails.current?.close()
    refItems.current?.closeAll()
  }

  useImperativeHandle(ref, () => ({ closeAll, openAll }), [])

  if (item?.items.length === 0) {
    return (
      <a href={`#${hashtagLink}`} data-title={item.title}>
        {wrapSpaceAroundEn(item.title)}
      </a>
    )
  }
  return (
    <Details isOpen={true} ref={refDetails}>
      <DetailsHead>
        <div className="title-container">
          <a
            className="toc-title"
            href={`#${hashtagLink}`}
            data-title={item.title}
            onClick={(event) => event.stopPropagation()}
          >
            {wrapSpaceAroundEn(item.title)}
          </a>
        </div>
        <button aria-label="Collapse All" onClick={closeAll}>
          <VscCollapseAll />
        </button>
        <button aria-label="Expand All" onClick={openAll}>
          <VscExpandAll />
        </button>
      </DetailsHead>
      <Items ref={refItems} items={item.items} level={level + 1} />
    </Details>
  )
})
