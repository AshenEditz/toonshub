import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <Router>
      <div className="app ${darkMode ? "dark" : ""}">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App