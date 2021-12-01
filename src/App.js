import React from 'react'
import { Routes, Route } from "react-router-dom"
 
import AboutPage from './components/AboutPage'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => (
  <div className='app'> 
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
    </Routes>
    <Footer />
  </div>
)
export default App