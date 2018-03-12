import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import projectData from './projectData'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import ProjectList from './components/ProjectList'
import Project from './components/Project'
import Work from './components/Work'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        {/* <About /> */}
        <ProjectList projects={projectData} />
        {/* <Work /> */}
        <Footer />
      </div>
    )
  }
}

export default App
