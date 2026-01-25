import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import View from './components/View'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Update from './components/Update'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<View />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/edit' element={<Update/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
