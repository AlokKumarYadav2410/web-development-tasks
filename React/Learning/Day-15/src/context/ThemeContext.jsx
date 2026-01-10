import React from 'react'
import { createContext } from 'react'

export const ThemeDataContext = createContext();

const ThemeContext = ({children}) => {
    const value = {
        theme: 'light',
    }
  return (
    <ThemeDataContext.Provider value={value}>
      {children}
    </ThemeDataContext.Provider>
  )
}

export default ThemeContext
