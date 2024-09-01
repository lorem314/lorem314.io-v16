import React, { useMemo, useState, useCallback, useEffect } from "react"
import styled from "styled-components"

import Search from "./blogs/Search"
import Select from "./blogs/Select"
import BlogList from "./blogs/BlogList"
import AllTag from "./blogs/AllTag"

import Drawer from "../ui/Drawer"
import useDebounce from "../hooks/useDebounce"

const Wrapper = styled.div`
  max-width: 72rem;
  margin: 2rem auto;

  display: grid;
  gap: 10px;
  grid-template-columns: 5fr 3fr;

  > .form-container {
    grid-column-start: 1;
    grid-column-end: 3;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  > .blogs-container {
    grid-column-start: 1;
    grid-column-end: ${({ $hasRightDrawer }) => ($hasRightDrawer ? "3" : "2")};
  }

  @media screen and (max-width: 800px) {
    > .form-container {
      display: flex;
      flex-direction: column;
    }
    > .posts-container {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`

const PageBlogs = ({
  hasRightDrawer,
  isRightDrawerOpen,
  handleRightDrawer,
  allBlog,
}) => {
  const [blogs, setBlogs] = useState(allBlog)
  const [selectedTags, setSelectedTags] = useState([])
  const [isOrLogic, setIsOrLogic] = useState(true)
  const allTag = useMemo(() => collectTag(allBlog), [allBlog])
  const [searchTerm, setSearchTerm] = useState("")
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const handleSelectTag = useCallback(
    (tag) => (event) => {
      setSelectedTags((prevSelectedTags) => {
        const hasSelected = prevSelectedTags.includes(tag)
        if (hasSelected) {
          event.stopPropagation()
          return prevSelectedTags.filter((selectedTag) => selectedTag !== tag)
        } else {
          if (event.shiftKey) return [...prevSelectedTags, tag]
          else return [tag]
        }
      })
    },
    []
  )
  const clearSelectedTags = useCallback(() => setSelectedTags([]), [])

  const handleChangeSearchTerm = useCallback(
    (event) => setSearchTerm(event.target.value),
    []
  )

  const toggleFilterLogic = useCallback((event) => {
    event.stopPropagation()
    setIsOrLogic((_) => !_)
  }, [])

  const cachedAllTag = useMemo(
    () => (
      <AllTag
        allTag={allTag}
        selectedTags={selectedTags}
        onSelectTag={handleSelectTag}
      />
    ),
    [allTag, selectedTags, handleSelectTag]
  )

  useEffect(() => {
    setBlogs(
      allBlog
        .filter((blog) => {
          if (debouncedSearchTerm.length === 0) return true
          const lowercasedSearchTerm = debouncedSearchTerm.toLowerCase()
          const lowercasedTitle = blog.frontmatter.title.toLowerCase()
          return lowercasedTitle.includes(lowercasedSearchTerm)
        })
        .filter((blog) => {
          if (selectedTags.length === 0) return true
          return selectedTags
            .map((tag) => {
              return blog.frontmatter.tags.includes(tag.name)
            })
            [isOrLogic ? "some" : "every"]((b) => b)
        })
    )
  }, [allBlog, debouncedSearchTerm, selectedTags, isOrLogic])

  return (
    <Wrapper $hasRightDrawer={hasRightDrawer}>
      <section className="page-content form-container">
        <Search
          searchTerm={searchTerm}
          onChangeSearchTerm={handleChangeSearchTerm}
        />
        <Select
          selectedTags={selectedTags}
          onSelectTag={handleSelectTag}
          clearSelectedTags={clearSelectedTags}
          options={allTag}
          isOrLogic={isOrLogic}
          toggleFilterLogic={toggleFilterLogic}
        />
      </section>

      <section className="page-content blogs-container">
        <h3 className="content-title">
          博客({blogs.length}/{allBlog.length})
        </h3>
        <BlogList blogs={blogs} />
      </section>

      {hasRightDrawer ? (
        <Drawer
          title="所有标签"
          isOpen={isRightDrawerOpen}
          placement="right"
          onClose={handleRightDrawer.close}
        >
          <div style={{ padding: "10px" }}>{cachedAllTag}</div>
        </Drawer>
      ) : (
        <section className="page-content tags-container">
          <h3 className="content-title">所有标签(999)</h3>
          {cachedAllTag}
        </section>
      )}
    </Wrapper>
  )
}

export default PageBlogs

const collectTag = (blogs) => {
  const tagsObj = Object.fromEntries(
    blogs.reduce((map, blog) => {
      const tags = blog?.frontmatter?.tags || []
      tags.forEach((tag) => {
        if (!map.has(tag)) {
          map.set(tag, 1)
        } else {
          const count = map.get(tag)
          map.set(tag, count + 1)
        }
      })
      return map
    }, new Map())
  )
  const tagArr = []
  for (const [name, count] of Object.entries(tagsObj)) {
    tagArr.push({ name, count })
  }
  return tagArr
}
