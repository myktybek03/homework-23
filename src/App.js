import { useCallback, useState } from 'react'
import styled from 'styled-components'
import Basket from './components/basket/Basket'
import Header from './components/header/Header'
import Meals from './components/meals/Meals'
import Summary from './components/summary/Summary'
import { useDispatch, useSelector } from 'react-redux'
import Snackbar from './components/UI/Snackbar'
import { uiActions } from './store/ui/uiSlice'
import { createTheme, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme } from './lib/constants/theme'
import { useMemo } from 'react'
import './App.css'

function App() {
  const [isBasketVisible, setBasketVisible] = useState(false)
  const snackbar = useSelector((state) => state.ui.snackbar)
  const themeMode = useSelector((state) => state.ui.themeMode)

  const dispatch = useDispatch()

  const showBasketHandler = useCallback(() => {
    setBasketVisible((prevState) => !prevState)
  }, [])

  const theme = useMemo(() => {
    const currentTheme =
      themeMode === 'light' ? { ...lightTheme } : { ...darkTheme }

    return createTheme(currentTheme)
  }, [themeMode])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header onShowBasket={showBasketHandler} />
        <Content>
          <Summary />
          <Meals />
          {isBasketVisible && (
            <Basket onClose={showBasketHandler} open={isBasketVisible} />
          )}
          <Snackbar
            isOpen={snackbar.isOpen}
            severity={snackbar.severity}
            message={snackbar.message}
            onClose={() => dispatch(uiActions.closeSnackbar())}
          />
        </Content>
      </ThemeProvider>
    </>
  )
}

export default App

const Content = styled.div`
  margin-top: 101px;
`
