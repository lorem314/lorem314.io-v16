const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const templateBlog = path.resolve("./src/templates/blog.jsx")
const templateBookCover = path.resolve("./src/templates/book-cover.jsx")
const templateBookChapter = path.resolve("./src/templates/book-chapter.jsx")

const { getMetaData } = require("./gatsby-node-helper")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode })
    createNodeField({ node, name: "slug", value: slug })

    const splittedSlug = slug.split("/")
    console.log("[>>] splitted slug :", splittedSlug)

    const { tableOfContents } = getMetaData(node.body)
    console.log("toc", tableOfContents)
    createNodeField({
      node,
      name: "rawToc",
      value: JSON.stringify(tableOfContents),
    })

    if (splittedSlug.length === 4 && splittedSlug.includes("blogs")) {
      createNodeField({ node, name: "type", value: "TYPE_BLOG_POST" })
    } else if (splittedSlug.length === 4 && splittedSlug.includes("books")) {
      createNodeField({ node, name: "type", value: "TYPE_BOOK_COVER" })
    } else if (splittedSlug.length === 5 && splittedSlug.includes("books")) {
      createNodeField({ node, name: "type", value: "TYPE_BOOK_CHAPTER" })
    } else {
      // createNodeField({ node, name: "type", value: "NaT" })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogs = await graphql(`
    query {
      allMdx(filter: { fields: { type: { eq: "TYPE_BLOG_POST" } } }) {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)
  blogs.data?.allMdx.nodes.forEach((blog) => {
    const path = blog.fields.slug
    const contentFilePath = blog.internal.contentFilePath
    const component = `${templateBlog}?__contentFilePath=${contentFilePath}`
    const context = { id: blog.id }
    createPage({ path, component, context })
  })

  const bookCovers = await graphql(`
    query {
      allMdx(filter: { fields: { type: { eq: "TYPE_BOOK_COVER" } } }) {
        nodes {
          id
          frontmatter {
            isbn
          }
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)
  bookCovers.data?.allMdx.nodes.forEach((bookCover) => {
    createPage({
      path: bookCover.fields.slug,
      component: `${templateBookCover}?__contentFilePath=${bookCover.internal.contentFilePath}`,
      context: { id: bookCover.id, isbn: bookCover.frontmatter.isbn },
    })
  })

  const bookChapters = await graphql(`
    query {
      allMdx(filter: { fields: { type: { eq: "TYPE_BOOK_CHAPTER" } } }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            isbn
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)
  bookChapters.data?.allMdx.nodes.forEach((bookChapter) => {
    const id = bookChapter.id
    const isbn = bookChapter.frontmatter.isbn
    createPage({
      path: bookChapter.fields.slug,
      component: `${templateBookChapter}?__contentFilePath=${bookChapter.internal.contentFilePath}`,
      context: { id, isbn },
    })
  })

  // to be continued ...
}
