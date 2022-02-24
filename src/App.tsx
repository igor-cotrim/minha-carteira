import { ThemeProvider } from 'styled-components'

import { useTheme } from './hooks/useTheme'
import Routes from './routes'

import { GlobalStyle } from './styles/global'

const App = () => {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}

export default App