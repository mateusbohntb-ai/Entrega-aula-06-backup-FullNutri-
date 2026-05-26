import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './Comonents/Header'
import Footer from './Comonents/Footer'

import Home from './Pages/Home'


import './App.css'

function App() {

  return (
    <>
      < Header />
<Routes>

<Route path='/' element={<Home/>} />


</Routes>

<Footer />

    </>
  )
}

export default App
