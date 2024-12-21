import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Header from './component/Header'
import SuButt from './component/SuButt'
import Menu from './component/Menu'
import Card from './component/card'
import Footer from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <Header/>
  <SuButt/>
  <Menu/>
  <Card/>
  
    </>
  )
}

export default App
