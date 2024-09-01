import React, { useId } from "react"

const Search = ({ searchTerm, onChangeSearchTerm }) => {
  const id = useId()
  return (
    <div>
      <label htmlFor={id} className="content-title">
        搜索
      </label>
      <input
        type="search"
        id={id}
        placeholder="搜索标题..."
        value={searchTerm}
        onChange={onChangeSearchTerm}
      />
    </div>
  )
}

export default React.memo(Search)
