import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Class from './Class'

function App() {

  return (
    
    <Router>
      <div className="app-container">
        <header className="header">Uni-Track</header>
          <nav className="sidebar">
            <ul>
              <li>
                <a href="/">Tasks</a>
              </li>
              <li>
                <a href="/classes">Classes</a>
              </li>
            </ul>
          </nav>
          <div className="main=content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Class />} />
          </Routes>
          </div>
        <footer className="footer">Uni-Track</footer>
      </div>
    </Router>
  )
}

export default App
