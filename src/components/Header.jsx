import React from 'react'
import { Link } from 'react-router-dom'


function Header({ darkMode, setDarkMode }) {
  const Component = header

  return (
    <Component className="header">
      <div className="container">
        <h1 className="logo">create-a-ip-tv-services-can-user-can-see-all-count</h1>
        
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </Component>
  )
}

export default Header