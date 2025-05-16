import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './PagesSections/Home'
import Project from './PagesSections/Project'
import Contact from './PagesSections/Contact'
import About from './PagesSections/About'
import Skills from './PagesSections/Skills'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </Router>
  )
}

export default App
