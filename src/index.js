import React, { useState, useEffect, useContext, Fragment } from 'react'
import ReactLoading from 'react-loading'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeContext, ThemeProvider } from './Context/ThemeContext'
import { RegisterContextProvider } from './Context/RegisterContext'

const PreLoader = () => {
  const [{ theme }] = useContext(ThemeContext)
  const [done, setDone] = useState(undefined)
  const lodingColor = theme === 'dark' ? '#65fcdb' : '#db084e'
  useEffect(() => {
    setTimeout(() => {
      setDone(true)
    }, 2000)
  }, [])

  return (
    <Fragment>
      {!done ? (
        <ReactLoading
          type={'bars'}
          color={lodingColor}
          height={100}
          width={100}
          className="preloader"
        />
      ) : (
        <RegisterContextProvider>
          <App />
        </RegisterContextProvider>
      )}
    </Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <PreLoader />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
