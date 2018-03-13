import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import projectData from './projectData'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import ProjectList from './components/ProjectList'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <ProjectList projects={projectData} />
        <Footer />
      </div>
    )
  }
}

export default App
