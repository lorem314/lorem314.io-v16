import React, { createContext, useContext } from "react"

const GlobalContext = createContext(null)

const GlobalContextProvider = ({ children }) => {
  return (
    <GlobalContext.Provider
      value={{
        test: "ok",
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider

export const useGlobalContext = () => useContext(GlobalContext)
