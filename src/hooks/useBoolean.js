import React, { useState, useCallback, useMemo } from "react"

const useBoolean = (initialValue = true) => {
  const [bool, setBool] = useState(initialValue)

  const setTrue = useCallback(() => setBool(true), [])
  const setFalse = useCallback(() => setBool(false), [])
  const toggle = useCallback(() => setBool((b) => !b), [])

  const handler = useMemo(() => {
    setTrue, setFalse, toggle
  }, [])

  return [bool, handler]
}
