import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Routes from './routes'
import './css/dashboard.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#001fff'
    },
    secondary: {
      main: '#11cb5f'
    }
  }
})

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
