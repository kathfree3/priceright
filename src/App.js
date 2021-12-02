import React from 'react'
import { Routes, Route } from "react-router-dom"
 
import AboutPage from './components/AboutPage'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Results from './components/Results'

const App = () => (
  <div className='app'> 
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/results" element={<Results />} />
    </Routes>
  </div>
)
export default App