import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
function App() {
  return (
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  )
}

export default App
