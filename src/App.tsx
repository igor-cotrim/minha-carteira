import { ThemeProvider } from 'styled-components'
import Layout from './components/layout'
import Dashboard from './pages/dashboard'

import { GlobalStyle } from './styles/global'
import dark from './styles/themes/dark'

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  )
}

export default App