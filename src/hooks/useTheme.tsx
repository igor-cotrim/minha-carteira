import React, { createContext, useContext, useState } from "react"

import dark from "../styles/themes/dark"
import light from "../styles/themes/light"

type ThemeProps = {
  title: string

  colors: {
    primary: string
    secondary: string
    tertiary: string
    white: string
    black: string
    gray: string
    success: string
    info: string
    warning: string
  }
}

type ThemeContextProps = {
  toggleTheme(): void
  theme: ThemeProps
}

type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeProps>(dark)

  const toggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(light)
    } else {
      setTheme(dark)
    }
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext)

  return context
}

export { ThemeProvider, useTheme }
