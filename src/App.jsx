import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header.jsx'
import styled, { createGlobalStyle } from "styled-components"

const EstiloGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EstiloGlobal/>
      <Header/>

    </>
  )
}

export default App
