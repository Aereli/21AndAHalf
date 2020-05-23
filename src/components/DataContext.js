import React, { useState, createContext } from "react"

export const DataContext = createContext(null)

export const DataContextProvider = ({ children }) => {
  const [cardObject, setCardObject] = useState([])
  return (
    <DataContext.Provider value={{ cardObject, setCardObject }}>
      {children}
    </DataContext.Provider>
  )
}
