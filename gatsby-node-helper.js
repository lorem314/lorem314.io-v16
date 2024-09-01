const getMetaData = (body) => {
  const meta = { count: { word: 0, image: 0, code: 0 }, tableOfContents: {} }
  const lines = body.split("\n")
  // console.log("[getMetaData] line by line, lines.length", lines.length)
  const sectionLines = []
  for (const line of lines) {
    // console.log("[line]", line)
    if (line.length === 0) {
    } else if (isStaticImport(line)) {
    } else if (isClosingTag(line)) {
      if (line.startsWith("</Section")) {
        // console.log("closing tag, push to array")
        sectionLines.push(line)
      }
    } else if (isOpeningTag(line)) {
      if (line.startsWith("<Section")) {
        // console.log("opening tag, push to array")
        sectionLines.push(line)
      }
    } else if (false) {
    } else {
    }
  }
  // console.log("finished, sectionLines", sectionLines)
  const items = getItems(sectionLines)
  const tableOfContents = { items }
  meta.tableOfContents = tableOfContents
  return meta
}

exports.getMetaData = getMetaData

const getItems = (lines) => {
  const items = []
  // console.log("getItems run")
  while (lines.length !== 0) {
    const line = lines.shift()
    if (line.startsWith("</")) {
      // console.log("start line")
      break
    } else {
      // console.log("else")
      const matches = line.match(/title="(.*?)"/)
      const title = matches[1]
      const item = { title }
      items.push(item)
      item.items = getItems(lines)
    }
  }

  return items
}
const isStaticImport = (line) => {
  return line.startsWith("import")
}
const isClosingTag = (line, tagName) => {
  return line.startsWith(`</${tagName || ""}`)
}
const isOpeningTag = (line, tagName) => {
  if (!tagName) return new RegExp("^<[A-Z]").test(line)
  else return new RegExp(`^${"<"}${tagName}`).test(line)
}
