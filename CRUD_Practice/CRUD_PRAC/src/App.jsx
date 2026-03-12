import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import View from './components/View.jsx'
import Navbar from './components/Navbar.jsx'
import Register from './components/Register.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<View />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
