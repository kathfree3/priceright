import React from 'react'
import { Routes, Route } from "react-router-dom"
 
import AboutPage from './components/AboutPage'
import Home from './components/Home'
import NavBar from './components/NavBar'

const App = () => (
  <div className='app'> 
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
    </Routes>
  </div>
)
export default App